"use client";

import { useEffect, useRef, useState } from "react";
import type { ImageRef } from "@/lib/case-studies/types";

const NATURAL_WIDTH = 1440;
const NATURAL_HEIGHT = 2061;
const MAX_SCALE = 4;
const STEP = 0.15;
/** Breathing room left on the left/right of the diagram at the default "fit"
 * view, like a normal image preview. No vertical inset — the diagram is much
 * taller than the viewport, so it should start flush at the top rather than
 * leaving empty space above it before the content even begins. */
const FIT_PADDING_X = 32;
const FIT_PADDING_Y = 0;
/** Wheel/pinch (trackpad) zoom is proportional to gesture speed (scale *= 1 ±
 * this per unit of deltaY) rather than a fixed jump per event, so it feels
 * like a smooth, linear drag instead of jumping in big steps. */
const WHEEL_SENSITIVITY = 0.0015;

/** Fixed-height viewport for a large designed diagram — the outer card stays
 * on-screen while the reader zooms/pans inside it. Starts at a computed
 * "fit-to-width" scale, so the full width of the diagram is readable by
 * default without shrinking further to also fit its height. Since the
 * diagram is always much taller than the viewport, dragging (and touch
 * pinch-zoom) works at every zoom level, not just once zoomed in, so the
 * rest of the cards below the fold are reachable at 100% too. Panning is
 * clamped so the image can never be dragged into revealing empty space past
 * its own edges. */
export function ZoomableImageBlock({ image }: { image: ImageRef }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerSizeRef = useRef({ width: 0, height: 0 });
  const [minScale, setMinScale] = useState(0.3);
  const minScaleRef = useRef(minScale);
  const [scale, setScale] = useState(0.3);
  const scaleRef = useRef(scale);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{
    startX: number;
    startY: number;
    origX: number;
    origY: number;
  } | null>(null);
  const pinchRef = useRef<{ startDist: number; startScale: number } | null>(
    null
  );
  const [isDragging, setIsDragging] = useState(false);

  const hasInitializedRef = useRef(false);

  useEffect(() => {
    minScaleRef.current = minScale;
  }, [minScale]);
  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  /** Bounds pos so the image can never be dragged further than the fit
   * padding past its own edges — that's also exactly the resting inset at
   * the default fit scale (horizontal only; flush at the top/bottom).
   * Reads sizes from refs (not render-time state) so it stays correct when
   * called from long-lived native event listeners too. */
  const clampPos = (x: number, y: number, s: number) => {
    const { width: cw, height: ch } = containerSizeRef.current;
    const scaledW = NATURAL_WIDTH * s;
    const scaledH = NATURAL_HEIGHT * s;
    const minX = Math.min(FIT_PADDING_X, cw - scaledW - FIT_PADDING_X);
    const minY = Math.min(FIT_PADDING_Y, ch - scaledH - FIT_PADDING_Y);
    return {
      x: Math.min(FIT_PADDING_X, Math.max(minX, x)),
      y: Math.min(FIT_PADDING_Y, Math.max(minY, y)),
    };
  };

  const clampScale = (v: number) =>
    Math.min(MAX_SCALE, Math.max(minScaleRef.current, v));

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const computeFit = (width: number, height: number) => {
      if (width <= 0 || height <= 0) return;
      containerSizeRef.current = { width, height };
      const fit = (width - FIT_PADDING_X * 2) / NATURAL_WIDTH;
      setMinScale(fit);
      minScaleRef.current = fit;
      if (!hasInitializedRef.current) {
        setScale(fit);
        hasInitializedRef.current = true;
        setPos({ x: FIT_PADDING_X, y: FIT_PADDING_Y });
      } else {
        setScale((s) => Math.max(fit, s));
        setPos((p) => clampPos(p.x, p.y, Math.max(fit, scaleRef.current)));
      }
    };

    // ResizeObserver (rather than a one-off measurement + window "resize")
    // so this reads the container's real settled size, even if it's 0 on
    // the very first paint before layout finishes.
    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      computeFit(width, height);
    });
    resizeObserver.observe(el);

    // Two-finger pinch-to-zoom for touch devices — Pointer Events (used for
    // drag below) don't expose multi-touch distance, so this needs the raw
    // Touch API alongside them.
    const touchDist = (t: TouchList) =>
      Math.hypot(
        t[0].clientX - t[1].clientX,
        t[0].clientY - t[1].clientY
      );

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        dragRef.current = null; // a pinch overrides any single-finger drag
        pinchRef.current = {
          startDist: touchDist(e.touches),
          startScale: scaleRef.current,
        };
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && pinchRef.current) {
        e.preventDefault();
        const factor = touchDist(e.touches) / pinchRef.current.startDist;
        const next = clampScale(pinchRef.current.startScale * factor);
        setScale(next);
        setPos((p) => clampPos(p.x, p.y, next));
      }
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) pinchRef.current = null;
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("touchcancel", onTouchEnd);

    return () => {
      resizeObserver.disconnect();
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const zoomBy = (delta: number) => {
    setScale((s) => {
      const next = clampScale(s + delta);
      setPos((p) => clampPos(p.x, p.y, next));
      return next;
    });
  };

  const onWheel = (e: React.WheelEvent) => {
    // Trackpads report a pinch gesture as a wheel event with ctrlKey set —
    // that's the only reliable way to tell a pinch from a plain two-finger
    // scroll, which should keep scrolling the page instead of zooming.
    if (!(e.ctrlKey || e.metaKey)) return;
    e.preventDefault();
    setScale((s) => {
      const next = clampScale(s * (1 - e.deltaY * WHEEL_SENSITIVITY));
      setPos((p) => clampPos(p.x, p.y, next));
      return next;
    });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: pos.x,
      origY: pos.y,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current || pinchRef.current) return;
    const next = clampPos(
      dragRef.current.origX + (e.clientX - dragRef.current.startX),
      dragRef.current.origY + (e.clientY - dragRef.current.startY),
      scale
    );
    setPos(next);
  };

  const endDrag = () => {
    dragRef.current = null;
    setIsDragging(false);
  };

  const reset = () => {
    setScale(minScale);
    setPos({ x: FIT_PADDING_X, y: FIT_PADDING_Y });
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-end gap-1.5">
        <button
          type="button"
          onClick={() => zoomBy(-STEP)}
          disabled={scale <= minScale}
          aria-label="Zoom out"
          className="flex size-8 items-center justify-center rounded-full border border-line bg-white text-cs-ink transition-colors hover:bg-surface disabled:opacity-40"
        >
          −
        </button>
        <span className="w-11 text-center font-mono text-xs text-cs-label">
          {Math.round((scale / minScale) * 100)}%
        </span>
        <button
          type="button"
          onClick={() => zoomBy(STEP)}
          disabled={scale >= MAX_SCALE}
          aria-label="Zoom in"
          className="flex size-8 items-center justify-center rounded-full border border-line bg-white text-cs-ink transition-colors hover:bg-surface disabled:opacity-40"
        >
          +
        </button>
        <button
          type="button"
          onClick={reset}
          className="ml-1 rounded-full border border-line bg-white px-3 py-1.5 font-body text-xs font-medium text-cs-ink transition-colors hover:bg-surface"
        >
          Fit
        </button>
      </div>

      <div
        ref={containerRef}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className="relative h-[70vh] max-h-[720px] w-full touch-none overflow-hidden rounded-2xl border border-line bg-surface/40 [background-image:radial-gradient(circle,var(--line)_1px,transparent_1px)] [background-size:16px_16px]"
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- SVG diagram sized by its own natural dimensions and a manual zoom transform, not next/image's fill/intrinsic modes */}
        <img
          src={image.src}
          alt={image.alt}
          draggable={false}
          loading="lazy"
          decoding="async"
          className="absolute top-0 left-0 max-w-none origin-top-left select-none"
          style={{
            width: NATURAL_WIDTH,
            height: NATURAL_HEIGHT,
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            transition: isDragging ? "none" : "transform 150ms ease-out",
          }}
        />
      </div>
    </div>
  );
}
