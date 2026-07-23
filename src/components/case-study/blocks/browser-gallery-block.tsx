"use client";

import { useState } from "react";
import Image from "next/image";
import type { ImageRef } from "@/lib/case-studies/types";

/**
 * Matches Figma's "Sheets" component: a browser-chrome screenshot on a
 * surface-tinted card with prev/next arrows and dot pagination. Figma's
 * component only ever showed one screenshot per instance, but the chrome
 * was authored for 4 dots — this renders a real carousel when multiple
 * images are supplied, and static (disabled) chrome for a single image.
 */
export function BrowserGalleryBlock({ images }: { images: ImageRef[] }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const active = images[index];

  const goTo = (i: number) => setIndex(((i % count) + count) % count);

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
          <div
            className="relative aspect-[729/395] w-full bg-white"
            aria-live="polite"
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="(min-width: 1024px) 848px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous image"
              className="absolute top-1/2 left-2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#e3e3e3] text-cs-label shadow-[var(--shadow-elevation)] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-positive"
            >
              <ArrowIcon className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next image"
              className="absolute top-1/2 right-2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-cs-ink shadow-[var(--shadow-elevation)] transition-colors hover:bg-[#e3e3e3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-positive"
            >
              <ArrowIcon />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="flex items-center gap-1.5">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1} of ${count}`}
              aria-current={i === index}
              className="flex size-4 items-center justify-center"
            >
              <span
                className={`size-1.5 rounded-full transition-colors ${
                  i === index ? "bg-cs-ink" : "bg-line"
                }`}
              />
            </button>
          ))}
        </div>
      )}
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
