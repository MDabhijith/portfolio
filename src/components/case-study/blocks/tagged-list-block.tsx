import { cn } from "@/lib/utils";

const toneStyles = {
  neutral: "bg-tag-neutral-bg text-tag-neutral-fg",
  positive: "bg-tag-positive-bg text-positive",
  negative: "bg-tag-negative-bg text-danger",
} as const;

const dotStyles = {
  neutral: "bg-tag-neutral-fg",
  positive: "bg-positive",
  negative: "bg-danger",
} as const;

export function TaggedListBlock({
  items,
}: {
  items: {
    tag: string;
    tone: "neutral" | "positive" | "negative";
    title: string;
    description: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-9 rounded-xl border border-primary-100 bg-white p-6 sm:p-8">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex flex-col gap-3 border-t border-line pt-9 first:border-t-0 first:pt-0 sm:flex-row sm:items-start sm:gap-8"
        >
          <span
            className={cn(
              "inline-flex shrink-0 items-center gap-1 self-start rounded-full px-3 py-1.5 font-body text-caption",
              toneStyles[item.tone]
            )}
          >
            <span
              className={cn("size-[5px] rounded-full", dotStyles[item.tone])}
              aria-hidden="true"
            />
            {item.tag}
          </span>
          <div className="flex flex-col gap-2 sm:max-w-[500px]">
            <p className="font-body text-lg font-semibold text-[#2c2c2c]">
              {item.title}
            </p>
            <p className="font-body text-body-sm leading-relaxed text-[#444444]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
