import Image from "next/image";
import type { ImageRef } from "@/lib/case-studies/types";

export function ImagePairBlock({ images }: { images: [ImageRef, ImageRef] }) {
  const [left, right] = images;
  return (
    <div className="flex flex-col gap-2.5 sm:flex-row">
      <div className="relative aspect-[291/442] overflow-hidden rounded-lg bg-surface sm:w-[34.3%]">
        <Image
          src={left.src}
          alt={left.alt}
          fill
          sizes="(min-width: 640px) 291px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="relative aspect-[547/442] overflow-hidden rounded-lg bg-surface sm:flex-1">
        <Image
          src={right.src}
          alt={right.alt}
          fill
          sizes="(min-width: 640px) 547px, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
