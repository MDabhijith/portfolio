"use client";

import { useEffect, useRef } from "react";

const LINE_COUNT = 7;
/** Sample spacing in CSS px. At 12 the polyline still reads as a smooth curve
 * while keeping a 1440px-wide frame under ~1100 lineTo calls. */
const STEP = 12;
const SPEED = 0.00085;
const WAVELENGTH = 190;
/** Both amplitudes are fractions of the gap between lines rather than fixed
 * pixels — the band is 64px tall on a phone and 112px on a desktop, and a fixed
 * swing that reads at one height either vanishes or crosses lines at the
 * other. */
const BASE_AMPLITUDE_RATIO = 0.34;
const POINTER_AMPLITUDE_RATIO = 1.05;
/** Phase offset per line, so the field travels as a sheet rather than as nine
 * identical curves stacked on top of each other. */
const LINE_PHASE = 0.42;

const POINTER_RADIUS = 160;
const POINTER_EASE = 0.12;

/** Animated wave field standing in for the hero's hatch band.
 *
 * Canvas rather than SVG or a stack of DOM nodes: nine paths redrawn every
 * frame is one GPU-composited layer and zero allocations per frame, where the
 * equivalent SVG would rewrite nine `d` attributes and re-parse them.
 *
 * The pointer bulge is confined to devices that actually have a pointer — a
 * touch screen gets the plain travelling wave, which is also what everything
 * falls back to under prefers-reduced-motion (a single static frame). */
export function HeroWave({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvasRef.current;
    if (!element) return;
    const context = element.getContext("2d");
    if (!context) return;

    // Re-bound with non-nullable types so the closures below don't each have to
    // re-prove the guards above.
    const canvas: HTMLCanvasElement = element;
    const ctx: CanvasRenderingContext2D = context;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const interactive =
      !reduced &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let width = 0;
    let height = 0;
    let rect = canvas.getBoundingClientRect();
    let frame = 0;
    let visible = false;

    // Target values written by the pointer handler; `eased` chases them so the
    // bulge swells and decays instead of snapping to the cursor.
    const pointer = { x: 0, y: 0, strength: 0 };
    const eased = { x: 0, y: 0, strength: 0 };

    function resize() {
      rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width === 0 || height === 0) return;

      // Capped at 2: past that the extra pixels cost real fill rate and buy
      // nothing on a 1px hairline.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineWidth = 1;
      ctx.strokeStyle = getComputedStyle(canvas).color;
    }

    function draw(time: number) {
      if (width === 0 || height === 0) return;
      ctx.clearRect(0, 0, width, height);

      if (interactive) {
        eased.x += (pointer.x - eased.x) * POINTER_EASE;
        eased.y += (pointer.y - eased.y) * POINTER_EASE;
        eased.strength += (pointer.strength - eased.strength) * POINTER_EASE;
      }

      const phase = time * SPEED;
      const gap = height / (LINE_COUNT + 1);
      const baseAmplitude = gap * BASE_AMPLITUDE_RATIO;
      const pointerAmplitude = gap * POINTER_AMPLITUDE_RATIO;
      const bulge = eased.strength > 0.002;
      const falloff = 2 * POINTER_RADIUS * POINTER_RADIUS;

      for (let i = 1; i <= LINE_COUNT; i += 1) {
        const baseY = gap * i;
        // Fades toward the band's edges so the field dissolves into the rules
        // above and below rather than stopping against them.
        ctx.globalAlpha = 0.35 + 0.65 * Math.sin((i / (LINE_COUNT + 1)) * Math.PI);
        ctx.beginPath();

        for (let x = 0; x <= width + STEP; x += STEP) {
          let amplitude = baseAmplitude;

          if (bulge) {
            const dx = x - eased.x;
            const dy = baseY - eased.y;
            amplitude +=
              pointerAmplitude *
              eased.strength *
              Math.exp(-(dx * dx + dy * dy) / falloff);
          }

          const y =
            baseY + Math.sin(x / WAVELENGTH + phase + i * LINE_PHASE) * amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
      }

      ctx.globalAlpha = 1;
    }

    function loop(time: number) {
      draw(time);
      frame = requestAnimationFrame(loop);
    }

    function start() {
      if (frame || reduced) return;
      frame = requestAnimationFrame(loop);
    }

    function stop() {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = 0;
    }

    function onPointerMove(event: PointerEvent) {
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      // Reach past the band itself, so the wave answers a cursor travelling
      // toward it rather than only one already inside it.
      const near =
        pointer.y > -POINTER_RADIUS && pointer.y < height + POINTER_RADIUS;
      pointer.strength = near ? 1 : 0;
    }

    function onScroll() {
      rect = canvas.getBoundingClientRect();
    }

    function onVisibility() {
      if (document.hidden) stop();
      else if (visible) start();
    }

    resize();

    if (reduced) {
      draw(0);
    } else {
      // Off-screen the band costs nothing: the loop only runs while it is
      // actually in view.
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !document.hidden) start();
        else stop();
      });
      observer.observe(canvas);

      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(canvas);

      if (interactive) {
        window.addEventListener("pointermove", onPointerMove, { passive: true });
      }
      window.addEventListener("scroll", onScroll, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);

      return () => {
        stop();
        observer.disconnect();
        resizeObserver.disconnect();
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("scroll", onScroll);
        document.removeEventListener("visibilitychange", onVisibility);
      };
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw(0);
    });
    resizeObserver.observe(canvas);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      // The band is decorative; the cursor should pass straight through it to
      // the page's own custom cursor.
      style={{ pointerEvents: "none" }}
    />
  );
}
