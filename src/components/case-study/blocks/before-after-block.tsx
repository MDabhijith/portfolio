"use client";

import { useState } from "react";
import Image from "next/image";
import type { ImageRef } from "@/lib/case-studies/types";
import { cn } from "@/lib/utils";

const STATES = [
  { key: "before", label: "Before" },
  { key: "after", label: "After" },
] as const;

type StateKey = (typeof STATES)[number]["key"];

export function BeforeAfterBlock({
  before,
  after,
  caption,
  aspect,
}: {
  before: ImageRef;
  after: ImageRef;
  caption?: string;
  aspect?: string;
}) {
  const [state, setState] = useState<StateKey>("before");
  const images: Record<StateKey, ImageRef> = { before, after };

  return (
    <figure className="flex flex-col gap-5">
      <div
        role="group"
        aria-label="Toggle before and after"
        className="flex items-center gap-1 self-center rounded-full bg-surface p-1"
      >
        {STATES.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setState(key)}
            aria-pressed={state === key}
            className={cn(
              "rounded-full px-6 py-2.5 font-body text-sm font-semibold outline-none transition-colors duration-[var(--duration-fast)] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
              state === key
                ? "bg-positive text-white"
                : "text-cs-body hover:text-cs-ink",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        className="relative w-full overflow-hidden rounded-xl border border-line bg-surface"
        style={{ aspectRatio: aspect ?? "848 / 500" }}
      >
        {STATES.map(({ key }) => (
          <Image
            key={key}
            src={images[key].src}
            alt={images[key].alt}
            fill
            sizes="(min-width: 1024px) 848px, 100vw"
            className={cn(
              "object-cover transition-opacity duration-[var(--duration-base)] ease-[var(--ease-out)]",
              state === key ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>

      {caption ? (
        <figcaption className="font-body text-sm text-cs-label">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
