import type Lenis from "lenis";

/** Shared handle to the active Lenis instance so imperative scrolls (the
 * scroll-to-top button, in-page anchors) route through the smooth-scroller
 * instead of fighting it. Falls back to native scrolling when Lenis is off
 * (touch devices, prefers-reduced-motion). */
let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

export function smoothScrollToTop() {
  if (lenis) lenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

/** Jump instantly to the top — used on route changes so a new page always opens
 * at its start (Lenis otherwise restores the previous page's scroll position). */
export function resetScrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  window.scrollTo(0, 0);
}

export function smoothScrollTo(target: HTMLElement, offset = -120) {
  if (lenis) lenis.scrollTo(target, { offset });
  else target.scrollIntoView({ behavior: "smooth" });
}
