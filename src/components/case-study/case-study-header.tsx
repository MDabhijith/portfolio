import Image from "next/image";
import { BackLink } from "@/components/ui/back-link";
import { MetaRow } from "@/components/sections/meta-row";
import type { CaseStudy } from "@/lib/case-studies/types";

export function CaseStudyHeader({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <header className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <BackLink href="/#work" />

        <div className="flex flex-col gap-3">
          <p className="font-body text-sm text-cs-label">
            Projects <span className="mx-1 text-line">/</span>{" "}
            {caseStudy.category}
          </p>
          <h1 className="max-w-[900px] font-heading text-3xl font-semibold leading-tight text-cs-ink sm:text-h3">
            {caseStudy.title}
          </h1>
          <p className="max-w-[900px] font-body text-base leading-relaxed text-cs-body sm:text-[17px]">
            {caseStudy.subtitle}
          </p>
        </div>

        <MetaRow items={caseStudy.meta} />
      </div>

      <div className="relative aspect-[1280/633] w-full overflow-hidden rounded-2xl border border-line bg-surface">
        <Image
          src={caseStudy.heroImage.src}
          alt={caseStudy.heroImage.alt}
          fill
          priority
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="object-cover"
        />
      </div>
    </header>
  );
}
