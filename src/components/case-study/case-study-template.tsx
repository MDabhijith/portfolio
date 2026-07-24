import { Fragment } from "react";
import { SiteNav } from "@/components/nav/site-nav";
import { SiteFooter } from "@/components/footer/site-footer";
import { Container } from "@/components/layout/container";
import { Reveal, StaggerReveal } from "@/components/ui/reveal";
import { CaseStudySectionNav } from "@/components/sections/case-study-section-nav";
import { SectionHeading } from "@/components/sections/section-heading";
import { NextProjectCard } from "@/components/cards/next-project-card";
import { CaseStudyBanner } from "@/components/case-study/case-study-banner";
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
      <main id="main-content" className="flex-1 bg-cs-paper">
        <StaggerReveal />
        <CaseStudyBanner caseStudy={caseStudy} />

        <Container className="flex flex-col gap-16 pt-16 pb-24 sm:gap-24 sm:pt-24 sm:pb-32">
          <CaseStudyHeader caseStudy={caseStudy} />

          <div className="flex flex-col gap-16 lg:flex-row lg:gap-16">
            <CaseStudySectionNav items={navItems} />

            <div className="flex min-w-0 flex-1 flex-col gap-20 sm:gap-28">
              {caseStudy.sections.map((section, index) => (
                <Fragment key={section.id}>
                  {/* Key Decisions sit just before the closing section (Impact), matching Figma's order. */}
                  {caseStudy.keyDecisions &&
                  index === caseStudy.sections.length - 1 ? (
                    <section className="flex flex-col gap-10">
                      <Reveal>
                        <div className="flex items-center gap-5">
                          <span className="whitespace-nowrap font-body text-sm text-cs-label">
                            KEY DECISIONS
                          </span>
                          <div
                            className="h-px flex-1 bg-line"
                            aria-hidden="true"
                          />
                        </div>
                      </Reveal>
                      <Reveal>
                        <DecisionBlock items={caseStudy.keyDecisions} />
                      </Reveal>
                    </section>
                  ) : null}

                  <section
                    id={section.id}
                    className="flex scroll-mt-32 flex-col gap-8"
                  >
                    <Reveal>
                      <SectionHeading
                        number={section.number}
                        label={section.label}
                        title={section.title}
                      />
                    </Reveal>
                    {section.blocks.map((block, i) => (
                      <Reveal key={i}>
                        <BlockRenderer block={block} />
                      </Reveal>
                    ))}
                  </section>
                </Fragment>
              ))}
            </div>
          </div>

          <Reveal>
            <NextProjectCard {...caseStudy.nextProject} />
          </Reveal>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
