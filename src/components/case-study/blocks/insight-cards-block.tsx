export function InsightCardsBlock({
  items,
}: {
  items: {
    number: string;
    title: string;
    description: string;
    image?: { src: string; alt: string };
  }[];
}) {
  const hasImages = items.some((item) => item.image);

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
