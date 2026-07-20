import Image from "next/image";
import type { ImageRef } from "@/lib/case-studies/types";

/**
 * Matches Figma's "Sheets" component: a browser-chrome screenshot on a
 * surface-tinted card with decorative prev/next arrows and dot pagination.
 * Figma's own component only ever shows one real screenshot per instance —
 * the arrows/dots are static chrome baked into the component, not a real
 * multi-slide carousel — so they're rendered here as non-interactive,
 * disabled controls rather than fake working buttons.
 */
export function BrowserGalleryBlock({ image }: { image: ImageRef }) {
  return (
    <figure className="flex flex-col items-center gap-4 rounded-xl bg-surface p-4 sm:p-8">
      <div className="relative w-full">
        <div className="overflow-hidden rounded-lg border border-line shadow-[var(--shadow-elevation)]">
          <div className="flex h-8 items-center gap-2 bg-[#dfe1e5] px-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-[#ec6b5e]" />
              <span className="size-2.5 rounded-full bg-[#f4bf4f]" />
              <span className="size-2.5 rounded-full bg-[#61c453]" />
            </div>
            <div className="flex flex-1 justify-center">
              <span className="rounded-full bg-white px-4 py-0.5 font-body text-[11px] text-[#606367]">
                Googlesheets.com
              </span>
            </div>
          </div>
          <div className="relative aspect-[729/395] w-full bg-white">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 848px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <button
          type="button"
          disabled
          aria-label="Previous image"
          className="absolute top-1/2 left-2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#e3e3e3] text-cs-label shadow-[var(--shadow-elevation)] disabled:opacity-70"
        >
          <ArrowIcon className="rotate-180" />
        </button>
        <button
          type="button"
          disabled
          aria-label="Next image"
          className="absolute top-1/2 right-2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-cs-ink shadow-[var(--shadow-elevation)] disabled:opacity-70"
        >
          <ArrowIcon />
        </button>
      </div>

      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="size-1.5 rounded-full bg-cs-ink" />
        <span className="size-1.5 rounded-full bg-line" />
        <span className="size-1.5 rounded-full bg-line" />
        <span className="size-1.5 rounded-full bg-line" />
      </div>
    </figure>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`size-4 ${className ?? ""}`}
    >
      <path
        d="M6 3.5L10.5 8L6 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
