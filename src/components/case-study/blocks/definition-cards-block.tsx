export function DefinitionCardsBlock({
  items,
}: {
  items: { term: string; description: string }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <div
          key={item.term}
          className="flex flex-col gap-3 rounded-md border border-primary-100 bg-white p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
        >
          <span className="font-body text-lg font-semibold text-black sm:w-[150px] sm:shrink-0">
            {item.term}
          </span>
          <p className="font-body text-base leading-relaxed text-[#5a5a5a] sm:flex-1">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
