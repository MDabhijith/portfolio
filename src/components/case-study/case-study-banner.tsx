import Image from "next/image";
import { Container } from "@/components/layout/container";
import { BackLink } from "@/components/ui/back-link";
import type { CaseStudy } from "@/lib/case-studies/types";

/** Full-bleed gradient banner holding the breadcrumb, title, and subtitle. Uses its own export rather than the homepage hero's — same artwork, but Figma crops it wider (1440x567), so object-cover on the taller hero file framed it differently. */
export function CaseStudyBanner({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/case-study-banner-bg.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <Container className="flex flex-col gap-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
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
      </Container>
    </section>
  );
}
