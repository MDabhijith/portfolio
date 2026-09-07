export function SystemComparisonBlock({
  items,
  image,
}: {
  items: { name: string; subtitle: string; held: string; gap: string }[];
  image?: { src: string; alt: string };
}) {
  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- vector illustration, no raster optimization needed
      <img
        src={image.src}
        alt={image.alt}
        className="w-full rounded-2xl"
      />
    );
  }

  return (
    <div
      data-reveal-stagger
      className="overflow-hidden rounded-2xl border border-line bg-white"
    >
      <div className="hidden grid-cols-[190px_1fr_1fr] gap-6 border-b border-line bg-surface/60 px-6 py-3 sm:grid">
        <span className="font-mono text-[11px] tracking-[0.16em] text-cs-label uppercase">
          System
        </span>
        <span className="font-mono text-[11px] tracking-[0.16em] text-positive uppercase">
          Keep
        </span>
        <span className="font-mono text-[11px] tracking-[0.16em] text-danger uppercase">
          Gap
        </span>
      </div>

      {items.map((item, i) => (
        <div
          key={item.name}
          className="grid grid-cols-1 gap-4 border-line px-6 py-6 sm:grid-cols-[190px_1fr_1fr] sm:items-start sm:gap-6"
          style={i > 0 ? { borderTopWidth: 1 } : undefined}
        >
          <div className="flex flex-col gap-1">
            <p className="font-heading text-lg font-semibold text-cs-ink">
              {item.name}
            </p>
            <p className="font-body text-body-sm text-cs-label">
              {item.subtitle}
            </p>
          </div>

          <div className="rounded-xl border border-positive/15 bg-tag-positive-bg/40 p-4">
            <p className="font-body text-[15px] leading-relaxed text-cs-body">
              {item.held}
            </p>
          </div>

          <div className="rounded-xl border border-danger/20 bg-danger/5 p-4">
            <p className="font-body text-[15px] leading-relaxed text-cs-body">
              {item.gap}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
