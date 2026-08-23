import { HeroVideo } from "@/components/homepage/hero-video";
import { LiquidText } from "@/components/ui/liquid-text";
import { PixelScatter } from "@/components/ui/pixel-scatter";
import { WordsPullUpSegments } from "@/components/ui/words-pull-up";

/** Homepage hero — headline and intro on the left, the loop framed on the
 * right, over a warm cream wash. data-entrance holds every animation at frame
 * zero until the loading splash clears. */
export function Hero() {
  return (
    <section className="hero-wash relative isolate w-full overflow-hidden">
      <LiquidText />

      {/* Flipped so the dense corner lands in the bottom-left, over the green
        * wash, and thins out toward the middle of the section. */}
      <PixelScatter
        data-entrance
        columns={34}
        rows={13}
        seed={73104}
        className="absolute -bottom-4 -left-6 -z-10 animate-pull-up text-hero-ink -scale-y-100 sm:-left-10"
        style={{ animationDelay: "1000ms" }}
      />

      <div className="mx-auto flex min-h-svh w-full max-w-[1440px] flex-col px-4 pt-24 pb-8 sm:px-6 md:px-10 lg:pt-28 lg:pb-12">
        {/* 12 columns only from lg: at mobile widths the 11 gutters of a
          * 12-track grid add up to more than the viewport itself. */}
        <div className="grid flex-1 grid-cols-1 items-center gap-y-10 py-8 lg:grid-cols-12 lg:items-start lg:gap-x-14">
          {/* isolate so the field's -z-10 lands behind this column's own text
            * rather than behind the section background, which would hide it. */}
          <div className="relative isolate flex min-w-0 flex-col gap-6 lg:col-span-7 lg:gap-8 lg:pt-6">
            {/* Behind the headline, bled off the top-left corner so the dense
              * end runs out of frame rather than terminating on an edge. */}
            <PixelScatter
              data-entrance
              columns={32}
              rows={16}
              className="absolute top-10 -left-4 -z-10 animate-pull-up text-hero-ink sm:top-12 sm:-left-8"
              style={{ animationDelay: "300ms" }}
            />
            <div
              data-entrance
              className="animate-pull-up"
              style={{ animationDelay: "200ms" }}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-hero-line bg-hero-lift/70 py-1.5 pr-4 pl-3">
                <span
                  className="size-2 animate-blink rounded-full bg-brand"
                  aria-hidden="true"
                />
                <span className="font-body text-[11px] tracking-[0.18em] text-hero-body uppercase sm:text-xs">
                  Product Designer &middot; 4 years
                </span>
              </span>
            </div>

            <h1
              data-liquid
              /* leading under 1 pulls the line box tighter than the glyphs, so
               * the last line's descenders need their own room rather than
               * being clipped by the box. */
              className="pb-[0.14em] font-heading text-[13vw] leading-[0.95] font-extrabold tracking-[-0.03em] text-hero-ink sm:text-[9vw] lg:text-[5.6vw] xl:text-[5vw]"
            >
              <WordsPullUpSegments
                startDelay={400}
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
              className="max-w-[460px] animate-pull-up font-body text-base leading-[1.6] text-hero-body sm:text-[17px]"
              style={{ animationDelay: "900ms" }}
            >
              I turn complex workflows into simple, intelligent products across
              AI, SaaS and healthcare, from first insight to the numbers they
              move.
            </p>
          </div>

          <div
            data-entrance
            className="min-w-0 animate-pull-up lg:col-span-5"
            style={{ animationDelay: "600ms" }}
          >
            {/* Capped below lg so the portrait crop doesn't tower over a
              * tablet once the columns stack. */}
            <div className="relative mx-auto aspect-4/5 w-full max-w-[440px] overflow-hidden rounded-3xl bg-black md:rounded-[2rem] lg:max-w-none">
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

              <figure className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                <blockquote className="font-heading text-[15px] leading-[1.4] font-medium text-balance text-white/95 sm:text-base lg:text-[17px]">
                  &ldquo;To find ideas, find problems. To find problems, talk to
                  people.&rdquo;
                </blockquote>
                <figcaption className="mt-2.5 font-body text-[10.5px] tracking-[0.16em] text-white/65 uppercase">
                  Don Norman
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
