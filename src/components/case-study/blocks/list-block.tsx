export function ListBlock({ items }: { items: string[] }) {
  return (
    <ol className="flex flex-col">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-4 border-t border-line py-4 first:border-t-0 first:pt-0"
        >
          <span className="font-body text-sm text-cs-label">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-body text-[15px] leading-relaxed text-cs-body">
            {item}
          </span>
        </li>
      ))}
    </ol>
  );
}
