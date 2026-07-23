export function VideoBlock({
  src,
  poster,
  caption,
  label,
  aspect,
}: {
  src: string;
  poster?: string;
  caption?: string;
  label: string;
  aspect?: string;
}) {
  return (
    <figure className="flex flex-col gap-3">
      <div
        className="relative w-full overflow-hidden rounded-xl border border-line bg-surface"
        style={{ aspectRatio: aspect ?? "848 / 500" }}
      >
        <video
          className="absolute inset-0 size-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={label}
        />
      </div>
      {caption ? (
        <figcaption className="font-body text-sm text-cs-label">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
