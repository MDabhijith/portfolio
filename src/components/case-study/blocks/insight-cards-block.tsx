import { cn } from "@/lib/utils";

export function InsightCardsBlock({
  items,
  variant = "default",
}: {
  items: {
    number: string;
    title: string;
    description: string;
    image?: { src: string; alt: string };
  }[];
  variant?: "default" | "problem";
}) {
  const hasImages = items.some((item) => item.image);

  if (variant === "problem") {
    return (
      <div
        data-reveal-stagger
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {items.map((item, i) => {
          const accent = i % 2 === 0 ? "brand" : "brand-secondary";
          return (
            <div
              key={i}
              className={cn(
                "flex flex-col gap-2 rounded-xl border border-line p-5",
                accent === "brand"
                  ? "bg-gradient-to-br from-brand/10 via-white to-white"
                  : "bg-gradient-to-br from-brand-secondary/10 via-white to-white"
              )}
            >
              <span
                className={cn(
                  "font-heading text-xl font-semibold",
                  accent === "brand" ? "text-brand" : "text-brand-secondary"
                )}
              >
                {item.number}
              </span>
              <p className="font-body text-sm font-semibold text-black">
                {item.title}
              </p>
              <p className="font-body text-xs leading-relaxed text-cs-label">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    );
  }

  if (hasImages) {
    return (
      <div
        data-reveal-stagger
        className="grid max-w-4xl grid-cols-2 gap-8"
      >
        {items.map((item, i) =>
          item.image ? (
            // eslint-disable-next-line @next/next/no-img-element -- vector illustration, no raster optimization needed
            <img
              key={i}
              src={item.image.src}
              alt={item.image.alt}
              className="w-full"
            />
          ) : null
        )}
      </div>
    );
  }

  return (
    <div data-reveal-stagger className="flex flex-col">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 border-t border-line py-6 first:border-t-0 first:pt-0 sm:flex-row sm:gap-2"
        >
          <span className="shrink-0 font-body text-body-sm text-positive">
            {item.number}
          </span>
          <div className="flex flex-col gap-2">
            <p className="font-body text-base font-semibold text-black">
              {item.title}
            </p>
            <p className="font-body text-base leading-relaxed text-cs-label">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
