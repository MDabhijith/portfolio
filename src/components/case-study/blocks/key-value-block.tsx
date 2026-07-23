import { Fragment } from "react";

export function KeyValueBlock({
  title,
  rows,
  variant = "plain",
}: {
  title?: string;
  rows: { label: string; value: string }[];
  variant?: "plain" | "card";
}) {
  if (variant === "card") {
    return (
      <div className="flex flex-col gap-3.5">
        {title ? (
          <p className="font-body text-lg font-semibold text-primary-500">
            {title}
          </p>
        ) : null}
        <div className="flex flex-col gap-5 rounded-md bg-[#f7f7f7] p-6 sm:p-[34px]">
          {rows.map((row, i) => (
            <Fragment key={row.label}>
              {i > 0 ? (
                <div className="h-px w-full bg-line" aria-hidden="true" />
              ) : null}
              <div className="flex items-center justify-between gap-6">
                <span className="font-body text-base font-medium text-primary-500">
                  {row.label}
                </span>
                <span className="text-right font-body text-base text-primary-400">
                  {row.value}
                </span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {title ? (
        <p className="font-body text-lg font-medium text-cs-ink">{title}</p>
      ) : null}
      <dl className="flex flex-col">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-1 border-t border-line py-4 first:border-t-0 first:pt-0 sm:flex-row sm:gap-6"
          >
            <dt className="font-body text-[15px] font-medium text-cs-ink sm:w-[180px] sm:shrink-0">
              {row.label}
            </dt>
            <dd className="font-body text-[15px] leading-relaxed text-cs-body">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
