export function DarkCalloutBlock({
  eyebrow,
  rows,
}: {
  eyebrow: string;
  rows: {
    label: string;
    before: string;
    after: string;
    beforeEstimated?: boolean;
    afterEstimated?: boolean;
  }[];
}) {
  return (
    <div className="flex flex-col gap-8 rounded-xl border border-line bg-gradient-to-br from-brand/10 via-white to-brand-secondary/10 p-8 sm:gap-12 sm:p-20">
      <div className="flex items-center gap-5">
        <p className="whitespace-nowrap font-body text-body-sm text-cs-label">
          {eyebrow}
        </p>
        <div className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>

      <div className="flex flex-col">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 border-t border-line py-8 first:border-t-0 first:pt-0 sm:flex-row sm:gap-16"
          >
            <p className="font-body text-lg font-semibold text-cs-ink sm:w-[271px] sm:shrink-0">
              {row.label}
            </p>
            <p className="font-body text-body-sm leading-relaxed text-cs-label">
              {row.before}
              {row.beforeEstimated ? <sup>*</sup> : null}{" "}
              <span className="font-semibold text-cs-ink">
                {row.after}
                {row.afterEstimated ? <sup>*</sup> : null}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
