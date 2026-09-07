import type { CaseStudy } from "../types";

export const aiProposalBuilder: CaseStudy = {
  slug: "ai-proposal-builder",
  category: "Roofing Proposal Management",
  client: "Priority Roofing",
  year: "2026",
  title: "An AI Proposal Builder, Built Into the CRM",
  subtitle:
    "The CRM gave every job one home in production, but proposals still lived in Roofr, a disconnected outside app. So we built a native proposal tool with an AI editor at its core, one that drafts and edits a proposal from a prompt, so reps never have to leave the CRM to sell a job.",
  meta: [
    { label: "Company", value: "Priority Roofing (USA)" },
    { label: "Timeline", value: "Jun 2026 - 3 weeks" },
    { label: "Team", value: "Developers, Stakeholders, Tester, Product Designer" },
  ],
  heroImage: {
    src: "/images/work/proposal-builder-banner.png",
    alt: "AI-enabled roofing proposal builder interface",
  },
  outcomeHighlight: {
    eyebrow: "WHERE THIS IS TODAY",
    summary:
      "Not a redesign of Roofr. A native module with an AI editor that drafts and edits a proposal from a prompt, without switching tools.",
    stats: [
      {
        value: "1",
        caption:
          "AI editor that drafts a full proposal from a prompt and edits it in place",
      },
      {
        value: "2",
        caption:
          "estimate types, itemized and roof system, built on one shared catalogue",
      },
      {
        value: "6",
        caption: "modules covering assessment through proposal delivery",
      },
    ],
  },
  sections: [
    {
      id: "background",
      number: "01",
      label: "BACKGROUND",
      title: "The CRM Fixed Operations. Sales Still Ran Through Roofr.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Once the Roofing CRM shipped, a job had one home from the moment it was won to the moment it was paid. But a job had to be won first, and that entire front half, the assessment and the proposal, happened outside the CRM, inside a third-party tool called Roofr. Roofr did one job well: it measured roofs and built proposals. But it had no connection to the CRM. A rep who'd just qualified a prospect inside the CRM had to leave it, re-enter the same customer and job in Roofr, run the assessment there, and manually carry the result back once a homeowner approved. The CRM had solved a job's life after the sale. Its life before that still lived somewhere else.",
          ],
        },
        {
          type: "systemComparison",
          items: [
            {
              name: "Roofr",
              subtitle: "Assessment & proposals",
              held: "Roof measurements, damage assessment, and proposal generation.",
              gap: "Fully disconnected from the CRM, and rigid about it. It couldn't bend to how Priority Roofing actually sold, which is what pushed us to build our own.",
            },
            {
              name: "The CRM",
              subtitle: "Everything after a job is won",
              held: "Production, scheduling, materials, and commissions for a job already in motion.",
              gap: "No way to receive a job before it existed. The front half of the sale happened somewhere else entirely.",
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
      title: "The Same Disconnection, on the Other Side of the Job",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "This was the same problem the CRM had already solved, showing up again on the other side of the job. Four issues kept coming up.",
          ],
        },
        {
          type: "insightCards",
          items: [
            {
              number: "01",
              title: "Disconnected from the CRM",
              description:
                "Roofr had no relationship to the jobs and customers already living inside the CRM, every proposal started from a blank system.",
            },
            {
              number: "02",
              title: "Data typed twice, scattered everywhere",
              description:
                "Reps re-typed customer and job details by hand, while photos, damage notes, and documents ended up split across whatever tool was open at the time.",
            },
            {
              number: "03",
              title: "Approval disconnected from job tracking",
              description:
                "A proposal being approved didn't mean anything to the CRM. Someone still had to notice and manually start the job.",
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
      title: "How We Traced One Proposal From Start to Finish",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Before designing a replacement for Roofr, I traced a real proposal from start to finish, from booking the assessment to the homeowner's signature, and talked to everyone involved. The goal wasn't to match Roofr feature-for-feature. It was to find exactly where the handoff to the CRM broke down.",
          ],
        },
        {
          type: "personaSwitcher",
          eyebrow: "WHO A PROPOSAL PASSES THROUGH",
          meta: "3 personas",
          personas: [
            {
              id: "sales-rep",
              label: "Sales Rep",
              name: "Marcus Bell",
              photo: {
                src: "/images/work/persona-proposal-sales-rep.webp",
                alt: "Portrait of Marcus Bell, a sales rep, in a dark suit",
              },
              role: "Sales Rep \u00b7 assessment \u2192 proposal sent",
              demographics: [
                { label: "Age", value: "31" },
                { label: "Location", value: "Dallas, TX" },
                { label: "Tools", value: "CRM, Roofr, phone" },
                { label: "Tech", value: "High, phone-first" },
              ],
              bio: "Qualifies the lead inside the CRM, then leaves it to build the proposal in Roofr, retyping the customer and the job he just entered. Measures the roof, photographs the damage and wants the proposal out before he pulls off the driveway, because the homeowner is collecting quotes from two other companies this week.",
              motivations: [
                "First good proposal in the door usually wins the job",
                "Commission depends on closing, not on quoting",
                "Wants selling time back from data entry",
              ],
              goals: [
                "Send a priced proposal before the homeowner's interest cools",
                "Build it from the customer and job the CRM already holds",
                "Know the moment a homeowner opens or signs it",
              ],
              frustrations: [
                "Re-entering into Roofr a customer he just entered in the CRM",
                "Assessment photos stranded on his phone with no job to attach them to",
                "Silence after sending, so follow-up is guesswork",
              ],
              quote:
                "I've already told the system who this customer is. Then I open Roofr and it asks me all over again.",
            },
            {
              id: "homeowner",
              label: "Homeowner",
              name: "Ray Delgado",
              photo: {
                src: "/images/work/persona-proposal-homeowner.webp",
                alt: "Portrait of Ray Delgado, a homeowner, in a dark green shirt",
              },
              role: "Homeowner \u00b7 receives \u2192 signs",
              demographics: [
                { label: "Age", value: "54" },
                { label: "Location", value: "Todd Mission, TX" },
                { label: "Tools", value: "Phone, email" },
                { label: "Tech", value: "Casual, reads on mobile" },
              ],
              bio: "Storm took half the shingles off a roof he has never had to replace before. He is comparing three quotes on his phone after work, none of which describe the same scope in the same words, and he is deciding on the largest single purchase this house has needed.",
              motivations: [
                "Wants the roof fixed before the next storm",
                "Needs to feel he is not being overcharged for work he cannot judge",
                "Insurance timeline is running and he cannot stall",
              ],
              goals: [
                "Understand what is being replaced and why it costs this",
                "Compare options without decoding roofing jargon",
                "Sign without printing, scanning or a second appointment",
              ],
              frustrations: [
                "A PDF that fights him on a phone screen",
                "Line items naming materials but not what they do",
                "No idea what happens, or when, after he signs",
              ],
              quote:
                "It's the biggest thing I've bought for this house and I'm reading it on my phone at eleven at night. If I can't follow it, I'm calling the other guy.",
            },
            {
              id: "back-office",
              label: "Back Office",
              name: "Claire Bennett",
              photo: {
                src: "/images/work/persona-proposal-back-office.webp",
                alt: "Portrait of Claire Bennett, a back office coordinator, in a black top",
              },
              role: "Back Office \u00b7 signature \u2192 job started",
              demographics: [
                { label: "Age", value: "36" },
                { label: "Location", value: "Dallas, TX" },
                { label: "Tools", value: "CRM, email, Roofr" },
                { label: "Tech", value: "Expert in the CRM" },
              ],
              bio: "Starts the job once the homeowner signs. The signature happens inside Roofr, so she learns about it when a rep forwards the email, then opens the CRM and rebuilds a deal that was already fully specified somewhere else before she can schedule anything.",
              motivations: [
                "Jobs that start on the date the homeowner was told",
                "A scope she can trust without calling the rep to confirm it",
                "Fewer things depending on someone remembering to tell her",
              ],
              goals: [
                "Learn a proposal was approved without being told",
                "Open a signed deal as a job, not as a PDF to re-key",
                "Find the assessment photos already attached to the job",
              ],
              frustrations: [
                "Approval arrives as a forwarded email, or not at all",
                "Re-typing a scope the rep already priced line by line",
                "Chasing photos and documents across phones and inboxes",
              ],
              quote:
                "A deal can be signed for two days before it reaches me. By then the crew calendar has already moved on without it.",
            },
          ],
        },
        {
          type: "qaPanel",
          eyebrow: "STAKEHOLDER SESSION",
          meta: "3 roles · 9 questions",
          description:
            "I walked through each role's actual day instead of a documented process, anchoring every session on a few core questions.",
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
          type: "image",
          image: {
            src: "/images/work/proposal-audit-roofr.webp",
            alt: "Roofr's proposals list, the disconnected third-party tool we audited",
          },
        },
        {
          type: "insightCards",
          items: [
            {
              number: "01",
              title: "The proposal was the CRM's blind spot",
              description:
                "Everything the CRM tracked so carefully (the job, the customer, the pipeline) didn't exist yet from Roofr's side. The two systems described the same deal, but had no shared language for it.",
            },
            {
              number: "02",
              title: "Approval was an event no system was listening for",
              description:
                "A homeowner's sign-off happened inside Roofr and stayed there until someone forwarded it. Nothing treated approval as a trigger.",
            },
            {
              number: "03",
              title: "Assessment data had nowhere permanent to live",
              description:
                "Photos and damage notes were only as safe as whoever's phone or laptop they were captured on, there was no job record yet to attach them to.",
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
      title: "Build It Into the CRM, Not Bolt It On",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The first real decision wasn't a screen, it was whether to connect to Roofr's API or build assessment and proposals directly into the CRM. Connecting the two would have kept them in sync forever, but it wouldn't remove the seam, just automate it. We built a native module that shares the CRM's job record directly. A proposal isn't synced to a job, it is the job, just at an earlier stage.",
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
                "Assessment, proposal, approval, and signing read and write the same job record the CRM already owns, nothing is synced, because nothing is duplicated.",
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
      title: "One Path From Inspection to Signature",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A prospect leaves the CRM's qualifying stage as a scheduled assessment, not as a \"won job\" that shows up later from somewhere else. It moves forward as the same record, through one flow, until a signed contract hands it to production.",
          ],
        },
        {
          type: "workflowTimeline",
          steps: [
            {
              title: "Rep chooses: with or without an assessment",
              actor: "SALES REP",
              actorTone: "muted",
              description:
                "Starting a proposal is the first decision point, a rep can link it to a scheduled on-site assessment, or start a proposal directly when no assessment is needed.",
              tags: ["Dashboard"],
            },
            {
              title: "Assessment scheduled (if linked)",
              actor: "SALES REP",
              actorTone: "muted",
              description:
                "When a proposal is linked to an assessment, the qualified prospect is scheduled for an on-site property assessment first.",
              tags: ["Dashboard"],
            },
            {
              title: "Property inspected, damage recorded",
              actor: "SALES REP",
              actorTone: "muted",
              description:
                "For linked proposals, the rep inspects the property and logs damage items directly against the job.",
              tags: ["Assessment"],
            },
            {
              title: "Photos & documents captured",
              actor: "SALES REP",
              actorTone: "muted",
              description:
                "Photos and supporting documents are attached to the same record, not scattered across a phone and a laptop.",
              tags: ["Assessment"],
            },
            {
              title: "Proposal drafted, by template or by prompt",
              actor: "SALES REP",
              actorTone: "muted",
              description:
                "A rep starts from a template or describes the job to the AI agent and gets a full draft back, pulling from the linked assessment when there is one, then refines individual sections inline as needed.",
              tags: ["Proposal", "Templates"],
            },
            {
              title: "Pricing built from the catalog",
              actor: "SALES REP",
              actorTone: "muted",
              description:
                "Itemized or roof-system pricing is pulled from the standardized catalog rather than estimated by hand.",
              tags: ["Catalog"],
            },
            {
              title: "Proposal sent to the homeowner",
              actor: "SALES REP",
              actorTone: "muted",
              description:
                "The finished proposal goes to the homeowner directly from the same workflow that built it.",
              tags: ["Proposal"],
            },
            {
              title: "Homeowner approves",
              actor: "HOMEOWNER",
              actorTone: "accent",
              description:
                "Approval happens inside the proposal itself, surfacing it as a workflow event on the CRM job is part of the integration still ahead.",
              tags: ["Proposal"],
            },
            {
              title: "Job moves to production (manual, for now)",
              actor: "BACK OFFICE",
              actorTone: "accent",
              description:
                "A won proposal still becomes a job through a manual handoff today, closing this with digital signing and automatic job creation is the next milestone.",
              tags: ["Proposal"],
            },
          ],
        },
      ],
    },
    {
      id: "the-system",
      number: "06",
      label: "THE SYSTEM",
      title: "Six Modules, Zero Separate Apps to Switch To",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The navigation splits into daily selling work, the configuration behind it, and the admin layer that closes the loop. Every part reads and writes the same job the CRM already owns.",
          ],
        },
        {
          type: "moduleNav",
          groups: [
            {
              eyebrow: "CORE WORKFLOW",
              count: "3 modules",
              modules: ["Dashboard", "Assessment", "Proposal"],
            },
            {
              eyebrow: "CONFIGURATION",
              count: "3 modules",
              modules: ["Templates", "Catalogue Management", "Settings"],
            },
          ],
        },
        {
          type: "moduleHeader",
          title: "Dashboard",
          description:
            "Gives reps visibility into their pipeline, assessments completed, proposals sent, proposals approved, and projects closed, plus recent activity at a glance.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/proposal-dashboard.webp",
            alt: "The proposal dashboard showing assessment, proposal, and project pipeline metrics",
          },
          caption: "The dashboard view with metrics.",
        },
        {
          type: "moduleHeader",
          title: "Assessment",
          description:
            "Inspect properties, record damage items, capture and organize photos, and upload supporting documents in one structured workflow.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/proposal-assessment-list.webp",
            alt: "The assessment listing page",
          },
          caption: "Assessment listing page.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/proposal-assessment-detail.webp",
            alt: "A detailed assessment page with damage items and captured photos",
          },
          caption: "Detailed Assessment page.",
        },
        {
          type: "moduleHeader",
          title: "Proposal",
          description:
            "A flexible builder for creating customer proposals, customizing sections for each roofing service, and keeping every field linked to the CRM job it belongs to. A rep chooses upfront whether the proposal is linked to an assessment or stands alone, and an inline AI agent can draft the whole thing from a prompt either way, then refine individual sections as the rep edits.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/proposal-list.webp",
            alt: "The proposal listing page",
          },
          caption: "The proposal listing page.",
        },
        {
          type: "moduleHeader",
          title: "Templates",
          description:
            "Templates keep a proposal within a specific category so it can be created faster. A rep can use one as-is, modify it, or create a new one from scratch.",
        },
        {
          type: "video",
          src: "/images/work/proposal-templates.mp4",
          poster: "/images/work/proposal-templates.webp",
          label:
            "Screencast of the template listing page, showing proposals kept within a category so a rep can reuse, modify, or start one from scratch",
          caption: "Template listing page.",
          aspect: "2940 / 1594",
        },
        {
          type: "moduleHeader",
          title: "Catalogue Management",
          description:
            "The shared catalogue behind both estimate types: itemized, a line-by-line breakdown of items and price, and roof system, a build-specific estimate. Every catalogue entry carries its own set of instructions and price.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/proposal-catalog.webp",
            alt: "The catalogue management module",
          },
          caption: "Catalog management module.",
        },
        {
          type: "moduleHeader",
          title: "Settings",
          description:
            "Centralized configuration for how assessments and proposals behave across the team.",
        },
        {
          type: "video",
          src: "/images/work/proposal-settings.mp4",
          poster: "/images/work/proposal-settings.webp",
          label:
            "Screencast of the settings page, the centralized configuration for how assessments and proposals behave across the team",
          caption: "Settings page.",
          aspect: "2940 / 1594",
        },
        {
          type: "moduleHeader",
          title: "Digital Contract Signing",
          description:
            "Once a proposal is approved, rep and homeowner complete the agreement digitally, and it becomes part of the connected project inside the CRM.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/proposal-signing.webp",
            alt: "Proposal signing enabled for the customer",
          },
          caption: "Proposal Signing enabled for Customer.",
        },
        {
          type: "moduleHeader",
          eyebrow: "INSIDE THE BUILDER",
          title: "An AI agent that drafts the proposal, then stays to refine it",
          description:
            "The slowest part of a rep's day was never the pricing or the signature, it was staring at a blank proposal after a long inspection. Now a rep just describes the job in a prompt and gets a full draft back. The agent uses the assessment data when there is one, and works from the prompt alone when there isn't. From there it keeps working inline: a rep can ask it to rewrite one section, adjust the scope, or re-price a line item, without starting over.",
        },
        {
          type: "video",
          src: "/images/work/proposal-ai-generator.mp4",
          poster: "/images/work/proposal-ai-generator.webp",
          label:
            "Screencast of the AI proposal generator drafting a complete proposal from a prompt, then refining individual sections inline",
          caption: "AI Proposal generator.",
          aspect: "2940 / 1594",
        },
        {
          type: "definitionCards",
          items: [
            {
              term: "Prompt to draft",
              description:
                "One prompt, informed by the job's own assessment data, produces a complete first draft, sections, scope language, and starting pricing already in place.",
            },
            {
              term: "Inline refinement",
              description:
                "The rep keeps editing by hand or asks the agent to change one specific part, the agent never rewrites what wasn't asked for.",
            },
          ],
        },
        {
          type: "moduleHeader",
          title:
            "The same AI editor restructures the proposal, not just its wording.",
          description:
            "Rewriting a paragraph was never the whole job. A proposal often needs a section added for something the homeowner asked about, one removed because it doesn't apply, or the order changed. The AI editor handles this the same way it handles wording: on request, in place, without the rep leaving the builder.",
        },
        {
          type: "video",
          src: "/images/work/proposal-ai-editor.mp4",
          poster: "/images/work/proposal-ai-editor.webp",
          label:
            "Screencast of the AI proposal editor restructuring a proposal in place, adding, removing, and reordering sections, not just rewording",
          caption: "AI Proposal editor.",
          aspect: "2940 / 1594",
        },
      ],
    },
    {
      id: "status",
      number: "07",
      label: "STATUS & WHAT'S NEXT",
      title: "Shipped, and Still Being Refined",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "This has already launched and is in active use by the sales team, it isn't a pilot. From here, the work continues: testing with real reps, fixing what usage shows doesn't work, and improving it step by step. So instead of an impact section, here's an honest status report: what's shipped, what's being refined now, and what's still ahead.",
          ],
        },
        {
          type: "statusCards",
          items: [
            {
              label: "Shipped",
              tone: "done",
              bullets: [
                "Assessment module, inspection, damage capture, photos, documents",
                "Proposal builder with itemized and roof system estimate types, linked or standalone",
                "Templates and catalogue management",
                "AI agent for prompt-to-draft and always-on inline editing",
              ],
            },
            {
              label: "In active use, refining now",
              tone: "active",
              bullets: [
                "Refining the overall experience based on how reps actually use it day to day",
                "Enhancing the AI editing experience with support for documents and reference material",
                "Linking CompanyCam, a job-photo app, to sync assessment photos automatically",
                "Deeper CRM data linkage beyond the property address that's already connected",
              ],
            },
          ],
        },
        {
          type: "titledList",
          eyebrow: "WHAT WE'VE LEARNED SO FAR",
          items: [
            {
              title:
                "A shared schema beats a synced copy, even when it's slower to build",
              description:
                "Integrating Roofr would have shipped faster. Building on the CRM's own job record took longer, but it removed the seam instead of automating it.",
            },
            {
              title:
                "Flexibility has to live in the proposal, not just the template",
              description:
                "Templates alone couldn't cover every roofing service. The real fix was making proposal sections rebuildable per job, with templates as a starting point.",
            },
            {
              title: "Approval is a workflow event, not a signature",
              description:
                "Treating homeowner approval as a state change on the job, not an email to notice, is what let the contract-signing step trigger the job automatically.",
            },
            {
              title:
                "Building next to a live CRM changes how you sequence work",
              description:
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
      src: "/images/work/relay-hero.webp",
      alt: "Relay Hub open on a laptop, with a document and an ask-anything chat panel side by side",
    },
  },
};
