export function InsightCardsBlock({
  items,
}: {
  items: { number: string; title: string; description: string }[];
}) {
  return (
    <div data-reveal-stagger className="flex flex-col">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 border-t border-line py-6 first:border-t-0 first:pt-0 sm:flex-row sm:gap-2"
        >
          <span className="shrink-0 font-body text-body-sm text-positive">
            {item.number}
          </span>
          <div className="flex flex-col gap-2">
            <p className="font-body text-base font-semibold text-black">
              {item.title}
            </p>
            <p className="font-body text-base leading-relaxed text-cs-label">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
