"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { setLenis, smoothScrollTo, resetScrollToTop } from "@/lib/smooth-scroll";

/** Momentum smooth-scrolling for the whole document via Lenis. Uses the real
 * window scroll, so sticky positioning, scroll-spy, and scroll-triggered media
 * keep working. Disabled under prefers-reduced-motion. In-page hash links are
 * routed through Lenis so anchors stay smooth. */
export function SmoothScroll() {
  const pathname = usePathname();

  // On navigation, start every page at the top unless the URL targets an anchor.
  useEffect(() => {
    if (window.location.hash) return;
    resetScrollToTop();
  }, [pathname]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
    setLenis(lenis);

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const link = (e.target as Element | null)?.closest("a");
      const href = link?.getAttribute("href");
      if (!href) return;

      let hash: string | null = null;
      if (href.startsWith("#")) hash = href;
      else if (href.startsWith("/#") && window.location.pathname === "/")
        hash = href.slice(1);
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!(target instanceof HTMLElement)) return;
      e.preventDefault();
      smoothScrollTo(target);
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}
