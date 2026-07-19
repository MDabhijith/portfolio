import type { ContentBlock } from "@/lib/case-studies/types";
import { ProseBlock } from "./prose-block";
import { ListBlock } from "./list-block";
import { KeyValueBlock } from "./key-value-block";
import { ImageBlock } from "./image-block";
import { StatGrid } from "@/components/sections/stat-grid";
import { PullQuote } from "@/components/sections/pull-quote";
import { InsightCardsBlock } from "./insight-cards-block";
import { CalloutBlock } from "./callout-block";
import { QaPanelBlock } from "./qa-panel-block";

/** Renders a single case-study content block by its `type` discriminant. */
export function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "prose":
      return <ProseBlock paragraphs={block.paragraphs} />;
    case "list":
      return <ListBlock items={block.items} />;
    case "keyValue":
      return <KeyValueBlock title={block.title} rows={block.rows} />;
    case "image":
      return <ImageBlock image={block.image} caption={block.caption} />;
    case "stat":
      return <StatGrid stats={block.stats} />;
    case "quote":
      return <PullQuote quote={block.quote} attribution={block.attribution} />;
    case "insightCards":
      return <InsightCardsBlock items={block.items} />;
    case "callout":
      return <CalloutBlock eyebrow={block.eyebrow} title={block.title} />;
    case "qaPanel":
      return (
        <QaPanelBlock
          eyebrow={block.eyebrow}
          meta={block.meta}
          description={block.description}
          items={block.items}
        />
      );
    default:
      return null;
  }
}
