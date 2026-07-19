import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "dark",
  className,
  priority = false,
}: {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  const mark =
    variant === "dark"
      ? "/images/logo-mark-dark.png"
      : "/images/logo-mark-light.png";
  return (
    <Link
      href="/"
      aria-label="Abhijith M D — home"
      className={cn(
        "inline-flex items-center gap-2 rounded-sm outline-none transition-opacity duration-[var(--duration-fast)] hover:opacity-80 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        className
      )}
    >
      <Image
        src={mark}
        alt=""
        aria-hidden="true"
        width={38}
        height={18}
        className="h-[18px] w-auto"
        priority={priority}
      />
      <span
        className={cn(
          "font-body text-[13.5px] font-bold tracking-[0.81px] uppercase",
          variant === "dark" ? "text-ink" : "text-footer-foreground"
        )}
      >
        Abhijith M D
      </span>
    </Link>
  );
}
