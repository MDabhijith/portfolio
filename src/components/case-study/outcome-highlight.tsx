import type { OutcomeHighlight as OutcomeHighlightData } from "@/lib/case-studies/types";

/**
 * Matches Figma node 314:611 exactly: bg #ebf0eb, border #b0cabb, radius 20px (Radius/5).
 * One deliberate deviation: Figma's caption color (#767676) measures 3.94:1 against this
 * background, below the 4.5:1 AA minimum — darkened to #626262 (5.29:1) to stay accessible.
 */
export function OutcomeHighlight({
  eyebrow,
  summary,
  stats,
}: OutcomeHighlightData) {
  return (
    <div className="flex flex-col gap-[21px] rounded-xl border border-[#b0cabb] bg-[#ebf0eb] p-8 sm:p-16">
      <div className="flex flex-col gap-[10px]">
        <p className="font-body text-body-sm text-positive">{eyebrow}</p>
        <p className="max-w-[837px] font-heading text-2xl font-semibold text-black sm:text-h5">
          {summary}
        </p>
      </div>

      <div className="border-t border-black/10 pt-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-x-[105px] sm:gap-y-6">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-[10px]">
              <p className="font-heading text-3xl font-semibold text-black sm:text-h4">
                {stat.value}
              </p>
              <p className="font-body text-caption text-[#626262]">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
