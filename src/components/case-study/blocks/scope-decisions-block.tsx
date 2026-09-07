import Image from "next/image";
import type { ImageRef } from "@/lib/case-studies/types";

export function ScopeDecisionsBlock({
  items,
}: {
  items: {
    tag: string;
    tone: "neutral" | "positive" | "negative";
    title: string;
    description: string;
    image?: ImageRef;
  }[];
}) {
  return (
    <div
      data-reveal-stagger
      className="grid grid-cols-1 gap-5 sm:grid-cols-3"
    >
      {items.map((item, i) =>
        item.image ? (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-line bg-surface"
          >
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={1040}
              height={930}
              sizes="(min-width: 640px) 360px, 100vw"
              className="h-auto w-full"
            />
          </div>
        ) : null
      )}
    </div>
  );
}
