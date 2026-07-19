export function CalloutBlock({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-3 border-l-2 border-positive pl-6">
      <p className="font-body text-sm font-semibold uppercase tracking-[0.08em] text-positive">
        {eyebrow}
      </p>
      <p className="font-heading text-xl font-medium leading-snug text-cs-ink sm:text-2xl">
        {title}
      </p>
    </div>
  );
}
