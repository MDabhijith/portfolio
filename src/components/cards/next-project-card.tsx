import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface NextProjectCardProps {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
  themeColor?: string;
}

const DEFAULT_THEME = "#0a0b12";

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const n = parseInt(clean, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export function NextProjectCard({
  href,
  eyebrow,
  title,
  description,
  image,
  themeColor = DEFAULT_THEME,
}: NextProjectCardProps) {
  const { r, g, b } = hexToRgb(themeColor);
  const rgba = (a: number) => `rgba(${r}, ${g}, ${b}, ${a})`;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-5">
        <span className="whitespace-nowrap font-body text-sm text-positive">
          NEXT PROJECT
        </span>
        <div className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>

      {/* Mobile: previous simple stacked layout (white text panel + image). */}
      <Link
        href={href}
        data-cursor-label="View case study"
        className="group/next flex flex-col overflow-hidden rounded-2xl border border-primary-200 outline-none transition-colors duration-[var(--duration-base)] hover:border-primary-300 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:hidden"
      >
        <div className="flex flex-1 flex-col gap-2 bg-white p-8">
          <p className="font-body text-sm text-ink-tertiary">{eyebrow}</p>
          <h3 className="font-heading text-2xl font-semibold leading-tight text-primary-500">
            {title}
          </h3>
          <p className="mt-2 font-body text-base leading-relaxed text-primary-400">
            {description}
          </p>
        </div>
        <div className="relative min-h-[220px] flex-1 overflow-hidden bg-surface">
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover/next:scale-[1.02] motion-reduce:group-hover/next:scale-100"
            />
          ) : null}
        </div>
      </Link>

      {/* Desktop: full-bleed themed hero. */}
      <Link
        href={href}
        data-cursor-label="View case study"
        style={{ backgroundColor: themeColor }}
        className="group/next relative hidden min-h-[440px] items-center overflow-hidden rounded-2xl border border-primary-200 outline-none transition-colors duration-[var(--duration-base)] hover:border-primary-300 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:flex"
      >
        {image ? (
          <div className="absolute inset-y-0 right-0 w-[62%]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="700px"
              className="object-cover object-center transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover/next:scale-[1.03] motion-reduce:group-hover/next:scale-100"
            />
          </div>
        ) : null}

        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background: `linear-gradient(to right, ${rgba(1)} 0%, ${rgba(1)} 36%, ${rgba(0.6)} 55%, ${rgba(0)} 78%)`,
          }}
          aria-hidden="true"
        />

        <div className="relative z-[2] flex max-w-[480px] flex-col gap-3 p-12">
          <p className="font-body text-sm font-medium text-white/70">
            {eyebrow}
          </p>
          <h3 className="line-clamp-3 font-heading text-2xl font-semibold leading-tight text-white">
            {title}
          </h3>
          <p className="line-clamp-2 max-w-[62ch] font-body text-base leading-relaxed text-white/80">
            {description}
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-white">
            View case study
            <ArrowRight
              aria-hidden="true"
              className="size-4 shrink-0 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] group-hover/next:translate-x-1 motion-reduce:group-hover/next:translate-x-0"
            />
          </span>
        </div>
      </Link>
    </div>
  );
}
