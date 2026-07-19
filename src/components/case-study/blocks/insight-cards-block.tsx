export function InsightCardsBlock({
  items,
}: {
  items: { number: string; title: string; description: string }[];
}) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 border-t border-line py-6 first:border-t-0 first:pt-0 sm:flex-row sm:gap-9"
        >
          <span className="font-heading text-3xl font-semibold text-line sm:w-[64px] sm:shrink-0 sm:text-4xl">
            {item.number}
          </span>
          <div className="flex flex-col gap-2">
            <p className="font-body text-lg font-medium text-cs-ink">
              {item.title}
            </p>
            <p className="font-body text-[15px] leading-relaxed text-cs-body">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
