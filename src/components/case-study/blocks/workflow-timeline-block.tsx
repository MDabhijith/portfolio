"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface WorkflowStep {
  title: string;
  actor: string;
  actorTone: "muted" | "accent";
  description: string;
  tags: string[];
}

/**
 * Vertical timeline whose connecting rail fills green as the section scrolls
 * through the viewport. The fill is purely decorative — every step is always
 * rendered and fully legible, so a failed/absent scroll listener never hides
 * content (see CLAUDE.md on the whileInView opacity:0 pitfall).
 */
export function WorkflowTimelineBlock({ steps }: { steps: WorkflowStep[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setProgress(1);
      return;
    }

    const list = listRef.current;
    if (!list) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = list.getBoundingClientRect();
      const anchor = window.innerHeight * 0.55;
      const raw = (anchor - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol ref={listRef} className="relative flex flex-col">
      {/* Rail track + scroll-driven fill, centered on the node column. */}
      <span
        aria-hidden="true"
        className="absolute bottom-8 left-5 top-5 w-px -translate-x-1/2 bg-line"
      />
      <span
        aria-hidden="true"
        className="absolute left-5 top-5 w-px -translate-x-1/2 bg-positive transition-[height] duration-150 ease-[var(--ease-out)]"
        style={{ height: `calc((100% - 3.25rem) * ${progress})` }}
      />

      {steps.map((step, i) => (
        <li key={step.title} className="relative flex gap-5 pb-12 last:pb-0 sm:gap-8">
          <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-cs-paper">
            <span className="font-body text-sm font-medium text-cs-body">
              {i + 1}
            </span>
          </div>

          <div className="flex min-w-0 flex-col gap-3 pt-1">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-heading text-lg font-semibold leading-snug text-cs-ink sm:text-xl">
                {step.title}
              </h3>
              <span
                className={cn(
                  "shrink-0 font-body text-xs font-medium uppercase tracking-[0.6px]",
                  step.actorTone === "accent"
                    ? "text-positive"
                    : "text-cs-label"
                )}
              >
                {step.actor}
              </span>
            </div>

            <p className="font-body text-[15px] leading-relaxed text-cs-body">
              {step.description}
            </p>

            {step.tags.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-surface px-3 py-1.5 font-body text-[13px] font-medium text-cs-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
