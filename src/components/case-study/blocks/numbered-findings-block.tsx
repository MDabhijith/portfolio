export function NumberedFindingsBlock({
  items,
}: {
  items: { number: string; title: string; description: string }[];
}) {
  return (
    <div className="flex flex-col gap-8 sm:gap-[50px]">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
          <div className="flex size-[72px] shrink-0 items-center justify-center rounded-full bg-[#f2f2f2] sm:size-[111px]">
            <span className="font-heading text-[26px] font-semibold text-black sm:text-h5">
              {item.number}
            </span>
          </div>
          <div className="flex flex-col gap-2 sm:pt-2">
            <p className="font-body text-lg font-semibold text-cs-ink">
              {item.title}
            </p>
            <p className="font-body text-base leading-relaxed text-cs-body">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
