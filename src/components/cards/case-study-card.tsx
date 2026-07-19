import Link from "next/link";
import Image from "next/image";
import { Tag } from "@/components/ui/tag";
import { ArrowRight } from "lucide-react";

export interface CaseStudyCardProps {
  href: string;
  image: { src: string; alt: string };
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
      className="group/card block overflow-hidden rounded-3xl border border-line bg-white outline-none transition-shadow duration-[var(--duration-base)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-elevation)] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[1118/408] w-full overflow-hidden">
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
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 1120px, 100vw"
          className={
            coverImage
              ? "object-contain scale-[1.08] object-center drop-shadow-2xl transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover/card:scale-[1.1] motion-reduce:group-hover/card:scale-[1.08]"
              : "object-cover transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover/card:scale-[1.02] motion-reduce:group-hover/card:scale-100"
          }
        />
      </div>

      <div className="flex flex-col items-start gap-5 p-6 sm:p-11">
        <div className="flex flex-wrap items-center gap-3">
          <Tag variant="tint" size="sm">
            {category}
          </Tag>
          <span className="font-body text-[12.5px] text-ink-tertiary">
            {client} · {year}
          </span>
        </div>

        <h3 className="font-heading text-2xl font-semibold leading-tight text-ink sm:text-[28px]">
          {title}
        </h3>

        <p className="font-body text-[15px] leading-relaxed text-ink-tertiary">
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
