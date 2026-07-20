export function SystemComparisonBlock({
  items,
}: {
  items: { name: string; subtitle: string; held: string; gap: string }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex flex-col gap-4 rounded-xl border border-primary-100 bg-white p-6 sm:flex-row sm:gap-16"
        >
          <div className="flex shrink-0 flex-col gap-1 sm:w-[150px]">
            <p className="font-heading text-xl font-semibold text-black sm:text-h6">
              {item.name}
            </p>
            <p className="font-body text-body-sm text-cs-label">
              {item.subtitle}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-8">
              <span className="font-body text-base font-medium text-positive sm:w-16 sm:shrink-0">
                HELD
              </span>
              <p className="font-body text-base text-[#5a5a5a]">
                {item.held}
              </p>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-8">
              <span className="font-body text-base font-medium text-danger sm:w-16 sm:shrink-0">
                GAP
              </span>
              <p className="font-body text-base text-[#5a5a5a]">
                {item.gap}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
