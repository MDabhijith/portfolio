import Link from "next/link";
import { CornerUpLeft } from "lucide-react";

export function BackLink({ href = "/#work" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="group/back inline-flex items-center gap-2 font-body text-sm font-medium text-primary-500 outline-none transition-opacity duration-[var(--duration-fast)] hover:opacity-70 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
    >
      <CornerUpLeft
        aria-hidden="true"
        className="size-4 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] group-hover/back:-translate-x-0.5 motion-reduce:group-hover/back:translate-x-0"
      />
      Back
    </Link>
  );
}
