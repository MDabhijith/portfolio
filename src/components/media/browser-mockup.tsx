import { cn } from "@/lib/utils";

/** Window-chrome frame used to present product screenshots throughout the case studies. */
export function BrowserMockup({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  /** Optional address-bar label, e.g. "app.priorityroofing.com/jobs/482" */
  label?: string;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-line bg-white shadow-[var(--shadow-elevation)]",
        className
      )}
    >
      <div className="flex items-center gap-4 border-b border-line bg-[#ececec] px-4 py-2.5">
        <div className="flex items-center gap-[6px]" aria-hidden="true">
          <span className="size-[10px] rounded-full bg-[#ff5f57]" />
          <span className="size-[10px] rounded-full bg-[#febc2e]" />
          <span className="size-[10px] rounded-full bg-[#28c840]" />
        </div>
        {label ? (
          <div className="flex flex-1 justify-center">
            <span className="rounded-md bg-white/70 px-3 py-1 font-body text-[11px] text-ink-tertiary">
              {label}
            </span>
          </div>
        ) : null}
      </div>
      <div className="relative">{children}</div>
    </figure>
  );
}
