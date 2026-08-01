import { cn } from "@/lib/utils";

const roles = [
  {
    company: "Levich Solutions Pvt Ltd",
    role: "Founding Product Designer",
    date: "Aug 2024 - Present",
  },
  {
    company: "Brandshark Pvt Ltd",
    role: "UI UX Designer",
    date: "Feb 2023 - June 2023",
  },
  {
    company: "InteractX Pvt Ltd",
    role: "UI UX Associate",
    date: "Oct 2021 - July 2022",
  },
];

function Row({
  item,
  index,
  light = false,
}: {
  item: (typeof roles)[number];
  index: number;
  light?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:gap-8 sm:py-9">
      <span
        aria-hidden="true"
        className={cn(
          "font-body text-[13px] tabular-nums sm:w-8 sm:shrink-0",
          light ? "text-[var(--dark-callout-eyebrow)]" : "text-ink-tertiary"
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex min-w-0 flex-1 flex-col gap-1.5 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover/role:translate-x-3">
        <p
          className={cn(
            /* Deliberately a step under the section heading's 32px — at 30px the
             * two competed instead of reading as heading then list. */
            "font-heading text-xl font-medium leading-[1.2] tracking-[-0.015em] sm:text-2xl lg:text-h6",
            light ? "text-paper" : "text-ink"
          )}
        >
          {item.company}
        </p>
        <p
          className={cn(
            "font-body text-[14.5px]",
            light ? "text-paper/70" : "text-ink-secondary"
          )}
        >
          {item.role}
        </p>
      </div>

      <p
        className={cn(
          "font-body text-[13.5px] sm:shrink-0 sm:text-right",
          light ? "text-paper/70" : "text-ink-tertiary"
        )}
      >
        {item.date}
      </p>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="flex flex-col gap-10 sm:gap-14">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-heading text-2xl font-medium tracking-[-0.02em] text-ink sm:text-h5">
          Experience
        </h2>
        <span className="font-body text-[13.5px] text-ink-tertiary">
          {roles.length} companies
        </span>
      </div>

      <ul className="flex flex-col">
        {roles.map((item, i) => (
          <li
            key={item.company}
            /* Deliberately no dimming of the unhovered rows: at any opacity low
             * enough to register, the muted role and date text drops under 4.5:1.
             * The inverted panel is a strong enough focus signal on its own. */
            className="group/role relative border-t border-line last:border-b"
          >
            <Row item={item} index={i} />

            {/* The light copy rides inside the panel and is revealed with it,
              * rather than the one set of text cross-fading its colour: a colour
              * transition leaves the words white on cream — invisible — for as
              * long as it takes the fill to climb up to them. Clipping also keeps
              * the corner radius honest, which scaling the panel would squash.
              * Bleeds past the row's own box so the fill reads as lighting up the
              * whole band rather than filling a boxed-in cell. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -inset-x-4 [clip-path:inset(100%_0_0_0_round_20px)] transition-[clip-path] duration-[400ms] ease-[var(--ease-out)] group-hover/role:[clip-path:inset(0_0_0_0_round_20px)] sm:-inset-x-7"
            >
              <div className="absolute inset-0 bg-ink" />
              <div className="relative px-4 sm:px-7">
                <Row item={item} index={i} light />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
