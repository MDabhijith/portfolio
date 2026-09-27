import { Fragment } from "react";
import { ArrowDown } from "lucide-react";

type Actor = "USER" | "SYSTEM" | "ADMIN";

function Pill({ end, children }: { end?: boolean; children: string }) {
  return (
    <span
      className={
        "inline-flex shrink-0 items-center justify-center rounded-full border-2 px-4 py-2 text-center font-body text-xs font-medium " +
        (end
          ? "border-brand-secondary text-brand-secondary"
          : "border-brand text-cs-ink")
      }
    >
      {children}
    </span>
  );
}

function Rect({ children }: { children: string }) {
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-lg border-2 border-brand px-3.5 py-2.5 text-center font-body text-xs font-medium text-cs-ink">
      {children}
    </span>
  );
}

function Diamond({ children }: { children: string }) {
  return (
    <span className="relative flex size-[92px] shrink-0 items-center justify-center">
      <span className="absolute inset-[8px] rotate-45 rounded-sm border-2 border-brand" />
      <span className="relative px-4 text-center font-body text-[10.5px] leading-tight font-medium text-cs-ink">
        {children}
      </span>
    </span>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-1" aria-hidden="true">
      <ArrowDown className="size-4 text-brand" />
    </div>
  );
}

function YSplitter() {
  return (
    <svg
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      className="hidden h-10 w-full max-w-[560px] sm:block"
      aria-hidden="true"
    >
      <defs>
        <marker
          id="y-splitter-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="var(--brand)" />
        </marker>
      </defs>
      <line
        x1="50"
        y1="0"
        x2="25"
        y2="37"
        stroke="var(--brand)"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        markerEnd="url(#y-splitter-arrow)"
      />
      <line
        x1="50"
        y1="0"
        x2="75"
        y2="37"
        stroke="var(--brand)"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        markerEnd="url(#y-splitter-arrow)"
      />
    </svg>
  );
}

function EdgeLabel({ children }: { children: string }) {
  return (
    <span className="shrink-0 rounded-full bg-brand px-2.5 py-1 font-body text-[10px] font-semibold whitespace-nowrap text-white">
      {children}
    </span>
  );
}

export function UserFlowDiagramBlock({
  steps,
  decision,
  rejectedLabel,
  rejectedEnd,
  approvedLabel,
  approvedSteps,
  successEnd,
}: {
  steps: { actor: Actor; label: string }[];
  decision: { actor: Actor; label: string };
  rejectedLabel: string;
  rejectedEnd: string;
  approvedLabel: string;
  approvedSteps: { actor: Actor; label: string }[];
  successEnd: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-line bg-surface/30 p-4 sm:p-6">
      <Pill>{steps[0].label}</Pill>
      {steps.slice(1).map((s, i) => (
        <Fragment key={i}>
          <Connector />
          <Rect>{s.label}</Rect>
        </Fragment>
      ))}
      <Connector />
      <Diamond>{decision.label}</Diamond>

      <YSplitter />

      <div
        data-reveal-stagger
        className="grid w-full max-w-[560px] grid-cols-1 gap-8 sm:grid-cols-2"
      >
        <div className="flex flex-col items-center">
          <div className="sm:hidden">
            <Connector />
          </div>
          <EdgeLabel>{rejectedLabel}</EdgeLabel>
          <Connector />
          <Pill end>{rejectedEnd}</Pill>
        </div>

        <div className="flex flex-col items-center">
          <div className="sm:hidden">
            <Connector />
          </div>
          <EdgeLabel>{approvedLabel}</EdgeLabel>
          {approvedSteps.map((s, i) => (
            <Fragment key={i}>
              <Connector />
              <Rect>{s.label}</Rect>
            </Fragment>
          ))}
          <Connector />
          <Pill end>{successEnd}</Pill>
        </div>
      </div>
    </div>
  );
}
