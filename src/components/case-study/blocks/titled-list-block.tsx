import { Fragment } from "react";
import { Anchor, Briefcase, MapPin, Route, Zap, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  route: Route,
  anchor: Anchor,
  zap: Zap,
  briefcase: Briefcase,
  mapPin: MapPin,
};

export function TitledListBlock({
  eyebrow,
  variant = "default",
  items,
}: {
  eyebrow?: string;
  variant?: "default" | "cards";
  items: {
    title: string;
    description: string;
    icon?: "route" | "anchor" | "zap" | "briefcase" | "mapPin";
  }[];
}) {
  if (variant === "cards") {
    return (
      <div className="mb-6 flex flex-col gap-5 sm:mb-10">
        {eyebrow ? (
          <div className="flex items-center gap-4">
            <span className="shrink-0 font-body text-sm whitespace-nowrap text-positive">
              {eyebrow}
            </span>
            <div className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>
        ) : null}
        <div data-reveal-stagger className="grid gap-5 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = item.icon ? icons[item.icon] : null;
            const accent = i % 2 === 0 ? "brand" : "brand-secondary";
            return (
              <div
                key={i}
                className={cn(
                  "flex flex-col gap-4 rounded-xl border border-line p-6 sm:p-7",
                  accent === "brand"
                    ? "bg-gradient-to-br from-brand/10 via-white to-white"
                    : "bg-gradient-to-br from-brand-secondary/10 via-white to-white"
                )}
              >
                {Icon ? (
                  <span
                    className={cn(
                      "flex size-11 shrink-0 items-center justify-center rounded-full bg-white shadow-[var(--shadow-elevation)]",
                      accent === "brand" ? "text-brand" : "text-brand-secondary"
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                ) : null}
                <div className="flex flex-col gap-2">
                  <p className="font-body text-lg font-semibold text-cs-ink">
                    {item.title}
                  </p>
                  <p className="font-body text-body-sm leading-relaxed text-cs-body">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {eyebrow ? (
        <div className="flex items-center gap-4">
          <span className="shrink-0 font-body text-sm whitespace-nowrap text-positive">
            {eyebrow}
          </span>
          <div className="h-px flex-1 bg-line" aria-hidden="true" />
        </div>
      ) : null}
      <div className="flex flex-col gap-6">
        {items.map((item, i) => (
          <Fragment key={i}>
            <div className="flex flex-col gap-2">
              <p className="font-body text-base font-semibold text-black">
                {item.title}
              </p>
              <p className="font-body text-base leading-relaxed text-cs-label">
                {item.description}
              </p>
            </div>
            <div className="h-px w-full bg-line" aria-hidden="true" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
