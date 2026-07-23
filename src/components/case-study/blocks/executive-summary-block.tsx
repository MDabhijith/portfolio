export function ExecutiveSummaryBlock({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-dark-callout p-8 sm:p-10">
      <p className="font-body text-lg font-semibold text-dark-callout-label">
        {title}
      </p>
      <p className="font-body text-sm leading-relaxed text-dark-callout-muted">
        {description}
      </p>
    </div>
  );
}
