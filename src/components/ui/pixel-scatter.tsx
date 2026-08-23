import { cn } from "@/lib/utils";

const CELL = 18;
const SQUARE = 6;

/** Deterministic by design: Math.random() would generate one pattern on the
 * server and a different one on the client, and React would blow the whole
 * subtree away rehydrating it. */
function seeded(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

/** Densest in the top-left corner and dissolving on the diagonal — `density`
 * is both the odds a cell survives and how strongly the ones that do are
 * drawn, so the field breaks apart and fades on the same curve. */
function buildField(columns: number, rows: number, seed: number) {
  const random = seeded(seed);
  const cells: { x: number; y: number; opacity: number }[] = [];

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const distance = Math.min(
        1,
        (Math.hypot(column / (columns - 1), row / (rows - 1)) / Math.SQRT2) *
          1.35
      );
      const density = (1 - distance) ** 1.5;
      if (random() > density) continue;
      cells.push({
        x: column * CELL,
        y: row * CELL,
        opacity: 0.05 + density * 0.13,
      });
    }
  }

  return cells;
}

/** Decorative pixel field that scatters away from its top-left corner. Flip it
 * with a transform to anchor the dense corner somewhere else. */
export function PixelScatter({
  columns = 20,
  rows = 12,
  seed = 20260823,
  className,
  ...props
}: React.ComponentProps<"svg"> & {
  columns?: number;
  rows?: number;
  seed?: number;
}) {
  const width = columns * CELL - (CELL - SQUARE);
  const height = rows * CELL - (CELL - SQUARE);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none select-none", className)}
      {...props}
    >
      {buildField(columns, rows, seed).map(({ x, y, opacity }) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width={SQUARE}
          height={SQUARE}
          opacity={opacity}
        />
      ))}
    </svg>
  );
}
