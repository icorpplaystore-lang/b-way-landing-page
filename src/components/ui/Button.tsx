import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigateToHash } from "@/lib/navigation/scroll";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white" | "whiteOutline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: LucideIcon;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm shadow-primary/20",
  secondary: "bg-navy text-white hover:bg-slate-800",
  outline:
    "border border-border bg-white text-foreground hover:border-primary hover:text-primary",
  ghost: "bg-transparent text-primary hover:bg-primary-light",
  white: "bg-white text-navy hover:bg-slate-100",
  whiteOutline:
    "border border-white/40 bg-transparent text-white hover:bg-white/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  icon: Icon,
  showArrow = false,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const content = (
    <>
      {Icon ? <Icon className="h-4 w-4" /> : null}
      <span>{children}</span>
      {showArrow ? <ArrowRight className="h-4 w-4" /> : null}
    </>
  );

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a
          href={href}
          className={classes}
          onClick={(event) => {
            event.preventDefault();
            navigateToHash(href);
            onClick?.();
          }}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
