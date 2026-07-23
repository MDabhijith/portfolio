import Image from "next/image";
import type { Decision } from "@/lib/case-studies/types";

export function DecisionBlock({ items }: { items: Decision[] }) {
  return (
    <div className="flex flex-col gap-14">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col gap-4">
          <h3 className="font-heading text-2xl font-semibold text-cs-ink">
            {item.title}
          </h3>
          <p className="font-body text-[15px] leading-relaxed text-cs-body">
            <span className="font-semibold text-cs-ink">Problem. </span>
            {item.problem}
          </p>
          <p className="font-body text-[15px] leading-relaxed text-cs-body">
            <span className="font-semibold text-cs-ink">Decision. </span>
            {item.decision}
          </p>
          {item.video ? (
            <div
              className="relative mt-2 w-full overflow-hidden rounded-xl border border-line bg-surface"
              style={{ aspectRatio: item.video.aspect ?? "848 / 500" }}
            >
              <video
                className="absolute inset-0 size-full object-cover"
                src={item.video.src}
                poster={item.video.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={item.video.label}
              />
            </div>
          ) : item.image ? (
            <div className="relative mt-2 aspect-[848/500] w-full overflow-hidden rounded-xl border border-line bg-surface">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 1024px) 848px, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
