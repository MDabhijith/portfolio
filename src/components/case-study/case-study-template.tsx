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
import type { CaseStudy, ContentBlock } from "@/lib/case-studies/types";
import { cn } from "@/lib/utils";

/** Chunks a section's flat block list into topic runs: each `moduleHeader`
 * starts a new run that swallows every block up to the next `moduleHeader`.
 * Rendered with a tight internal gap so a heading + its description + its
 * screenshot/video read as one section, while the section's own block gap
 * still separates one topic from the next. */
function groupModuleHeaderRuns(blocks: ContentBlock[]): ContentBlock[][] {
  const groups: ContentBlock[][] = [];
  for (const block of blocks) {
    if (block.type === "moduleHeader" || groups.length === 0) {
      groups.push([block]);
    } else {
      groups[groups.length - 1].push(block);
    }
  }
  return groups;
}

/** Fully data-driven case-study page — every case study renders through this one template. */
export function CaseStudyTemplate({ caseStudy }: { caseStudy: CaseStudy }) {
  const navItems = caseStudy.sections.map((s) => ({
    id: s.id,
    label: s.label,
  }));

  return (
    <>
      <SiteNav />
      <main id="main-content" className="flex-1 bg-paper">
        <StaggerReveal />
        <CaseStudyBanner caseStudy={caseStudy} />

        <Container className="flex flex-col gap-16 pt-16 pb-24 sm:gap-24 sm:pt-24 sm:pb-32">
          <CaseStudyHeader caseStudy={caseStudy} />

          <div className="flex flex-col gap-16 lg:flex-row lg:gap-16">
            <CaseStudySectionNav items={navItems} />

            {/* The column matches the hero frame's width, which is far wider than
                a readable measure — so running text is capped here, once, while
                images, galleries and comparison grids keep the full width. */}
            <div className="flex min-w-0 flex-1 flex-col gap-20 [&_p]:max-w-[68ch] sm:gap-28">
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
                    {groupModuleHeaderRuns(section.blocks).map((group, gi) => (
                      <Reveal key={gi}>
                        <div
                          className={cn(
                            "flex flex-col gap-6",
                            gi > 0 && "mt-8 sm:mt-12"
                          )}
                        >
                          {group.map((block, bi) => (
                            <BlockRenderer key={bi} block={block} />
                          ))}
                        </div>
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
