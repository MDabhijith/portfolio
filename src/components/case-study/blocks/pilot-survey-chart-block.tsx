export function PilotSurveyChartBlock({
  scaleNote,
  categories,
  headline,
  analysis,
}: {
  scaleNote: string;
  categories: { label: string; before: number; after: number }[];
  headline: string;
  analysis: string;
}) {
  const max = 5;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6 rounded-xl border border-line bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-body text-sm font-semibold text-black">
              <span className="size-2 rounded-sm bg-[#dad4c8]" aria-hidden="true" />
              Before pilot
            </span>
            <span className="flex items-center gap-1.5 font-body text-sm font-semibold text-black">
              <span className="size-2 rounded-sm bg-[#00714b]" aria-hidden="true" />
              After pilot
            </span>
          </div>
          <span className="font-body text-xs text-[#727272]">{scaleNote}</span>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {categories.map((cat) => (
            <div key={cat.label} className="flex flex-col items-center gap-3">
              <div className="flex h-[170px] items-end gap-1.5">
                <div className="flex w-6 flex-col items-center gap-1">
                  <span className="font-body text-xs font-medium text-[#727272]">
                    {cat.before.toFixed(1)}
                  </span>
                  <div
                    className="w-full rounded-t bg-[#dad4c8]"
                    style={{ height: `${(cat.before / max) * 140}px` }}
                  />
                </div>
                <div className="flex w-6 flex-col items-center gap-1">
                  <span className="font-body text-xs font-semibold text-positive">
                    {cat.after.toFixed(1)}
                  </span>
                  <div
                    className="w-full rounded-t bg-[#00714b]"
                    style={{ height: `${(cat.after / max) * 140}px` }}
                  />
                </div>
              </div>
              <p className="text-center font-body text-sm font-semibold text-black">
                {cat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-heading text-h3 font-semibold text-cs-ink">
          {headline}
        </p>
        <p className="font-body text-base text-cs-label">{analysis}</p>
      </div>
    </div>
  );
}
