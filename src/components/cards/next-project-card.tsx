import Link from "next/link";
import Image from "next/image";

export interface NextProjectCardProps {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
}

export function NextProjectCard({
  href,
  eyebrow,
  title,
  description,
  image,
}: NextProjectCardProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-5">
        <span className="whitespace-nowrap font-body text-sm text-positive">
          NEXT PROJECT
        </span>
        <div className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>

      <Link
        href={href}
        className="group/next flex flex-col overflow-hidden rounded-2xl border border-primary-200 outline-none transition-colors duration-[var(--duration-base)] hover:border-primary-300 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:flex-row"
      >
        <div className="flex flex-1 flex-col gap-2 bg-white p-8 sm:p-[50px]">
          <p className="font-body text-sm text-primary-300">{eyebrow}</p>
          <h3 className="font-heading text-2xl font-semibold leading-tight text-primary-500 sm:text-h4">
            {title}
          </h3>
          <p className="mt-2 font-body text-base leading-relaxed text-primary-400">
            {description}
          </p>
        </div>
        <div className="relative min-h-[220px] flex-1 overflow-hidden bg-surface sm:min-h-0">
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover/next:scale-[1.02] motion-reduce:group-hover/next:scale-100"
            />
          ) : null}
        </div>
      </Link>
    </div>
  );
}
