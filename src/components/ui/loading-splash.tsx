"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const HOLD = 2000;
const FADE = 450;

/** Full-screen brand animation shown while the site loads.
 *
 * Rendered straight into the server HTML rather than mounted after hydration,
 * so it covers the page from the first paint instead of flashing the content
 * underneath. `autoplay` for the same reason — waiting for an effect to call
 * play() would lose the opening frames. The reduced-motion opt-out therefore has
 * to be CSS (see globals.css), since it must apply before any JS runs; the
 * effect below only handles unmounting.
 *
 * Lives in the root layout, which persists across client-side navigation, so
 * this plays on a real page load and never between in-app routes. */
export function LoadingSplash() {
  const [phase, setPhase] = useState<"hold" | "fade" | "done">("hold");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }
    // Counted from navigation start, not from hydration: the splash is already
    // on screen well before this effect runs, so waiting a full HOLD from here
    // would stretch the total by however long hydration took.
    const shown = Math.max(0, HOLD - performance.now());
    const toFade = window.setTimeout(() => setPhase("fade"), shown);
    const toDone = window.setTimeout(() => setPhase("done"), shown + FADE);
    return () => {
      window.clearTimeout(toFade);
      window.clearTimeout(toDone);
    };
  }, []);

  useEffect(() => {
    if (phase === "done") return;
    // Lenis drives the real window scroll, so pinning the root element is what
    // actually holds the page still underneath.
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      /* The phase is in the DOM because globals.css keys the hero's entrance
       * animations off it — they hold at frame zero while this is "hold" and
       * start the moment it flips, so the words rise in as the black clears
       * rather than having already played behind it. */
      data-splash={phase}
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[200] flex items-center justify-center bg-black",
        "transition-opacity ease-[var(--ease-out)]",
        phase === "fade" ? "opacity-0" : "opacity-100"
      )}
      style={{ transitionDuration: `${FADE}ms` }}
    >
      <video
        src="/videos/loading.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-contain"
      />
    </div>
  );
}
