import { Building2, Clock3, Layers } from "lucide-react";

const stats = [
  { label: "Experience", value: "4.3 years", Icon: Clock3 },
  { label: "Focus", value: "Product & UX, design systems", Icon: Layers },
  { label: "Business", value: "B2B SaaS, B2C", Icon: Building2 },
];

export function SummarySection() {
  return (
    <section id="about" className="flex flex-col gap-10 sm:gap-14">
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
        <h2 className="shrink-0 font-heading text-2xl font-medium leading-[1.2] tracking-[-0.02em] text-ink sm:w-[200px] sm:text-h5 lg:w-[240px]">
          Summary
        </h2>

        <p className="max-w-[628px] font-body text-base leading-[1.75] text-ink-secondary sm:text-[17px]">
          Over the last 4 years, I&rsquo;ve designed products across AI, SaaS,
          healthcare, and enterprise platforms with one goal: creating
          experiences that people enjoy using and businesses benefit from. Every
          design decision is guided by empathy, strategy, and measurable impact.
        </p>
      </div>

      {/* One stacked card on phones, three side-by-side cards from sm up: the
        * separate cards each needed their own vertical padding, which turned
        * into three tall boxes and a lot of dead space on a narrow screen. */}
      <div className="relative isolate w-full overflow-hidden rounded-2xl border border-ink/12 sm:overflow-visible sm:rounded-none sm:border-0">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-135 from-[var(--accent-sand)] to-[var(--accent-shell)] sm:hidden"
        />
        <div className="grid sm:grid-cols-3 sm:gap-5">
          {stats.map(({ label, value, Icon }) => (
            <div
              key={label}
              className="relative isolate overflow-hidden sm:rounded-2xl sm:border sm:border-ink/12 sm:shadow-[0_1px_2px_rgba(31,31,31,0.04)] sm:transition-shadow sm:duration-[var(--duration-base)] sm:hover:shadow-[var(--shadow-elevation)]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 hidden bg-linear-135 from-[var(--accent-sand)] to-[var(--accent-shell)] sm:block"
              />
              <div className="flex h-full flex-col items-start gap-1.5 bg-white/55 px-5 py-5 text-left backdrop-blur-2xl sm:gap-3 sm:px-6 sm:py-9">
                <div className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-full bg-ink sm:size-8">
                    <Icon
                      className="size-3.5 text-white sm:size-4"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <p className="font-body text-[10.5px] tracking-[0.14em] text-ink-tertiary uppercase sm:text-[11px]">
                    {label}
                  </p>
                </div>
                <p className="font-heading text-[17px] leading-[1.3] font-semibold tracking-[-0.02em] text-ink sm:text-xl sm:leading-[1.25]">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
