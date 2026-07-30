import { cn } from "@/lib/utils";

/** Staggers a line of text in word by word, each sliding up as it fades.
 *
 * CSS animation on mount rather than an in-view motion hook: this only ever runs
 * in the hero, which is above the fold, so "when it enters view" and "when it
 * mounts" are the same moment — and a pure-CSS version needs no client bundle
 * and cannot strand a word at opacity 0 (CHANGELOG Phase 3).
 *
 * The words are split for layout only, so the real text is exposed once via a
 * screen-reader copy and the visual pieces are hidden from assistive tech —
 * an `aria-label` on the wrapper would be prohibited on a role-less span. */

export type PullUpSegment = { text: string; className?: string };

function Words({
  words,
  className,
  showAsterisk,
  startDelay,
  stagger,
}: {
  words: PullUpSegment[];
  className?: string;
  showAsterisk: boolean;
  startDelay: number;
  stagger: number;
}) {
  return (
    <span className={cn("inline-flex flex-wrap", className)}>
      <span className="sr-only">{words.map((w) => w.text).join(" ")}</span>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={cn("relative inline-block animate-pull-up", word.className)}
          style={{
            animationDelay: `${startDelay + i * stagger}ms`,
            marginRight: i === words.length - 1 ? 0 : "0.25em",
          }}
        >
          {word.text}
          {showAsterisk && i === words.length - 1 && (
            <span className="absolute -right-[0.3em] top-[0.65em] text-[0.31em]">
              *
            </span>
          )}
        </span>
      ))}
    </span>
  );
}

export function WordsPullUp({
  text,
  className,
  showAsterisk = false,
  startDelay = 0,
  stagger = 80,
}: {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  startDelay?: number;
  stagger?: number;
}) {
  return (
    <Words
      words={text.split(" ").map((word) => ({ text: word }))}
      className={className}
      showAsterisk={showAsterisk}
      startDelay={startDelay}
      stagger={stagger}
    />
  );
}

/** Same stagger, but each segment's words carry their own styling — for a
 * headline whose emphasis spans only part of the sentence. */
export function WordsPullUpSegments({
  segments,
  className,
  startDelay = 0,
  stagger = 80,
}: {
  segments: PullUpSegment[];
  className?: string;
  startDelay?: number;
  stagger?: number;
}) {
  const words = segments.flatMap((segment) =>
    segment.text
      .split(" ")
      .filter(Boolean)
      .map((word) => ({ text: word, className: segment.className }))
  );

  return (
    <Words
      words={words}
      className={className}
      showAsterisk={false}
      startDelay={startDelay}
      stagger={stagger}
    />
  );
}
