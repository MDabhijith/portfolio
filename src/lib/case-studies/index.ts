import type { CaseStudy } from "./types";
import { jobModuleRedesign } from "./data/job-module-redesign";

const registry: Record<string, CaseStudy> = {
  [jobModuleRedesign.slug]: jobModuleRedesign,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return registry[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(registry);
}
