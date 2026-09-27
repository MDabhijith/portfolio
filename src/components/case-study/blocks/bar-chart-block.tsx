export function BarChartBlock({
  orientation,
  unit = "",
  note,
  bars,
  headline,
  analysis,
}: {
  orientation: "horizontal" | "vertical";
  unit?: string;
  note?: string;
  bars: {
    label: string;
    value: number;
    estimated?: boolean;
    highlight?: boolean;
    detail?: string;
  }[];
  headline?: string;
  analysis?: string;
}) {
  const max = Math.max(...bars.map((b) => b.value));
  const format = (value: number, estimated?: boolean) =>
    `${Number.isInteger(value) ? value : value.toFixed(1)}${unit}${estimated ? "*" : ""}`;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6 rounded-xl border border-line bg-white p-6 sm:p-8">
        {note ? (
          <p className="font-body text-xs text-[#727272]">{note}</p>
        ) : null}

        {orientation === "horizontal" ? (
          <ul className="flex flex-col gap-4">
            {bars.map((bar) => (
              <li key={bar.label} className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4">
                <span className="flex flex-col sm:w-[220px] sm:shrink-0">
                  <span className="font-body text-sm font-medium text-cs-ink">
                    {bar.label}
                  </span>
                  {bar.detail ? (
                    <span className="font-body text-xs text-[#8a8a8a]">
                      {bar.detail}
                    </span>
                  ) : null}
                </span>
                <div className="flex flex-1 items-center gap-3">
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#f0f0f0]">
                    <div
                      className={
                        bar.highlight
                          ? "h-full rounded-full bg-danger"
                          : "h-full rounded-full bg-brand"
                      }
                      style={{ width: `${(bar.value / max) * 100}%` }}
                    />
                  </div>
                  <span className="w-14 shrink-0 text-right font-body text-sm font-semibold text-cs-ink">
                    {format(bar.value, bar.estimated)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-wrap items-end justify-center gap-x-6 gap-y-6">
            {bars.map((bar) => (
              <div key={bar.label} className="flex w-[104px] flex-col items-center gap-2">
                <span
                  className={
                    bar.highlight
                      ? "font-body text-xs font-semibold text-danger"
                      : "font-body text-xs font-semibold text-cs-ink"
                  }
                >
                  {format(bar.value, bar.estimated)}
                </span>
                <div className="flex h-[140px] w-full items-end">
                  <div
                    className={
                      bar.highlight
                        ? "w-full rounded-t bg-danger"
                        : "w-full rounded-t bg-brand"
                    }
                    style={{ height: `${(bar.value / max) * 130}px` }}
                  />
                </div>
                <p className="text-center font-body text-xs leading-snug text-cs-label">
                  {bar.label}
                </p>
                {bar.detail ? (
                  <p className="text-center font-body text-[11px] leading-snug text-[#a0a0a0]">
                    {bar.detail}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>

      {headline || analysis ? (
        <div className="flex flex-col gap-3">
          {headline ? (
            <p className="font-heading text-h3 font-semibold text-cs-ink">
              {headline}
            </p>
          ) : null}
          {analysis ? (
            <p className="font-body text-base text-cs-label">{analysis}</p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
