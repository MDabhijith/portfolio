import { SiteNav } from "@/components/nav/site-nav";
import { SiteFooter } from "@/components/footer/site-footer";
import { Container } from "@/components/layout/container";
import { CaseStudySectionNav } from "@/components/sections/case-study-section-nav";
import { SectionHeading } from "@/components/sections/section-heading";
import { NextProjectCard } from "@/components/cards/next-project-card";
import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { BlockRenderer } from "@/components/case-study/blocks/block-renderer";
import { DecisionBlock } from "@/components/case-study/blocks/decision-block";
import type { CaseStudy } from "@/lib/case-studies/types";

/** Fully data-driven case-study page — every case study renders through this one template. */
export function CaseStudyTemplate({ caseStudy }: { caseStudy: CaseStudy }) {
  const navItems = caseStudy.sections.map((s) => ({
    id: s.id,
    label: s.label,
  }));

  return (
    <>
      <SiteNav />
      <main id="main-content" className="flex-1 pt-32 sm:pt-40">
        <Container className="flex flex-col gap-16 pb-24 sm:gap-24 sm:pb-32">
          <CaseStudyHeader caseStudy={caseStudy} />

          <div className="flex flex-col gap-16 lg:flex-row lg:gap-16">
            <CaseStudySectionNav items={navItems} />

            <div className="flex min-w-0 flex-1 flex-col gap-20 sm:gap-28">
              {caseStudy.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="flex scroll-mt-32 flex-col gap-8"
                >
                  <SectionHeading
                    number={section.number}
                    label={section.label}
                    title={section.title}
                  />
                  {section.blocks.map((block, i) => (
                    <BlockRenderer key={i} block={block} />
                  ))}
                </section>
              ))}

              {caseStudy.keyDecisions ? (
                <section className="flex flex-col gap-10">
                  <div className="flex items-center gap-5">
                    <span className="whitespace-nowrap font-body text-sm text-cs-label">
                      KEY DECISIONS
                    </span>
                    <div className="h-px flex-1 bg-line" aria-hidden="true" />
                  </div>
                  <DecisionBlock items={caseStudy.keyDecisions} />
                </section>
              ) : null}
            </div>
          </div>

          <NextProjectCard {...caseStudy.nextProject} />
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
