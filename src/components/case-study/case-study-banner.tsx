import { Container } from "@/components/layout/container";
import { BackLink } from "@/components/ui/back-link";
import { HeroParticles } from "@/components/case-study/hero-particles";
import type { CaseStudy } from "@/lib/case-studies/types";

/** Full-bleed dark banner holding the breadcrumb, title, and subtitle.
 *
 * Shares the homepage hero's ground (`.hero-dark`) and its palette, so both
 * heroes read as the same surface — and, like the homepage hero, it carries
 * `data-nav-dark` so the floating nav flips to its dark glass over it. The
 * brand pair lives here and on the homepage; the case-study *content* below
 * stays monochrome. */
export function CaseStudyBanner({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <section
      data-nav-dark
      className="hero-dark relative isolate overflow-hidden"
    >
      <HeroParticles className="absolute inset-0 -z-10 h-full w-full text-hero-accent" />

      <Container className="flex flex-col gap-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <BackLink href="/#work" tone="light" />

        <div className="flex flex-col gap-3">
          <p className="font-body text-sm text-hero-body">
            Projects{" "}
            <span className="mx-1 text-hero-line" aria-hidden="true">
              /
            </span>{" "}
            {caseStudy.category}
          </p>
          <h1 className="max-w-[900px] font-heading text-3xl leading-tight font-semibold text-hero-ink sm:text-h3">
            {caseStudy.title}
          </h1>
          <p className="max-w-[68ch] font-body text-base leading-relaxed text-hero-body sm:text-[17px]">
            {caseStudy.subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
