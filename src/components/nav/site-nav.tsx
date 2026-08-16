"use client";

import { useEffect, useState, type PointerEvent } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { useGlassRefraction } from "@/components/ui/glass-refraction";
import { SlideUpLabel } from "@/components/ui/slide-up-label";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
];

function trackSpecular(event: PointerEvent<HTMLElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty(
    "--glass-x",
    `${event.clientX - bounds.left}px`
  );
  event.currentTarget.style.setProperty(
    "--glass-y",
    `${event.clientY - bounds.top}px`
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const bar = useGlassRefraction("site-nav-glass");
  const panel = useGlassRefraction("site-nav-panel-glass");

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      {bar.filter}
      {panel.filter}
      <nav
        ref={bar.ref as React.RefObject<HTMLElement>}
        {...bar.props}
        aria-label="Primary"
        data-condensed={condensed || undefined}
        onPointerMove={trackSpecular}
        className="liquid-glass flex w-full max-w-[900px] items-center justify-between rounded-full px-4 py-2.5 sm:px-[27px] sm:py-[15px]"
      >
        <Logo variant="dark" priority />

        <div className="hidden items-center gap-[30px] sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group/roll inline-block font-body text-[12.5px] font-bold uppercase tracking-[0.75px] text-ink outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
            >
              <SlideUpLabel label={link.label} />
            </Link>
          ))}
          <Button asChild variant="pill-nav" size="pill-sm">
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
          className="flex size-8 items-center justify-center rounded-full text-ink outline-none transition-opacity duration-[var(--duration-fast)] hover:opacity-70 focus-visible:ring-2 focus-visible:ring-brand sm:hidden"
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
          ref={panel.ref as React.RefObject<HTMLDivElement>}
          {...panel.props}
          data-solid=""
          onPointerMove={trackSpecular}
          className={cn(
            "liquid-glass absolute inset-x-0 top-[calc(100%+8px)] flex flex-col gap-1 rounded-2xl p-3 transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] sm:hidden",
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
              className="rounded-lg px-4 py-3 font-body text-sm font-bold uppercase tracking-[0.75px] text-ink outline-none transition-colors hover:bg-ink/5 focus-visible:ring-2 focus-visible:ring-brand"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/AbhijithMD.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-ink px-4 py-3 text-center font-body text-sm font-bold uppercase tracking-[0.5px] text-white outline-none transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-brand"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
