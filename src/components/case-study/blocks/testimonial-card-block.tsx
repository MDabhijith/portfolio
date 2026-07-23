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
    <div className="flex flex-col gap-10 rounded-xl bg-dark-callout p-8 sm:p-20">
      <div className="flex items-center gap-5">
        <span className="shrink-0 font-body text-sm whitespace-nowrap text-dark-callout-eyebrow">
          {eyebrow}
        </span>
        <div className="h-px flex-1 bg-white/15" aria-hidden="true" />
        <span className="shrink-0 font-body text-sm whitespace-nowrap text-dark-callout-eyebrow">
          {index}
        </span>
      </div>

      <div className="flex flex-col gap-10">
        <p className="font-heading text-h6 font-semibold text-dark-callout-label">
          &ldquo;{quote}&rdquo;
        </p>

        <div className="flex items-center gap-3">
          <div className="flex size-[53px] shrink-0 items-center justify-center rounded-full bg-[#154231]">
            <span className="font-body text-base font-semibold text-[#7ecca6]">
              {initials}
            </span>
          </div>
          <div className="flex flex-col">
            <p className="font-body text-sm font-semibold text-white">{name}</p>
            <p className="font-body text-xs text-dark-callout-muted">{role}</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-full border border-[#3b574a] text-dark-callout-label"
            >
              <ArrowIcon className="rotate-180" />
            </span>
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-full border border-[#3b574a] text-dark-callout-label"
            >
              <ArrowIcon />
            </span>
          </div>
          <div className="flex items-center gap-1" aria-hidden="true">
            <span className="h-1.5 w-4 rounded-full bg-dark-callout-eyebrow" />
            <span className="size-1.5 rounded-full bg-[#486255]" />
            <span className="size-1.5 rounded-full bg-[#486255]" />
            <span className="size-1.5 rounded-full bg-[#486255]" />
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
