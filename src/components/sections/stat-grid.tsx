import { cn } from "@/lib/utils";

export interface Stat {
  value: string;
  caption: string;
  estimated?: boolean;
}

/** Impact-strip stats used at the end of every case study ("100%", "40%", ...). */
export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <ul
      data-reveal-stagger
      className="hero-dark my-8 grid grid-cols-1 gap-x-10 gap-y-8 rounded-xl p-8 sm:my-14 sm:grid-cols-2 sm:gap-y-10 sm:p-12"
    >
      {stats.map((stat, i) => (
        <li
          key={i}
          className={cn(
            "flex flex-col gap-3 border-t pt-[17px]",
            i === 0 && "border-transparent",
            i === 1 && "border-white/20 sm:border-transparent",
            i > 1 && "border-white/20"
          )}
        >
          <p className="font-heading text-[32px] font-semibold tracking-[-0.03em] text-white sm:text-[46px]">
            {stat.value}
            {stat.estimated ? (
              <sup className="ml-0.5 text-white/60">*</sup>
            ) : null}
          </p>
          <p className="font-body text-[13.5px] leading-[1.55] text-white/70">
            {stat.caption}
          </p>
        </li>
      ))}
    </ul>
  );
}
