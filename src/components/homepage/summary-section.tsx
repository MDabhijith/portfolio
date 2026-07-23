const stats = [
  { label: "Experience", value: "4.3 years" },
  { label: "Focus", value: "Product & UX, design systems" },
  { label: "Business", value: "B2B SaaS, B2C" },
];

export function SummarySection() {
  return (
    <section id="about" className="flex flex-col gap-8 sm:flex-row sm:gap-16">
      <p className="shrink-0 font-body text-[13px] font-medium text-ink-tertiary sm:w-[100px]">
        Summary
      </p>

      <div className="flex flex-1 flex-col gap-8 sm:gap-10">
        <p className="max-w-[628px] font-body text-base leading-[1.75] text-ink-secondary sm:text-[17px]">
          Over the last 4 years, I&rsquo;ve designed products across AI, SaaS,
          healthcare, and enterprise platforms with one goal: creating
          experiences that people enjoy using and businesses benefit from.
          Every design decision is guided by empathy, strategy, and measurable
          impact.
        </p>

        <div className="grid grid-cols-1 gap-6 border-t border-line pt-7 sm:grid-cols-3 sm:gap-6">
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
