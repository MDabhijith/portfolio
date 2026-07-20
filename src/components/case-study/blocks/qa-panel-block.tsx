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
      <p className="font-body text-base leading-relaxed text-cs-body">
        {description}
      </p>

      <div className="flex flex-col">
        {items.map((item) => (
          <div
            key={item.role}
            className="flex flex-col gap-3 border-t border-line py-6 first:border-t-0 first:pt-0 sm:flex-row sm:gap-[87px]"
          >
            <div className="sm:w-32 sm:shrink-0">
              <p className="font-body text-lg font-semibold text-cs-ink">
                {item.role}
              </p>
              <p className="font-body text-caption text-primary-400">
                {item.detail}
              </p>
            </div>
            <ul className="flex list-disc flex-col gap-1 pl-5 font-body text-base text-primary-400">
              {item.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
