export interface MetaItem {
  label: string;
  value: string;
  estimated?: boolean;
}

/** Company / Timeline / Team row at the top of every case study. */
export function MetaRow({ items }: { items: MetaItem[] }) {
  return (
    <dl className="flex flex-wrap gap-x-16 gap-y-6">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1.5">
          <dt className="font-mono text-xs tracking-[0.16em] text-primary-500 uppercase">
            {item.label}
          </dt>
          <dd className="font-body text-base text-primary-400">
            {item.value}
            {item.estimated ? <sup className="ml-0.5">*</sup> : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}
