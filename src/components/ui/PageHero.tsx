import Link from "next/link";
import { cn } from "@/lib/utils";

type PageHeroShellProps = {
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
};

/**
 * Shared page-hero frame:
 * Mobile: heading → image (with side floats) → CTAs/labels
 * Desktop: copy left | image right
 */
export function PageHeroShell({
  children,
  className,
  footer,
}: PageHeroShellProps) {
  return (
    <section
      className={cn(
        "relative overflow-x-clip overflow-y-visible bg-gradient-to-br from-[#eef4ff] via-white to-[#f3f6fb]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-8 h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-[260px] w-[260px] rounded-full bg-sky-100/80 blur-3xl" />
      </div>

      <div className="container-padding relative py-8 sm:py-12 lg:py-16">
        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {children}
        </div>
        {footer ? <div className="mt-8 sm:mt-12 lg:mt-14">{footer}</div> : null}
      </div>
    </section>
  );
}

/** Media column — image + side floating cards */
export function PageHeroMedia({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative order-2 w-full lg:order-2 lg:mx-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Copy — heading first on mobile */
export function PageHeroCopy({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative z-10 order-1 max-w-xl lg:order-1", className)}>
      {children}
    </div>
  );
}

/** CTAs / stats block — after image on mobile */
export function PageHeroActions({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative z-10 order-3 w-full lg:hidden", className)}>
      {children}
    </div>
  );
}

/**
 * Stage for the hero image + floating cards.
 * Mobile: no side bleed — cards stay inset within margins.
 * Desktop (lg+): padded so cards can sit left/right of the photo.
 */
export function HeroMediaStage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-lg px-0 lg:mx-0 lg:max-w-none lg:px-12 xl:px-14",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function HeroImageFrame({
  children,
  className,
  aspect = "aspect-[4/3]",
}: {
  children: React.ReactNode;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[1.25rem] shadow-[0_20px_48px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/50 sm:rounded-[1.75rem] sm:shadow-[0_28px_64px_rgba(15,23,42,0.12)]",
        aspect,
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Absolute float card — visible on all breakpoints */
export function HeroFloatCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute z-20 rounded-xl border border-white/90 bg-white px-2.5 py-2 shadow-[0_10px_28px_rgba(15,23,42,0.14)] sm:rounded-2xl sm:px-3.5 sm:py-3 sm:shadow-[0_12px_32px_rgba(15,23,42,0.14)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Overlay layer for side floating cards (always on) */
export function HeroOverlays({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      {children}
    </div>
  );
}

/** @deprecated use HeroOverlays */
export function HeroDesktopOverlays({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <HeroOverlays className={className}>{children}</HeroOverlays>;
}

/** @deprecated mobile tags below image — prefer side floats */
export function HeroMobileTags({
  children,
  className,
  columns = 2,
}: {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2;
}) {
  return (
    <div
      className={cn(
        "mt-4 grid gap-2.5 md:hidden",
        columns === 2 ? "grid-cols-2" : "grid-cols-1",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function HeroMobileTagCard({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const classes = cn(
    "rounded-xl border border-border bg-white p-3 shadow-sm",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
