export function TestimonialCardBlock({
  eyebrow,
  index,
  quote,
  initials,
  name,
  role,
}: {
  eyebrow: string;
  index: string;
  quote: string;
  initials: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex flex-col gap-10 rounded-xl border border-line bg-gradient-to-br from-brand/10 via-white to-brand-secondary/10 p-8 sm:p-20">
      <div className="flex items-center gap-5">
        <span className="shrink-0 font-body text-sm whitespace-nowrap text-cs-label">
          {eyebrow}
        </span>
        <div className="h-px flex-1 bg-line" aria-hidden="true" />
        <span className="shrink-0 font-body text-sm whitespace-nowrap text-cs-label">
          {index}
        </span>
      </div>

      <div className="flex flex-col gap-10">
        <p className="font-heading text-h6 font-semibold text-cs-ink">
          &ldquo;{quote}&rdquo;
        </p>

        <div className="flex items-center gap-3">
          <div className="flex size-[53px] shrink-0 items-center justify-center rounded-full bg-white">
            <span className="font-body text-base font-semibold text-cs-ink">
              {initials}
            </span>
          </div>
          <div className="flex flex-col">
            <p className="font-body text-sm font-semibold text-cs-ink">{name}</p>
            <p className="font-body text-xs text-cs-muted">{role}</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-full border border-line text-cs-label"
            >
              <ArrowIcon className="rotate-180" />
            </span>
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-full border border-line text-cs-label"
            >
              <ArrowIcon />
            </span>
          </div>
          <div className="flex items-center gap-1" aria-hidden="true">
            <span className="h-1.5 w-4 rounded-full bg-cs-label" />
            <span className="size-1.5 rounded-full bg-line" />
            <span className="size-1.5 rounded-full bg-line" />
            <span className="size-1.5 rounded-full bg-line" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`size-4 ${className ?? ""}`}
    >
      <path
        d="M6 3.5L10.5 8L6 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
