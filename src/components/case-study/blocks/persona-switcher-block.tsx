"use client";

import { useState } from "react";
import Image from "next/image";
import type { ImageRef } from "@/lib/case-studies/types";
import { cn } from "@/lib/utils";

interface Persona {
  id: string;
  label: string;
  name: string;
  photo: ImageRef;
  role: string;
  demographics: { label: string; value: string }[];
  summary: string;
  goals: string[];
  frustrations: string[];
  quote: string;
}

export function PersonaSwitcherBlock({
  eyebrow,
  meta,
  personas,
}: {
  eyebrow: string;
  meta: string;
  personas: Persona[];
}) {
  const [activeId, setActiveId] = useState(personas[0].id);
  const active = personas.find((p) => p.id === activeId) ?? personas[0];

  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      <div className="flex items-center gap-5">
        <p className="whitespace-nowrap font-body text-body-sm text-positive">
          {eyebrow}
        </p>
        <div className="h-px flex-1 bg-line" aria-hidden="true" />
        <p className="whitespace-nowrap font-body text-body-sm text-cs-label">
          {meta}
        </p>
      </div>

      <div
        role="tablist"
        aria-label="User personas"
        className="flex flex-wrap items-center gap-2"
      >
        {personas.map((persona) => (
          <button
            key={persona.id}
            type="button"
            role="tab"
            id={`persona-tab-${persona.id}`}
            aria-selected={persona.id === activeId}
            aria-controls={`persona-panel-${persona.id}`}
            onClick={() => setActiveId(persona.id)}
            className={cn(
              "rounded-full border px-5 py-2.5 font-body text-sm font-semibold outline-none transition-colors duration-[var(--duration-fast)] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
              persona.id === activeId
                ? "border-positive bg-positive text-white"
                : "border-line bg-transparent text-cs-body hover:text-cs-ink",
            )}
          >
            {persona.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`persona-panel-${active.id}`}
        aria-labelledby={`persona-tab-${active.id}`}
        className="overflow-hidden rounded-xl border border-line bg-surface"
      >
        <div className="flex items-center gap-4 border-b border-line bg-white p-6 sm:gap-5 sm:p-8">
          <div className="relative size-16 shrink-0 overflow-hidden rounded-full bg-surface-tint sm:size-20">
            <Image
              src={active.photo.src}
              alt={active.photo.alt}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-heading text-h6 text-cs-ink">{active.name}</p>
            <p className="font-body text-[15px] text-primary-400">
              {active.role}
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-px border-b border-line bg-line sm:grid-cols-4">
          {active.demographics.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 bg-white px-5 py-4"
            >
              <dt className="font-body text-caption tracking-wide text-cs-label uppercase">
                {item.label}
              </dt>
              <dd className="font-body text-[15px] font-semibold text-cs-ink">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-6 p-6 sm:p-8">
          <p className="font-body text-base leading-relaxed text-cs-body">
            {active.summary}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <PersonaList label="GOALS" tone="positive" items={active.goals} />
            <PersonaList
              label="FRUSTRATIONS"
              tone="negative"
              items={active.frustrations}
            />
          </div>

          <blockquote className="border-l-2 border-positive pl-5 font-body text-body-lg leading-relaxed text-cs-ink italic">
            &ldquo;{active.quote}&rdquo;
          </blockquote>
        </div>
      </div>
    </div>
  );
}

function PersonaList({
  label,
  tone,
  items,
}: {
  label: string;
  tone: "positive" | "negative";
  items: string[];
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-line bg-white p-5">
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "size-1.5 rounded-full",
            tone === "positive" ? "bg-positive" : "bg-danger",
          )}
          aria-hidden="true"
        />
        <p className="font-body text-body-sm tracking-wide text-cs-label">
          {label}
        </p>
      </div>
      <ul className="flex list-disc flex-col gap-1.5 pl-5 font-body text-base text-primary-400">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
