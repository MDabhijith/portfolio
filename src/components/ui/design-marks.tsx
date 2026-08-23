import { cn } from "@/lib/utils";

/** Small design-tool marks for scattering around the headline — a pointer, a
 * vector anchor, and a selection corner. Decorative only, so each one is
 * hidden from assistive tech and inert to the pointer. */

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
  size = 22,
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

/** A vector anchor point, the kind you drag a curve out of. */
export function NodeMark({
  size = 18,
  ...props
}: React.ComponentProps<"svg"> & { size?: number }) {
  return (
    <Mark size={size} {...props}>
      <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.4" />
      <rect
        x="8"
        y="8"
        width="8"
        height="8"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </Mark>
  );
}

/** The corner handle of a selection box. */
export function FrameMark({
  size = 20,
  ...props
}: React.ComponentProps<"svg"> & { size?: number }) {
  return (
    <Mark size={size} {...props}>
      <path
        d="M22 3H3v19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </Mark>
  );
}
