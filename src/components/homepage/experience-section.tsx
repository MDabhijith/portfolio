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

export function ExperienceSection() {
  return (
    <section id="experience">
      <div
        className="flex flex-col gap-9 rounded-[28px] p-8 sm:p-12 lg:p-16"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, color-mix(in srgb, var(--brand) 8%, transparent) 0%, transparent 40%), " +
            "radial-gradient(circle at 85% 80%, color-mix(in srgb, var(--brand) 10%, transparent) 0%, transparent 40%), " +
            "var(--surface-tint)",
        }}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-heading text-2xl font-medium tracking-[-0.02em] text-ink sm:text-h5">
            Experience
          </h2>
          <span className="font-body text-[13.5px] text-ink-tertiary">
            3 companies
          </span>
        </div>

        <div className="flex flex-col">
          {roles.map((item) => (
            <div
              key={item.company}
              className="flex flex-col gap-1 border-t border-brand/[0.18] py-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-1"
            >
              <p className="font-heading text-lg font-medium tracking-[-0.01em] text-ink sm:w-[280px] sm:shrink-0">
                {item.company}
              </p>
              <p className="font-body text-[14.5px] text-ink-secondary sm:flex-1">
                {item.role}
              </p>
              <p className="font-body text-[13.5px] text-ink-tertiary">
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
