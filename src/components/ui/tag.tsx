import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-body font-semibold transition-colors duration-[var(--duration-fast)]",
  {
    variants: {
      variant: {
        /** Solid brand pill — hero "Product Designer" badge */
        solid: "bg-brand text-white border border-brand",
        /** Frosted glass pill over imagery — hero secondary badges */
        glass:
          "bg-white/60 text-ink border border-ink/12 backdrop-blur-[10px]",
        /** Tinted brand pill — card category label ("Roofing CRM") */
        tint: "bg-brand/7 text-brand",
        /** Outlined neutral pill — skill tags ("Product Design") */
        outline: "border border-line text-ink-secondary font-normal",
      },
      size: {
        sm: "px-3 py-[6px] text-xs",
        md: "px-[15px] py-[7px] text-[12.5px]",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

export function Tag({ className, variant, size, ...props }: TagProps) {
  return (
    <span className={cn(tagVariants({ variant, size }), className)} {...props} />
  );
}
