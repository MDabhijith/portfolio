import { Fragment } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhaseBoardBlock({
  stages,
}: {
  stages: {
    label: string;
    items: { label: string; flag?: boolean }[];
  }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="hidden items-center sm:flex">
        {stages.map((s, i) => (
          <Fragment key={i}>
            <span className="shrink-0 font-body text-sm font-semibold whitespace-nowrap text-cs-ink">
              {s.label}
            </span>
            {i < stages.length - 1 ? (
              <div className="mx-3 flex flex-1 items-center">
                <div className="h-px flex-1 bg-line" aria-hidden="true" />
                <ArrowRight
                  className="-ml-0.5 size-3.5 shrink-0 text-cs-label"
                  aria-hidden="true"
                />
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-4">
        {stages.map((s, i) => (
          <Fragment key={i}>
            <div className="flex flex-col gap-2">
              <span className="font-body text-sm font-semibold text-cs-ink sm:hidden">
                {s.label}
              </span>
              <div className="flex flex-col gap-3 rounded-lg border border-dashed border-line bg-surface/50 p-4">
                {s.items.map((item, ii) => (
                  <div
                    key={ii}
                    className={cn(
                      "rounded-sm border bg-white px-3 py-3 text-center font-body text-xs leading-snug font-medium",
                      item.flag
                        ? "border-danger text-danger"
                        : "border-line text-cs-ink"
                    )}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            {i < stages.length - 1 ? (
              <ArrowDown
                className="-my-1 size-4 self-center text-cs-label sm:hidden"
                aria-hidden="true"
              />
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
