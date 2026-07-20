export function CalloutBlock({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-stretch gap-[29px]">
      <div className="w-[3px] shrink-0 rounded-full bg-positive" aria-hidden="true" />
      <div className="flex flex-col gap-[3px]">
        <p className="font-body text-body-sm text-positive">{eyebrow}</p>
        <p className="max-w-[814px] font-heading text-xl font-medium leading-snug tracking-[-0.02em] text-cs-ink sm:text-[30px] sm:leading-[39px]">
          {title}
        </p>
      </div>
    </div>
  );
}
