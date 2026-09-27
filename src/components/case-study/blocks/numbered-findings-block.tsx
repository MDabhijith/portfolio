export function NumberedFindingsBlock({
  items,
}: {
  items: { number: string; title: string; description: string }[];
}) {
  return (
    <div data-reveal-stagger className="mt-6 flex flex-col sm:mt-10">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex gap-5 border-t border-line py-8 first:border-t-0 first:pt-0 sm:gap-10"
        >
          <span
            aria-hidden="true"
            style={{
              WebkitTextStroke: `1.5px ${i % 2 === 0 ? "var(--brand)" : "var(--brand-secondary)"}`,
            }}
            className="w-[56px] shrink-0 select-none font-heading text-[56px] leading-[0.85] font-semibold text-transparent sm:w-[88px] sm:text-[76px]"
          >
            {item.number}
          </span>
          <div className="flex flex-col gap-2 pt-1 sm:pt-2">
            <p className="font-body text-lg font-semibold text-cs-ink">
              {item.title}
            </p>
            <p className="font-body text-body-sm leading-relaxed text-cs-body">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
