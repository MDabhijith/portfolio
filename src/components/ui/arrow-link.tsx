import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ArrowLink({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group/arrow inline-flex items-center gap-1.5 font-body text-[13.5px] font-semibold text-ink outline-none",
        "focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm",
        className
      )}
    >
      <span className="transition-[opacity] duration-[var(--duration-fast)] group-hover/arrow:opacity-70">
        {children}
      </span>
      <ArrowRight
        aria-hidden="true"
        className="size-[15px] shrink-0 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] group-hover/arrow:translate-x-1 motion-reduce:group-hover/arrow:translate-x-0"
      />
    </Link>
  );
}
