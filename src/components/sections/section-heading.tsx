import { cn } from "@/lib/utils";

/** Numbered eyebrow + heading used to open every case-study section ("01 Background"). */
export function SectionHeading({
  number,
  label,
  title,
  className,
}: {
  number: string;
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-center gap-1">
        <span className="font-body text-lg font-semibold text-positive">
          {number}
        </span>
        <span className="font-body text-base text-cs-label">{label}</span>
      </div>
      <h2 className="font-heading text-[28px] font-semibold leading-tight text-cs-ink sm:text-h4">
        {title}
      </h2>
    </div>
  );
}
