import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        // Same max-width and padding steps as the hero frame, plus the hero's
        // own copy inset at lg (its 40px frame padding + pl-14), so section
        // headings start on the same line as the hero headline rather than
        // hard against the frame rule.
        "mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-24",
        className
      )}
    >
      {children}
    </div>
  );
}
