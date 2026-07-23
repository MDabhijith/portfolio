import { Fragment } from "react";

export function TitledListBlock({
  eyebrow,
  items,
}: {
  eyebrow?: string;
  items: { title: string; description: string }[];
}) {
  return (
    <div className="flex flex-col gap-5">
      {eyebrow ? (
        <div className="flex items-center gap-4">
          <span className="shrink-0 font-body text-sm whitespace-nowrap text-positive">
            {eyebrow}
          </span>
          <div className="h-px flex-1 bg-line" aria-hidden="true" />
        </div>
      ) : null}
      <div className="flex flex-col gap-6">
        {items.map((item, i) => (
          <Fragment key={i}>
            <div className="flex flex-col gap-2">
              <p className="font-body text-base font-semibold text-black">
                {item.title}
              </p>
              <p className="font-body text-base leading-relaxed text-cs-label">
                {item.description}
              </p>
            </div>
            <div className="h-px w-full bg-line" aria-hidden="true" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
