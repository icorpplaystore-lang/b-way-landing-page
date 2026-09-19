import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

type BrandLogoProps = {
  className?: string;
  /** Show company wordmark next to the mark */
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
};

/** Mark is intentionally larger than the “BGS” type for clear padding. */
const markSize = {
  sm: "h-10 w-10 text-[9px] tracking-wide",
  md: "h-11 w-11 text-[10px] tracking-wide",
  lg: "h-14 w-14 text-xs tracking-wider",
} as const;

const wordSize = {
  sm: "text-[11px] leading-[1.15] sm:text-xs",
  md: "text-xs leading-[1.2] sm:text-[13px]",
  lg: "text-sm leading-[1.25] sm:text-[15px]",
} as const;

const gapSize = {
  sm: "gap-2.5",
  md: "gap-3",
  lg: "gap-3.5",
} as const;

/** BGS brand mark + Broadway Global Solutions wordmark */
export function BrandLogo({
  className,
  showWordmark = true,
  size = "md",
}: BrandLogoProps) {
  return (
    <span
      className={cn(
        "group inline-flex max-w-full items-center",
        gapSize[size],
        className,
      )}
    >
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-[0.7rem] bg-gradient-to-br from-[#0044CC] to-[#00C2FF] font-bold text-white shadow-md transition-transform group-hover:scale-105",
          markSize[size],
        )}
        aria-hidden
      >
        BGS
      </span>
      {showWordmark ? (
        <span
          className={cn(
            "min-w-0 font-serif font-semibold tracking-[-0.01em] text-slate-900",
            wordSize[size],
          )}
        >
          <span className="block whitespace-nowrap">Broadway Global</span>
          <span className="block whitespace-nowrap">Solutions</span>
        </span>
      ) : (
        <span className="sr-only">{SITE.legalName}</span>
      )}
    </span>
  );
}
