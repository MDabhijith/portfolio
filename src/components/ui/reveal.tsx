"use client";

import { useEffect, useRef, useState } from "react";

/** Fades and slides its subtree up the first time it scrolls into view.
 *
 * Plain IntersectionObserver rather than a motion library: the Framer Motion
 * `whileInView` pass (CHANGELOG Phase 3) left content stranded at opacity 0 when
 * it failed to fire. Here the hidden state is CSS-only (`[data-reveal]` in
 * globals.css), so prefers-reduced-motion and the no-JS `<noscript>` override in
 * layout.tsx can both force everything visible without this component running. */
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

const CARD_STAGGER_MS = 70;

/** Drives the per-card slide-up for every `[data-reveal-stagger]` grid on the
 * page. Mount once on any page that contains them.
 *
 * Each card gets its own observer entry rather than the grid getting one: a tall
 * grid's top edge enters the viewport long before its lower cards do, so a
 * single grid-level trigger left those cards fully settled by the time you
 * scrolled to them — the animation ran off-screen. Cards that genuinely arrive
 * together (a row of a multi-column grid) stagger by their index within the
 * batch instead, so a card arriving alone pays no delay.
 *
 * Marking each grid `data-reveal-ready` here is what allows the CSS to hide its
 * cards. Without JS — or under reduced motion, where this bails out early —
 * nothing is ever hidden, which is the failure mode that killed the Framer
 * Motion pass. */
export function StaggerReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const grids = document.querySelectorAll("[data-reveal-stagger]");
    if (!grids.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries.filter((entry) => entry.isIntersecting);
        entering.forEach((entry, i) => {
          const card = entry.target as HTMLElement;
          if (entering.length > 1) {
            card.style.transitionDelay = `${i * CARD_STAGGER_MS}ms`;
          }
          card.setAttribute("data-revealed", "");
          observer.unobserve(card);
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    for (const grid of grids) {
      grid.setAttribute("data-reveal-ready", "");
      for (const card of grid.children) observer.observe(card);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
