"use client";

import { useEffect, useRef, useState } from "react";

/** Decorative hero loop.
 *
 * The src is attached from an effect rather than rendered into the markup, for
 * two reasons. It can be withheld under prefers-reduced-motion, which the
 * `autoplay` attribute could not — the loop would already have started before
 * any JS could pause it. And it can be withheld on phones entirely: the clip is
 * 4MB against a 146KB poster, and on a mobile connection that download was the
 * homepage's whole time-to-usable. Phones rest on the poster frame, which is the
 * same image the video opens on. Without JS every viewport does the same. */
export function HeroVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [activeSrc, setActiveSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 639px)").matches) return;
    setActiveSrc(src);
  }, [src]);

  useEffect(() => {
    const video = ref.current;
    if (!activeSrc || !video) return;
    video.play().catch(() => {});
  }, [activeSrc]);

  return (
    <video
      ref={ref}
      src={activeSrc}
      poster={poster}
      loop
      muted
      playsInline
      preload="none"
      aria-hidden="true"
      className={className}
    />
  );
}
