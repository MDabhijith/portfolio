import { cn } from "@/lib/utils";

/** Small design-tool marks for scattering around the headline — a pointer, a
 * bezier path with its anchors, and a selected object. Decorative only, so
 * each is hidden from assistive tech and inert to the pointer. */

function Mark({
  className,
  size,
  children,
  ...props
}: React.ComponentProps<"svg"> & { size: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none select-none", className)}
      {...props}
    >
      {children}
    </svg>
  );
}

/** The tool every design file opens with. */
export function CursorMark({
  size = 26,
  ...props
}: React.ComponentProps<"svg"> & { size?: number }) {
  return (
    <Mark size={size} {...props}>
      <path
        d="M5 2.5 5 18.2 9.1 14.3 11.7 20.4 14.3 19.2 11.7 13.3 17.6 13.1Z"
        fill="currentColor"
      />
    </Mark>
  );
}

/** A bezier curve with an anchor at each end — pen-tool work mid-edit. */
export function PathMark({
  size = 26,
  ...props
}: React.ComponentProps<"svg"> & { size?: number }) {
  return (
    <Mark size={size} {...props}>
      <path
        d="M3.5 19.5C3.5 11 9.5 4.5 20.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="1.4" y="17.4" width="4.4" height="4.4" fill="currentColor" />
      <rect x="18.3" y="2.4" width="4.4" height="4.4" fill="currentColor" />
    </Mark>
  );
}

/** An object with its selection handles showing. */
export function SelectionMark({
  size = 28,
  ...props
}: React.ComponentProps<"svg"> & { size?: number }) {
  return (
    <Mark size={size} {...props}>
      <rect
        x="4.5"
        y="6.5"
        width="15"
        height="11"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {[
        [4.5, 6.5],
        [19.5, 6.5],
        [4.5, 17.5],
        [19.5, 17.5],
      ].map(([x, y]) => (
        <rect
          key={`${x}-${y}`}
          x={x - 1.6}
          y={y - 1.6}
          width="3.2"
          height="3.2"
          fill="currentColor"
        />
      ))}
    </Mark>
  );
}
