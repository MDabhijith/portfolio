import { HeroVideo } from "@/components/homepage/hero-video";
import { LiquidText } from "@/components/ui/liquid-text";
import { WordsPullUpSegments } from "@/components/ui/words-pull-up";

const CREAM = "#e1e0cc";

/** Homepage hero — full-bleed image, grain and gradient overlays, headline
 * pulling up word by word, with the intro and CTA set against its baseline. */
export function Hero() {
  return (
    // The hero opens full-bleed and settles into its padded, rounded frame once
    // the loading splash clears — data-entrance holds both animations at frame
    // zero until then, the same gate the headline uses.
    <section
      data-entrance
      className="h-svh w-full animate-hero-unpad p-2 sm:p-3"
    >
      <LiquidText />
      <div
        data-entrance
        className="relative h-full w-full animate-hero-unround overflow-hidden rounded-2xl bg-black md:rounded-[2rem]"
      >
        <HeroVideo
          src="/videos/hero.mp4"
          poster="/images/hero-summit.webp"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-70 mix-blend-overlay" />

        {/* Two ramps rather than one: the photo's bright cloud bank sits exactly
          * where the headline lands, and a single top-to-bottom gradient dark
          * enough to carry it would have muddied the sky. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 to-transparent to-40%" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.72)_30%,rgba(0,0,0,0.4)_55%,rgba(0,0,0,0.12)_75%,transparent_90%)]" />

        <div className="absolute inset-x-0 bottom-0 px-4 pb-2 sm:px-6 md:px-10">
          <div className="grid grid-cols-12 items-end gap-4">
            <div className="col-span-12 lg:col-span-8">
              <h1
                data-liquid
                /* leading under 1 pulls the line box tighter than the glyphs, so
                 * the last line's descenders need their own room to sit flush to
                 * the edge rather than be clipped by it. */
                className="font-heading text-[9vw] font-extrabold leading-[0.95] tracking-[-0.03em] pb-[0.14em] sm:text-[7.5vw] lg:text-[6.2vw] xl:text-[5.6vw]"
                style={{ color: CREAM }}
              >
                {/* Held back until the frame has finished settling, so the two
                  * movements read as a sequence rather than collide. */}
                <WordsPullUpSegments
                  startDelay={1200}
                  segments={[
                    { text: "Designing for" },
                    { text: "measurable outcomes,", className: "italic" },
                    { text: "not just polished interfaces." },
                  ]}
                />
              </h1>
            </div>

            <div className="col-span-12 pb-6 lg:col-span-4 lg:pb-10">
              <p
                data-liquid
                data-entrance
                className="animate-pull-up font-body text-xs leading-[1.35] sm:text-sm md:text-base"
                style={{ animationDelay: "1800ms", color: `${CREAM}b3` }}
              >
                Designing user-centered products that balance human needs with
                measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
