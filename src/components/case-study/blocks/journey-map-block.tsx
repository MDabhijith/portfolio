import { cn } from "@/lib/utils";

const columnTints = {
  before: ["bg-brand/[0.06]", "bg-brand/[0.11]"],
  after: ["bg-emerald-500/[0.07]", "bg-emerald-500/[0.13]"],
} as const;

export function JourneyMapBlock({
  stages,
  tone = "before",
}: {
  stages: {
    label: string;
    touchpoints: string;
    process: string;
    motivations: string;
    emotions: string;
    barriers: string;
  }[];
  tone?: "before" | "after";
}) {
  const tints = columnTints[tone];
  const rows: {
    label: string;
    render: (s: (typeof stages)[number]) => string;
  }[] = [
    { label: "Touchpoints", render: (s) => s.touchpoints },
    { label: "Customer process", render: (s) => s.process },
    { label: "Motivations", render: (s) => s.motivations },
    { label: "Emotions", render: (s) => s.emotions },
    { label: "Barriers", render: (s) => s.barriers },
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-white p-3 sm:p-4">
      <table className="w-full min-w-[760px] border-separate text-center [border-spacing:12px_0]">
        <thead>
          <tr>
            <th scope="col" className="w-[130px]" />
            {stages.map((s, i) => (
              <th
                key={i}
                scope="col"
                className="pb-3 font-body text-sm font-semibold text-cs-ink"
              >
                {s.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              <th
                scope="row"
                className="pr-2 text-left align-middle font-body text-xs font-semibold whitespace-nowrap text-cs-label uppercase"
              >
                {row.label}
              </th>
              {stages.map((s, si) => (
                <td
                  key={si}
                  className={cn(
                    "px-4 py-4 align-middle font-body text-[13px] leading-snug text-cs-body",
                    tints[si % tints.length],
                    ri === 0 && "rounded-t-xl",
                    ri === rows.length - 1 && "rounded-b-xl",
                    ri < rows.length - 1 && "border-b border-white"
                  )}
                >
                  {row.render(s)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
