"use client";

import { useEffect, useRef } from "react";

/** Decorative hero loop.
 *
 * Playback starts from an effect rather than the `autoplay` attribute so it can
 * be withheld under prefers-reduced-motion — the attribute would have started
 * the loop before any JS could pause it, and this project honours that setting
 * everywhere else (marquee, reveals, the global CSS override). Without JS the
 * element simply rests on its poster frame. */
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

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      className={className}
    />
  );
}
