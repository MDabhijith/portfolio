export function ApproachGridBlock({
  columns,
}: {
  columns: { number: string; title: string; description: string }[][];
}) {
  return (
    <div data-reveal-stagger className="flex flex-col gap-8 sm:flex-row sm:gap-3.5">
      {columns.map((column, ci) => (
        <div key={ci} className="flex flex-1 flex-col gap-6 sm:gap-[50px]">
          {column.map((item, i) => (
            <div key={i} className="flex flex-col gap-6 sm:gap-[50px]">
              <div className="h-px w-full bg-line" aria-hidden="true" />
              <div className="flex items-start gap-2">
                <span className="shrink-0 font-body text-lg font-semibold text-positive">
                  {item.number}
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <p className="font-body text-lg font-semibold text-black">
                    {item.title}
                  </p>
                  <p className="font-body text-base leading-relaxed text-cs-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
