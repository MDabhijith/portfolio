import type { CaseStudy } from "../types";

export const aiProposalBuilder: CaseStudy = {
  slug: "ai-proposal-builder",
  category: "Roofing Proposal Management",
  client: "Priority Roofing",
  year: "2026",
  title: "AI-Enabled Proposal Builder, From Roof Inspection to Proposal",
  subtitle:
    "The CRM gave Priority Roofing one home for a job in production. It never touched how that job was sold — every proposal still routed through Roofr, a disconnected third-party app. So we're building a native Proposal Management system with an AI editor at its core, one that drafts and restructures a proposal from a prompt, so a rep never has to leave the CRM to sell a job.",
  meta: [
    { label: "Company", value: "Priority Roofing (USA)" },
    { label: "Timeline", value: "Jun 2026 - 3 weeks" },
    { label: "Team", value: "Developers, Stakeholders, Tester, Product Designer" },
  ],
  heroImage: {
    src: "/images/work/proposal-builder.webp",
    alt: "AI-enabled roofing proposal builder interface",
  },
  sections: [
    {
      id: "background",
      number: "01",
      label: "BACKGROUND",
      title: "The CRM fixed operations. Sales still ran through a disconnected tool.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Once the Roofing CRM shipped, a job had one home from the moment it was won to the moment it was paid. But a job still had to be won first — and that entire front half, the assessment and the proposal, happened outside the CRM entirely, inside a third-party platform called Roofr. Roofr did its one job well: it measured roofs and produced proposals. But it had no relationship to the CRM. A sales rep who'd just qualified a prospect inside the CRM had to leave it, rebuild the same customer and job in Roofr, run the assessment there, and — once a homeowner approved — manually carry the outcome back. The CRM had solved the job's life in production. Its life before that still lived somewhere else.",
          ],
        },
        {
          type: "keyValue",
          rows: [
            {
              label: "Roofr — Assessment & proposals",
              value:
                "HELD: Roof measurements, damage assessment, and proposal generation. GAP: Fully disconnected from the CRM, and rigid about it — Roofr's workflow couldn't bend to how Priority Roofing actually sold, which is what finally pushed us to build our own.",
            },
            {
              label: "The CRM — Everything after a job is won",
              value:
                "HELD: Production, scheduling, materials, and commissions for a job already in motion. GAP: No way to receive a job before it existed — the front half of the sale happened somewhere else entirely.",
            },
          ],
        },
        {
          type: "quote",
          quote:
            "I qualify the lead in the CRM, then type the same customer into Roofr to actually sell them anything. If the deal closes, I copy it all back by hand.",
          attribution: "Sales Rep, Priority Roofing",
        },
      ],
    },
    {
      id: "problem",
      number: "02",
      label: "PROBLEM",
      title: "A second system, disconnected the same way the first ones were",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "This was the same seam problem the CRM had already solved once, reappearing on the other side of the job. Four fault lines showed up.",
          ],
        },
        {
          type: "insightCards",
          items: [
            {
              number: "01",
              title: "Disconnected from the CRM",
              description:
                "Roofr had no relationship to the jobs and customers already living inside the CRM — every proposal started from a blank system.",
            },
            {
              number: "02",
              title: "Duplicate entry, scattered assessment data",
              description:
                "Reps re-typed customer and job information by hand, while photos, damage notes, and documents were split across whatever tool was open at the time.",
            },
            {
              number: "03",
              title: "Approval disconnected from job tracking",
              description:
                "A proposal being approved didn't mean anything to the CRM — someone still had to notice, and manually start the job.",
            },
            {
              number: "04",
              title: "The cost compounded",
              description:
                "Every re-entry was a chance to introduce an error, and every manual handoff was time a rep or back-office spent not selling or building.",
            },
          ],
        },
      ],
    },
    {
      id: "research-audit",
      number: "03",
      label: "RESEARCH & AUDIT",
      title: "We audited Roofr's workflow, then traced one proposal end to end.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Before designing a replacement for Roofr, I traced a real proposal end-to-end — from the moment a rep booked an assessment to the moment a homeowner signed — and sat with the roles on either side of it. The goal wasn't a feature-parity list against Roofr; it was seeing exactly where the handoff to the CRM broke down.",
          ],
        },
        {
          type: "qaPanel",
          eyebrow: "STAKEHOLDER SESSION",
          meta: "3 roles · 9 questions",
          description:
            "I walked the actual day of each role rather than a documented process, anchoring every session on a few core questions, then noting what the work itself revealed.",
          items: [
            {
              role: "Sales Reps",
              detail: "Assessment → close",
              questions: [
                "Walk me through everything that happens between booking an assessment and sending a proposal.",
                "What do you re-type that you know already lives in the CRM?",
                "Once a proposal is sent, how do you know what happens next?",
              ],
            },
            {
              role: "Back Office",
              detail: "Approval, contracts, job creation",
              questions: [
                "How do you find out a proposal has been approved?",
                "What has to happen before a signed deal becomes a job you can schedule?",
                "Where do assessment photos and documents end up once you need them?",
              ],
            },
          ],
        },
        {
          type: "insightCards",
          items: [
            {
              number: "01",
              title: "The proposal was the CRM's blind spot",
              description:
                "Everything the CRM modeled so carefully — the job, the customer, the pipeline — didn't exist yet from Roofr's point of view. The two systems described the same deal with no shared vocabulary.",
            },
            {
              number: "02",
              title: "Approval was an event no system was listening for",
              description:
                "A homeowner's sign-off happened inside Roofr and stayed there until a person forwarded it along. Nothing treated approval as a trigger.",
            },
            {
              number: "03",
              title: "Assessment data had nowhere permanent to live",
              description:
                "Photos and damage notes were only as safe as whoever's phone or laptop they were captured on — there was no job record yet to attach them to.",
            },
          ],
        },
        {
          type: "callout",
          eyebrow: "THE GUIDING QUESTION",
          title:
            "What if a job had one home from the first inspection, not just from the moment it was won?",
        },
      ],
    },
    {
      id: "approach",
      number: "04",
      label: "APPROACH",
      title: "Build the front half into the CRM, not bolt it on",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The first real decision wasn't a screen — it was whether to integrate with Roofr's API or absorb assessment and proposal work into the CRM's own data model. An integration would have kept two systems in sync forever; it wouldn't have removed the seam, just automated the stitching. We chose to build a native module that shares the CRM's job record directly, so a proposal isn't synced to a job — it is the job, at an earlier stage.",
          ],
        },
        {
          type: "taggedList",
          items: [
            {
              tag: "RETIRE",
              tone: "negative",
              title: "Roofr as the system of record for a sale",
              description:
                "It solved assessment and proposals in isolation, but every proposal it produced started disconnected from the job it was for.",
            },
            {
              tag: "BUILD",
              tone: "neutral",
              title: "A Proposal Management module on the CRM's own schema",
              description:
                "Assessment, proposal, approval, and signing read and write the same job record the CRM already owns — nothing is synced, because nothing is duplicated.",
            },
            {
              tag: "EXTEND",
              tone: "positive",
              title: "The CRM's pipeline backward, into the sale itself",
              description:
                "The Job Cycle already carried a job from won to paid. This work extends that same idea one stage earlier, to first inspection.",
            },
          ],
        },
        {
          type: "darkCallout",
          eyebrow: "THE CALL THAT SHAPED IT",
          rows: [
            {
              label: "Share the schema, don't sync a copy",
              before: "Assessments and proposals had no link to the job that already existed →",
              after: "built as an extension of the CRM's own data model.",
            },
            {
              label: "Make proposals dynamic, not just templated",
              before: "Every roofing service prices and reads differently →",
              after: "templates are a starting point; sections rebuild per job.",
            },
            {
              label: "Split pricing into two catalog types",
              before: "Itemized work and full roof systems don't price the same way →",
              after: "two catalog structures, one estimate engine underneath.",
            },
            {
              label: "Close the loop with signing, not a handoff",
              before: "An approved proposal used to become someone's manual task →",
              after: "signing happens inside the flow and creates the job directly.",
            },
            {
              label: "Put an AI agent inside the builder, not beside it",
              before: "Drafting a proposal from scratch was the slowest part of a rep's day →",
              after: "a prompt generates the full draft, and the same agent refines any section in place.",
            },
          ],
        },
      ],
    },
    {
      id: "workflow",
      number: "05",
      label: "WORKFLOW AND USERFLOW",
      title: "One continuous path: inspection to signature",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A prospect leaves the CRM's qualifying stage as a scheduled assessment and doesn't surface again as a \"won job\" from somewhere else — it moves forward as the same record, through one flow, until a signed contract hands it to production.",
          ],
        },
      ],
    },
    {
      id: "the-system",
      number: "06",
      label: "THE SYSTEM",
      title: "Six modules, two groups, no separate app to switch to.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The navigation splits into the daily selling work, the configuration behind it, and the admin layer that closes the loop — each one reading and writing the same job the CRM already owns.",
          ],
        },
        {
          type: "keyValue",
          title: "Core workflow — 3 modules",
          rows: [
            {
              label: "Dashboard",
              value:
                "Gives reps visibility into their pipeline — assessments completed, proposals sent, proposals approved, and projects closed — plus recent activity at a glance.",
            },
            {
              label: "Assessment",
              value:
                "Inspect properties, record damage items, capture and organize photos, and upload supporting documents in one structured workflow.",
            },
            {
              label: "Proposal builder",
              value:
                "An AI agent that drafts the proposal, then stays to refine it — a rep describes the job in a prompt and gets a complete draft back, then asks the agent to rewrite a section, adjust scope language, or re-price a line item in place.",
            },
          ],
        },
        {
          type: "keyValue",
          title: "Configuration — 3 modules",
          rows: [
            { label: "Templates", value: "Starting points for a proposal, rebuilt per job rather than filled in as-is." },
            { label: "Catalogue Management", value: "Itemized work and full roof systems, priced through one shared estimate engine." },
            { label: "Settings", value: "Account, team, and workspace configuration for the module." },
          ],
        },
      ],
    },
    {
      id: "status",
      number: "07",
      label: "STATUS & WHAT'S NEXT",
      title: "Shipped and still evolving, here's where it stands today",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "This has already launched and is in active use by the sales team — it isn't a pilot. From here, the work is ongoing: testing with real reps, redesigning what usage shows us doesn't work, and improving the experience iteratively. So the honest version of \"impact\" here is a status report: what's shipped, what's being refined right now, and what's still ahead.",
          ],
        },
        {
          type: "keyValue",
          rows: [
            {
              label: "Shipped",
              value:
                "Assessment module — inspection, damage capture, photos, documents. Proposal builder with itemized and roof system estimate types, linked or standalone. Templates and catalogue management. AI agent for prompt-to-draft and always-on inline editing.",
            },
            {
              label: "In active use, refining now",
              value:
                "Refining the overall experience based on how reps actually use it day to day. Enhancing the AI editing experience with support for documents and reference material. Linking CompanyCam, a job-photo app, to sync assessment photos automatically. Deeper CRM data linkage beyond the property address that's already connected.",
            },
          ],
        },
        {
          type: "keyValue",
          title: "What we've learned so far",
          rows: [
            {
              label: "A shared schema beats a synced copy, even when it's slower to build",
              value:
                "Integrating Roofr would have shipped faster. Building on the CRM's own job record took longer, but it removed the seam instead of automating it.",
            },
            {
              label: "Flexibility has to live in the proposal, not just the template",
              value:
                "Templates alone couldn't cover every roofing service. The real fix was making proposal sections rebuildable per job, with templates as a starting point.",
            },
            {
              label: "Approval is a workflow event, not a signature",
              value:
                "Treating homeowner approval as a state change on the job — not an email to notice — is what let the contract-signing step trigger the job automatically.",
            },
            {
              label: "Building next to a live CRM changes how you sequence work",
              value:
                "Every module here had to work with production data the CRM already depended on daily, which meant shipping in a different order than a greenfield build would allow.",
            },
          ],
        },
      ],
    },
  ],
  nextProject: {
    href: "/work/relay-hub",
    eyebrow: "AI BUSINESS COMMUNICATION",
    title: "Relay Hub: An AI-Powered Business Communication Platform",
    description:
      "An AI-first business communication platform unifying chat, documents, and knowledge scoped by what it's allowed to see.",
    image: {
      src: "/images/work/abstract-cover.webp",
      alt: "Relay Hub",
    },
  },
};
