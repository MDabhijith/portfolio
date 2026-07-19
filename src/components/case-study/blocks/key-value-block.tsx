export function KeyValueBlock({
  title,
  rows,
}: {
  title?: string;
  rows: { label: string; value: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      {title ? (
        <p className="font-body text-lg font-medium text-cs-ink">{title}</p>
      ) : null}
      <dl className="flex flex-col">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-1 border-t border-line py-4 first:border-t-0 first:pt-0 sm:flex-row sm:gap-6"
          >
            <dt className="font-body text-[15px] font-medium text-cs-ink sm:w-[180px] sm:shrink-0">
              {row.label}
            </dt>
            <dd className="font-body text-[15px] leading-relaxed text-cs-body">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
