export function QaPanelBlock({
  eyebrow,
  meta,
  description,
  items,
}: {
  eyebrow: string;
  meta: string;
  description: string;
  items: { role: string; detail: string; question: string }[];
}) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-line p-6 sm:p-8">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.06em] text-cs-label">
            {eyebrow}
          </p>
          <p className="font-body text-sm text-cs-label">{meta}</p>
        </div>
        <p className="font-body text-[15px] leading-relaxed text-cs-body">
          {description}
        </p>
      </div>

      <div className="flex flex-col">
        {items.map((item) => (
          <div
            key={item.role}
            className="flex flex-col gap-1 border-t border-line py-5 first:border-t-0 first:pt-0 sm:flex-row sm:gap-8"
          >
            <div className="sm:w-[180px] sm:shrink-0">
              <p className="font-body text-[15px] font-semibold text-cs-ink">
                {item.role}
              </p>
              <p className="font-body text-xs text-cs-label">{item.detail}</p>
            </div>
            <p className="font-body text-[15px] leading-relaxed text-cs-body">
              {item.question}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
