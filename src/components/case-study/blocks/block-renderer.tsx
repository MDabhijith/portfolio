import type { ContentBlock } from "@/lib/case-studies/types";
import { ProseBlock } from "./prose-block";
import { ListBlock } from "./list-block";
import { KeyValueBlock } from "./key-value-block";
import { ImageBlock } from "./image-block";
import { StatGrid } from "@/components/sections/stat-grid";
import { PullQuote } from "@/components/sections/pull-quote";
import { InsightCardsBlock } from "./insight-cards-block";
import { TaggedListBlock } from "./tagged-list-block";
import { CalloutBlock } from "./callout-block";
import { QaPanelBlock } from "./qa-panel-block";
import { SystemComparisonBlock } from "./system-comparison-block";
import { DarkCalloutBlock } from "./dark-callout-block";
import { BrowserGalleryBlock } from "./browser-gallery-block";
import { ApproachGridBlock } from "./approach-grid-block";
import { ModuleHeaderBlock } from "./module-header-block";
import { ExecutiveSummaryBlock } from "./executive-summary-block";
import { PilotSurveyChartBlock } from "./pilot-survey-chart-block";
import { TestimonialCardBlock } from "./testimonial-card-block";
import { ImagePairBlock } from "./image-pair-block";
import { NumberedFindingsBlock } from "./numbered-findings-block";
import { ModuleNavBlock } from "./module-nav-block";
import { DefinitionCardsBlock } from "./definition-cards-block";
import { StatusCardsBlock } from "./status-cards-block";
import { TitledListBlock } from "./titled-list-block";
import { StatCardsBlock } from "./stat-cards-block";
import { VideoBlock } from "./video-block";
import { WorkflowTimelineBlock } from "./workflow-timeline-block";
import { BeforeAfterBlock } from "./before-after-block";
import { PersonaSwitcherBlock } from "./persona-switcher-block";

/** Renders a single case-study content block by its `type` discriminant. */
export function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "prose":
      return <ProseBlock paragraphs={block.paragraphs} />;
    case "list":
      return <ListBlock items={block.items} />;
    case "keyValue":
      return (
        <KeyValueBlock
          title={block.title}
          rows={block.rows}
          variant={block.variant}
        />
      );
    case "image":
      return (
        <ImageBlock
          image={block.image}
          caption={block.caption}
          aspect={block.aspect}
        />
      );
    case "stat":
      return <StatGrid stats={block.stats} />;
    case "quote":
      return <PullQuote quote={block.quote} attribution={block.attribution} />;
    case "insightCards":
      return <InsightCardsBlock items={block.items} />;
    case "taggedList":
      return <TaggedListBlock items={block.items} variant={block.variant} />;
    case "callout":
      return <CalloutBlock eyebrow={block.eyebrow} title={block.title} />;
    case "personaSwitcher":
      return (
        <PersonaSwitcherBlock
          eyebrow={block.eyebrow}
          meta={block.meta}
          personas={block.personas}
        />
      );
    case "qaPanel":
      return (
        <QaPanelBlock
          eyebrow={block.eyebrow}
          meta={block.meta}
          description={block.description}
          items={block.items}
        />
      );
    case "systemComparison":
      return <SystemComparisonBlock items={block.items} />;
    case "darkCallout":
      return <DarkCalloutBlock eyebrow={block.eyebrow} rows={block.rows} />;
    case "browserGallery":
      return <BrowserGalleryBlock images={block.images} />;
    case "approachGrid":
      return <ApproachGridBlock columns={block.columns} />;
    case "moduleHeader":
      return (
        <ModuleHeaderBlock
          eyebrow={block.eyebrow}
          eyebrowTrailing={block.eyebrowTrailing}
          title={block.title}
          description={block.description}
        />
      );
    case "executiveSummary":
      return (
        <ExecutiveSummaryBlock title={block.title} description={block.description} />
      );
    case "pilotSurveyChart":
      return (
        <PilotSurveyChartBlock
          scaleNote={block.scaleNote}
          categories={block.categories}
          headline={block.headline}
          analysis={block.analysis}
        />
      );
    case "testimonialCard":
      return (
        <TestimonialCardBlock
          eyebrow={block.eyebrow}
          index={block.index}
          quote={block.quote}
          initials={block.initials}
          name={block.name}
          role={block.role}
        />
      );
    case "imagePair":
      return <ImagePairBlock images={block.images} />;
    case "numberedFindings":
      return <NumberedFindingsBlock items={block.items} />;
    case "moduleNav":
      return <ModuleNavBlock groups={block.groups} />;
    case "definitionCards":
      return <DefinitionCardsBlock items={block.items} />;
    case "statusCards":
      return <StatusCardsBlock items={block.items} />;
    case "titledList":
      return <TitledListBlock eyebrow={block.eyebrow} items={block.items} />;
    case "statCards":
      return <StatCardsBlock items={block.items} />;
    case "workflowTimeline":
      return <WorkflowTimelineBlock steps={block.steps} />;
    case "beforeAfter":
      return (
        <BeforeAfterBlock
          before={block.before}
          after={block.after}
          caption={block.caption}
          aspect={block.aspect}
        />
      );
    case "video":
      return (
        <VideoBlock
          src={block.src}
          poster={block.poster}
          caption={block.caption}
          label={block.label}
          aspect={block.aspect}
        />
      );
    default:
      return null;
  }
}
