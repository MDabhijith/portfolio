export function ProseBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-5">
      {paragraphs.map((p, i) => (
        <p key={i} className="font-body text-[15px] leading-relaxed text-cs-muted sm:text-base">
          {p}
        </p>
      ))}
    </div>
  );
}
