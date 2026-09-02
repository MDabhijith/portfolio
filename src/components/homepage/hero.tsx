import { HeroVideo } from "@/components/homepage/hero-video";
import { HeroWave } from "@/components/homepage/hero-wave";
import { LiquidText } from "@/components/ui/liquid-text";
import { WordsPullUpSegments } from "@/components/ui/words-pull-up";

/** Corner crop mark. Two hairlines meeting at a right angle, rotated into each
 * corner — the printer's registration mark that brackets the content frame. */
function CropMark({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      data-entrance=""
      // z-10 so the mark still brackets the corner where the loop fills the
      // column and would otherwise paint over it.
      className={`absolute z-10 size-4 border-t border-l border-hero-ink/45 animate-pull-up sm:size-5 ${className ?? ""}`}
      style={style}
    />
  );
}

/** Homepage hero — an editorial frame: hairline rules run the full height at
 * the content edges, a diagonal hatch band separates the nav from the frame,
 * and crop marks bracket its top corners. A wave field runs in the band, copy
 * sits left, and the loop fills the right half outright. data-entrance holds
 * every animation at frame zero until the loading splash clears. */
export function Hero() {
  return (
    <section
      // Flips the floating nav to its dark treatment while it overlaps this
      // section.
      data-nav-dark
      className="hero-dark relative isolate w-full overflow-hidden"
    >
      <LiquidText />

      <div className="relative mx-auto flex min-h-svh w-full max-w-[1440px] flex-col px-4 pt-24 sm:px-6 md:px-10 lg:pt-28">
        {/* Frame rules. Pinned to the container's content box so they line up
         * with the hatch band and the crop marks at every breakpoint. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-4 left-4 sm:right-6 sm:left-6 md:right-10 md:left-10"
        >
          <span className="absolute inset-y-0 left-0 w-px bg-hero-line" />
          <span className="absolute inset-y-0 right-0 w-px bg-hero-line" />
        </div>

        <div
          data-entrance
          aria-hidden="true"
          className="relative h-16 w-full animate-pull-up sm:h-24 lg:h-28"
          style={{ animationDelay: "150ms" }}
        >
          <HeroWave className="absolute inset-0 h-full w-full text-hero-ink/45" />
          {/* The band's own rules run past the frame to the viewport edge —
           * body has overflow-x: clip, so the 100vw overhang is contained. */}
          <span className="absolute top-0 left-1/2 h-px w-screen -translate-x-1/2 bg-hero-line" />
          <span className="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-hero-line" />
        </div>

        {/* 12 columns only from lg: at mobile widths the 11 gutters of a
         * 12-track grid add up to more than the viewport itself. */}
        <div className="relative grid flex-1 grid-cols-1 items-stretch gap-y-10 lg:grid-cols-12 lg:gap-x-0">
          <CropMark
            className="-top-px -left-px"
            style={{ animationDelay: "250ms" }}
          />
          <CropMark
            className="-top-px -right-px rotate-90"
            style={{ animationDelay: "250ms" }}
          />

          {/* Inset from the frame rule rather than flush against it — the rule
           * is the margin of the page, not the text edge. */}
          <div className="flex min-w-0 flex-col gap-7 pt-12 pb-4 lg:col-span-7 lg:pb-12 lg:gap-9 lg:pt-20 lg:pr-16 lg:pl-14">
            <div
              data-entrance
              className="flex animate-pull-up flex-col gap-3"
              style={{ animationDelay: "300ms" }}
            >
              <span className="inline-flex items-center gap-2.5 font-body text-sm text-hero-ink sm:text-[15px]">
                <span
                  className="size-2 animate-blink rounded-full bg-hero-accent"
                  aria-hidden="true"
                />
                Available for work
                <span className="text-hero-body/60" aria-hidden="true">
                  /
                </span>
              </span>
              <span className="font-mono text-[11px] tracking-[0.2em] text-hero-body uppercase sm:text-xs">
                Product Designer &middot; 4 Years
              </span>
            </div>

            <h1
              data-liquid
              /* Light weight and tight tracking at this size is the whole look —
               * leading under 1 pulls the line box tighter than the glyphs, so
               * the last line's descenders need their own room rather than
               * being clipped by the box. */
              className="pb-[0.14em] font-heading text-[12vw] leading-[0.94] font-normal tracking-[-0.035em] text-hero-ink sm:text-[8.5vw] lg:text-[5.4vw] xl:text-[4.9vw]"
            >
              <WordsPullUpSegments
                startDelay={450}
                segments={[
                  { text: "Design that moves the" },
                  { text: "numbers,", className: "italic" },
                  { text: "not just the pixels." },
                ]}
              />
            </h1>

            <p
              data-liquid
              data-entrance
              className="mt-auto max-w-[460px] animate-pull-up font-body text-base leading-[1.6] text-hero-body sm:text-[17px]"
              style={{ animationDelay: "950ms" }}
            >
              I turn complex workflows into simple, intelligent products across
              AI, SaaS and healthcare, from first insight to the numbers they
              move.
            </p>
          </div>

          {/* The loop IS the right half of the frame: from lg it fills the
           * column edge to edge and runs off the bottom of the section. Below
           * lg the column has no height of its own to fill, so it falls back to
           * a 4:3 frame. */}
          <div
            data-entrance
            className="min-w-0 animate-pull-up self-stretch lg:col-span-5"
            style={{ animationDelay: "600ms" }}
          >
            <div className="flex h-full w-full flex-col border-hero-line lg:border-l">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-black lg:aspect-auto lg:h-full lg:rounded-none">
                <HeroVideo
                  src="/videos/hero.mp4"
                  poster="/images/hero-summit.webp"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="noise-overlay pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay" />

                {/* Scrim rather than a flat tint: the footage is brightest along
                 * the horizon, which is exactly where the quote sits. */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/85 via-black/45 to-transparent"
                  aria-hidden="true"
                />

                <figure className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <blockquote className="font-heading text-[15px] leading-[1.4] font-medium text-balance text-white/95 sm:text-base">
                    &ldquo;To find ideas, find problems. To find problems, talk
                    to people.&rdquo;
                  </blockquote>
                  <figcaption className="mt-2.5 font-body text-[10.5px] tracking-[0.16em] text-white/65 uppercase">
                    Don Norman
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
