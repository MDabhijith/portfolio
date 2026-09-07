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
      <div className="flex items-center gap-2 font-mono text-xs tracking-[0.16em] uppercase">
        <span className="text-brand">{label}</span>
      </div>
      <h2 className="font-heading text-xl leading-tight text-cs-ink sm:text-2xl">
        {title}
      </h2>
    </div>
  );
}
