export interface Stat {
  value: string;
  caption: string;
}

/** Impact-strip stats used at the end of every case study ("100%", "40%", ...). */
export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col gap-3 border-t border-cs-ink/80 pt-[17px]">
          <dt className="sr-only">{stat.caption}</dt>
          <dd className="font-heading text-[32px] font-semibold tracking-[-0.03em] text-cs-ink sm:text-[46px]">
            {stat.value}
          </dd>
          <p className="font-body text-[13.5px] leading-[1.55] text-cs-muted">
            {stat.caption}
          </p>
        </div>
      ))}
    </dl>
  );
}
