"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface WorkflowStep {
  title: string;
  actor: string;
  actorTone: "muted" | "accent";
  description: string;
  tags: string[];
}

/**
 * Vertically scrollable card stack in a fixed-height frame. The page's Lenis
 * smooth-scroll only hands wheel/touch control over to this card's native
 * scroll once the card is fully inside the viewport — otherwise scrolling
 * toward it just continues the normal page scroll.
 *
 * Handing control back is done imperatively (a native `wheel` listener
 * toggling the `data-lenis-prevent` attribute directly), not via React state:
 * Lenis reads that attribute off the live DOM the instant the event bubbles
 * to it, so the release has to land in the same tick the boundary is hit.
 * Driving it through setState/re-render was the source of the lag where
 * scrolling past the top of the inner list would stall instead of handing
 * off to the page immediately.
 */
export function WorkflowTimelineBlock({ steps }: { steps: WorkflowStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const isFullyVisibleRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isFullyVisibleRef.current = entry.intersectionRatio >= 0.99;
      },
      { threshold: [0, 0.99, 1] }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onWheel = (e: WheelEvent) => {
      if (!isFullyVisibleRef.current) {
        track.removeAttribute("data-lenis-prevent");
        return;
      }
      const atTop = track.scrollTop <= 0;
      const atBottom =
        track.scrollTop + track.clientHeight >= track.scrollHeight - 1;
      const releasingUp = e.deltaY < 0 && atTop;
      const releasingDown = e.deltaY > 0 && atBottom;

      if (releasingUp || releasingDown) {
        track.removeAttribute("data-lenis-prevent");
      } else {
        track.setAttribute("data-lenis-prevent", "true");
      }
    };

    track.addEventListener("wheel", onWheel, { passive: true });
    return () => track.removeEventListener("wheel", onWheel);
  }, []);

  const updateProgress = () => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollHeight - track.clientHeight;
    setProgress(max > 0 ? track.scrollTop / max : 0);
  };

  return (
    <div
      ref={containerRef}
      className="flex gap-4 rounded-2xl border border-line bg-white p-5 sm:p-6"
    >
      <div
        className="w-1 shrink-0 self-stretch overflow-hidden rounded-full bg-line"
        aria-hidden="true"
      >
        <div
          className="w-full rounded-full bg-cs-label/50 transition-[height] duration-150 ease-[var(--ease-out)]"
          style={{ height: `${Math.max(4, progress * 100)}%` }}
        />
      </div>

      <div
        ref={trackRef}
        onScroll={updateProgress}
        className="flex h-[560px] flex-1 snap-y snap-mandatory flex-col gap-4 overflow-y-auto overscroll-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {steps.map((step, i) => (
          <div
            key={step.title}
            data-card
            className="flex shrink-0 snap-start flex-col gap-3 rounded-2xl border border-line bg-white p-5"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-secondary font-mono text-[11px] text-white">
                {i + 1}
              </span>
              <span
                className={cn(
                  "font-mono text-[10.5px] font-medium tracking-[0.14em] uppercase",
                  step.actorTone === "accent" ? "text-positive" : "text-cs-label",
                )}
              >
                {step.actor}
              </span>
            </div>

            <h3 className="font-heading text-base leading-snug font-semibold text-cs-ink">
              {step.title}
            </h3>

            <p className="font-body text-[14px] leading-relaxed text-cs-body">
              {step.description}
            </p>

            {step.tags.length > 0 ? (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-surface px-2.5 py-1 font-body text-[12px] font-medium text-cs-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
