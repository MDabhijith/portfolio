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
  variant = "default",
}: {
  items: {
    tag: string;
    tone: "neutral" | "positive" | "negative";
    title: string;
    description: string;
  }[];
  variant?: "default" | "wide";
}) {
  const wide = variant === "wide";

  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border border-primary-100 bg-white p-6 sm:p-8",
        wide ? "gap-6" : "gap-9"
      )}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "flex flex-col gap-3 border-t border-line first:border-t-0 first:pt-0 sm:flex-row sm:items-start",
            wide ? "pt-6 sm:gap-12" : "pt-9 sm:gap-8"
          )}
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
          <div
            className={cn(
              "flex flex-col gap-2",
              wide ? "sm:flex-1" : "sm:max-w-[500px]"
            )}
          >
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
