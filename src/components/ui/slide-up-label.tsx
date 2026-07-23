/** Hover "text roll": the label slides up and out while an identical copy slides
 * up into its place. The parent element must carry `group/roll`. Static under
 * prefers-reduced-motion. */
export function SlideUpLabel({ label }: { label: string }) {
  return (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover/roll:-translate-y-full motion-reduce:transition-none motion-reduce:group-hover/roll:translate-y-0">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 block translate-y-full transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover/roll:translate-y-0 motion-reduce:hidden"
      >
        {label}
      </span>
    </span>
  );
}
