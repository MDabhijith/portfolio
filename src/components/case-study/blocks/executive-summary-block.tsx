export function ExecutiveSummaryBlock({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-line bg-gradient-to-br from-brand/10 via-white to-brand-secondary/10 p-8 sm:p-10">
      <p className="font-body text-lg font-semibold text-cs-ink">
        {title}
      </p>
      <p className="font-body text-sm leading-relaxed text-cs-muted">
        {description}
      </p>
    </div>
  );
}
