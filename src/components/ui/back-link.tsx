import Link from "next/link";
import { CornerUpLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackLink({
  href = "/#work",
  tone = "dark",
}: {
  href?: string;
  /** "light" for use on a dark ground, where the brand focus ring also has to
   * give way to white to stay visible. */
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/back inline-flex items-center gap-2 rounded-sm font-body text-sm font-medium outline-none transition-opacity duration-[var(--duration-fast)] hover:opacity-70 focus-visible:ring-2 focus-visible:ring-offset-2",
        tone === "light"
          ? "text-hero-ink focus-visible:ring-white focus-visible:ring-offset-transparent"
          : "text-primary-500 focus-visible:ring-brand"
      )}
    >
      <CornerUpLeft
        aria-hidden="true"
        className="size-4 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] group-hover/back:-translate-x-0.5 motion-reduce:group-hover/back:translate-x-0"
      />
      Back
    </Link>
  );
}
