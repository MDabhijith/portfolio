import type { OutcomeHighlight as OutcomeHighlightData } from "@/lib/case-studies/types";

export function OutcomeHighlight({
  eyebrow,
  summary,
  stats,
}: OutcomeHighlightData) {
  return (
    <div className="flex flex-col gap-8 rounded-[32px] border border-[#B0CABB] bg-[#B0CABB] p-8 sm:p-16">
      <div className="flex flex-col gap-4">
        <p className="font-body text-sm font-semibold uppercase tracking-[0.06em] text-cs-body">
          {eyebrow}
        </p>
        <p className="max-w-[560px] font-heading text-2xl font-medium leading-snug text-cs-ink sm:text-3xl">
          {summary}
        </p>
      </div>

      <div className="border-t border-brand/[0.18] pt-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-2">
              <p className="font-heading text-3xl font-semibold tracking-[-0.02em] text-cs-ink">
                {stat.value}
              </p>
              <p className="font-body text-sm leading-relaxed text-cs-body">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
