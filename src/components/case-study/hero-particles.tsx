"use client";

import { useEffect, useRef } from "react";

/** One particle per this many CSS px² of banner, clamped at both ends. A phone
 * banner lands on the floor, a wide desktop one on the ceiling. */
const AREA_PER_PARTICLE = 24000;
const MIN_PARTICLES = 12;
const MAX_PARTICLES = 40;

/** Drifting dots animate fine at 30fps and it halves the work, which is the
 * whole point on a phone. */
const FRAME_MS = 1000 / 30;

const SPRITE_PX = 32;
const DRIFT = 0.06;

/** Slow, low-cost particle drift behind the case-study banner.
 *
 * Deliberately cheap, in four ways:
 *   - No particle-to-particle links. Those are the O(n²) term in every
 *     "constellation" field; without them this is linear in particle count.
 *   - State lives in one Float32Array, not an array of objects, so the loop
 *     allocates nothing and stays cache-friendly.
 *   - The dot is rendered once into an offscreen sprite and blitted with
 *     drawImage, instead of an arc() + radial gradient per particle per frame.
 *   - It runs only while on screen and only while the tab is visible, capped
 *     at 30fps.
 *
 * Static single frame under prefers-reduced-motion. Decorative and
 * pointer-transparent. */
export function HeroParticles({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvasRef.current;
    if (!element) return;
    const context = element.getContext("2d");
    if (!context) return;

    const canvas: HTMLCanvasElement = element;
    const ctx: CanvasRenderingContext2D = context;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let count = 0;
    let frame = 0;
    let last = 0;
    let visible = false;

    // x, y, vx, vy, size, alpha — six lanes, one flat buffer.
    let data = new Float32Array(MAX_PARTICLES * 6);

    const sprite = document.createElement("canvas");
    sprite.width = SPRITE_PX;
    sprite.height = SPRITE_PX;

    function paintSprite() {
      const sctx = sprite.getContext("2d");
      if (!sctx) return;
      const mid = SPRITE_PX / 2;
      sctx.clearRect(0, 0, SPRITE_PX, SPRITE_PX);
      const gradient = sctx.createRadialGradient(mid, mid, 0, mid, mid, mid);
      // currentColor, so the field inherits its tone from the class on the
      // canvas rather than hardcoding one here.
      const tone = getComputedStyle(canvas).color;
      gradient.addColorStop(0, tone);
      gradient.addColorStop(0.35, tone);
      gradient.addColorStop(1, "transparent");
      sctx.fillStyle = gradient;
      sctx.beginPath();
      sctx.arc(mid, mid, mid, 0, Math.PI * 2);
      sctx.fill();
    }

    function seed() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width === 0 || height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      count = Math.max(
        MIN_PARTICLES,
        Math.min(
          MAX_PARTICLES,
          Math.round((width * height) / AREA_PER_PARTICLE)
        )
      );

      for (let i = 0; i < count; i += 1) {
        const o = i * 6;
        data[o] = Math.random() * width;
        data[o + 1] = Math.random() * height;
        data[o + 2] = (Math.random() - 0.5) * DRIFT * 2;
        data[o + 3] = (Math.random() - 0.5) * DRIFT * 2;
        data[o + 4] = Math.random() * 1.7 + 0.9;
        data[o + 5] = Math.random() * 0.26 + 0.1;
      }

      paintSprite();
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < count; i += 1) {
        const o = i * 6;
        const size = data[o + 4] * 4;
        ctx.globalAlpha = data[o + 5];
        ctx.drawImage(sprite, data[o] - size / 2, data[o + 1] - size / 2, size, size);
      }
      ctx.globalAlpha = 1;
    }

    function step(time: number) {
      frame = requestAnimationFrame(step);
      if (time - last < FRAME_MS) return;
      last = time;

      for (let i = 0; i < count; i += 1) {
        const o = i * 6;
        let x = data[o] + data[o + 2];
        let y = data[o + 1] + data[o + 3];
        // Wrap rather than bounce, so the field never visibly pools at an edge.
        if (x < -6) x = width + 6;
        else if (x > width + 6) x = -6;
        if (y < -6) y = height + 6;
        else if (y > height + 6) y = -6;
        data[o] = x;
        data[o + 1] = y;
      }

      draw();
    }

    function start() {
      if (frame || reduced) return;
      last = 0;
      frame = requestAnimationFrame(step);
    }

    function stop() {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = 0;
    }

    function onVisibility() {
      if (document.hidden) stop();
      else if (visible) start();
    }

    seed();
    draw();

    if (reduced) {
      const staticObserver = new ResizeObserver(() => {
        seed();
        draw();
      });
      staticObserver.observe(canvas);
      return () => staticObserver.disconnect();
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !document.hidden) start();
      else stop();
    });
    observer.observe(canvas);

    const resizeObserver = new ResizeObserver(() => {
      seed();
      draw();
    });
    resizeObserver.observe(canvas);

    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      data = new Float32Array(0);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ pointerEvents: "none" }}
    />
  );
}
