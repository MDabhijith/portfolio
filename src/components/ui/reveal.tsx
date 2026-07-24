"use client";

import { useEffect, useRef, useState } from "react";

/** Fades and slides its subtree up the first time it scrolls into view.
 *
 * Plain IntersectionObserver rather than a motion library: the Framer Motion
 * `whileInView` pass (CHANGELOG Phase 3) left content stranded at opacity 0 when
 * it failed to fire. Here the hidden state is CSS-only (`[data-reveal]` in
 * globals.css), so prefers-reduced-motion and the no-JS `<noscript>` override in
 * layout.tsx can both force everything visible without this component running.
 *
 * Add `data-reveal-stagger` to a grid/list inside a Reveal and its direct
 * children slide up in sequence instead of the block moving as one piece. */
export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealed(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      data-revealed={revealed ? "" : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
