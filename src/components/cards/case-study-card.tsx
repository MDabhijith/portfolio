"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tag } from "@/components/ui/tag";
import { ArrowRight } from "lucide-react";

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
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [revealed, setRevealed] = useState(false);

  // Phones have no hover, so the cover art would never animate. Play the same
  // transform once as each card scrolls in, then leave it in the hover state.
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;
    const isPhone = window.matchMedia("(max-width: 639px)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!isPhone || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealed(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={cardRef}
      data-revealed={revealed || undefined}
      href={href}
      data-cursor-label="View case study"
      className="group/card block overflow-hidden rounded-3xl border border-line bg-white outline-none transition-shadow duration-[var(--duration-base)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-elevation)] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      {/* Taller crop on phones: the 1118/408 desktop ratio collapses to a
       * letterbox sliver at mobile widths, leaving the screenshot unreadable
       * against a wall of text below it. */}
      <div className="relative aspect-[16/11] w-full overflow-hidden sm:aspect-[1118/408]">
        {coverImage ? (
          <Image
            src={coverImage.src}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1024px) 1120px, 100vw"
            className="card-cover-art object-cover"
          />
        ) : null}
        {/* <picture> rather than two <Image>s: a display:none <Image> is still
         * fetched, so the phone would pay for the wide desktop crop too. */}
        {mobileImage ? (
          <picture>
            <source
              media="(max-width: 639px)"
              srcSet={mobileImage.src}
              width={620}
              height={426}
            />
            <img
              src={image.src}
              alt={image.alt}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={priority ? "high" : "auto"}
              className="card-shot-flat absolute inset-0 size-full object-cover transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover/card:scale-[1.02] motion-reduce:group-hover/card:scale-100"
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
                ? "card-shot-lifted object-contain scale-[1.08] object-center drop-shadow-2xl transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover/card:scale-[1.1] motion-reduce:group-hover/card:scale-[1.08]"
                : "card-shot-flat object-cover transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover/card:scale-[1.02] motion-reduce:group-hover/card:scale-100"
            }
          />
        )}
      </div>

      <div className="flex flex-col items-start gap-4 p-5 sm:gap-5 sm:p-11">
        <div className="flex flex-wrap items-center gap-3">
          <Tag variant="tint" size="sm">
            {category}
          </Tag>
          <span className="font-body text-[12.5px] text-ink-tertiary">
            {client} · {year}
          </span>
        </div>

        <h3 className="font-heading text-[19px] font-semibold leading-[1.3] text-ink sm:text-[28px] sm:leading-tight">
          {title}
        </h3>

        <p className="font-body text-[14.5px] leading-[1.65] text-ink-tertiary sm:text-[15px] sm:leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} variant="outline" size="sm">
              {tag}
            </Tag>
          ))}
        </div>

        <span className="inline-flex items-center gap-1.5 font-body text-[13.5px] font-semibold text-ink">
          Read case study
          <ArrowRight
            aria-hidden="true"
            className="size-[15px] transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] group-hover/card:translate-x-1 motion-reduce:group-hover/card:translate-x-0"
          />
        </span>
      </div>
    </Link>
  );
}
