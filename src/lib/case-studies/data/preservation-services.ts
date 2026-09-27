import type { CaseStudy } from "../types";

export const preservationServices: CaseStudy = {
  slug: "preservation-services",
  category: "Builder Warranty / Captive Insurance",
  client: "Preservation Services",
  year: "2024",
  title: "Turning Builder Warranty Claims Into a System Contractors Can Trust",
  subtitle:
    "Contractors Capital is Preservation Services' captive insurance portal for home builders. It replaces phone calls and email threads with one place to onboard a company, verify identity, track coverage, and file and resolve warranty claims.",
  meta: [
    { label: "Company", value: "Preservation Services" },
    { label: "Timeline", value: "2024" },
    { label: "Role", value: "Product Designer" },
    {
      label: "Scope",
      value:
        "IA, UX, onboarding flow, authentication, claims workflow, dashboard & analytics, design system",
    },
  ],
  heroImage: {
    src: "/images/work/preservation-card-cover.png",
    alt: "The Contractors Capital login page open on a laptop, over a dark purple gradient",
  },
  heroImageFit: "cover",
  outcomeHighlight: {
    eyebrow: "WHAT CONTRACTORS CAPITAL REPLACES",
    summary:
      "Instead of calls and emails to check on coverage or a claim, one portal where a builder can onboard, get verified, and manage their entire claim lifecycle.",
    stats: [
      {
        value: "2",
        caption:
          "user roles a company can register: Primary + Secondary contact, sharing one set of permissions",
      },
      {
        value: "4",
        caption:
          "stages from onboarding submission to an activated, logged-in account",
      },
      {
        value: "30 days",
        caption: "a trusted device skips repeat identity verification",
      },
    ],
  },
  sections: [
    {
      id: "background",
      number: "00",
      label: "BACKGROUND",
      title: "A Captive Program With No System a Builder Could Log Into",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Preservation Services runs captive insurance processing for home builders: a model where a group of builders pool risk under one program rather than buying it individually. Every company in that program needs a policy on file, a way to prove a covered loss, and a way to see where their claim stands. Before Contractors Capital, none of that lived in a system a builder could log into themselves.",
            "Contractors Capital gives each company up to two authorized users, a mandatory Primary contact and an optional Secondary contact with identical permissions, in a single portal to complete onboarding, get verified, and manage their coverage and claims going forward.",
          ],
        },
        {
          type: "callout",
          eyebrow: "PROBLEM STATEMENT",
          title:
            "Coverage and claims lived in phone calls and inboxes, not a system, so nothing about a company's status, history, or authority to act was ever verifiable in one place.",
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
                "Onboarding flow design: company and policy details, document upload, identity verification, review & submit.",
              description: "",
            },
            {
              tag: "02",
              tone: "neutral",
              title:
                "Authentication & account security: shared login for users/admins, OTP-based 2FA, trusted-device handling, password reset.",
              description: "",
            },
            {
              tag: "03",
              tone: "neutral",
              title:
                "Claims workflow: filing, editing, deleting, filtering, and document management for claims, plus the admin approve/reject flow.",
              description: "",
            },
            {
              tag: "04",
              tone: "neutral",
              title:
                "Dashboard & analytics: summary cards, filterable timeline, coverage details, and pending-task nudges.",
              description: "",
            },
          ],
        },
      ],
    },
    {
      id: "who-why-what",
      number: "01",
      label: "WHO, WHY, WHAT",
      title: "Built for the Builder Filing a Claim, and the Admin Reviewing It",
      blocks: [
        {
          type: "keyValue",
          rows: [
            {
              label: "Who",
              value:
                "Home builders and contractors covered under Preservation Services' captive insurance program, specifically the Primary and optional Secondary contact at each company, and the Preservation Services admins who review onboarding requests and claims.",
            },
            {
              label: "Why",
              value:
                "Before Contractors Capital, a builder had no way to see their own coverage or claim status without contacting Preservation Services directly. Onboarding a new company, verifying who was authorized to act for it, and filing a warranty claim were all manual, hard to audit, and gave leadership no aggregate view of claim volume or risk.",
            },
            {
              label: "What",
              value:
                "A self-service web portal: a guided company-onboarding flow with document upload and e-signature, secure shared login with OTP-based two-factor authentication, a claims dashboard with live status and coverage summaries, and a full claim-filing workflow with proof-document management, plus an admin layer to review and approve or reject both onboarding requests and claims.",
            },
          ],
        },
      ],
    },
    {
      id: "research",
      number: "02",
      label: "RESEARCH & DISCOVERY",
      title: "Two People Standing on Either Side of Every Claim",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Every interaction in Contractors Capital runs between two roles: the builder who needs coverage and answers, and the admin who has to verify and approve.",
          ],
        },
        {
          type: "personaCards",
          items: [
            {
              icon: "userCheck",
              title: "Primary / Secondary Contact",
              legend: [
                "Company onboarding",
                "Identity verification (OTP)",
                "Claim filing & tracking",
              ],
            },
            {
              icon: "shieldCheck",
              title: "Preservation Services Admin",
              legend: [
                "Onboarding review",
                "Legal document sign-off",
                "Claim approval",
              ],
            },
          ],
        },
        {
          type: "image",
          image: {
            src: "/images/work/jtbd-framework.png",
            alt: "Jobs to be Done framework table: executor, job statement, pain point, and desired outcome for the Primary/Secondary Contact and the Preservation Services Admin",
          },
          aspect: "2480 / 1546",
        },
        {
          type: "moduleHeader",
          eyebrow: "JOURNEY MAP",
          eyebrowTrailing: "BEFORE",
          title: "Before · Calls and Email",
        },
        {
          type: "phaseBoard",
          stages: [
            {
              label: "Loss Occurs",
              items: [
                { label: "No self-serve system" },
                { label: "Discovers a covered loss" },
                { label: "Understand coverage" },
                { label: "Anxious" },
                { label: "No way to check status", flag: true },
              ],
            },
            {
              label: "Reaching Out",
              items: [
                { label: "Phone call, email" },
                { label: "Calls to ask about coverage" },
                { label: "Confirm coverage" },
                { label: "Uncertain" },
                { label: "No verified authority", flag: true },
              ],
            },
            {
              label: "Submitting a Claim",
              items: [
                { label: "Phone, email, documents" },
                { label: "Shares details ad hoc" },
                { label: "Get claim recorded" },
                { label: "Frustrated" },
                { label: "No structured record", flag: true },
              ],
            },
            {
              label: "Waiting on a Decision",
              items: [
                { label: "Follow-up calls" },
                { label: "Repeatedly checks status" },
                { label: "Get a clear answer" },
                { label: "In the dark" },
                { label: "No audit trail", flag: true },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "problem",
      number: "03",
      label: "PROBLEM",
      title: "Coverage Nobody Could See, and Nothing to Prove It",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Five gaps stood between a builder in the program and any confidence in where their coverage or claim actually stood.",
          ],
        },
        {
          type: "numberedFindings",
          items: [
            {
              number: "01",
              title: "No single, verifiable record per company",
              description:
                "Company, policy, and contact details had no consistent, structured place to live before a company could be considered covered.",
            },
            {
              number: "02",
              title: "No self-serve visibility into coverage or claim status",
              description:
                "A builder had no way to check where things stood without contacting Preservation Services directly.",
            },
            {
              number: "03",
              title: "No verified chain of authority",
              description:
                "Nothing confirmed that the person acting for a company on claims was actually authorized to.",
            },
            {
              number: "04",
              title: "No structured claim record",
              description:
                "Claim amount, date of loss, description, and proof documents weren't captured consistently or filterable in one place.",
            },
            {
              number: "05",
              title: "No queue or audit trail for admins",
              description:
                "Onboarding and claims approvals had no dashboard, filtering, or record of who approved what and when.",
            },
          ],
        },
        {
          type: "callout",
          eyebrow: "THE GUIDING QUESTION",
          title:
            "What if a builder could onboard, get verified, and manage their entire claim lifecycle without a single phone call to Preservation Services?",
        },
      ],
    },
    {
      id: "approach",
      number: "04",
      label: "APPROACH & DECISIONS",
      title: "Six Decisions That Made Coverage Self-Serve and Verifiable",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Each decision closed a specific gap between what a builder needed to know and what the old process could actually confirm.",
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
                "Two-user company model: Primary mandatory, Secondary optional, identical permissions.",
              description:
                "Warranty management isn't a single point of failure: a company isn't blocked if one contact is unavailable, without needing a complex roles system.",
            },
            {
              tag: "02",
              tone: "positive",
              title:
                "Guided, three-step onboarding (Company → Policy → Review & Submit) with a dedicated review screen before submission.",
              description:
                "Catches incomplete or incorrect entries before they reach an admin, instead of after.",
            },
            {
              tag: "03",
              tone: "positive",
              title:
                "Mandatory OTP email verification for the Primary contact during onboarding.",
              description:
                "Confirms the person who will control the company's claims is real and reachable before any request is even reviewed.",
            },
            {
              tag: "04",
              tone: "positive",
              title:
                "Admin-then-user e-signature sequencing on legal documents.",
              description:
                "Nobody could unilaterally treat onboarding as complete: approval, admin sign-off, and user sign-off all have to happen in order.",
            },
            {
              tag: "05",
              tone: "positive",
              title:
                "Shared login with role-based routing, plus OTP-based 2FA on new devices and a 30-day trusted-device option.",
              description:
                "One simple mental model (one login, one password) without trading away security. Trust is earned per-device, not permanent.",
            },
            {
              tag: "06",
              tone: "positive",
              title:
                "Dashboard built around summary cards, a filterable timeline, coverage details, and pending-task nudges.",
              description:
                "Surfaces what needs attention (an unfinished claim, a missing document) instead of requiring the user to go looking for it.",
            },
          ],
        },
        {
          type: "moduleHeader",
          eyebrow: "JOURNEY MAP",
          eyebrowTrailing: "AFTER",
          title: "After · Contractors Capital",
        },
        {
          type: "journeyMap",
          tone: "after",
          stages: [
            {
              label: "Loss Occurs",
              touchpoints: "Dashboard, no call needed.",
              process: "Logs in and opens the dashboard to check coverage.",
              motivations: "Understand coverage and next steps.",
              emotions: "Reassured",
              barriers: "None. Coverage and policy details are visible immediately.",
            },
            {
              label: "Checking Coverage",
              touchpoints: "Dashboard summary cards.",
              process:
                "Views claim counts, approved amount, and coverage at a glance.",
              motivations: "Confirm coverage and decide whether to file.",
              emotions: "In control",
              barriers: "None. Self-serve, no call required.",
            },
            {
              label: "Filing a Claim",
              touchpoints: "Claims tab, file-claim flow.",
              process: "Files a claim with proof in one guided flow.",
              motivations: "Get the claim recorded accurately, the first time.",
              emotions: "Confident",
              barriers:
                "None. OTP/2FA-verified identity confirms authority to act.",
            },
            {
              label: "Getting a Decision",
              touchpoints: "Dashboard timeline and notifications.",
              process:
                "Tracks the claim from Pending to Approved or Rejected.",
              motivations: "Get a clear, timely answer.",
              emotions: "Reassured",
              barriers:
                "None. Admins review through a dedicated queue with a full audit trail.",
            },
          ],
        },
      ],
    },
    {
      id: "workflow",
      number: "05",
      label: "WORKFLOW",
      title: "Filing a Claim, End to End",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Claims are the recurring use case, so the primary flow. Onboarding is the one-time path a company completes before any of this is possible.",
          ],
        },
        {
          type: "workflowTimeline",
          steps: [
            {
              title: "Opens the Claims tab",
              actor: "USER",
              actorTone: "muted",
              description:
                "Sees existing claims listed by status: Pending, Approved, or Rejected.",
              tags: ["Claims"],
            },
            {
              title: "Files a claim",
              actor: "USER",
              actorTone: "muted",
              description:
                "Enters date of loss, total claim amount, and a description of at least 5 characters.",
              tags: ["Claims"],
            },
            {
              title: "Optionally uploads proof",
              actor: "USER",
              actorTone: "muted",
              description:
                "PDF, DOCX, JPG, PNG, or XLS, not mandatory to submit.",
              tags: ["Documents"],
            },
            {
              title: "Claim enters Pending status",
              actor: "SYSTEM",
              actorTone: "accent",
              description: "Appears in the admin's review queue.",
              tags: ["Claims"],
            },
            {
              title: "Reviews and decides",
              actor: "ADMIN",
              actorTone: "muted",
              description: "Approves or rejects the claim.",
              tags: ["Review Queue"],
            },
            {
              title: "Dashboard and timeline update",
              actor: "SYSTEM",
              actorTone: "accent",
              description:
                "Summary cards and the Timeline update automatically; a claim missing proof documents surfaces under Pending Tasks.",
              tags: ["Dashboard"],
            },
            {
              title: "Edits or deletes while Pending",
              actor: "USER",
              actorTone: "muted",
              description:
                "The claim and its proof documents stay editable only until a decision is made.",
              tags: ["Claims"],
            },
          ],
        },
        {
          type: "moduleHeader",
          eyebrow: "SECONDARY WORKFLOW",
          title: "Company Onboarding to Activation",
          description:
            "A one-time flow every company completes before they can log in and use the portal.",
        },
        {
          type: "userFlowDiagram",
          steps: [
            { actor: "USER", label: "Get Started" },
            { actor: "USER", label: "Company + Policy" },
            { actor: "USER", label: "Contacts + OTP" },
            { actor: "USER", label: "Review & Submit" },
            { actor: "SYSTEM", label: "Confirmation Email" },
          ],
          decision: { actor: "ADMIN", label: "Admin Review" },
          rejectedLabel: "Rejected",
          rejectedEnd: "Request Rejected",
          approvedLabel: "Approved",
          approvedSteps: [
            { actor: "ADMIN", label: "Admin Signs" },
            { actor: "USER", label: "User Signs + Sets Password" },
          ],
          successEnd: "Account Activated",
        },
      ],
    },
    {
      id: "the-system",
      number: "06",
      label: "THE SYSTEM",
      title: "Onboarding, Authentication, and Claims as One Portal",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Every screen exists to answer one of three questions: is this company who they say they are, what's the state of their coverage, and where does a specific claim stand.",
          ],
        },
        {
          type: "moduleHeader",
          eyebrow: "ONBOARDING",
          title: "Get Started and Login",
          description:
            "A public entry point with email/password login and a \"Get Started\" link for new companies, the only two ways into the product.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-get-started.png",
            alt: "The Get Started welcome screen introducing onboarding, with a link back to Login for existing users",
          },
          aspect: "761 / 428",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-login.png",
            alt: "The Contractors Capital login page, with email/password login and a Get Started link for new companies",
          },
          aspect: "761 / 428",
        },
        {
          type: "moduleHeader",
          title: "Onboarding Form",
          description:
            "Company details, policy proof, and Primary/Secondary contact information, each its own step before the Review & Submit screen.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-onboarding-company.png",
            alt: "Onboarding form, Company step: company name, tax ID, revenue for the current and three upcoming years, Home Builders Association membership, and Primary/Secondary contact information",
          },
          aspect: "2880 / 2934",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-upload-proof.png",
            alt: "Onboarding form, Policy step: drag-and-drop upload of current insurance policy documents",
          },
          aspect: "2880 / 1706",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-review-submit.png",
            alt: "Review & Submit screen consolidating every entered field, including uploaded policy documents, before the onboarding request is sent",
          },
          aspect: "2880 / 3381",
        },
        {
          type: "moduleHeader",
          eyebrow: "AUTHENTICATION",
          title: "Shared Login, OTP, and Password Reset",
          description:
            "One login page routes users and admins to their own portal. New or untrusted devices require a 6-digit email code, with a 30-day trusted-device option.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-2fa.png",
            alt: "Two-factor authentication screen: 6-digit email code entry with a Trust this device checkbox",
          },
          aspect: "761 / 428",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-reset-password.png",
            alt: "Password reset flow: enter the registered email address to receive a reset link",
          },
          aspect: "761 / 428",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-reset-password-otp.png",
            alt: "Password reset flow: OTP code entry to verify identity before setting a new password",
          },
          aspect: "761 / 428",
        },
        {
          type: "moduleHeader",
          eyebrow: "DASHBOARD",
          title: "Summary Cards, Timeline, and Coverage",
          description:
            "Approved claim amount, total claims, approved and pending counts, a filterable timeline, coverage details, and pending-task nudges for anything missing: a missing proof document or a missing company logo.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-dashboard.png",
            alt: "User dashboard: summary cards, a dated timeline of claim activity, coverage details, and pending tasks",
          },
          aspect: "761 / 428",
        },
        {
          type: "moduleHeader",
          eyebrow: "CLAIMS",
          title: "Filing, Filtering, and Managing a Claim",
          description:
            "A claims table with quick actions, a two-step filing modal, and a details view that stays editable only while a claim is Pending.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-claims-list.png",
            alt: "My Claims table: claim number, date of loss, claim amount, status, and quick actions to view, edit, delete, or open documents, with search and filters",
          },
          aspect: "761 / 428",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-file-claim-details.png",
            alt: "File Claim modal, Submit Details step: claim number, loss date, total claim amount, and a description field",
          },
          aspect: "761 / 428",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-file-claim-upload.png",
            alt: "File Claim modal, Upload Proof step: drag-and-drop documentation upload with uploaded files listed below",
          },
          aspect: "761 / 428",
        },
        {
          type: "moduleHeader",
          eyebrow: "DOCUMENT MANAGEMENT",
          title: "Every Document in One Place",
          description:
            "A dedicated Documents tab lists every file uploaded across onboarding and claims, with a zoomable preview instead of a forced download.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-documents-list.png",
            alt: "My Documents table: document name, type, upload date, uploaded by, file type, and size, with view, download, and delete actions",
          },
          aspect: "2880 / 1620",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-document-viewer.png",
            alt: "Document preview modal with zoom controls, showing a contract PDF without leaving the page",
          },
          aspect: "2880 / 1620",
        },
        {
          type: "moduleHeader",
          eyebrow: "ADMIN",
          title: "Admin Dashboard and Onboarding Approval",
          description:
            "Admins get their own dashboard with a dedicated onboarding review queue, plus a detail view to accept or reject each request against its company details and uploaded documents.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-admin-dashboard.png",
            alt: "Admin dashboard: claims summary cards, an Onboarding Requests queue with Review Now actions, and pending tasks",
          },
          aspect: "2880 / 1620",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-admin-onboarding-details.png",
            alt: "Onboarding Request detail view, Details tab: company details, revenue, Primary/Secondary contact, and association details, with Reject and Accept actions",
          },
          aspect: "2880 / 1659",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-admin-onboarding-documents.png",
            alt: "Onboarding Request detail view, Documents tab: uploaded policy documents with Reject and Accept actions",
          },
          aspect: "2880 / 1659",
        },
        {
          type: "moduleHeader",
          eyebrow: "ADMIN",
          title: "Sign Doc Request",
          description:
            "The admin-then-user signature sequence in practice: an admin creates and sends the sign doc, then tracks its status until both parties have signed.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-admin-sign-papers.png",
            alt: "Onboarding Request, Sign-Up Papers tab: document name, created by, signed by, date, and signature status",
          },
          aspect: "2880 / 1659",
        },
        {
          type: "image",
          image: {
            src: "/images/work/preservation-admin-create-sign-doc.png",
            alt: "Create a Sign Doc flow: uploaded agreement papers, recipients with a set signing order, and a message before sending",
          },
          aspect: "2880 / 2775",
        },
      ],
    },
    {
      id: "impact",
      number: "07",
      label: "OUR IMPACT",
      title: "From Phone Calls to a System Builders Trust",
      blocks: [
        {
          type: "taggedList",
          variant: "wide",
          items: [
            {
              tag: "ADOPTION",
              tone: "positive",
              title: "35 companies onboarded since launch",
              description:
                "Each with a verified Primary contact and a structured record on file.",
            },
            {
              tag: "EFFICIENCY",
              tone: "positive",
              title: "45% fewer manual status-check calls and emails",
              description:
                "Coverage and claim status are now self-serve instead of requiring a call to Preservation Services.",
            },
            {
              tag: "CLAIMS",
              tone: "positive",
              title: "152 claims filed through the portal",
              description:
                "Each one structured, filterable, and tracked from Pending to a decision.",
            },
            {
              tag: "SECURITY",
              tone: "positive",
              title: "Zero account-related security incidents",
              description:
                "Since the 2FA and trusted-device rollout on new and untrusted device logins.",
            },
          ],
        },
        {
          type: "titledList",
          eyebrow: "WHAT WE'VE LEARNED SO FAR",
          items: [
            {
              title:
                "A review step before submission does most of the QA work for you",
              description:
                "Splitting onboarding into Company → Policy → Contacts → Review & Submit meant most data errors got caught by the user, not an admin downstream.",
            },
            {
              title:
                "Sequencing signatures enforces accountability without extra UI",
              description:
                "Admin-signs-first, then user-signs isn't a permissions feature: it's a workflow decision that makes the approval chain impossible to skip.",
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
      src: "/images/work/roofing-card-cover-new.png",
      alt: "The Priority Roofing CRM dashboard on a laptop beside the mobile app on a phone, over a dark iridescent gradient",
    },
    themeColor: "#00113d",
  },
};
