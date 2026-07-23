export function StatCardsBlock({
  items,
}: {
  items: { tag: string; value: string }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.tag}
          className="flex flex-col gap-4 rounded-md border border-primary-100 bg-white p-8"
        >
          <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-tag-positive-bg px-3 py-1.5 font-body text-xs text-positive">
            <span
              className="size-[5px] rounded-full bg-positive"
              aria-hidden="true"
            />
            {item.tag}
          </span>
          <p className="font-heading text-h4 font-semibold text-cs-ink">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
