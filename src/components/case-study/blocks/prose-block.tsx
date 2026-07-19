export function ProseBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((p, i) => (
        <p key={i} className="font-body text-base leading-relaxed text-cs-body sm:text-[17px]">
          {p}
        </p>
      ))}
    </div>
  );
}
