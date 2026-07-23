"use client";

import { useEffect, useRef } from "react";

/** Purple particle field behind the hero. Particles drift, link to neighbors, and
 * ease away from the cursor, while a soft purple gradient spotlight follows the
 * pointer. Decorative and pointer-transparent; renders a static field under
 * prefers-reduced-motion. Kept behind the copy so it never hurts legibility. */
export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const RGB = "124, 104, 214";
    const LINK_DIST = 132;
    const REPEL_RADIUS = 150;
    const GLOW_RADIUS = 260;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    function build() {
      const rect = parent!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(100, Math.max(32, Math.round((width * height) / 14000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.8 + 1,
        a: Math.random() * 0.28 + 0.2,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // Gradient spotlight that trails the cursor.
      if (glow > 0.01) {
        const g = ctx!.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          GLOW_RADIUS,
        );
        g.addColorStop(0, `rgba(${RGB}, ${0.11 * glow})`);
        g.addColorStop(0.55, `rgba(${RGB}, ${0.04 * glow})`);
        g.addColorStop(1, `rgba(${RGB}, 0)`);
        ctx!.fillStyle = g;
        ctx!.fillRect(
          pointer.x - GLOW_RADIUS,
          pointer.y - GLOW_RADIUS,
          GLOW_RADIUS * 2,
          GLOW_RADIUS * 2,
        );
      }

      // Links between nearby particles, brighter near the cursor.
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const d = Math.sqrt(d2);
            let alpha = (1 - d / LINK_DIST) * 0.16;
            if (glow > 0.01) {
              const mx = (p.x + q.x) / 2 - pointer.x;
              const my = (p.y + q.y) / 2 - pointer.y;
              const md = Math.sqrt(mx * mx + my * my);
              if (md < GLOW_RADIUS) alpha += (1 - md / GLOW_RADIUS) * 0.24 * glow;
            }
            ctx!.strokeStyle = `rgba(${RGB}, ${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.stroke();
          }
        }

        // Dot, enlarged and brightened within the spotlight.
        let a = p.a;
        let r = p.r;
        if (glow > 0.01) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < GLOW_RADIUS) {
            const t = (1 - d / GLOW_RADIUS) * glow;
            a = Math.min(0.7, a + t * 0.32);
            r += t * 1;
          }
        }
        ctx!.fillStyle = `rgba(${RGB}, ${a})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false };
    let glow = 0;
    function onMove(e: MouseEvent) {
      const rect = parent!.getBoundingClientRect();
      pointer.tx = e.clientX - rect.left;
      pointer.ty = e.clientY - rect.top;
      if (!pointer.active) {
        pointer.x = pointer.tx;
        pointer.y = pointer.ty;
      }
      pointer.active = true;
    }
    function onLeave() {
      pointer.active = false;
    }

    build();
    const ro = new ResizeObserver(build);
    ro.observe(parent);

    if (reduce) {
      draw();
      return () => ro.disconnect();
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    let raf = 0;
    function frame() {
      raf = requestAnimationFrame(frame);
      pointer.x += (pointer.tx - pointer.x) * 0.14;
      pointer.y += (pointer.ty - pointer.y) * 0.14;
      glow += ((pointer.active ? 1 : 0) - glow) * 0.06;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -5) p.x = width + 5;
        else if (p.x > width + 5) p.x = -5;
        if (p.y < -5) p.y = height + 5;
        else if (p.y > height + 5) p.y = -5;

        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < REPEL_RADIUS * REPEL_RADIUS) {
            const d = Math.sqrt(d2) || 1;
            const f = (1 - d / REPEL_RADIUS) * 0.7;
            p.x += (dx / d) * f;
            p.y += (dy / d) * f;
          }
        }
      }

      draw();
    }
    frame();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    />
  );
}
