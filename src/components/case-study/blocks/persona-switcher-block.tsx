"use client";

import { useState } from "react";
import Image from "next/image";
import type { ImageRef } from "@/lib/case-studies/types";
import { cn } from "@/lib/utils";

function initialsOf(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

interface Persona {
  id: string;
  label: string;
  name: string;
  photo?: ImageRef;
  role: string;
  demographics: { label: string; value: string }[];
  bio: string;
  motivations: string[];
  goals: string[];
  frustrations: string[];
  quote: string;
  /** When present, the panel renders this full designed card in place of the
   * structured layout below — chip switching still applies. */
  cardImage?: ImageRef & { aspect?: string };
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
    <div className="flex flex-col gap-5 pt-10 pb-6 sm:gap-6 sm:pt-14 sm:pb-8">
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
                ? "border-cs-ink bg-cs-ink text-white"
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
        {active.cardImage ? (
          <div
            className="relative w-full"
            style={{ aspectRatio: active.cardImage.aspect ?? "auto" }}
          >
            <Image
              src={active.cardImage.src}
              alt={active.cardImage.alt}
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-contain"
            />
          </div>
        ) : (
          <>
        <div className="flex items-center gap-4 border-b border-line bg-white p-6 sm:gap-5 sm:p-8">
          <div className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface ring-2 ring-brand/25 sm:size-[70px]">
            {active.photo ? (
              <Image
                src={active.photo.src}
                alt={active.photo.alt}
                fill
                sizes="80px"
                className="object-cover"
              />
            ) : (
              <span
                aria-hidden="true"
                className="font-heading text-lg font-semibold text-brand sm:text-xl"
              >
                {initialsOf(active.name)}
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <p className="w-full font-heading text-lg font-semibold text-cs-ink sm:w-auto sm:text-xl">
              {active.name}
            </p>
            <span className="rounded-full bg-brand/10 px-3 py-1 font-body text-sm font-medium text-brand">
              {active.label}
            </span>
            <span className="font-body text-sm text-cs-label">
              {active.role.replace(`${active.label} · `, "")}
            </span>
          </div>
        </div>

        <dl className="grid grid-cols-2 divide-x divide-y divide-line border-b border-line bg-white sm:grid-cols-4 sm:divide-y-0">
          {active.demographics.map((item) => (
            <div key={item.label} className="flex flex-col gap-1 px-5 py-4">
              <dt className="font-mono text-[11px] tracking-[0.14em] text-brand/70 uppercase">
                {item.label}
              </dt>
              <dd className="font-body text-[15px] font-semibold text-cs-ink">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-6 p-6 sm:p-8">
          <blockquote className="border-l-2 border-brand pl-5 font-body text-base leading-relaxed text-cs-ink">
            {active.bio}
          </blockquote>

          <div className="grid gap-4 sm:grid-cols-3">
            <PersonaList
              label="MOTIVATIONS"
              tone="accent"
              items={active.motivations}
            />
            <PersonaList label="GOALS" tone="positive" items={active.goals} />
            <PersonaList
              label="FRUSTRATIONS"
              tone="negative"
              items={active.frustrations}
            />
          </div>

          <blockquote className="border-l-2 border-brand pl-5 font-body text-body-lg leading-relaxed text-cs-ink italic">
            &ldquo;{active.quote}&rdquo;
            <footer className="mt-2 font-body text-sm not-italic text-brand">
              — {active.name}
            </footer>
          </blockquote>
        </div>
          </>
        )}
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
  tone: "accent" | "positive" | "negative";
  items: string[];
}) {
  const isNegative = tone === "negative";

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-lg border p-5",
        isNegative
          ? "border-line bg-white"
          : tone === "positive"
            ? "border-brand/15 bg-brand/5"
            : "border-line bg-white",
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "size-1.5 rounded-full",
              isNegative ? "bg-danger" : "bg-brand",
            )}
            aria-hidden="true"
          />
          <p className="font-mono text-[11px] tracking-[0.14em] text-cs-label uppercase">
            {label}
          </p>
        </div>
        <div
          className={cn(
            "h-px w-full",
            isNegative ? "bg-danger/20" : "bg-brand/20",
          )}
          aria-hidden="true"
        />
      </div>
      <ul className="flex flex-col gap-2 font-body text-[15px] text-cs-body">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span
              className={cn(
                "mt-2 size-1 shrink-0 rounded-full",
                isNegative ? "bg-danger/60" : "bg-brand/60",
              )}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
