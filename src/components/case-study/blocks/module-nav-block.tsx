export function ModuleNavBlock({
  groups,
}: {
  groups: { eyebrow: string; count: string; modules: string[] }[];
}) {
  return (
    <div data-reveal-stagger className="flex flex-col gap-6">
      {groups.map((group) => (
        <div
          key={group.eyebrow}
          className="flex flex-col gap-6 rounded-md border border-primary-100 bg-white p-6"
        >
          <div className="flex items-center justify-between font-body text-base">
            <span className="text-positive">{group.eyebrow}</span>
            <span className="text-[#5a5a5a]">{group.count}</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {group.modules.map((module) => (
              <span
                key={module}
                className="rounded-lg bg-surface px-4 py-2 font-body text-lg font-semibold text-cs-ink"
              >
                {module}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
