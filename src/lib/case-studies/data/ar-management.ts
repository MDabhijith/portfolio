import type { CaseStudy } from "../types";

export const arManagement: CaseStudy = {
  slug: "ar-management",
  category: "Healthcare Revenue Recovery",
  client: "Spectrum Health Solutions",
  year: "2023",
  title: "Giving an AR Team One Place to Track and Resolve Claims",
  subtitle:
    "An Accounts Receivable module built into Spectrum Health Solutions' patient system. It gives the AR team one place to track claims, talk to insurers, and recover stuck revenue, instead of running a spreadsheet alongside the real system.",
  meta: [
    { label: "Company", value: "Spectrum Health Solutions" },
    { label: "Timeline", value: "2023" },
    { label: "Role", value: "Product Designer, team of 5" },
    { label: "Scope", value: "IA, UX, analytics dashboard, design system" },
  ],
  heroImage: {
    src: "/images/work/ar-banner.png",
    alt: "The AR Management analytics dashboard: total A/R receivable, claim vs. paid and claim vs. follow-up trends, top denied reasons and top CPT codes paid",
  },
  outcomeHighlight: {
    eyebrow: "WHAT AR MANAGEMENT REPLACES",
    summary:
      "Instead of a spreadsheet living outside the real system, one module where every charge, insurer call, and rejection reason lives with the claim itself.",
    stats: [
      {
        value: "5",
        caption: "aging buckets, from 0-30 days to 120+, driving triage",
      },
      { value: "80%", caption: "of pending claims recovered after launch" },
      {
        value: "Analytics",
        caption:
          "detailed trends and rollups, built for high-level and detail-oriented decisions alike",
      },
    ],
  },
  sections: [
    {
      id: "who-why-what",
      number: "00",
      label: "WHO, WHY, WHAT",
      title: "Built for the Team Standing Between a Claim and Its Revenue",
      blocks: [
        {
          type: "keyValue",
          rows: [
            {
              label: "Who",
              value:
                "The internal AR team at Spectrum Health Solutions, who chase down stalled insurance claims for healthcare providers. And the providers themselves, whose revenue depends on those claims getting paid.",
            },
            {
              label: "Why",
              value:
                "Claims stalled at insurers with no single place to see what was needed to resolve them. About 80% of pending claims sat untouched, because the data needed to act on them lived in a spreadsheet, not in the system where the work actually happened.",
            },
            {
              label: "What",
              value:
                "An AR Management module added directly into the existing patient system: charge tracking by age, one consolidated claim view, and an analytics dashboard, replacing the Excel workflow running alongside it.",
            },
          ],
        },
      ],
    },
    {
      id: "research",
      number: "01",
      label: "RESEARCH & DISCOVERY",
      title: "How the AR Team Actually Worked a Claim",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Before designing anything, I watched AR specialists work their existing spreadsheet-and-system routine, sat in on insurer calls, and talked to the practice owners waiting on that revenue.",
          ],
        },
        {
          type: "personaSwitcher",
          eyebrow: "WHO A CLAIM PASSES THROUGH",
          meta: "2 personas",
          personas: [
            {
              id: "priya",
              label: "AR Specialist",
              name: "Priya",
              role: "AR specialist · claim → resolution",
              demographics: [],
              bio: "",
              motivations: [],
              goals: [],
              frustrations: [],
              quote: "",
              cardImage: {
                src: "/images/work/ar-persona-priya.webp",
                alt: "Persona card for Priya, AR Specialist: tagline, attributes, bio, demographics, tech usage, goals and frustrations",
                aspect: "2560 / 2518",
              },
            },
            {
              id: "marcus",
              label: "Practice Owner",
              name: "Marcus",
              role: "Practice owner · revenue visibility",
              demographics: [],
              bio: "",
              motivations: [],
              goals: [],
              frustrations: [],
              quote: "",
              cardImage: {
                src: "/images/work/ar-persona-marcus.webp",
                alt: "Persona card for Marcus, Practice Owner: tagline, attributes, bio, demographics, tech usage, goals and frustrations",
                aspect: "2560 / 2338",
              },
            },
          ],
        },
        {
          type: "moduleHeader",
          eyebrow: "JOBS TO BE DONE",
          description:
            "Each job follows the same pattern: when this happens, I want to do this, so I can get that outcome, whether it's Priya resolving a claim, Marcus checking AR health, or the team handing one off.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/ar-jtbd-framework.webp",
            alt: "Jobs to be Done framework table for AR Management: executor, job statement, pain point, and desired outcome for Priya (AR Specialist), Marcus (Practice Owner), and the AR Team",
          },
          aspect: "2000 / 1643",
        },
        {
          type: "moduleHeader",
          eyebrow: "JOURNEY MAP",
          eyebrowTrailing: "BEFORE VS. AFTER",
          title: "Before · Excel + system",
        },
        {
          type: "list",
          items: [
            "Open Excel to check which claims are aging and by how much.",
            "Check the patient system separately for visit and insurance details.",
            "Call the insurer without a record of prior rejection reasons or notes.",
            "Manually update the spreadsheet with whatever happened on the call.",
            "Leadership requests an AR summary. Someone rebuilds it from scratch.",
          ],
        },
        { type: "moduleHeader", title: "After · AR Management" },
        {
          type: "list",
          items: [
            "Open the Charge List, already sorted into aging buckets.",
            "Open the charge: insurance, payment, and visit details are already together.",
            "Call the insurer with prior status history and rejection reasons visible.",
            "Log the outcome directly on the charge. Follow-up date sets itself.",
            "Leadership opens the Analytics Dashboard. The numbers are already there.",
          ],
        },
      ],
    },
    {
      id: "background",
      number: "02",
      label: "BACKGROUND",
      title: "Claims Stuck at the Insurer, Revenue Stuck With Them",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Spectrum Health Solutions' Accounts Receivable team is the last step between a patient visit and the revenue it should bring in. When a claim stalled at an insurance company, the specialist calling to resolve it needed the full picture in one place: patient details, visit history, past claim status, and rejection reasons.",
            "They didn't have it. The patient system held the clinical and billing record, but claim status, follow-up dates, and notes lived in spreadsheets updated by hand. Every insurer call meant checking two sources before the conversation could even start. With no single view of what was aging and why, nearly 80% of pending claims sat unresolved, revenue the business had already earned but couldn't collect.",
          ],
        },
        {
          type: "callout",
          eyebrow: "PROBLEM STATEMENT",
          title:
            "Claim data lived in Excel. The actual work happened in the patient system. So nothing about a claim's status, history, or urgency was ever in one place.",
        },
        { type: "moduleHeader", eyebrow: "SCOPE" },
        {
          type: "taggedList",
          variant: "wide",
          items: [
            {
              tag: "01",
              tone: "neutral",
              title:
                "Discovery with the internal AR team and review of the parallel Excel-based workflow.",
              description: "",
            },
            {
              tag: "02",
              tone: "neutral",
              title:
                "IA and UX for charge tracking, aging buckets, and claim-status workflows.",
              description: "",
            },
            {
              tag: "03",
              tone: "neutral",
              title:
                "Detailed charge view consolidating insurance, patient, and payment data.",
              description: "",
            },
            {
              tag: "04",
              tone: "neutral",
              title:
                "Analytics dashboard design for claims, denials, follow-ups, and payer trends.",
              description: "",
            },
          ],
        },
        {
          type: "quote",
          quote:
            "I have the spreadsheet open in one window and the patient record in another, and I'm still not sure which one is right by the time I get the insurer on the phone.",
          attribution: "AR team member, early discovery",
        },
      ],
    },
    {
      id: "problem",
      number: "03",
      label: "PROBLEM",
      title: "A Workflow Split Across Two Systems That Never Agreed",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Talking to the AR team surfaced the same few breakdowns, again and again, each one a direct cause of stalled revenue.",
          ],
        },
        {
          type: "numberedFindings",
          items: [
            {
              number: "01",
              title: "Two sources of truth, always slightly out of sync",
              description:
                "The patient management system held the clinical and billing record. Claim status, follow-up dates, and notes lived in Excel, kept current by whoever last remembered to update it.",
            },
            {
              number: "02",
              title: "No way to prioritize by urgency",
              description:
                "Without aging visibility, the team worked whatever was on top of the list rather than the oldest or highest-value claims first.",
            },
            {
              number: "03",
              title: "Rejection reasons were tribal knowledge",
              description:
                "Why a claim was denied lived in someone's memory or a comment in a cell, not somewhere the next person touching that charge could find it.",
            },
            {
              number: "04",
              title: "No record of what was said or done",
              description:
                "A call to an insurer, a resubmission, a status change: none of it was logged anywhere a teammate or manager could review later.",
            },
            {
              number: "05",
              title: "Leadership had no visibility into AR health",
              description:
                "There was no aggregate view of total outstanding, denial rates, or which payers were slow. Every question meant someone manually pulling numbers from the spreadsheet.",
            },
          ],
        },
        {
          type: "callout",
          eyebrow: "THE GUIDING QUESTION",
          title:
            "What if the AR team's data and their actions lived in the same tool the rest of the business already trusted?",
        },
      ],
    },
    {
      id: "approach",
      number: "04",
      label: "APPROACH & DECISIONS",
      title: "Six Decisions That Moved AR Into One System",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Each decision closed a specific gap between where the data lived and where the work actually happened.",
          ],
        },
        {
          type: "taggedList",
          variant: "wide",
          items: [
            {
              tag: "01",
              tone: "positive",
              title:
                "Built AR Management as a native module inside the existing patient management system, not a parallel tool.",
              description:
                "Splitting data and action across two tools meant the team was always reconciling instead of working.",
            },
            {
              tag: "02",
              tone: "positive",
              title:
                "Charge list is bucketed by aging: 0-14, 14-30, 30-60, 60-90, 90-120, 120+ days, so the team triages oldest-first.",
              description:
                "Working claims in no particular order meant the oldest, highest-risk revenue kept slipping further behind.",
            },
            {
              tag: "03",
              tone: "positive",
              title:
                "Every charge opens into one detail page with insurance, payment, and visit data together.",
              description:
                "A call to the insurer required piecing together patient, insurance, and claim history from multiple screens.",
            },
            {
              tag: "04",
              tone: "positive",
              title:
                "Added status-based claim processing that tracks each stage and the specific reason behind a rejection.",
              description:
                "Rejection reasons and claim stages existed only in memory or scattered notes.",
            },
            {
              tag: "05",
              tone: "positive",
              title:
                "Added a comment and status history on every charge, so any teammate can see exactly what happened and when.",
              description:
                "No record existed of what was said, changed, or decided on a charge.",
            },
            {
              tag: "06",
              tone: "positive",
              title:
                "Built an Analytics Dashboard as a real module, not an afterthought, surfacing denial trends by payer, aging totals, and CPT-level revenue so the business could act on AR instead of just tracking it.",
              description:
                "Leadership had no visibility into AR health and kept requesting numbers no one could produce without hand-building a report.",
            },
          ],
        },
      ],
    },
    {
      id: "workflow",
      number: "05",
      label: "WORKFLOW",
      title: "One Charge, From Aging Bucket to Resolution",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "An AR specialist doesn't hunt for what to work on next. The system surfaces it, and every action taken is recorded against the charge itself.",
          ],
        },
        {
          type: "workflowTimeline",
          steps: [
            {
              title: "Charge lands in an aging bucket",
              actor: "SYSTEM",
              actorTone: "accent",
              description:
                "A completed visit's charge is tracked from day one and automatically moves buckets as it ages: 0-14 through 120+ days.",
              tags: ["Charge Management"],
            },
            {
              title: "AR specialist opens the Charge List",
              actor: "AR SPECIALIST",
              actorTone: "muted",
              description:
                "Filtered by bucket or status, the specialist works oldest and highest-risk charges first instead of whatever's on top.",
              tags: ["Charge Management"],
            },
            {
              title: "Charge Details surfaces full context",
              actor: "AR SPECIALIST",
              actorTone: "muted",
              description:
                "Insurance, payment, patient, and visit details, plus prior status history, load together before any call is made.",
              tags: ["Charge Management"],
            },
            {
              title: "Specialist contacts the insurer and logs the outcome",
              actor: "AR SPECIALIST",
              actorTone: "muted",
              description:
                "Claim status, rejection reason (if denied), and a comment are recorded directly on the charge.",
              tags: ["Denial Management", "Follow-Ups"],
            },
            {
              title: "Follow-up date is set and tracked",
              actor: "SYSTEM",
              actorTone: "accent",
              description:
                "If the claim isn't resolved, a due-on-date follow-up task keeps it visible until it is.",
              tags: ["Task Management"],
            },
            {
              title: "Resolution rolls up into analytics",
              actor: "SYSTEM",
              actorTone: "accent",
              description:
                "Paid, denied, and outstanding totals update the dashboard leadership uses to track AR health and payer performance.",
              tags: ["Analytics Dashboard"],
            },
          ],
        },
      ],
    },
    {
      id: "the-system",
      number: "06",
      label: "THE SYSTEM",
      title: "Charge Tracking, Follow-Up, and Analytics as One Module",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Every screen exists to answer one of three questions: what needs attention now, what happened on this charge, and how is the whole book of AR trending.",
          ],
        },
        {
          type: "moduleNav",
          groups: [
            {
              eyebrow: "CHARGE TRACKING",
              count: "Where the work happens",
              modules: ["Charge Management", "Charge List", "Aging Buckets"],
            },
            {
              eyebrow: "RESOLUTION",
              count: "Working a claim to close",
              modules: [
                "Denial Management",
                "Follow-Ups",
                "Patient Responsibility",
                "Task Management",
              ],
            },
            {
              eyebrow: "VISIBILITY",
              count: "Rolling up the whole book",
              modules: ["Analytics Dashboard", "Revenue Reports"],
            },
          ],
        },
        {
          type: "moduleHeader",
          eyebrow: "WHY THE CHARGE LIST SITS AT THE CENTER",
          description:
            "Every charge is grouped by how long it's been outstanding: 0-14, 14-30, 30-60, 60-90, 90-120, and 120+ days. That way the team works the oldest, highest-risk claims first, not whatever a spreadsheet happened to have open. Opening a charge shows everything at once: patient and visit details, insurance, payment details, and a full history of status changes and comments, so a call to the insurer starts already informed.",
        },
        { type: "moduleHeader", eyebrow: "WHAT EACH MODULE DOES" },
        {
          type: "moduleHeader",
          title: "Charge List & Aging Buckets",
          description:
            "Every charge gets sorted into an aging bucket the moment it's created. The list can be filtered by bucket, status, or insurer, so the team always knows what's oldest and most at risk.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/ar-charge-list.webp",
            alt: "The Charge List, with charges grouped into aging buckets and filterable by bucket, status, and insurer",
          },
          aspect: "1435 / 1080",
        },
        {
          type: "definitionCards",
          items: [
            {
              term: "The design decision",
              description:
                "Early versions listed all charges in one flat table sorted by date created. It didn't surface urgency, so aging buckets were added as the primary way to slice the list.",
            },
            {
              term: "The impact",
              description:
                "The team could work oldest-and-highest-risk claims first instead of whatever happened to be visible, directly shrinking the backlog of aged claims.",
            },
          ],
        },
        {
          type: "moduleHeader",
          title: "Charge Details",
          description:
            "Opening a charge shows everything a specialist needs before calling an insurer: insurance details, payment and patient balances, visit information, and a full history of status changes and comments.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/ar-charge-details.webp",
            alt: "The Charge Details page, consolidating insurance, payment, patient and visit information with a status and comment history",
          },
          aspect: "1440 / 1150",
        },
        {
          type: "definitionCards",
          items: [
            {
              term: "The design decision",
              description:
                "Insurance, payment, and history were originally three separate tabs. Watching specialists flip between them mid-call on the phone with an insurer is what drove consolidating it into one page.",
            },
            {
              term: "The impact",
              description:
                "Specialists walked into insurer calls already informed, cutting the back-and-forth that used to stall a single follow-up call.",
            },
          ],
        },
        {
          type: "moduleHeader",
          title: "Denial Management",
          description:
            "Denied claims are tracked with the exact rejection reason: missing information, incorrect patient info, coding errors, or expired eligibility, so the team can fix the actual cause instead of resubmitting blind.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/ar-denial-management.png",
            alt: "The denial management view showing denial trends, top denial reasons, and payer-level breakdowns",
          },
          aspect: "2880 / 1668",
        },
        {
          type: "moduleHeader",
          title: "Follow-Ups & Task Management",
          description:
            "Follow-up dates and to-dos are tracked per charge and surface as due-on-date notifications, so nothing waiting on an insurer response gets forgotten.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/ar-follow-up-management.png",
            alt: "The Follow-Ups & Task Management view showing due-on-date notifications and to-dos tracked per charge",
          },
          aspect: "2880 / 1916",
        },
        {
          type: "moduleHeader",
          title: "Analytics Dashboard",
          description:
            "The most important screen in the product: claim vs. paid, claim vs. denial, and claim vs. follow-up trends, total AR outstanding, top denial reasons, top CPT codes paid, and which payers deny the most, all in one view leadership can act on instead of a black box.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/ar-analytics.webp",
            alt: "The Analytics Dashboard showing claim, paid, denial and follow-up trends alongside top denial reasons, CPT codes and payers",
          },
          aspect: "1440 / 1755",
        },
        {
          type: "definitionCards",
          items: [
            {
              term: "The design decision",
              description:
                "Analytics wasn't part of the original scope. It came from leadership repeatedly asking for numbers no one could produce without manually working the spreadsheet. Once built, it became the module leadership opened most, so it kept growing: payer-level denial trends, top CPT codes paid, and top insurances paid were all added after launch.",
            },
            {
              term: "The impact",
              description:
                "This module has the clearest line to revenue. Showing which payers deny most and why turned denial management from reactive to targeted, and gave leadership a live view of AR health instead of a monthly manual pull. It's the single biggest reason behind the 80% claim recovery number.",
            },
          ],
        },
        {
          type: "titledList",
          eyebrow: "OPEN DESIGN TENSIONS",
          items: [
            {
              title: "Detail vs. speed",
              description:
                "A charge page rich enough for any insurer question risks becoming slow to scan for a routine follow-up.",
            },
            {
              title: "Structure vs. flexibility",
              description:
                "A fixed claim-status pipeline keeps reporting consistent, but not every payer's process maps cleanly onto it.",
            },
            {
              title: "Automation vs. accountability",
              description:
                "Automating reminders and bucket movement reduces manual tracking, but the team still needs a clear record of who did what.",
            },
          ],
        },
      ],
    },
    {
      id: "impact",
      number: "07",
      label: "OUR IMPACT",
      title: "One System for AR, and the Revenue It Recovered",
      blocks: [
        {
          type: "taggedList",
          variant: "wide",
          items: [
            {
              tag: "REVENUE",
              tone: "positive",
              title: "~80% of pending claims recovered",
              description:
                "Consolidated visibility and aging-based triage moved previously stuck claims through to resolution.",
            },
            {
              tag: "ANALYTICS",
              tone: "positive",
              title: "AR health, visible for the first time",
              description:
                "Payer-level denial trends and aging totals let the team target the specific payers and rejection reasons costing the most revenue, instead of working claims in the dark.",
            },
            {
              tag: "EFFICIENCY",
              tone: "positive",
              title: "~60% less spreadsheet work",
              description:
                "Charge tracking, status, and history all live in the system of record instead of a manually maintained Excel file.",
            },
            {
              tag: "COMMUNICATION",
              tone: "positive",
              title: "Clear, shared record of every claim",
              description:
                "Status history and comments gave the team and leadership one consistent account of where a claim stood and why.",
            },
          ],
        },
        {
          type: "titledList",
          eyebrow: "WHAT WE'VE LEARNED SO FAR",
          items: [
            {
              title:
                "The system of record has to include the workflow, not just the data",
              description:
                "Holding the billing data wasn't enough without holding the workflow too, and that gap is exactly what Excel filled by default. Bringing the workflow into the same system removed the reason for a shadow tool to exist.",
            },
            {
              title: "Aging is the single most useful lens for triage",
              description:
                "Of every way to slice the charge list, bucketing by days outstanding did the most to change behavior. It made the highest-risk work visible by default instead of requiring someone to go looking for it.",
            },
            {
              title:
                "The pain point behind analytics was as urgent as the one behind charge tracking",
              description:
                "The dashboard wasn't in the original scope. But leadership couldn't see why 80% of claims were stuck, any more than the AR team could act on them. Both were the same visibility problem, just at a different level. Treating analytics as a real module instead of a bolted-on report is what made it the biggest lever on the recovery number.",
            },
          ],
        },
      ],
    },
  ],
  nextProject: {
    href: "/work/roofing-workflow-management",
    eyebrow: "ROOFING CRM",
    title: "A Product-First Approach to Roofing Workflow Management",
    description:
      "Priority Roofing ran its entire operation across QuickBooks, Roofr, and a stack of Excel sheets, none of which talked to each other. We designed and built a single CRM that carries a job from a knock on the door to a paid commission.",
    image: {
      src: "/images/work/roofing-card-cover.webp",
      alt: "The Priority Roofing CRM dashboard on a laptop beside the mobile app on a phone",
    },
  },
};
