const stats = [
  { label: "Experience", value: "4.3 years" },
  { label: "Focus", value: "Product & UX, design systems" },
  { label: "Business", value: "B2B SaaS, B2C" },
];

export function SummarySection() {
  return (
    <section id="about" className="flex flex-col gap-8 sm:flex-row sm:gap-16">
      <h2 className="shrink-0 font-heading text-2xl font-medium leading-[1.2] tracking-[-0.02em] text-ink sm:w-[200px] sm:text-h5 lg:w-[240px]">
        Summary
      </h2>

      <div className="flex flex-1 flex-col gap-8 sm:gap-10">
        <p className="max-w-[628px] font-body text-base leading-[1.75] text-ink-secondary sm:text-[17px]">
          Over the last 4 years, I&rsquo;ve designed products across AI, SaaS,
          healthcare, and enterprise platforms with one goal: creating
          experiences that people enjoy using and businesses benefit from.
          Every design decision is guided by empathy, strategy, and measurable
          impact.
        </p>

        {/* justify-between rather than equal columns: the three values differ a
          * lot in length, so equal columns left the longest one crowding its
          * neighbour while the short ones floated in space. */}
        <div className="flex flex-col gap-6 border-t border-line pt-7 sm:flex-row sm:justify-between sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <p className="font-body text-xs text-ink-tertiary">
                {stat.label}
              </p>
              <p className="font-body text-[17px] font-bold text-ink">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
