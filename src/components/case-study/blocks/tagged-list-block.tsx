export function TaggedListBlock({
  items,
}: {
  items: { tag: string; title: string; description: string }[];
}) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 border-t border-line py-6 first:border-t-0 first:pt-0 sm:flex-row sm:gap-9"
        >
          <div className="sm:w-[120px] sm:shrink-0">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 font-body text-xs font-semibold uppercase tracking-[0.04em] text-cs-ink">
              <span
                className="size-[5px] rounded-full bg-brand"
                aria-hidden="true"
              />
              {item.tag}
            </span>
          </div>
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
