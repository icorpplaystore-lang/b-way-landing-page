import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Cpu,
  Crosshair,
  Globe2,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  HeroImageFrame,
  HeroMediaStage,
  HeroOverlays,
  PageHeroActions,
  PageHeroShell,
} from "@/components/ui/PageHero";

const featureStrip = [
  { label: "Business Focused Solutions", icon: Crosshair },
  { label: "End-to-End Support", icon: Users },
  { label: "Global Reach", icon: Globe2 },
  { label: "Trusted Partnership", icon: Network },
];

/** Left / right floats — inset on mobile (within margins), offset on desktop */
const floatingCards = [
  {
    href: "/services?tab=technology",
    title: "Technology",
    subtitle: "Build • Automate • Scale",
    icon: Cpu,
    className:
      "left-3 top-[8%] max-w-[min(100%,150px)] lg:left-0 lg:max-w-none lg:-translate-x-[55%]",
  },
  {
    href: "/services?tab=workforce",
    title: "People",
    subtitle: "Hire • Connect • Grow",
    icon: Users,
    className:
      "left-3 top-[36%] max-w-[min(100%,150px)] lg:left-0 lg:max-w-none lg:-translate-x-[62%]",
  },
  {
    href: "/compliance",
    title: "Compliance",
    subtitle: "Operate with Confidence",
    icon: ShieldCheck,
    className:
      "bottom-[22%] left-3 max-w-[min(100%,150px)] lg:left-0 lg:max-w-none lg:-translate-x-[55%]",
  },
  {
    href: "/about",
    title: "Stronger Businesses",
    subtitle: "Brighter Futures",
    icon: BarChart3,
    className:
      "bottom-[8%] right-3 max-w-[min(100%,150px)] lg:right-0 lg:max-w-none lg:translate-x-[40%]",
  },
];

function CtaButtons({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}
    >
      <Button href="/contact" size="lg" showArrow>
        Get a Free Consultation
      </Button>
      <Button
        href="/services"
        variant="outline"
        size="lg"
        className="border-primary text-primary hover:bg-primary-light"
      >
        Explore Our Services
      </Button>
    </div>
  );
}

function TagContent({
  title,
  subtitle,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  icon: typeof Cpu;
}) {
  return (
    <div className="flex items-start gap-2 sm:gap-3">
      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary sm:h-9 sm:w-9">
        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </span>
      <div>
        <p className="text-[11px] font-bold leading-tight text-slate-900 sm:text-sm">
          {title}
        </p>
        <p className="mt-0.5 text-[9px] leading-snug text-muted sm:mt-1 sm:text-[11px]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export function HomeHero() {
  return (
    <PageHeroShell
      footer={
        <div className="border-t border-slate-100/80 pt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-4 lg:gap-8">
            {featureStrip.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-primary">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <p className="text-sm font-semibold leading-snug text-slate-800">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      }
    >
      <>
        {/* 1. Heading */}
        <div className="relative z-10 order-1 max-w-xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
            Technology • People • Business Solutions
          </p>
          <h1 className="font-serif text-[1.75rem] font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] xl:text-[3.1rem] xl:leading-[1.12]">
            Building Better Businesses Through Technology & People
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted sm:mt-5 sm:text-base lg:text-[1.05rem]">
            We help businesses build digital solutions, automate operations,
            connect with the right people and ensure compliant, sustainable
            growth in a rapidly changing world.
          </p>
          <CtaButtons className="mt-8 hidden lg:flex" />
        </div>

        {/* 2. Image + left/right floating cards */}
        <div className="relative order-2 w-full">
          <HeroMediaStage>
            <HeroImageFrame
              aspect="aspect-[4/5]"
              className="mx-auto max-h-[340px] w-full sm:max-h-none lg:max-h-[540px]"
            >
              <Image
                src="/images/hero-woman.jpg"
                alt="Professional woman holding a tablet in a modern office"
                fill
                priority
                className="object-cover object-[center_15%]"
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 400px, 520px"
              />
            </HeroImageFrame>

            <HeroOverlays>
              {floatingCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.title}
                    href={card.href}
                    className={`pointer-events-auto absolute z-20 w-[140px] rounded-xl border border-white/90 bg-white px-2 py-1.5 shadow-[0_10px_28px_rgba(15,23,42,0.14)] transition-transform hover:-translate-y-0.5 sm:w-[170px] sm:rounded-2xl sm:px-3.5 sm:py-3 lg:w-[195px] ${card.className}`}
                  >
                    <TagContent
                      title={card.title}
                      subtitle={card.subtitle}
                      icon={Icon}
                    />
                  </Link>
                );
              })}
            </HeroOverlays>
          </HeroMediaStage>
        </div>

        {/* 3. CTAs under image on mobile */}
        <PageHeroActions>
          <CtaButtons />
        </PageHeroActions>
      </>
    </PageHeroShell>
  );
}
