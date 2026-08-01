"use client";

import { useEffect } from "react";

const RADIUS = 130;
const VISCOSITY = 0.12;

/** Displacement depth as a fraction of the text's own size, so the pointer melts
 * the huge headline hard and only ripples the much smaller intro copy. */
const WARP_RATIO = 0.22;
const WARP_MIN = 4;
const WARP_MAX = 34;

const SVG_NS = "http://www.w3.org/2000/svg";
const ROOT_ID = "liquid-filters";

/** Opaque at the centre, transparent at the rim — this is what confines the
 * turbulence to the pointer instead of warping the whole block. */
const BLOB = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="${SVG_NS}" width="256" height="256"><defs><radialGradient id="g"><stop offset="0" stop-color="#fff" stop-opacity="1"/><stop offset=".55" stop-color="#fff" stop-opacity=".65"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><rect width="256" height="256" fill="url(#g)"/></svg>`
)}`;

function svg(tag: string, attrs: Record<string, string>) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

/** One displacement filter over a whole text block, with the noise masked down
 * to a blob that rides the pointer.
 *
 * Filtering each glyph separately can't do this: a per-character filter region
 * is narrower than one wavelength of usable noise, so every letter samples a
 * near-constant offset and slides whole instead of bending. Across the entire
 * block the field is continuous, so the same fluid runs through neighbouring
 * letters and the warp reads as one surface. */
function buildFilter(id: string) {
  const filter = svg("filter", {
    id,
    // Displaced pixels travel outside the text box, which the default filter
    // region would crop into a hard edge.
    x: "-15%",
    y: "-15%",
    width: "130%",
    height: "130%",
    "color-interpolation-filters": "sRGB",
  });

  filter.append(
    svg("feTurbulence", {
      type: "fractalNoise",
      // One octave at roughly a wave per glyph: enough variation inside a letter
      // to bend it, without the fine detail that frays the edges into notches.
      baseFrequency: "0.017",
      numOctaves: "1",
      seed: "7",
      result: "noise",
    }),
    // feDisplacementMap reads the map's own alpha, and turbulence generates a
    // noisy one — flattening it to opaque keeps the blob the only mask.
    svg("feColorMatrix", {
      in: "noise",
      type: "matrix",
      values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0 1",
      result: "field",
    }),
    svg("feImage", { href: BLOB, result: "blob", preserveAspectRatio: "none" }),
    svg("feComposite", {
      in: "field",
      in2: "blob",
      operator: "in",
      result: "local",
    }),
    // 128 on R and G is feDisplacementMap's zero point, so everything the blob
    // doesn't cover stays exactly where it was drawn.
    svg("feFlood", { "flood-color": "rgb(128,128,128)", result: "rest" }),
    svg("feComposite", {
      in: "local",
      in2: "rest",
      operator: "over",
      result: "map",
    }),
    svg("feDisplacementMap", {
      in: "SourceGraphic",
      in2: "map",
      scale: "0",
      xChannelSelector: "R",
      yChannelSelector: "G",
    })
  );

  return filter;
}

type Block = {
  el: HTMLElement;
  image: SVGElement;
  displace: SVGElement;
  max: number;
  left: number;
  top: number;
  width: number;
  height: number;
  warp: number;
  applied: number;
};

/** Liquifies the text inside every `[data-liquid]` element around the pointer.
 * Mount once on any page that uses it. */
export function LiquidText() {
  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-liquid]")
    );
    if (!els.length) return;

    const root = svg("svg", { id: ROOT_ID, "aria-hidden": "true" });
    root.style.cssText =
      "position:absolute;width:0;height:0;pointer-events:none";
    const defs = svg("defs", {});
    root.appendChild(defs);
    document.body.appendChild(root);

    const blocks: Block[] = els.map((el, i) => {
      const id = `liquid-${i}`;
      const filter = buildFilter(id);
      defs.appendChild(filter);
      const size = parseFloat(getComputedStyle(el).fontSize) || 16;
      return {
        el,
        image: filter.querySelector("feImage")!,
        displace: filter.querySelector("feDisplacementMap")!,
        max: Math.min(WARP_MAX, Math.max(WARP_MIN, size * WARP_RATIO)),
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        warp: 0,
        applied: -1,
      };
    });

    function measure() {
      for (const b of blocks) {
        const r = b.el.getBoundingClientRect();
        b.left = r.left + window.scrollX;
        b.top = r.top + window.scrollY;
        b.width = r.width;
        b.height = r.height;
        const size = parseFloat(getComputedStyle(b.el).fontSize) || 16;
        b.max = Math.min(WARP_MAX, Math.max(WARP_MIN, size * WARP_RATIO));
      }
    }

    let raf = 0;
    let px = -9999;
    let py = -9999;

    function frame() {
      let moving = false;

      for (const b of blocks) {
        const x = px - b.left;
        const y = py - b.top;
        const near =
          x > -RADIUS &&
          x < b.width + RADIUS &&
          y > -RADIUS &&
          y < b.height + RADIUS;

        // Falloff by the pointer's distance to the block itself, so approaching
        // the edge eases the melt in rather than switching it on at the border.
        let target = 0;
        if (near) {
          const dx = Math.max(0, Math.max(-x, x - b.width));
          const dy = Math.max(0, Math.max(-y, y - b.height));
          const d = Math.hypot(dx, dy);
          target = d < RADIUS ? (1 - d / RADIUS) ** 2 * b.max : 0;
        }

        b.warp += (target - b.warp) * VISCOSITY;
        if (Math.abs(target - b.warp) > 0.05) moving = true;

        const scale = b.warp < 0.15 ? 0 : b.warp;
        if (scale !== b.applied) {
          b.applied = scale;
          if (scale) {
            b.el.style.filter = `url(#liquid-${blocks.indexOf(b)})`;
            b.displace.setAttribute("scale", scale.toFixed(2));
          } else {
            b.el.style.filter = "";
          }
        }
        if (scale) {
          // The blob is positioned in the filter's own user space, which starts
          // at the element's box — hence element-local coordinates here.
          b.image.setAttribute("x", (x - RADIUS).toFixed(1));
          b.image.setAttribute("y", (y - RADIUS).toFixed(1));
          b.image.setAttribute("width", String(RADIUS * 2));
          b.image.setAttribute("height", String(RADIUS * 2));
        }
      }

      raf = moving ? requestAnimationFrame(frame) : 0;
    }

    function onMove(e: MouseEvent) {
      px = e.clientX + window.scrollX;
      py = e.clientY + window.scrollY;
      if (!raf) raf = requestAnimationFrame(frame);
    }

    function onLeave() {
      px = -9999;
      py = -9999;
      if (!raf) raf = requestAnimationFrame(frame);
    }

    let resizeTimer = 0;
    function onResize() {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(measure, 150);
    }

    measure();
    // Metrics shift when the webfont swaps in, which would leave the cached box
    // describing where the fallback face used to be.
    document.fonts?.ready.then(measure);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", measure, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", measure);
      for (const b of blocks) b.el.style.filter = "";
      root.remove();
    };
  }, []);

  return null;
}
