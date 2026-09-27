import {
  Briefcase,
  FileCheck,
  ShieldCheck,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  userCheck: UserCheck,
  shieldCheck: ShieldCheck,
  users: Users,
  briefcase: Briefcase,
  fileCheck: FileCheck,
};

/** Decorative only — ties each legend row to a ring segment, not a measured proportion. */
const ringTones = ["var(--brand)", "color-mix(in srgb, var(--brand) 40%, white)", "color-mix(in srgb, var(--brand) 65%, black)"];

export function PersonaCardsBlock({
  items,
}: {
  items: {
    icon: "userCheck" | "shieldCheck" | "users" | "briefcase" | "fileCheck";
    title: string;
    legend: string[];
  }[];
}) {
  return (
    <div data-reveal-stagger className="grid gap-6 sm:grid-cols-2">
      {items.map((item, i) => {
        const Icon = icons[item.icon];
        return (
          <div
            key={i}
            className="flex flex-col items-start gap-8 overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-brand/10 via-white to-white p-8 sm:p-9"
          >
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs font-medium tracking-[0.16em] text-cs-label uppercase">
                Persona
              </span>
              <p className="font-heading text-h6 text-cs-ink">{item.title}</p>
            </div>

            <div
              className="flex size-32 shrink-0 items-center justify-center self-center rounded-full p-3.5"
              style={{
                background: `conic-gradient(${ringTones[0]} 0deg 120deg, ${ringTones[1]} 120deg 240deg, ${ringTones[2]} 240deg 360deg)`,
              }}
              aria-hidden="true"
            >
              <div className="flex size-full items-center justify-center rounded-full bg-white">
                <div className="flex size-16 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="size-7 text-brand" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col">
              {item.legend.map((label, li) => (
                <div
                  key={li}
                  className="flex items-center gap-3 border-t border-line py-3.5 first:border-t-0 first:pt-0"
                >
                  <span
                    className="size-2.5 shrink-0 rounded-full"
                    style={{ background: ringTones[li % ringTones.length] }}
                    aria-hidden="true"
                  />
                  <span className="font-body text-sm text-cs-body">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
