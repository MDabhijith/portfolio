import type { CaseStudy } from "./types";
import { jobModuleRedesign } from "./data/job-module-redesign";
import { roofingWorkflowManagement } from "./data/roofing-workflow-management";
import { aiProposalBuilder } from "./data/ai-proposal-builder";
import { relayHub } from "./data/relay-hub";
import { arManagement } from "./data/ar-management";

const registry: Record<string, CaseStudy> = {
  [roofingWorkflowManagement.slug]: roofingWorkflowManagement,
  [jobModuleRedesign.slug]: jobModuleRedesign,
  [aiProposalBuilder.slug]: aiProposalBuilder,
  [relayHub.slug]: relayHub,
  [arManagement.slug]: arManagement,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return registry[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(registry);
}
