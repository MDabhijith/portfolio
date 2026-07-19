import type { Decision } from "@/lib/case-studies/types";

export function DecisionBlock({ items }: { items: Decision[] }) {
  return (
    <div className="flex flex-col gap-14">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col gap-4">
          <h3 className="font-heading text-2xl font-semibold text-cs-ink">
            {item.title}
          </h3>
          <p className="font-body text-[15px] leading-relaxed text-cs-body">
            <span className="font-semibold text-cs-ink">Problem. </span>
            {item.problem}
          </p>
          <p className="font-body text-[15px] leading-relaxed text-cs-body">
            <span className="font-semibold text-cs-ink">Decision. </span>
            {item.decision}
          </p>
        </div>
      ))}
    </div>
  );
}
