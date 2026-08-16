"use client";

import { useEffect, useRef, useState } from "react";

/** Screencast that only fetches once it is nearly on screen.
 *
 * `autoPlay` used to sit on the element directly, which starts the download the
 * moment the tag parses no matter what `preload` says — on the proposal-builder
 * page that meant 35MB of MP4 racing the first paint. Playback is driven from an
 * observer instead: the src is withheld until the figure is close to the
 * viewport, and the loop pauses again once it leaves. */
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
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setLoad(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setLoad(true);
        observer.disconnect();
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!load || !video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.15 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [load]);

  return (
    <figure className="flex flex-col gap-3">
      <div
        ref={frameRef}
        className="relative w-full overflow-hidden rounded-xl border border-line bg-surface"
        style={{ aspectRatio: aspect ?? "848 / 500" }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover"
          src={load ? src : undefined}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
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
