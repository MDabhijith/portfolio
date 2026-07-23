import { Check, RefreshCw } from "lucide-react";

export function StatusCardsBlock({
  items,
}: {
  items: { label: string; tone: "done" | "active"; bullets: string[] }[];
}) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => {
        const done = item.tone === "done";
        return (
          <div
            key={item.label}
            className={`flex flex-col gap-4 rounded-md border p-6 sm:flex-row sm:gap-20 ${
              done
                ? "border-primary-100 bg-[#ebf0eb]"
                : "border-positive bg-white"
            }`}
          >
            <div className="flex items-center gap-2 sm:w-[150px] sm:shrink-0">
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-full ${
                  done ? "bg-positive text-white" : "bg-[#ebf0eb] text-positive"
                }`}
              >
                {done ? (
                  <Check className="size-4" aria-hidden="true" />
                ) : (
                  <RefreshCw className="size-4" aria-hidden="true" />
                )}
              </span>
              <span
                className={`font-body text-lg font-semibold ${
                  done ? "text-positive" : "text-cs-ink"
                }`}
              >
                {item.label}
              </span>
            </div>
            <ul className="flex flex-1 list-disc flex-col gap-1 pl-5 font-body text-base leading-relaxed text-[#5a5a5a]">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
