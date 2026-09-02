import { cn } from "@/lib/utils";
import { Globe2, PenTool, Sparkles } from "lucide-react";

/** Detail tile content. Domain and Expertise are drawn from the statement and
 * the skills marquee; Tools lists only what this repository actually evidences
 * (the Figma source file, and the Claude credit in the footer) — extend it.
 *
 * `tilt` fans the three tiles to the right so they read as laid-down cards
 * rather than a segmented bar. */
const details = [
  {
    term: "Domain",
    Icon: Globe2,
    tilt: "sm:rotate-[2deg]",
    items: ["AI", "SaaS", "Healthcare", "Enterprise"],
  },
  {
    term: "Expertise",
    Icon: Sparkles,
    tilt: "sm:rotate-[3deg]",
    items: ["Product Design", "UX Research", "Design Systems", "AI UX"],
  },
  {
    term: "Tools",
    Icon: PenTool,
    tilt: "sm:rotate-[2.4deg]",
    items: ["Figma", "Claude"],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="flex flex-col gap-9 sm:gap-11">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-heading text-2xl font-medium tracking-[-0.02em] text-ink sm:text-h5">
          About
        </h2>
      </div>

      {/* The statement runs the full container rather than sitting in a narrow
       * column beside the heading — at this size the extra width is what makes
       * it read as a statement rather than as body copy.
       *
       * `group` drives the detail panel below: it rests half out of the card's
       * bottom edge and rises fully into view on hover. */}
      <div className="group about-card relative overflow-hidden rounded-2xl px-6 py-9 sm:px-12 sm:pt-14 sm:pb-[150px] lg:px-16 lg:pt-16">
        <p className="font-heading text-xl leading-[1.45] font-medium tracking-[-0.015em] text-white sm:text-[26px] sm:leading-[1.4] lg:text-[30px] lg:leading-[1.38]">
          Product Designer focused on building intelligent, scalable products
          across AI, SaaS, healthcare, and enterprise. Over 4 years, I&rsquo;ve
          turned complex workflows into simple experiences by combining product
          thinking, user insight, and emerging AI capabilities. I design not
          just interfaces, but the systems, interactions, and decisions behind
          them creating products that work better for people and drive
          meaningful business outcomes.
        </p>

        {/* Each tile carries its own hover, so only the one under the pointer
         * rises — a group hover would lift all three and defeat the point of
         * three separate cards.
         *
         * Below sm they sit in flow, upright and uncropped: a hover reveal has
         * no meaning on a touch screen, and the tilt would push them past a
         * narrow viewport. */}
        <div className="mt-8 grid gap-4 sm:absolute sm:inset-x-6 sm:bottom-0 sm:mt-0 sm:grid-cols-3 sm:gap-5 lg:inset-x-10">
          {details.map(({ term, items, Icon, tilt }) => (
            <div
              key={term}
              tabIndex={0}
              role="group"
              aria-label={term}
              className={cn(
                "about-tile flex flex-col gap-3.5 rounded-lg border border-white/50 px-5 py-4 shadow-[0_14px_36px_-18px_rgba(0,0,0,0.9)] outline-none",
                "ring-white/70 focus-visible:ring-2",
                // Anchored to the card's bottom edge and always cropped by it:
                // 58% of the tile hangs below at rest, 20% still does when
                // raised. The tile is taller than its content so that band is
                // dead space, and the bottom is squared off with no border —
                // a rounded, outlined edge would announce itself the moment the
                // tilt lifted a corner back above the crop.
                "sm:h-[168px] sm:translate-y-[58%] sm:rounded-b-none sm:border-b-0 sm:transition-transform sm:duration-[420ms] sm:ease-[var(--ease-out)] sm:hover:translate-y-[20%] sm:focus-within:translate-y-[20%]",
                tilt
              )}
            >
              <div className="flex items-center gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-lg border border-white/25 bg-white/10">
                  <Icon
                    className="size-3.5 text-white"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <span className="font-mono text-[10.5px] tracking-[0.16em] text-white/70 uppercase">
                  {term}
                </span>
                <span className="ml-auto font-mono text-[10.5px] text-white/45 tabular-nums">
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-white/25 bg-white/10 px-2 py-1 font-body text-[11.5px] leading-none text-white/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
