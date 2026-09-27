import type { CaseStudy } from "../types";

export const aiProposalBuilder: CaseStudy = {
  slug: "ai-proposal-builder",
  category: "Roofing Proposal Management",
  client: "Priority Roofing",
  year: "2026",
  title: "An AI Proposal Builder, Synced to the CRM",
  subtitle:
    "The CRM gave every job one home in production, but proposals still lived in Roofr, disconnected, every one starting from a blank page. So we built our own proposal app, synced to the CRM by job and property address, with an AI editor at its center: describe the job in a prompt, get a full draft back, then shape it in conversation until it's ready to send.",
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
      "Not a redesign of Roofr. A standalone AI-first proposal app, synced to the CRM by job and address, built around one conversation: describe the job, get a complete draft, then refine it by talking to it, without retyping anything the CRM already has.",
    stats: [
      {
        value: "40% → 60%",
        caption:
          "proposal drafting completion rate before and after the AI editor shipped",
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
      title: "Before the Agent, Every Proposal Was Typed From Scratch",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Once the Roofing CRM shipped, a job had one home from won to paid. But a job had to be won first, and that front half, the assessment and the proposal, happened outside the CRM, inside a third-party tool called Roofr. Roofr had no intelligence in it: it measured roofs and handed a rep a form, one section, one line, one price, typed by hand, disconnected from every piece of data the CRM already held about that customer and job. A rep who'd just qualified a prospect inside the CRM left it entirely to write a proposal from nothing, with no system reading the job for them.",
          ],
        },
        {
          type: "systemComparison",
          items: [
            {
              name: "Roofr",
              subtitle: "Assessment & proposals",
              held: "Roof measurements, damage assessment, and a manual proposal form.",
              gap: "Fully disconnected from the CRM, and nothing in it drafted anything. Every proposal began blank, no matter how many times a rep had built one like it.",
            },
            {
              name: "The CRM",
              subtitle: "Everything after a job is won",
              held: "Production, scheduling, materials, and commissions for a job already in motion.",
              gap: "No way to receive a job before it existed, or read one and act on it. The front half of the sale happened somewhere else entirely.",
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
      title: "Nothing Here Was Smart, and Reps Paid for It Every Time",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "This was the same problem the CRM had already solved, showing up again on the other side of the job. Not a missing integration, a missing layer of intelligence, nothing here could read a job and act on it. Five issues kept coming up.",
          ],
        },
        {
          type: "insightCards",
          variant: "problem",
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
                "Reps re-typed customer and job details by hand, while photos, damage notes, and documents ended up split across whatever tool was open.",
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
            {
              number: "05",
              title: "Every proposal started from a blank page",
              description:
                "No faster way in, even a rep who'd built the same roof-system proposal fifty times still typed it from zero. The tool meant to save time cost the same amount every time.",
            },
          ],
        },
        {
          type: "callout",
          eyebrow: "THE PATTERN UNDER ALL FIVE",
          title:
            "Every fix here needed the proposal to start already knowing the job, not a rep starting from nothing.",
        },
      ],
    },
    {
      id: "research-audit",
      number: "03",
      label: "RESEARCH & AUDIT",
      title: "Testing Whether Reps Would Actually Trust an Agent to Draft for Them",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Before designing a replacement for Roofr, I traced a real proposal start to finish, from booking the assessment to the homeowner's signature, and talked to everyone involved. Not a feature audit. Two questions mattered more than any missing-feature list: was there enough structured data to ground an AI agent in the job, and would a rep actually trust a machine-written draft enough to send it.",
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
              bio: "Qualifies the lead in the CRM, then builds the proposal in Roofr from nothing. Measures the roof, photographs the damage, and wants the proposal out before he leaves the driveway, since the homeowner is collecting quotes from two other companies this week. Skeptical a machine could write something he'd send without rewriting it first.",
              motivations: [
                "First good proposal in the door usually wins the job",
                "Commission depends on closing, not on quoting",
                "Wants a draft, not a form, to start from",
              ],
              goals: [
                "Describe the job once and get a proposal back, not a blank one",
                "Trust the draft enough to send it with light edits, not a rewrite",
                "Stay in control of anything the agent changes",
              ],
              frustrations: [
                "Typing the same proposal shape from zero on every single job",
                "Not knowing if he can trust a number he didn't calculate himself",
                "Worried an AI draft would read generic instead of like his own pitch",
              ],
              quote:
                "If it can write the first draft in the truck before I even get home, I'll try it. The second it gets a price wrong, I stop trusting it completely.",
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
              bio: "A storm took half the shingles off a roof he's never had to replace before. He's comparing three quotes on his phone after work, none describing the same scope the same way, deciding on the largest purchase this house has needed. He never knows a machine helped write what he's reading, that was the point: it has to read like the rep wrote it for him, not a form letter.",
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
                "Language that reads generic, like nobody actually looked at his roof",
                "No idea what happens, or when, after he signs",
              ],
              quote:
                "It's the biggest thing I've bought for this house and I'm reading it on my phone at eleven at night. If it reads like a form letter, I'm calling the other guy.",
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
              bio: "Starts the job once the homeowner signs. The signature happens inside Roofr, so she learns about it when a rep forwards the email, then rebuilds in the CRM a deal already fully specified elsewhere before she can schedule anything. The most skeptical voice on letting a machine touch pricing at all.",
              motivations: [
                "Jobs that start on the date the homeowner was told",
                "A scope she can trust without calling the rep to confirm it",
                "Proof an AI draft can't quietly invent a price or a scope item",
              ],
              goals: [
                "Learn a proposal was approved without being told",
                "Trust that anything an agent priced came from the real catalogue",
                "See clearly when a number is a real quote versus a rough draft",
              ],
              frustrations: [
                "Approval arrives as a forwarded email, or not at all",
                "No way to tell a rep's price from a machine's guess",
                "Worried an AI mistake would reach a homeowner before anyone catches it",
              ],
              quote:
                "I'll trust it the day it can't price something that isn't in our own catalogue. Until then, I need to see exactly what it touched.",
            },
          ],
        },
        {
          type: "qaPanel",
          eyebrow: "STAKEHOLDER SESSION",
          meta: "3 roles · 9 questions",
          description:
            "Every session came back to the same question, phrased differently per role: could a system that reads the job and drafts on its own actually be trusted here.",
          items: [
            {
              role: "Sales Reps",
              detail: "Assessment → close",
              questions: [
                "If you described a job in a sentence and got a full draft back, would you send it, or rewrite it?",
                "What would an AI-written proposal need to get right before you'd trust its price?",
                "How much do you want to keep typing yourself versus handing to a system?",
              ],
            },
            {
              role: "Back Office",
              detail: "Approval, contracts, job creation",
              questions: [
                "What would you need to see to trust that a machine wrote this proposal correctly?",
                "Where's the line on what an agent should be allowed to change without asking first?",
                "What's the one AI mistake that would make you shut the whole thing off?",
              ],
            },
          ],
        },
        {
          type: "image",
          image: {
            src: "/images/work/proposal-audit-roofr.webp",
            alt: "Roofr's manual proposal form, the blank starting point every rep faced with nothing read from the job",
          },
        },
        {
          type: "insightCards",
          items: [
            {
              number: "01",
              title: "The data to ground an agent already existed, just scattered",
              description:
                "The job, the customer, the assessment, the catalogue, everything an agent needed was already captured somewhere, just across three disconnected tools instead of one schema it could read.",
            },
            {
              number: "02",
              title: "Trust would live or die on the first wrong price",
              description:
                "Every rep and back-office session landed on the same line: one bad number, and they'd never trust a draft again. Confidence had to be earned before speed even mattered.",
            },
            {
              number: "03",
              title: "Nobody wanted automation, they wanted a draft they could argue with",
              description:
                "Reps didn't want a black box sending proposals on its own. They wanted a starting draft and a way to talk back to it, control had to stay visibly theirs.",
            },
          ],
        },
        {
          type: "callout",
          eyebrow: "THE GUIDING QUESTION",
          title:
            "What if a rep could describe a job in a sentence and actually trust what came back?",
        },
      ],
    },
    {
      id: "approach",
      number: "04",
      label: "APPROACH",
      title: "Build Our Own App, Not Bolt Onto Roofr",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The first real decision wasn't a screen, it was whether to integrate Roofr's API or build our own app. Integrating would have synced the two systems, but reps would still open Roofr itself, blank forms and all, with no room for the AI layer we wanted. We built our own standalone app instead, linked to the CRM the simple way: the same job and property address, so a rep never re-enters a customer or job, even with two products open.",
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
              title: "A standalone Proposal Management app, synced by the job",
              description:
                "Assessment, proposal, approval, and signing all live in their own app, linked back to the CRM by the same job and property address, so nothing a rep already entered has to be typed again.",
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
              label: "Put an AI agent inside the builder, not beside it",
              before: "Drafting a proposal from scratch was the slowest part of a rep's day →",
              after: "a prompt generates the full draft, and the same agent refines any section in place.",
            },
            {
              label: "Sync by the job, don't duplicate the record",
              before: "Assessments and proposals had no link to the job that already existed →",
              after: "linked to the CRM by the same job and property address, not copied into it.",
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
            "A prospect leaves the CRM's qualifying stage as a scheduled assessment, not a \"won job\" that shows up later from somewhere else. It moves forward as the same job, synced between the CRM and the proposal app by that job and address, through one flow, until a signed contract hands it to production.",
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
                "The first decision point: link the proposal to a scheduled on-site assessment, or start one directly when no assessment is needed.",
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
              title: "Proposal drafted from a prompt, or a template",
              actor: "SALES REP",
              actorTone: "muted",
              description:
                "A rep describes the job in a sentence or two and gets a full draft back, pulling from the linked assessment when there is one, or from a template when that's faster.",
              tags: ["Proposal", "Templates"],
            },
            {
              title: "Rep refines it by talking to the draft",
              actor: "SALES REP",
              actorTone: "muted",
              description:
                "Instead of hand-editing every field, a rep asks for changes in plain language, re-price this, rewrite that section, and the agent applies just that change.",
              tags: ["Proposal"],
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
                "A won proposal still becomes a job through a manual handoff today. Closing that gap with digital signing and automatic job creation is the next milestone.",
              tags: ["Proposal"],
            },
          ],
        },
      ],
    },
    {
      id: "ai-editor",
      number: "06",
      label: "INSIDE THE AI EDITOR",
      title: "The Feature the Whole App Was Built Around",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Every other module here keeps a job's data in one connected place instead of scattered across tools, synced back to the CRM by job and address rather than merged into it. But the AI editor is what makes that faster than the old way: a rep describes the job and keeps talking to the draft until it's right, which only works if the draft is trustworthy and easy to correct. Three decisions drove that: what the agent is grounded in, what it hands back, and what it does when it doesn't have enough to work with.",
          ],
        },
        {
          type: "moduleHeader",
          eyebrow: "DRAFTING",
          title: "One prompt, grounded in the job, returns a full draft",
          description:
            "The slowest part of a rep's day was staring at a blank proposal after a long inspection. Now they describe the job in a prompt and get a complete draft back, built from whatever the job already knows about itself.",
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
          type: "taggedList",
          items: [
            {
              tag: "GROUNDED",
              tone: "neutral",
              title: "Prompted with the job's own data, not typed from scratch",
              description:
                "The CRM and proposal builder stay separate tools, but the same job and property address link them, so a rep's CRM entries carry straight into the prompt, alongside the linked assessment, roof type, measurements, and recorded damage. With no assessment linked, it drafts from the prompt alone and marks pricing provisional instead of pretending it measured the roof.",
            },
            {
              tag: "STRUCTURED",
              tone: "neutral",
              title: "Outputs the builder's own schema, not paragraphs to paste in",
              description:
                "A draft comes back as sections, scope language, and catalogue-linked line items, the exact structure the builder already edits. Nothing generates as prose that has to be reformatted into the tool.",
            },
            {
              tag: "SCOPED",
              tone: "neutral",
              title: "Every inline edit is a diff, never a silent rewrite",
              description:
                "Ask it to re-price one line or rewrite one section and it changes only that. Everything else in the proposal stays exactly what the rep left it as.",
            },
          ],
        },
        {
          type: "keyValue",
          title: "What a Draft Actually Returns",
          variant: "card",
          rows: [
            {
              label: "Sections",
              value:
                "Matched one-to-one to the builder's section types, so a draft opens as an editable proposal, not text to restructure by hand.",
            },
            {
              label: "Line items",
              value:
                "Pulled only from the shared catalogue, itemized or roof-system, the agent can't invent a price outside it.",
            },
            {
              label: "Confidence flag",
              value:
                "Set to provisional whenever a draft is built from the prompt alone, with no assessment measurements behind it.",
            },
            {
              label: "Edit target",
              value:
                "A single section ID plus the requested change, not a full replacement proposal, is what an inline edit returns.",
            },
          ],
        },
        {
          type: "darkCallout",
          eyebrow: "WHAT CHANGED AFTER THE FIRST VERSION",
          rows: [
            {
              label: "The first draft agent rewrote the whole proposal on every request",
              before: "One tweak to a price meant re-reading the entire proposal to see what else moved →",
              after: "edits scoped to a single section, a diff, not a rewrite.",
            },
            {
              label: "Early drafts didn't say when they were guessing",
              before: "A prompt-only draft looked exactly as confident as one built from a real assessment →",
              after: "provisional pricing flagged the moment there's no assessment behind it.",
            },
            {
              label: "The agent used to invent scope items that weren't in the catalogue",
              before: "A generated line item with no matching price left a rep to catch it manually →",
              after: "unmatched items get flagged for the rep instead of priced automatically.",
            },
          ],
        },
        {
          type: "moduleHeader",
          eyebrow: "RESTRUCTURING",
          title:
            "The same AI editor restructures the proposal, not just its wording",
          description:
            "Rewriting a paragraph was never the whole job. A proposal often needs a section added, one removed, or the order changed. The AI editor handles this the same way it handles wording: on request, in place, without the rep leaving the builder.",
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
        {
          type: "taggedList",
          items: [
            {
              tag: "NO MATCH",
              tone: "negative",
              title: "A referenced item isn't in the catalogue",
              description:
                "The agent flags the line for the rep to resolve instead of inventing a price or a scope item that doesn't exist in the system.",
            },
            {
              tag: "MISSING DATA",
              tone: "negative",
              title: "No assessment is linked",
              description:
                "It still drafts from the prompt, but every price on that draft is marked provisional until a real assessment backs it.",
            },
            {
              tag: "AMBIGUOUS ASK",
              tone: "negative",
              title: "An edit request doesn't map to one section",
              description:
                "Rather than guessing which part of the proposal to change, the agent asks the rep to point at the section instead of touching the wrong one.",
            },
            {
              tag: "REVERSIBLE",
              tone: "positive",
              title: "Every AI edit can be undone",
              description:
                "Nothing the agent changes is final. A rep can step back to the version before any AI edit, drafting or refining, the same as undoing their own typing.",
            },
          ],
        },
      ],
    },
    {
      id: "the-system",
      number: "07",
      label: "THE SYSTEM",
      title: "The Six Modules the Agent Reads From and Writes Into",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The AI editor doesn't work in isolation, it reads and writes through the same six modules a rep would use by hand: daily selling work, the configuration that grounds and bounds the agent, and the admin layer that closes the loop.",
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
            "Gives reps visibility into their pipeline, assessments, proposals sent, approvals, and closed projects, plus recent activity at a glance.",
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
            "Inspect properties, record damage items, and capture photos and documents in one structured workflow, the grounding data the AI agent drafts from when a job has one linked.",
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
            "A flexible builder for customer proposals, customizing sections per roofing service, with every field linked to its CRM job. A rep chooses upfront whether the proposal is linked to an assessment or stands alone; an inline AI agent can draft it from a prompt either way, then refine sections as the rep edits.",
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
            "The fallback for when a rep would rather start from a known shape than a prompt. Templates keep a proposal within a category; a rep can use one as-is, modify it, or build a new one from scratch.",
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
            "The AI agent's price ceiling: it can only price what's in here. The shared catalogue behind both estimate types, itemized line items and build-specific roof systems, with every entry carrying its own instructions and price.",
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
      ],
    },
    {
      id: "status",
      number: "08",
      label: "STATUS & WHAT'S NEXT",
      title: "Shipped, and Still Being Refined",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "This has already launched and is in active use by the sales team, it isn't a pilot. From here, the work continues: fixing what usage shows doesn't work and improving it step by step. So instead of an impact section, here's an honest status report: what's shipped, what's being refined, and what's still ahead.",
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
          eyebrow: "IMPACT SINCE THE AI EDITOR SHIPPED",
          items: [
            {
              title: "The blank page is gone",
              description:
                "Every new proposal starts from a draft now, not a template hunt or an empty section list. Reps open the builder and prompt first; template-first is now the exception.",
            },
            {
              title: "Assessments turn into priced proposals same-day",
              description:
                "A draft that used to wait for a rep to sit down and write it now exists minutes after the inspection ends, still editable, but never starting from zero.",
            },
            {
              title: "Roofr logins are already dropping off",
              description:
                "Reps default to our own app even for jobs that don't strictly require it, nothing has to be retyped thanks to the CRM sync, and the AI draft is faster than anything Roofr offered, which was the entire bet behind building our own.",
            },
          ],
        },
        {
          type: "titledList",
          eyebrow: "WHAT WE'VE LEARNED SO FAR",
          items: [
            {
              title:
                "A light sync by the job beat a deep one, and it was enough",
              description:
                "Integrating Roofr's API would have shipped faster and kept both systems in sync. Building our own took longer, but linking it to the CRM by nothing more than job and property address was enough to remove the re-entry, without merging two products into one.",
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
                "Every module here had to work with production data the CRM already depended on daily, meaning a different ship order than a greenfield build would allow.",
            },
          ],
        },
        {
          type: "pilotSurveyChart",
          scaleNote: "% measured across the pilot sessions",
          max: 100,
          unit: "%",
          categories: [
            {
              label: "Proposal drafting completion",
              before: 40,
              after: 60,
            },
            {
              label: "Proposals with an AI edit",
              before: 25,
              after: 40,
            },
          ],
          headline:
            "Completion rose from 40% to 60%, and AI editing went from a rarely-touched feature to something used on 4 in 10 proposals.",
          analysis:
            "Reps were starting proposals and abandoning them before AI drafting existed, the blank page was the drop-off point. The inline editor built on that: once a rep had a full draft to react to instead of a form to fill in, editing by conversation read as faster than typing changes by hand, pulling both numbers up. Volume moved too: drafts went from an average of 12 a day to about 30, a rough read from job data, but directionally consistent with the rest of the pilot.",
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
      src: "/images/work/relay-hub-card-cover-new.png",
      alt: "The Relay Hub workspace, document view, and AI chat across three windows on a blue-to-teal gradient",
    },
    themeColor: "#00053d",
  },
};
