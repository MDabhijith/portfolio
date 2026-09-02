import Link from "next/link";
import Image from "next/image";
import { Tag } from "@/components/ui/tag";

export interface CaseStudyCardProps {
  href: string;
  image: { src: string; alt: string };
  /** Art-directed 16:11 crop swapped in below the sm breakpoint. */
  mobileImage?: { src: string };
  /** Optional abstract art layered behind `image` (see Card 1 in Figma). */
  coverImage?: { src: string; alt: string };
  category: string;
  client: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
  priority?: boolean;
}

export function CaseStudyCard({
  href,
  image,
  mobileImage,
  coverImage,
  category,
  client,
  year,
  title,
  description,
  tags,
  priority,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      data-cursor-label="View case study"
      className="group/card block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4"
    >
      {/* The mobile art is framed at 4:3 — the 12/5 desktop ratio collapses to
       * a letterbox sliver at phone widths. */}
      <div
        className={
          mobileImage
            ? "relative aspect-4/3 w-full overflow-hidden rounded-lg sm:aspect-[12/5]"
            : "relative aspect-[12/5] w-full overflow-hidden rounded-lg"
        }
      >
        {coverImage ? (
          <Image
            src={coverImage.src}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1024px) 1120px, 100vw"
            className="object-cover"
          />
        ) : null}
        {/* <picture> rather than two <Image>s: a display:none <Image> is still
         * fetched, so the phone would pay for the wide desktop crop too. */}
        {mobileImage ? (
          <picture>
            <source media="(max-width: 639px)" srcSet={mobileImage.src} />
            <img
              src={image.src}
              alt={image.alt}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={priority ? "high" : "auto"}
              className="absolute inset-0 size-full object-cover transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover/card:scale-[1.02] motion-reduce:group-hover/card:scale-100"
            />
          </picture>
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 1120px, 100vw"
            className={
              coverImage
                ? "object-contain scale-[1.08] object-center transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover/card:scale-[1.1] motion-reduce:group-hover/card:scale-[1.08]"
                : "object-cover transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover/card:scale-[1.02] motion-reduce:group-hover/card:scale-100"
            }
          />
        )}
      </div>

      {/* No card padding: the copy hangs directly off the image's left edge,
       * so the image and the text share one alignment rather than the text
       * being inset inside a box. */}
      <div className="flex flex-col items-start gap-4 pt-5 sm:pt-6">
        {/* Chips lead the row, the client and year close it — the two ends of
         * one rule rather than a stacked meta block. Below sm the chips wrap
         * onto two lines and push the meta down, so the phone gets the meta
         * line on its own instead. */}
        <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-3">
          <div className="hidden flex-wrap gap-2 sm:flex">
            {[category, ...tags].map((tag) => (
              <Tag key={tag} variant="mono" size="sm">
                {tag}
              </Tag>
            ))}
          </div>
          <span className="font-mono text-[11px] tracking-[0.16em] whitespace-nowrap text-ink-tertiary uppercase">
            {client} · {year}
          </span>
        </div>

        <h3 className="font-heading text-[22px] leading-[1.2] font-semibold tracking-[-0.02em] text-ink sm:text-[28px] lg:text-[32px]">
          {title}
        </h3>

        <p className="max-w-[68ch] font-body text-[15px] leading-[1.55] text-ink-tertiary sm:text-[17px] lg:text-[18px]">
          {description}
        </p>
      </div>
    </Link>
  );
}
