import Image from "next/image";
import { MetaRow } from "@/components/sections/meta-row";
import { OutcomeHighlight } from "@/components/case-study/outcome-highlight";
import type { CaseStudy } from "@/lib/case-studies/types";

export function CaseStudyHeader({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="flex flex-col gap-10">
      <MetaRow items={caseStudy.meta} />

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

      {caseStudy.outcomeHighlight ? (
        <OutcomeHighlight {...caseStudy.outcomeHighlight} />
      ) : null}
    </div>
  );
}
