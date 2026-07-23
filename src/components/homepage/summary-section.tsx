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
          Over the past four years I&rsquo;ve designed end-to-end CRMs,
          AI-first knowledge products, and operational tooling for teams
          previously stitching their day across disconnected tools and manual
          re-entry. My process starts with sitting alongside the people doing
          the work. The strongest systems come from tracing one real job
          start to finish and designing for the seams, not just the screens.
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
