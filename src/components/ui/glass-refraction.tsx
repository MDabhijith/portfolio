"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* Chromium is currently the only engine that both parses *and* renders an SVG
   filter reference inside backdrop-filter. Safari and Firefox parse `url(#id)`
   as a valid filter-value-list and then draw nothing — which drops the blur
   along with it, leaving bare text over the hero photo. No CSS feature query
   separates "parses" from "renders", so the brand list stands in for one; every
   other engine keeps the layered-CSS material, which is a complete look on its
   own rather than a degraded one. */
function engineRendersRefraction() {
  const brands = (
    navigator as Navigator & { userAgentData?: { brands?: { brand: string }[] } }
  ).userAgentData?.brands;
  return (
    Boolean(brands?.some((brand) => brand.brand === "Chromium")) &&
    CSS.supports("backdrop-filter", "url(#refraction-probe)")
  );
}

/* How far in from the edge the glass stops bending, in px. Held constant in
   absolute terms rather than as a fraction, so a 900px-wide pill gets the same
   physical bevel as the 360px mobile panel — hence a band per axis. */
const EDGE_BAND = 14;
/* Twice the band: at the outermost pixel the sample is pulled in by a full
   band's width, which is as far as it can bend before the rim folds over
   itself and reads as a smear rather than as glass. */
const DISPLACEMENT = EDGE_BAND * 2;
const DISPERSION = 0.18;

/* A displacement map is read as: red = how far to shift the sample on X, green
   on Y, with 128 meaning "don't". So each axis gets a ramp that sits flat at 128
   across the middle and swings to 0/255 in the edge band, leaving the centre of
   the panel undistorted and only the rim lensing. The two are summed by the
   filter rather than in one image, because compositing two 128-centred gradients
   into separate channels has no blend mode that leaves both intact. */
function displacementMap(axis: "x" | "y", band: number) {
  const vector =
    axis === "x" ? "x1='0' y1='0' x2='1' y2='0'" : "x1='0' y1='0' x2='0' y2='1'";
  const low = axis === "x" ? "rgb(0,128,128)" : "rgb(128,0,128)";
  const high = axis === "x" ? "rgb(255,128,128)" : "rgb(128,255,128)";
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 100 100' preserveAspectRatio='none'>` +
    `<linearGradient id='g' ${vector}>` +
    `<stop offset='0' stop-color='${low}'/>` +
    `<stop offset='${band}' stop-color='rgb(128,128,128)'/>` +
    `<stop offset='${1 - band}' stop-color='rgb(128,128,128)'/>` +
    `<stop offset='1' stop-color='${high}'/>` +
    `</linearGradient><rect width='100' height='100' fill='url(#g)'/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const channel = {
  r: "1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0",
  g: "0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0",
  b: "0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0",
};

type Refraction = {
  ref: React.RefObject<HTMLElement | null>;
  props: { "data-refract"?: string; style?: CSSProperties };
  filter: ReactNode;
};

export function useGlassRefraction(id: string): Refraction {
  const ref = useRef<HTMLElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null
  );

  useEffect(() => setEnabled(engineRendersRefraction()), []);

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;
    const observer = new ResizeObserver(() => {
      const { width, height } = element.getBoundingClientRect();
      setSize((current) =>
        current?.width === width && current?.height === height
          ? current
          : { width, height }
      );
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [enabled]);

  if (!enabled || !size || size.width < 1 || size.height < 1) {
    return { ref, props: {}, filter: null };
  }

  return {
    ref,
    props: {
      "data-refract": "",
      style: { "--glass-refract": `url(#${id})` } as CSSProperties,
    },
    filter: (
      <RefractionFilter
        id={id}
        bandX={Math.min(0.45, EDGE_BAND / size.width)}
        bandY={Math.min(0.45, EDGE_BAND / size.height)}
      />
    ),
  };
}

function RefractionFilter({
  id,
  bandX,
  bandY,
  displacement = DISPLACEMENT,
}: {
  id: string;
  bandX: number;
  bandY: number;
  displacement?: number;
}) {
  /* Running the same displacement three times at slightly different strengths
     and keeping one colour channel from each splits white light the way a real
     bevel does — the cyan/magenta fringing along the rim. */
  const passes = [
    { key: "r", scale: displacement * (1 + DISPERSION) },
    { key: "g", scale: displacement },
    { key: "b", scale: displacement * (1 - DISPERSION) },
  ] as const;

  return (
    <svg aria-hidden="true" focusable="false" className="absolute size-0">
      <filter
        id={id}
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        colorInterpolationFilters="sRGB"
      >
        <feImage
          href={displacementMap("x", bandX)}
          preserveAspectRatio="none"
          result="mapX"
        />
        <feImage
          href={displacementMap("y", bandY)}
          preserveAspectRatio="none"
          result="mapY"
        />
        <feComposite
          in="mapX"
          in2="mapY"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="-0.5"
          result="map"
        />

        {passes.map((pass) => (
          <feDisplacementMap
            key={pass.key}
            in="SourceGraphic"
            in2="map"
            scale={pass.scale}
            xChannelSelector="R"
            yChannelSelector="G"
            result={`bent-${pass.key}`}
          />
        ))}
        {passes.map((pass) => (
          <feColorMatrix
            key={pass.key}
            in={`bent-${pass.key}`}
            type="matrix"
            values={channel[pass.key]}
            result={`only-${pass.key}`}
          />
        ))}

        <feComposite
          in="only-r"
          in2="only-g"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="rg"
        />
        <feComposite
          in="rg"
          in2="only-b"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
        />
      </filter>
    </svg>
  );
}
