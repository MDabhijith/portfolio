"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { smoothScrollToTop } from "@/lib/smooth-scroll";

const SHOW_AFTER_PX = 600;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollToTop = () => smoothScrollToTop();

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex size-11 items-center justify-center rounded-full bg-ink text-white shadow-[var(--shadow-nav)] outline-none",
        "transition-[opacity,transform] duration-[var(--duration-base)] ease-[var(--ease-out)]",
        "hover:opacity-80 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0",
      )}
    >
      <ArrowUp aria-hidden="true" className="size-5" />
    </button>
  );
}
