import { ImageOff } from "lucide-react";

/** Stands in for a visual that doesn't have a real asset yet — never a broken image reference. */
export function VisualPlaceholderBlock({ label }: { label: string }) {
  return (
    <div className="flex aspect-[848/500] w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-line bg-surface text-cs-muted">
      <ImageOff className="size-6" aria-hidden="true" />
      <p className="font-body text-sm">{label}</p>
    </div>
  );
}
