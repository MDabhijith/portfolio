import type { CaseStudy } from "../types";

export const roofingWorkflowManagement: CaseStudy = {
  slug: "roofing-workflow-management",
  category: "Roofing CRM",
  client: "Priority Roofing",
  year: "2024",
  title: "One CRM for Every Roofing Job, From Lead to Paid Commission",
  subtitle:
    "Priority Roofing ran its business across QuickBooks, Roofr, and stacks of Excel sheets that didn't talk to each other. We built one CRM that follows a job from a knock on the door to a paid commission.",
  meta: [
    { label: "Company", value: "Priority Roofing (USA)" },
    { label: "Timeline", value: "Jun 2024 - 8 weeks" },
    { label: "Team", value: "Developers, Stakeholders, Tester, Product Designer" },
  ],
  heroImage: {
    src: "/images/work/roofing-banner.png",
    alt: "The Priority Roofing CRM dashboard on a laptop beside the mobile app on a phone",
  },
  outcomeHighlight: {
    eyebrow: "THE OUTCOME, UP FRONT",
    summary:
      "One system now follows every job from the first door-knock to the final commission. No more spreadsheets, no more drift, no more dead ends between tools.",
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
      title: "A Business That Outgrew Its Own Tools",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "I led product design on this CRM from a blank slate to a system seventeen modules deep, defining what it would own and how it would work, then validating it with a pilot before rollout, while developers built to spec.",
            "Priority Roofing is a roofing contractor in the US. They handle everything: canvassing neighborhoods, closing deals, ordering materials, sending out crews, passing inspections, and settling insurance claims and commissions. As the business grew, its tools didn't keep up. Every job's information was split across different software, and no single place could tell you where a job actually stood.",
          ],
        },
        {
          type: "systemComparison",
          image: {
            src: "/images/work/roofing-system-table.svg",
            alt: "Table comparing QuickBooks, Roofr, and Excel — what each system held and where it fell short",
          },
          items: [
            {
              name: "Quickbooks",
              subtitle: "Accounting & finance",
              held: "Customer records and invoicing — the company's financial book of record.",
              gap: "It only sees money moving, never the job behind it — no sense of what stage a job is at, or that it even has stages.",
            },
            {
              name: "Roofr",
              subtitle: "Sales & estimating",
              held: "Roof measurements, proposals, and the homeowner-facing invoice.",
              gap: "Its job ends the moment a deal is signed — nothing it holds carries a won job forward into production.",
            },
            {
              name: "Excel",
              subtitle: "Everything operational",
              held: "Material orders, crew schedules, office fees, PM assignments, audits, commissions, and draws.",
              gap: "Held together by hand across a dozen tabs only one person could read — one tab out of sync, and the job broke.",
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
      title: "Where the Process Actually Broke Down",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The tools themselves weren't the problem. The gaps between them were. Every handoff meant typing the same job into another system by hand, and every gap between tools was patched manually. Five problems kept showing up.",
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
              image: {
                src: "/images/work/insight-three-systems.svg",
                alt: "",
              },
            },
            {
              number: "02",
              title: "Re-typed at every handoff",
              description:
                "The same job was typed into each tool in turn. Numbers and addresses drifted apart, and no version was ever the correct one.",
              image: {
                src: "/images/work/insight-rekeyed-handoff.svg",
                alt: "",
              },
            },
            {
              number: "03",
              title: "No clear stages for a job",
              description:
                "Nothing showed the real steps a job moves through, so its status was just a guess written into a spreadsheet column.",
              image: {
                src: "/images/work/insight-no-lifecycle.svg",
                alt: "",
              },
            },
            {
              number: "04",
              title: "Field work was invisible",
              description:
                "Canvassing and new leads lived on paper and phones, disconnected from the pipeline until someone typed them in by hand.",
              image: {
                src: "/images/work/insight-field-invisible.svg",
                alt: "",
              },
            },
          ],
        },
        {
          type: "callout",
          eyebrow: "THE DEEPER PROBLEM",
          title:
            "No off-the-shelf tool, roofing-specific or not, could flex to how this business actually ran.",
        },
        {
          type: "prose",
          paragraphs: [
            "Roofing-specific tools existed, but each one assumed a simpler operation than Priority Roofing actually had. Commission tracking, material management, and coordination between sales, back office, and production all needed to work together in one synced system. Every alternative meant stitching separate tools together instead of running the business from one place.",
          ],
        },
      ],
    },
    {
      id: "research-audit",
      number: "03",
      label: "RESEARCH & AUDIT",
      title: "How Work Actually Moved, Not How It Was Supposed To",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Priority Roofing was growing fast, more reps, more crews, more claims, but its tools hadn't kept up. Before designing anything, I needed to understand how a job actually made money, who touched it along the way, and where the current tools were costing time, accuracy, and trust.",
            "Instead of relying on a documented process, I traced one real job from start to finish and talked to everyone who touched it: sales, back office, and production. I ran interviews with each role, audited the spreadsheets holding everything together, and watched the day-to-day work to see where the real process differed from the official one.",
          ],
        },
        {
          type: "moduleHeader",
          eyebrow: "WHO WE NEEDED TO HEAR FROM",
          title: "Three Roles, Three Very Different Days",
          description:
            "A job passes through a Sales Rep, a Project Manager, and Back Office before it's paid out. Each one experiences the same broken handoffs differently, so understanding the job meant understanding all three.",
        },
        {
          type: "qaPanel",
          eyebrow: "STAKEHOLDER SESSION",
          meta: "3 roles · 9 questions",
          description:
            "Each interview centered on a few simple questions: how work actually moved, not how it was supposed to.",
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
              cardImage: {
                src: "/images/work/persona-card-diego.svg",
                alt: "Persona card for Diego Alvarez, Sales Rep",
                aspect: "1064 / 790",
              },
              role: "Sales Rep · canvassing → close",
              demographics: [
                { label: "Age", value: "29" },
                { label: "Location", value: "Dallas, TX" },
                { label: "Tools", value: "Roofr, phone, texts" },
                { label: "Tech", value: "High, phone-first" },
              ],
              bio: "Three years canvassing storm-damaged neighbourhoods. Builds the proposal in Roofr on a tailgate, gets the signature, and hands the job off to whoever picks up the phone. Once it leaves him there is no record he can open, so when the homeowner calls a week later he calls the office to find out what happened.",
              motivations: [
                "Commission is the job, and it only pays on a completed install",
                "Referrals come from homeowners he kept informed",
                "Wants to be the rep the office never has to chase",
              ],
              goals: [
                "Turn a door-knock into a signed job without typing it twice",
                "Confirm a closed deal actually reached production",
                "Answer a homeowner's status call without phoning the office",
              ],
              frustrations: [
                "The Roofr proposal, the QuickBooks customer and the Excel row never match",
                "No signal when a signed job stalls after handoff",
                "Commission is a spreadsheet he cannot see until payout day",
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
              cardImage: {
                src: "/images/work/persona-card-omar.svg",
                alt: "Persona card for Omar Haddad, Project Manager",
                aspect: "1064 / 786",
              },
              role: "Project Manager · scheduling → install",
              demographics: [
                { label: "Age", value: "38" },
                { label: "Location", value: "Dallas, TX" },
                { label: "Tools", value: "Excel, phone, site visits" },
                { label: "Tech", value: "Moderate, hates re-entry" },
              ],
              bio: "Six years running production. Decides each morning which jobs are ready and which crew goes where, working from an Excel sheet somebody else updated and a mental map of who told him what. When a job is not actually ready, he finds out from a crew standing on a driveway.",
              motivations: [
                "A crew that never gets sent to a job that is not ready",
                "Installs finished on the date the homeowner was promised",
                "Being trusted to run production without supervision",
              ],
              goals: [
                "See a job's true stage before committing a crew",
                "Catch a stalled job the day it stalls",
                "Open one job and see materials, crew and dates together",
              ],
              frustrations: [
                "Readiness lives in a spreadsheet that goes stale between updates",
                "Chasing the back office to confirm materials were ordered",
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
              cardImage: {
                src: "/images/work/persona-card-katie.svg",
                alt: "Persona card for Katie Doyle, Back Office",
                aspect: "1064 / 786",
              },
              role: "Back Office · materials → commissions",
              demographics: [
                { label: "Age", value: "34" },
                { label: "Location", value: "Dallas, TX" },
                { label: "Tools", value: "Excel, QuickBooks, Roofr" },
                { label: "Tech", value: "Expert in spreadsheets" },
              ],
              bio: "Five years holding the record together. She is the only person who knows which QuickBooks customer maps to which Roofr proposal and which Excel row, and she rebuilds that mapping by hand for every job. When she takes a week off, nobody else can answer where a job stands.",
              motivations: [
                "Numbers that survive an audit without a week of reconciling",
                "Ordering materials she will not have to re-order",
                "Not being the single point of failure for the whole company",
              ],
              goals: [
                "Keep one clean, auditable record per job",
                "Order materials from figures she can trust",
                "Close out commissions and draws without manual reconciliation",
              ],
              frustrations: [
                "Re-keying the same job into QuickBooks, Roofr and Excel",
                "Silent drift between the three copies of every record",
                "Her own absence erasing the only map between the systems",
              ],
              quote:
                "Half my week is making three systems agree on a job that only ever happened once.",
            },
          ],
        },
        {
          type: "moduleHeader",
          eyebrow: "THE WORKFLOW WE INHERITED",
          title: "How a Job Actually Moved Before the CRM",
          description:
            "No single step in the old process was broken. It broke between the steps, at every handoff nobody owned.",
        },
        {
          type: "zoomableImage",
          image: {
            src: "/images/work/roofing-user-flow-pain-points.svg",
            alt: "Roofing lifecycle user flow from lead to commission handoff, showing each role's steps and where pain points occurred",
          },
        },
        {
          type: "moduleHeader",
          eyebrow: "RESEARCH ARTIFACTS",
          title: "The Spreadsheets, As They Actually Were",
          description:
            "Screens from the audit, the actual spreadsheets Back Office used to keep everything running.",
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
          type: "prose",
          paragraphs: [
            "Alongside the interviews, I looked at four off-the-shelf CRMs to see if any could do the job.",
          ],
        },
        {
          type: "taggedList",
          items: [
            {
              tag: "GENERIC",
              tone: "neutral",
              title: "Horizontal CRMs (Salesforce-style platforms)",
              description:
                "Flexible enough to model almost anything, but that meant months of setup just to represent a job. Still nothing built for roofing-specific work like material orders or crew scheduling.",
            },
            {
              tag: "PARTIAL",
              tone: "neutral",
              title: "Field-service management tools",
              description:
                "Good at scheduling and dispatch, the Project Manager's half of the job. Weak on sales and finance, so the same seams would just move, not disappear.",
            },
            {
              tag: "REJECTED",
              tone: "negative",
              title: "Point solutions like Roofr",
              description:
                "Great at the one job they're built for, estimating and proposals, which is exactly why the team already used one. None of them own a job's whole lifecycle.",
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
      title: "What to Keep, What to Replace, What to Own",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The first big decision wasn't a screen, it was scope. Replacing everything at once would have been too costly and too risky. So we drew a clear line around what the new CRM would own.",
          ],
        },
        {
          type: "scopeDecisions",
          items: [
            {
              tag: "KEEP",
              tone: "neutral",
              title: "Sync, don't replace",
              description:
                "QuickBooks stays the source of truth for money — read-only, nothing rebuilt.",
              image: {
                src: "/images/work/scope-keep.png",
                alt: "Illustration for the KEEP decision: QuickBooks stays the financial system of record",
              },
            },
            {
              tag: "REPLACE",
              tone: "negative",
              title: "Own the middle",
              description:
                "Roofr's post-sale gap and the Excel stack get absorbed into one system.",
              image: {
                src: "/images/work/scope-replace.png",
                alt: "Illustration for the REPLACE decision: Roofr's post-sale gap and the Excel stack get absorbed",
              },
            },
            {
              tag: "OWN",
              tone: "positive",
              title: "One atomic job",
              description:
                "A single object carries the job from lead to commission, read the same way by everyone.",
              image: {
                src: "/images/work/scope-own.png",
                alt: "Illustration for the OWN decision: a single job object carries the job from lead to commission",
              },
            },
          ],
        },
      ],
    },
    {
      id: "workflow",
      number: "05",
      label: "WORKFLOW",
      title: "One Path From Door-Knock to Paid Commission",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The modules aren't a menu, they're a path. A lead comes in from the field and leaves as a paid job, and every handoff between roles happens inside the same system. Four phases, each owned by the people who do the work.",
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
              title: "Prospect moves through its stages",
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
      title: "Seventeen Tools Replaced by One Connected System",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The system is organized the way the business actually thinks, not the way software normally is. The navigation has three groups, daily work, money, and people, and everything points back to the job.",
          ],
        },
        {
          type: "moduleHeader",
          title: "Every Spreadsheet Became a Real Feature",
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
          title: "Prospects: Everything Before a Job Exists",
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
          title: "The Job Cycle: One Pipeline Everyone Reads the Same Way",
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
          title: "The Money Moves With the Job",
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
          title: "One Design System, Instead of Solving the Same Problem Twice",
        },
        {
          type: "prose",
          paragraphs: [
            "I built a design system so I wasn't solving the same design problem twice on different screens. Reusable components and patterns kept every screen consistent and made the product easier to maintain as it grew.",
            "It also made it easier to work with developers. Clear components, variants, and guidelines meant less back-and-forth, fewer inconsistencies, and faster handoffs.",
          ],
        },
        {
          type: "video",
          src: "/images/work/roofing-design-system.mp4",
          poster: "/images/work/roofing-design-system.webp",
          label:
            "Screencast of the Roofing CRM design system in Figma: the variable collections and token table, a Button component with its Type, State, Size, and Icon properties, the color, typography, and border and radius foundation sheets, and the shared component library",
          caption: "The design system: tokens, components, and foundations.",
          aspect: "1920 / 1080",
        },
        {
          type: "moduleHeader",
          title:
            "Before It Shipped Company-Wide, We Asked the Team If It Actually Worked",
          description:
            "A system this important couldn't be judged by adoption numbers alone. Before the full rollout, we ran a two-week pilot with the three roles who use the CRM every day, and used what we learned to decide what shipped as-is, what changed, and what got cut.",
        },
        {
          type: "executiveSummary",
          title: "Executive summary",
          description:
            "Priority Roofing's operations ran on three disconnected tools, patched together with spreadsheets no system owned. I traced one job end-to-end, audited the tools, and looked at four off-the-shelf CRMs before deciding a custom build was the only real option. We piloted it with the three roles who touch a job every day, measured their confidence before and after, and used that evidence, not just our own opinion, to greenlight the full rollout.",
        },
        {
          type: "moduleHeader",
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
            "These two gains, trust and self-serve access, drove most of the speed improvements below. Daily comfort improved the least, so that's what the rollout plan focused on next.",
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
      title: "Three Tools Became One, and the Work Became Visible",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The spreadsheets that patched every gap between tools are gone. For the first time, a job's whole story, lead, production, and money, is visible to everyone who touches it.",
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
