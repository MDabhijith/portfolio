import type { CaseStudy } from "../types";

export const roofingWorkflowManagement: CaseStudy = {
  slug: "roofing-workflow-management",
  category: "Roofing CRM",
  client: "Priority Roofing",
  year: "2025",
  title: "A Product-First Approach to Roofing Workflow Management",
  subtitle:
    "Priority Roofing ran its entire operation across QuickBooks, Roofr, and a stack of Excel sheets, none of which talked to each other. We designed and built a single CRM that carries a job from a knock on the door to a paid commission.",
  meta: [
    { label: "Company", value: "Priority Roofing (USA)" },
    { label: "Timeline", value: "Jun 2024 - 4 weeks" },
    { label: "Team", value: "Developers, Stakeholders, Tester, Product Designer" },
  ],
  heroImage: {
    src: "/images/work/roofing-hero.webp",
    alt: "The Priority Roofing CRM dashboard on a laptop beside the mobile app on a phone",
  },
  outcomeHighlight: {
    eyebrow: "THE OUTCOME, UP FRONT",
    summary:
      "One system now carries every job from the first door-knock to the final commission, the spreadsheets, the drift, and the dead-ends between tools, gone.",
    stats: [
      { value: "3 → 1", caption: "disconnected tools collapsed into one source of truth" },
      { value: "100%", caption: "off spreadsheets for Back Office & PM teams" },
      { value: "40%", caption: "faster job coordination, handoff to first action" },
    ],
  },
  sections: [
    {
      id: "background",
      number: "01",
      label: "BACKGROUND",
      title: "A growing business where no system owned the whole job",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Priority Roofing is a residential and insurance roofing contractor operating in the United States. Their business runs the full trade cycle, canvassing neighborhoods for storm and replacement work, estimating and closing homeowners, ordering materials, dispatching crews, passing inspections, and settling insurance claims and rep commissions. As volume grew, that operation outpaced the tools running it. A single job's truth was scattered across disconnected software, each good at one slice of the work, none aware of the others, plus whatever lived in someone's head. No one place could tell you where a job actually stood.",
          ],
        },
        {
          type: "systemComparison",
          items: [
            {
              name: "Quickbooks",
              subtitle: "Accounting & finance",
              held: "Customer records, invoicing, the financial book of record.",
              gap: "No operational data and no idea a job had a lifecycle, it saw money, not work.",
            },
            {
              name: "Roofr",
              subtitle: "Sales & estimating",
              held: "Roof measurements, proposals, and homeowner invoices.",
              gap: "Stopped at the sale. Nothing carried a won job into production.",
            },
            {
              name: "Excel",
              subtitle: "Everything operational",
              held: "Material orders, crew scheduling, crew & office fees, PM assignments, audits, commissions, draws.",
              gap: "Manual, unlinked, and unreadable to anyone but its author, one tab out of sync broke the job.",
            },
          ],
        },
        {
          type: "quote",
          quote:
            "QuickBooks knows the customer. Roofr made the proposal. Everything in between lives in a spreadsheet only one person can read.",
          attribution: "Back Office Lead, Priority Roofing",
        },
      ],
    },
    {
      id: "problem",
      number: "02",
      label: "PROBLEM",
      title: "No system owned the whole job",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The tools weren't the problem, the seams between them were. Every handoff meant re-keying the same job into another system, and every gap between tools was patched by hand. Four fault lines showed up again and again.",
          ],
        },
        {
          type: "insightCards",
          items: [
            {
              number: "01",
              title: "Three systems, one job",
              description:
                "The customer lived in QuickBooks, the proposal in Roofr, and everything that moved the job in Excel. No system held the whole picture.",
            },
            {
              number: "02",
              title: "Re-keyed at every handoff",
              description:
                "The same job was typed into each tool in turn. Numbers and addresses drifted apart, and no version was authoritative.",
            },
            {
              number: "03",
              title: "No modeled lifecycle",
              description:
                "Nothing represented the real sequence a job moves through, so status was a manual guess maintained in a spreadsheet column.",
            },
            {
              number: "04",
              title: "Field work was invisible",
              description:
                "Canvassing and new leads lived on paper and phones, disconnected from the pipeline until someone re-entered them by hand.",
            },
          ],
        },
      ],
    },
    {
      id: "research-audit",
      number: "03",
      label: "RESEARCH & AUDIT",
      title: "Following a job, not an org chart",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Before designing a single screen, I traced one job end-to-end and sat with every role that touched it. The goal was to map how work actually moved from role to role and where it fell into the cracks between systems.",
          ],
        },
        {
          type: "personaSwitcher",
          eyebrow: "WHO THE WORK RUNS THROUGH",
          meta: "3 personas",
          personas: [
            {
              id: "sales-rep",
              label: "Sales Rep",
              name: "Diego Alvarez",
              photo: {
                src: "/images/work/persona-sales-rep.webp",
                alt: "Portrait of Diego Alvarez, a sales rep, in a suit and tie",
              },
              role: "Sales Rep · canvassing → close",
              demographics: [
                { label: "Age", value: "29" },
                { label: "Tenure", value: "3 yrs" },
                { label: "Works from", value: "His truck" },
                { label: "Tech comfort", value: "High, phone-first" },
              ],
              summary:
                "Lives on a phone between driveways. Closes the deal, then loses sight of the job the moment it leaves his hands, but is still the one the homeowner calls for updates.",
              goals: [
                "Turn a door-knock into a job without re-typing it into three tools",
                "Know a signed deal actually reached production",
                "Answer a homeowner's status call without phoning the office",
              ],
              frustrations: [
                "Proposal, customer record, and job status live in different systems",
                "No signal when a closed job stalls after handoff",
                "Commission math is invisible until payout day",
              ],
              quote:
                "I close it, and then it disappears. The next thing I hear is the homeowner asking me when the crew is coming.",
            },
            {
              id: "project-manager",
              label: "Project Manager",
              name: "Omar Haddad",
              photo: {
                src: "/images/work/persona-project-manager.webp",
                alt: "Portrait of Omar Haddad, a project manager, in a hard hat and high-visibility vest holding a clipboard",
              },
              role: "Project Manager · scheduling, crews, inspections",
              demographics: [
                { label: "Age", value: "38" },
                { label: "Tenure", value: "6 yrs" },
                { label: "Works from", value: "Office + job sites" },
                { label: "Tech comfort", value: "Moderate, hates re-entry" },
              ],
              summary:
                "Holds the production calendar together. Decides what gets built when and by whom, working from a mental map of which job is really ready.",
              goals: [
                "See every job's true stage before committing a crew",
                "Catch a stalled job the day it stalls, not a week later",
                "Open one job and see materials, crew, and dates together",
              ],
              frustrations: [
                "Readiness lives in spreadsheets that go stale between updates",
                "Chasing the back office to confirm materials landed",
                "Rebuilding job context from scratch every morning",
              ],
              quote:
                "I don't find out a job is blocked. I find out a crew showed up and there was nothing to install.",
            },
            {
              id: "back-office",
              label: "Back Office",
              name: "Katie Doyle",
              photo: {
                src: "/images/work/persona-back-office.webp",
                alt: "Portrait of Katie Doyle, a back office coordinator, in a light blazer",
              },
              role: "Back Office Coordinator · materials, audits, commissions",
              demographics: [
                { label: "Age", value: "34" },
                { label: "Tenure", value: "5 yrs" },
                { label: "Works from", value: "Head office desk" },
                { label: "Tech comfort", value: "Expert in spreadsheets" },
              ],
              summary:
                "The last line of defense on data quality. Reconciles what sales promised against what production did, and turns both into orders, invoices, and payouts.",
              goals: [
                "Get one clean, auditable record per job",
                "Order materials off numbers they can trust",
                "Close out commissions and draws without manual reconciliation",
              ],
              frustrations: [
                "Re-keying the same job into QuickBooks, Roofr, and Excel",
                "Silent drift between the three copies of every record",
                "Absence or turnover erases the only person who knew the mapping",
              ],
              quote:
                "Half my week is making three systems agree on a job that only ever happened once.",
            },
          ],
        },
        {
          type: "qaPanel",
          eyebrow: "STAKEHOLDER SESSION",
          meta: "3 roles · 9 questions",
          description:
            "I sat with each role and walked their actual day rather than a documented process, anchoring every session on a few core questions about how work really moved.",
          items: [
            {
              role: "Sales Reps",
              detail: "Canvassing → close",
              questions: [
                "How does a door-knock or a lead actually become a job in the system?",
                "After you close, how do you know it moved into production?",
                "Where do you look when a homeowner calls for a status update?",
              ],
            },
            {
              role: "Back Office",
              detail: "Materials, audits, commissions",
              questions: [
                "Walk me through everything you touch after a job is submitted.",
                "What still lives in a spreadsheet that no tool holds for you?",
                "How do commissions and draws get calculated and paid out?",
              ],
            },
            {
              role: "Project Managers",
              detail: "Scheduling, crews, inspection",
              questions: [
                "How do you decide which job to schedule and which crew to send?",
                "When a job stalls between tools, how do you even find out?",
                "What would you need to see the moment you open a job?",
              ],
            },
          ],
        },
        {
          type: "browserGallery",
          images: [
            {
              src: "/images/work/sheets-mockup.webp",
              alt: "Spreadsheet tracking job and location data across multiple tabs",
            },
            {
              src: "/images/work/sheets-mockup-transforms.webp",
              alt: "Spreadsheet transform tab converting raw job submittal fields into structured data",
            },
            {
              src: "/images/work/sheets-mockup-office-inputs.webp",
              alt: "Spreadsheet office inputs tab tracking GAF warranty, material orders, and crew invoice details",
            },
          ],
        },
        {
          type: "insightCards",
          items: [
            {
              number: "01",
              title: "A job never lived in one place, it lived across three",
              description:
                "Every role kept a private mental map stitching the QuickBooks customer to the Roofr proposal to the right Excel rows. Any absence or staff change tore a hole in that map instantly.",
            },
            {
              number: "02",
              title: "The seams, not the tools, were the failure",
              description:
                "Each tool did its job well in isolation. The cost was every handoff between them: manual re-entry, drift, and no way to trust that any record was current.",
            },
            {
              number: "03",
              title: "Every role touched the same job through a different lens",
              description:
                "Reps needed lead and status context; PMs needed crews and materials; back office needed audits, invoices, and commissions. One job, but no shared view of it anywhere.",
            },
          ],
        },
        {
          type: "callout",
          eyebrow: "THE GUIDING QUESTION",
          title:
            "What if a job had one home from the first knock on the door to the last commission paid?",
        },
      ],
    },
    {
      id: "approach",
      number: "04",
      label: "APPROACH",
      title: "Decide what to own, what to keep, what to kill",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The biggest early decision wasn't a screen. It was scope. Ripping out the whole stack at once would have been a political and financial fight we'd lose. So we drew a clear line around what the CRM would own.",
          ],
        },
        {
          type: "taggedList",
          items: [
            {
              tag: "KEEP",
              tone: "neutral",
              title: "QuickBooks as the financial book of record",
              description:
                "The team trusted it and the accountant depended on it. Replacing it would start a fight we didn't need to win, so we sync from it instead.",
            },
            {
              tag: "REPLACE",
              tone: "negative",
              title: "Roofr's post-sale gap and the Excel stack",
              description:
                "Roofr ended at the proposal; Excel patched everything after. The CRM absorbs the entire operational middle, the part no tool truly owned.",
            },
            {
              tag: "OWN",
              tone: "positive",
              title: "The job lifecycle, from lead to commission",
              description:
                "One record the whole company reads the same way, carrying a job through every phase and role without ever leaving the system.",
            },
          ],
        },
        {
          type: "approachGrid",
          columns: [
            [
              {
                number: "01",
                title: "One record, many lenses",
                description:
                  "A single job object, presented differently to each role, never duplicated across tools.",
              },
              {
                number: "01",
                title: "Sync finance, own ops",
                description:
                  "Read customer and money from QuickBooks; own every operational service the business runs on.",
              },
            ],
            [
              {
                number: "02",
                title: "Model the lifecycle",
                description:
                  "Store the real sequence a job moves through, not just a bag of fields. Structure is the feature.",
              },
              {
                number: "02",
                title: "Start in the field",
                description:
                  "Capture leads where they happen, canvassing and the map, so the pipeline begins at the first knock.",
              },
            ],
          ],
        },
        {
          type: "darkCallout",
          eyebrow: "THE CALL THAT SHAPED IT",
          rows: [
            {
              label: "Sync from QuickBooks, don't replace it",
              before: "It was the trusted source for money →",
              after: "keep it read-only, own everything else.",
            },
            {
              label: "Make the job the atomic unit",
              before: '"A job" was reassembled by hand from three tools →',
              after: "one object now carries it all.",
            },
            {
              label: "Begin the pipeline in the field",
              before: "Leads were captured on paper, re-entered days later →",
              after: "now trackable from the door.",
            },
            {
              label: "Split people out as their own group",
              before: "Crews and suppliers were duplicated inside every job →",
              after: "now defined once, referenced everywhere.",
            },
          ],
        },
      ],
    },
    {
      id: "workflow",
      number: "05",
      label: "WORKFLOW",
      title: "One continuous path: knock to commission",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The modules aren't a menu, they're a route. A lead enters in the field and leaves as a paid job, and every handoff between roles happens inside the same system. Four phases, each owned by the people who do the work.",
          ],
        },
        {
          type: "workflowTimeline",
          steps: [
            {
              title: "Lead captured in the field",
              actor: "SALES REP",
              actorTone: "muted",
              description:
                "A rep logs a door-knock or inbound lead where it happens, it lands on the map, not a notepad.",
              tags: ["Canvassing", "Map"],
            },
            {
              title: "Prospect created",
              actor: "SALES REP",
              actorTone: "muted",
              description:
                "The lead becomes a tracked prospect, with contact and property details attached to a real record.",
              tags: ["Prospects", "Contacts"],
            },
            {
              title: "Prospect progresses through status",
              actor: "SALES REP",
              actorTone: "muted",
              description:
                "The prospect moves through its pipeline, Contacted, Appointment Set, Inspection Complete, Proposal Sent, as a single status change, no request or paperwork re-entered at each step.",
              tags: ["Prospects"],
            },
            {
              title: "Job Won → sent to submittal",
              actor: "SALES REP",
              actorTone: "muted",
              description:
                "The moment status flips to Job Won, the prospect is automatically routed into job submittal for review, it doesn't become a job on the rep's say-so alone.",
              tags: ["Prospects"],
            },
            {
              title: "Back office verifies & approves",
              actor: "BACK OFFICE",
              actorTone: "accent",
              description:
                "Back office checks the submittal against contract and scope; on approval, the prospect converts into a live job with its own number and Job Cycle.",
              tags: ["Jobs"],
            },
            {
              title: "Materials ordered",
              actor: "BACK OFFICE",
              actorTone: "accent",
              description:
                "Purchase orders go to the right supplier and manufacturer, raised from inside the job so spend stays tied to it.",
              tags: ["Material Orders", "Suppliers", "Manufacturers"],
            },
            {
              title: "Production scheduled",
              actor: "PROJECT MANAGER",
              actorTone: "accent",
              description:
                "An install date is committed on the calendar and any required permits are pulled and tracked.",
              tags: ["Schedules", "Permits"],
            },
            {
              title: "Crew dispatched",
              actor: "PROJECT MANAGER",
              actorTone: "accent",
              description:
                "A crew is assigned and sent, defined once in the People group and reused across every job.",
              tags: ["Crews"],
            },
            {
              title: "Materials audited",
              actor: "BACK OFFICE",
              actorTone: "accent",
              description:
                "Delivered material is verified against the order before a crew ever starts the work.",
              tags: ["Job Cycle"],
            },
            {
              title: "Work order audited & inspected",
              actor: "PROJECT MANAGER",
              actorTone: "accent",
              description:
                "Scope and crew work are confirmed, then a final inspection signs off on quality.",
              tags: ["Job Cycle"],
            },
            {
              title: "COC generated & invoiced",
              actor: "BACK OFFICE",
              actorTone: "accent",
              description:
                "The Certificate of Completion is issued and the job is invoiced, reconciling against QuickBooks.",
              tags: ["Invoices"],
            },
            {
              title: "Commission & draws settled",
              actor: "BACK OFFICE",
              actorTone: "accent",
              description:
                "The rep's commission is released and any 7% draws taken along the way reconcile automatically.",
              tags: ["Final Commissions", "7% Draws"],
            },
          ],
        },
      ],
    },
    {
      id: "the-system",
      number: "06",
      label: "THE SYSTEM",
      title: "Seventeen modules, three groups, one job at the center",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The architecture follows how the business thinks, not how software is usually organized. The navigation splits into three groups, the daily work, the money, and the people, each pointing back to the job.",
          ],
        },
        {
          type: "moduleHeader",
          eyebrow: "RESCUED FROM EXCEL",
          title: "Every spreadsheet became a first-class module",
          description:
            "Material management was the heaviest lift. Inventory, purchase orders, and reconciliation all ran by hand across tabs. Alongside fees, sales reps, PMs, and territory, each spreadsheet was replaced by a structured module tied back to the job.",
        },
        {
          type: "video",
          src: "/images/work/roofing-dashboard-excel.mp4",
          poster: "/images/work/roofing-dashboard-excel.webp",
          label:
            "Screencast of the Roofing CRM dashboard, showing the modules that replaced the team's spreadsheets",
          caption: "The Roofing CRM.",
          aspect: "2800 / 1520",
        },
        {
          type: "moduleHeader",
          eyebrow: "THE LEAD FUNNEL",
          title: "Prospects: everything before a job exists",
          description:
            "A Prospect is the module for the whole Acquire → Qualify stretch, from a captured lead through status changes to Job Won. It's the busiest screen for Sales Reps and the gate Back Office checks before a submittal becomes a real job.",
        },
        {
          type: "video",
          src: "/images/work/roofing-prospects.mp4",
          poster: "/images/work/roofing-prospects.webp",
          label:
            "Screencast of the Prospects module, walking through a prospect's status and timeline, value, property, and lead source",
          caption: "The Prospects list and detail view.",
          aspect: "2800 / 1520",
        },
        {
          type: "moduleHeader",
          eyebrow: "THE OPERATIONAL CORE",
          eyebrowTrailing: "The Job Cycle",
          title: "The Job Cycle: a pipeline everyone reads the same way",
          description:
            'Every job runs on an eight-stage pipeline pinned to the top of its record. It replaced the Excel status column no one trusted: the current stage is unmistakable, each stage has a clear owner, and "Next Step" is a first-class field instead of something you deduce.',
        },
        {
          type: "beforeAfter",
          before: {
            src: "/images/work/job-detail-redesigned.webp",
            alt: "Before: the Job Details module with the Job Cycle as a flat, chronological activity feed",
          },
          after: {
            src: "/images/work/job-detail-pipeline.webp",
            alt: "After: the Job Details module with the Job Cycle as a seven-stage pipeline stepper pinned to the top",
          },
          caption: "The Job Details module before and after.",
          aspect: "1696 / 1000",
        },
        {
          type: "moduleHeader",
          eyebrow: "FINANCIAL",
          title: "The money moves with the job",
          description:
            "QuickBooks stays the book of record, but the operational money that used to live in Excel (commissions, draws, and material spend) now sits inside the CRM, tied to the job that generated it.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/roofing-final-commission.webp",
            alt: "The Final Commission list showing commission splits and status per job",
          },
          caption: "Final Commission.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/roofing-commission-draws.webp",
            alt: "The 7% Commission Draws list showing requested draws per job",
          },
          caption: "7% Commission.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/roofing-material-orders.webp",
            alt: "The Material Orders list showing job, supplier, and delivery status",
          },
          caption: "Material Orders.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/roofing-crew-list.webp",
            alt: "The Crew List showing crew names, contact info, and cost per square",
          },
          caption: "Crew List.",
        },
        {
          type: "moduleHeader",
          eyebrow: "SUMMARY AND DECISION MAKING",
          title:
            "Before it shipped company-wide, we asked the team if it actually worked",
          description:
            "A system this central to daily work couldn't be judged on adoption metrics alone. Ahead of the full rollout, we ran a structured pilot with the three roles that live in the CRM every day, then used what came back to decide what shipped as-is, what got reworked, and what got cut before it reached everyone else.",
        },
        {
          type: "executiveSummary",
          title: "Executive summary",
          description:
            "Priority Roofing's operations ran on three disconnected tools patched together by spreadsheets no system owned. We traced one job end-to-end, audited the stack, and evaluated four off-the-shelf CRMs before concluding a focused custom build was the only option that could absorb the team's real workflow. We shipped a pilot to the three roles that touch a job daily, measured confidence and trust before and after, and used that evidence, not just our own conviction, to greenlight the full rollout.",
        },
        {
          type: "moduleHeader",
          eyebrow: "PILOT SURVEY",
          description:
            "Before and after a two-week pilot, we asked every Sales Rep, Project Manager, and Back Office user to self-rate four things, 1-5. The gaps told us where the design was working and where it wasn't.",
        },
        {
          type: "pilotSurveyChart",
          scaleNote: "Self-rated, 1-5 scale",
          categories: [
            { label: "Job status confidence", before: 2.1, after: 4.6 },
            { label: "Commission Trust", before: 1.8, after: 4.7 },
            { label: "Self-serve info", before: 2.4, after: 4.5 },
            { label: "Daily comfort", before: 2.9, after: 4.2 },
          ],
          headline:
            "All four metrics rose sharply, led by trust in commission numbers and self-serve access to job info.",
          analysis:
            "These were the biggest drivers of the coordination-speed gains below. Daily comfort moved the least, the one gap the rollout plan addressed directly.",
        },
        {
          type: "testimonialCard",
          eyebrow: "RESULTS TALK",
          index: "1/4",
          quote:
            "I stopped keeping my own tracker. If it's not in the CRM, I don't trust it, and now everything is in the CRM.",
          initials: "JC",
          name: "Jack Cella",
          role: "Back Office Lead",
        },
      ],
    },
    {
      id: "impact",
      number: "07",
      label: "IMPACT",
      title: "Three tools became one, and the work became visible",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The spreadsheet dependency that patched every gap between tools disappeared. For the first time, a job's whole life (lead, production, and money) was legible to everyone who touched it.",
          ],
        },
        {
          type: "stat",
          stats: [
            { value: "3 → 1", caption: "tools replaced by one system, QuickBooks synced, Roofr's gap and Excel retired" },
            { value: "100%", caption: "reduction in spreadsheet dependency across Back Office & PM teams" },
            { value: "40%", caption: "faster job coordination, from Sales handoff to first Back Office action" },
            { value: "min → sec", caption: "to locate a contract, scope, or crew inside the job record" },
          ],
        },
      ],
    },
  ],
  nextProject: {
    href: "/work/job-module-redesign",
    eyebrow: "MODULE DEEP DIVE",
    title: "Rebuilding a roofing CRM's Job module into an operational command center",
    description:
      "How the Job Cycle went from a chronological activity feed to a seven-stage pipeline, the research, the usage data, and the rework.",
    image: {
      src: "/images/work/job-module.webp",
      alt: "Priority Roofing job management dashboard on laptop and phone",
    },
  },
};
