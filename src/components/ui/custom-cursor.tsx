"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Dot cursor for fine-pointer devices. Over any element carrying data-cursor-label
 * it hides the dot and shows a glassmorphic pill (trailing with a little lag) with
 * that label. Touch/coarse pointers keep the native cursor. */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // Only mount on devices that actually have a hover-capable, fine pointer —
  // touch/coarse devices keep the native cursor and skip the pill entirely.
  useEffect(() => {
    setEnabled(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const pill = pillRef.current;
    if (!dot || !pill) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ease = reduce ? 1 : 0.2;
    document.documentElement.classList.add("has-custom-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let px = mx;
    let py = my;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      setVisible(true);
      const el = (e.target as Element | null)?.closest?.("[data-cursor-label]");
      setLabel(el ? el.getAttribute("data-cursor-label") : null);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      px += (mx - px) * ease;
      py += (my - py) * ease;
      pill.style.transform = `translate(${px}px, ${py}px) translate(-50%, -50%)`;
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  const active = label !== null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9999] size-2.5 rounded-full bg-white mix-blend-difference transition-opacity duration-200",
          visible && !active ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        ref={pillRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9999] flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/20 bg-ink/60 px-4 py-2.5 font-body text-[13px] font-medium text-white shadow-lg backdrop-blur-md transition-[opacity,scale] duration-200 ease-out",
          visible && active ? "scale-100 opacity-100" : "scale-90 opacity-0",
        )}
      >
        <ArrowUpRight aria-hidden="true" className="size-3.5" />
        {label}
      </div>
    </>
  );
}
