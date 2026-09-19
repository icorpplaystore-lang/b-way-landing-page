import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type IconTone =
  | "blue"
  | "violet"
  | "emerald"
  | "amber"
  | "rose"
  | "sky"
  | "orange"
  | "indigo"
  | "teal"
  | "fuchsia";

export const ICON_TONE_STYLES: Record<IconTone, string> = {
  blue: "bg-blue-100 text-blue-600",
  violet: "bg-violet-100 text-violet-600",
  emerald: "bg-emerald-100 text-emerald-600",
  amber: "bg-amber-100 text-amber-700",
  rose: "bg-rose-100 text-rose-600",
  sky: "bg-sky-100 text-sky-600",
  orange: "bg-orange-100 text-orange-600",
  indigo: "bg-indigo-100 text-indigo-600",
  teal: "bg-teal-100 text-teal-700",
  fuchsia: "bg-fuchsia-100 text-fuchsia-600",
};

type IconBadgeProps = {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  tone?: IconTone;
};

export function IconBadge({
  icon: Icon,
  className,
  iconClassName,
  tone = "blue",
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-xl",
        ICON_TONE_STYLES[tone],
        className,
      )}
    >
      <Icon className={cn("h-5 w-5", iconClassName)} strokeWidth={2} />
    </span>
  );
}
