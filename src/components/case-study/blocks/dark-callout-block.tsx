export function DarkCalloutBlock({
  eyebrow,
  rows,
}: {
  eyebrow: string;
  rows: { label: string; before: string; after: string }[];
}) {
  return (
    <div className="flex flex-col gap-8 rounded-xl bg-dark-callout p-8 sm:gap-12 sm:p-20">
      <div className="flex items-center gap-5">
        <p className="whitespace-nowrap font-body text-body-sm text-dark-callout-eyebrow">
          {eyebrow}
        </p>
        <div className="h-px flex-1 bg-white/15" aria-hidden="true" />
      </div>

      <div className="flex flex-col">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 border-t border-white/10 py-8 first:border-t-0 first:pt-0 sm:flex-row sm:gap-16"
          >
            <p className="font-body text-lg font-semibold text-dark-callout-label sm:w-[271px] sm:shrink-0">
              {row.label}
            </p>
            <p className="font-body text-body-sm leading-relaxed text-dark-callout-muted">
              {row.before} <span className="text-white">{row.after}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
