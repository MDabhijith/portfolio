export function ModuleHeaderBlock({
  eyebrow,
  eyebrowTrailing,
  title,
  description,
}: {
  eyebrow?: string;
  eyebrowTrailing?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      {eyebrow || title ? (
        <div className="flex flex-col gap-5">
          {eyebrow ? (
            <div className="flex items-center gap-5">
              <span className="shrink-0 font-body text-sm whitespace-nowrap text-positive">
                {eyebrow}
              </span>
              <div className="h-px flex-1 bg-line" aria-hidden="true" />
              {eyebrowTrailing ? (
                <span className="shrink-0 font-body text-sm whitespace-nowrap text-cs-label">
                  {eyebrowTrailing}
                </span>
              ) : null}
            </div>
          ) : null}
          {title ? (
            <h3 className="font-heading text-h6 font-semibold text-cs-ink">
              {title}
            </h3>
          ) : null}
        </div>
      ) : null}
      {description ? (
        <p className="font-body text-base text-cs-body">{description}</p>
      ) : null}
    </div>
  );
}
