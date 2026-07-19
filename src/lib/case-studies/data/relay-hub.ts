import type { CaseStudy } from "../types";

export const relayHub: CaseStudy = {
  slug: "relay-hub",
  category: "AI Business Communication",
  client: "Relay Hub",
  year: "2024",
  title: "Relay Hub: An AI-Powered Business Communication Platform",
  subtitle:
    "An AI-first business communication platform unifying chat, documents, and knowledge — scoped by what it's allowed to see.",
  meta: [
    { label: "Company", value: "Relay Hub" },
    { label: "Timeline", value: "2024 - 3 weeks" },
    { label: "Team", value: "Developers, Stakeholders, Tester, Product Designer" },
  ],
  heroImage: {
    src: "/images/work/abstract-cover.webp",
    alt: "Relay Hub AI business communication platform",
  },
  sections: [
    {
      id: "background",
      number: "01",
      label: "BACKGROUND",
      title: "A company's knowledge, spread across every tool it uses",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A typical team runs its day across separate tools for talk, for documentation, and for anything that needs an AI to think it through. Each tool does its one job well. None of them know the others exist, and none of them know the company. The cost of that isn't visible in any single tool — it shows up in the gaps between them. An employee asks a question in chat that was already answered in a doc they never saw. An AI conversation produces a genuinely useful answer, then evaporates the moment the tab closes, because nothing carries it into the next person's context. A new hire spends their first weeks discovering where things live rather than doing the job they were hired for. And every time leadership considered letting AI actually touch company documents, the same question stalled the conversation: who is it allowed to see, and on whose behalf?",
          ],
        },
      ],
    },
    {
      id: "problem",
      number: "02",
      label: "PROBLEM",
      title: "Disconnected by design, one root cause",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Competitive research into chat tools, cloud storage, and standalone AI assistants confirmed the shape of the gap: every category solved one slice of this well, and none of them treated knowledge, conversation, security, and AI as parts of the same system.",
          ],
        },
        {
          type: "list",
          items: [
            "Chat tools hold conversations, not knowledge. Chat tools are excellent at the moment of talking. None of them treat a conversation, or a meeting, as something the organization should be able to draw on later.",
            "Documentation is scattered across drives no one tool can see. Cloud storage and docs tools each store real, current company documents, but nothing connects a document to the conversation that needed it, or surfaces it before someone has to go looking.",
            "Knowledge stays trapped inside one-off conversations. A genuinely good answer, worked out in a thread or a meeting, rarely turns into something the next person can find. It just becomes one more thing to ask about again.",
            "AI assistants answer generically, not organizationally. A standalone AI tool is fluent about the internet and knows nothing about this company, its policies, its customers, its own past answers.",
            "Security was never designed for AI to have an opinion. Existing permission models govern who can open a file. None of them were built to answer the harder question of what an AI should be allowed to say about that file, and to whom.",
          ],
        },
        {
          type: "callout",
          eyebrow: "THE GUIDING QUESTION",
          title:
            "What if a company's AI wasn't a separate tool answering from nothing, but a layer that already knew what the company knew — and what it was allowed to say?",
        },
      ],
    },
    {
      id: "decisions",
      number: "03",
      label: "DECISIONS",
      title: "Six decisions, one idea: an agent for every task",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The product could have been a chat app with a search bar bolted on, or a wiki with a chatbot bolted on. Each decision below was really the same one, made again in a new part of the product: treat knowledge, conversation, and AI as one system, never three.",
          ],
        },
      ],
    },
    {
      id: "the-system",
      number: "04",
      label: "THE SYSTEM",
      title: "One shared knowledge layer, an agent built for every task",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The information architecture splits into where people work day-to-day, where knowledge actually lives, and how collaboration stays governed — every layer feeding the same AI context rather than three separate products sharing a login screen.",
          ],
        },
        {
          type: "keyValue",
          title: "What each module does",
          rows: [
            {
              label: "AI Workspace",
              value:
                "A chat experience deliberately familiar from modern LLM interfaces, extended into a business environment. A teammate can talk to AI or to a colleague in the same thread, continue a conversation across projects, share it with the team, reference company knowledge, or hand off to a task agent — built to feel like a business teammate rather than a standalone chatbot.",
            },
            {
              label: "Knowledge Base",
              value:
                "The structured home for SOPs, HR policy, onboarding guides, technical documentation, research, customer information, and internal process, organized so AI can reason over it directly rather than just index it as a pile of files.",
            },
            {
              label: "AI-Powered Knowledge Retrieval",
              value:
                "Chat is the primary way employees reach company knowledge. Instead of navigating folders, they ask a plain-language question and AI retrieves the relevant information, summarizes it, and answers in context — turning document management into conversational discovery.",
            },
            {
              label: "Cloud Integrations",
              value:
                "Direct connections to Google Drive and Dropbox. Rather than duplicating documents into a new system of record, AI retrieves straight from wherever the company already keeps them, respecting each source's own access permissions.",
            },
            {
              label: "Task Agents",
              value:
                "Instead of one generic assistant, a company configures agents around its own recurring work — an HR agent for policy questions, an onboarding agent, a research agent — each one instructed for its task and scoped to the same permissions and documents as the person asking.",
            },
            {
              label: "Hubs",
              value:
                "Dedicated spaces set up per project — a research hub, a client hub, any recurring body of work — each holding its own chats, documents, and agents so context stays contained to what that project actually needs.",
            },
            {
              label: "Model Comparison",
              value:
                "Two models can run against the same prompt side by side, so a team can weigh outputs directly and choose the stronger generation before committing to an answer.",
            },
          ],
        },
      ],
    },
    {
      id: "impact",
      number: "05",
      label: "IMPACT",
      title: "What agents built for the job are worth, measured where it counts.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "This is a working product, not a finished launch. It's in the product stage — the core flow is built and in use, and we're actively refining it — so the honest version of \"impact\" here is a status report: what's shipped, what's being sharpened right now, and what's still ahead.",
          ],
        },
        {
          type: "stat",
          stats: [
            { value: "~60%", caption: "fewer tool switches to answer a question" },
            { value: "2x", caption: "faster policy answers" },
            { value: "~3 wks", caption: "faster onboarding ramp" },
          ],
        },
        {
          type: "keyValue",
          title: "What we've learned so far",
          rows: [
            {
              label: "Knowledge has to be the center, or the product just becomes another silo",
              value:
                "Early explorations treated Knowledge Base as one module among several. Once it became the shared substrate every other module read from, the product stopped feeling like a bundle of features.",
            },
            {
              label: "Trustworthy AI is a UX problem before it is a model problem",
              value:
                "The single biggest lever on whether people relied on an AI answer was not accuracy alone. It was whether they could see what it was grounded in and cite it back.",
            },
            {
              label: "Permission has to live inside retrieval, not just at login",
              value:
                "Treating access control as a feature added after the AI works undersells how central it is. Permission scope became an input to every retrieval call, not a filter bolted onto the response afterward.",
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
      "Priority Roofing ran its entire operation across QuickBooks, Roofr, and a stack of Excel sheets — none of which talked to each other. We designed and built a single CRM that carries a job from a knock on the door to a paid commission.",
    image: {
      src: "/images/work/roofing-job-list.webp",
      alt: "Priority Roofing CRM job list dashboard",
    },
  },
};
