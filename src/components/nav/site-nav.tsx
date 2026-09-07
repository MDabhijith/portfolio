"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { SlideUpLabel } from "@/components/ui/slide-up-label";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
];

/** Above this the bar is always shown: retracting it in the first screenful
 * reads as a glitch rather than as getting out of the way. */
const ALWAYS_VISIBLE_ABOVE = 90;

/** Lenis emits a stream of sub-pixel steps; anything under this is noise and
 * would otherwise flap the bar open and shut. */
const DIRECTION_THRESHOLD = 6;

/** Both scroll-derived pieces of nav state, resolved in one rAF-coalesced
 * handler so the two never cost more than a single layout read per frame.
 *
 * `onDark` is measured against the sections that opt in with `data-nav-dark`
 * rather than against a fixed scroll offset — a page with no dark section
 * (every case study body) simply never flips, and a page whose dark section
 * isn't the first one still works.
 *
 * `retracted` hides the bar on the way down and brings it back on the way up. */
function useNavState(ref: React.RefObject<HTMLElement | null>) {
  const [onDark, setOnDark] = useState(false);
  const [retracted, setRetracted] = useState(false);

  useEffect(() => {
    const zones = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-dark]")
    );

    let frame = 0;
    let lastY = window.scrollY;

    function measure() {
      frame = 0;
      const nav = ref.current;
      if (!nav) return;

      if (zones.length > 0) {
        const rect = nav.getBoundingClientRect();
        const midline = rect.top + rect.height / 2;
        const over = zones.some((zone) => {
          const bounds = zone.getBoundingClientRect();
          return bounds.top <= midline && bounds.bottom >= midline;
        });
        setOnDark((previous) => (previous === over ? previous : over));
      }

      const y = window.scrollY;
      const delta = y - lastY;
      if (Math.abs(delta) >= DIRECTION_THRESHOLD) {
        lastY = y;
        const next = delta > 0 && y > ALWAYS_VISIBLE_ABOVE;
        setRetracted((previous) => (previous === next ? previous : next));
      } else if (y <= ALWAYS_VISIBLE_ABOVE) {
        lastY = y;
        setRetracted((previous) => (previous ? false : previous));
      }
    }

    // Lenis drives scroll natively, so these fire on every smoothed step —
    // coalesced to one layout read per frame.
    function schedule() {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ref]);

  return { onDark, retracted };
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { onDark, retracted } = useNavState(navRef);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-5 z-50 flex justify-center px-4 transition-transform duration-[400ms] ease-[var(--ease-out)]",
        // focus-within brings it back for a keyboard user who tabs into it
        // while it is off-screen — otherwise the links stay reachable but
        // invisible.
        "focus-within:translate-y-0",
        // An open mobile menu hangs off the bar, so retracting would take the
        // menu with it.
        retracted && !open ? "-translate-y-[140%]" : "translate-y-0"
      )}
    >
      <nav
        ref={navRef}
        aria-label="Primary"
        className={cn(
          "relative flex w-full max-w-[900px] items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-xl transition-colors duration-[400ms] ease-[var(--ease-out)] sm:px-[27px] sm:py-[15px]",
          onDark
            ? "border-white/12 bg-white/8 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.65)]"
            : // Light enough to stay glassy, opaque enough to hold its own text
              // when a full-bleed card image passes behind it.
              "border-white/60 bg-white/75 shadow-[var(--shadow-nav)]"
        )}
      >
        <Logo variant={onDark ? "light" : "dark"} priority />

        <div className="hidden items-center gap-[30px] sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group/roll inline-block rounded-sm font-body text-[12.5px] font-bold tracking-[0.75px] uppercase outline-none transition-colors duration-[400ms] focus-visible:ring-2 focus-visible:ring-offset-2",
                onDark
                  ? "text-white/70 hover:text-white focus-visible:ring-white focus-visible:ring-offset-transparent"
                  : "text-ink focus-visible:ring-brand"
              )}
            >
              <SlideUpLabel label={link.label} />
            </Link>
          ))}
          <Button
            asChild
            variant={onDark ? "pill-nav-invert" : "pill-nav"}
            size="pill-sm"
          >
            <a
              href="/AbhijithMD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group/roll"
            >
              <SlideUpLabel label="Resume" />
            </a>
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "flex size-8 items-center justify-center rounded-full outline-none transition-opacity duration-[var(--duration-fast)] hover:opacity-70 focus-visible:ring-2 sm:hidden",
            onDark
              ? "text-white focus-visible:ring-white"
              : "text-ink focus-visible:ring-brand"
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>

        <div
          id="mobile-nav-panel"
          className={cn(
            "absolute inset-x-0 top-[calc(100%+8px)] flex flex-col gap-1 rounded-2xl border p-3 shadow-[var(--shadow-nav)] backdrop-blur-xl transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] sm:hidden",
            onDark
              ? "border-white/12 bg-black/60"
              : "border-white/60 bg-white/90",
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          )}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-4 py-3 font-body text-sm font-bold tracking-[0.75px] uppercase outline-none transition-colors focus-visible:ring-2",
                onDark
                  ? "text-white hover:bg-white/10 focus-visible:ring-white"
                  : "text-ink hover:bg-ink/5 focus-visible:ring-brand"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/AbhijithMD.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={cn(
              "rounded-lg px-4 py-3 text-center font-body text-sm font-bold tracking-[0.5px] uppercase outline-none transition-opacity hover:opacity-85 focus-visible:ring-2",
              onDark
                ? "bg-white text-ink focus-visible:ring-white"
                : "bg-ink text-white focus-visible:ring-brand"
            )}
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
