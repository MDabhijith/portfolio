import Image from "next/image";
import type { ImageRef } from "@/lib/case-studies/types";

export function ImageBlock({
  image,
  caption,
  aspect,
}: {
  image?: ImageRef;
  caption?: string;
  aspect?: string;
}) {
  return (
    <figure className="flex flex-col gap-3">
      <div
        className="relative w-full overflow-hidden rounded-xl border border-line bg-surface"
        style={{ aspectRatio: aspect ?? "848 / 500" }}
      >
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 848px, 100vw"
            className="object-cover"
          />
        ) : null}
      </div>
      {caption ? (
        <figcaption className="font-body text-sm text-cs-label">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
