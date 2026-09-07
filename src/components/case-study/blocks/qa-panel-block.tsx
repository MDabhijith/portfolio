export function QaPanelBlock({
  eyebrow,
  meta,
  description,
  items,
}: {
  eyebrow: string;
  meta: string;
  description: string;
  items: { role: string; detail: string; questions: string[] }[];
}) {
  return (
    <div className="flex flex-col gap-5 py-6 sm:gap-6 sm:py-8">
      <div className="flex items-center gap-5">
        <p className="whitespace-nowrap font-body text-body-sm text-positive">
          {eyebrow}
        </p>
        <div className="h-px flex-1 bg-line" aria-hidden="true" />
        <p className="whitespace-nowrap font-body text-body-sm text-cs-label">
          {meta}
        </p>
      </div>
      <p className="font-body text-base leading-relaxed text-cs-body">
        {description}
      </p>

      <div
        data-reveal-stagger
        className="grid grid-cols-1 gap-5 sm:grid-cols-3"
      >
        {items.map((item) => (
          <div
            key={item.role}
            className="flex flex-col gap-5 rounded-2xl border border-brand/20 bg-gradient-to-b from-brand/5 to-white p-6"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- small static icon asset, no raster optimization needed */}
            <img
              src="/images/work/qa-panel-user-icon.png"
              alt=""
              aria-hidden="true"
              width={48}
              height={48}
              className="size-12 shrink-0 object-contain"
            />
            <div className="flex flex-col gap-1">
              <p className="font-heading text-xl font-bold text-cs-ink">
                {item.role}
              </p>
              <p className="font-body text-sm text-cs-label">{item.detail}</p>
            </div>
            <div className="flex flex-col gap-4">
              {item.questions.map((q, i) => (
                <p
                  key={i}
                  className="font-body text-[15px] leading-relaxed text-cs-body italic"
                >
                  {q}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
