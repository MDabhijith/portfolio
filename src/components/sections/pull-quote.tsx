/** Stakeholder pull-quote block used inside case studies. */
export function PullQuote({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <blockquote className="border-l-2 border-cs-ink/15 pl-6">
      <p className="font-body text-lg leading-relaxed text-cs-ink sm:text-[19px]">
        “{quote}”
      </p>
      <footer className="mt-3 font-body text-sm text-cs-muted">
        — {attribution}
      </footer>
    </blockquote>
  );
}
