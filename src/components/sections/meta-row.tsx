export interface MetaItem {
  label: string;
  value: string;
}

/** Company / Timeline / Team row at the top of every case study. */
export function MetaRow({ items }: { items: MetaItem[] }) {
  return (
    <dl className="flex flex-wrap gap-x-16 gap-y-6">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1">
          <dt className="font-body text-lg font-semibold text-primary-500">
            {item.label}
          </dt>
          <dd className="font-body text-base text-primary-400">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
