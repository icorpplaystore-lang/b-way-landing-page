"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Award,
  BarChart3,
  Briefcase,
  Cpu,
  Globe2,
  Handshake,
  Monitor,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconBadge, ICON_TONE_STYLES } from "@/components/ui/IconBadge";
import type { IconTone } from "@/components/ui/IconBadge";
import {
  HeroFloatCard,
  HeroImageFrame,
  HeroMediaStage,
  PageHeroActions,
  PageHeroCopy,
  PageHeroMedia,
  PageHeroShell,
} from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  technologyServicesDetailed,
  workforceServicesDetailed,
} from "@/lib/data/site-content";
import { scrollToHashWhenReady } from "@/lib/navigation/scroll";
import { cn } from "@/lib/utils";

type TabId = "technology" | "workforce";

const heroStats = [
  { value: "250+", label: "Projects Delivered", icon: Briefcase },
  { value: "100+", label: "Businesses Supported", icon: Users },
  { value: "98%", label: "Client Satisfaction", icon: Award },
];

const heroCards = [
  {
    title: "Technology",
    icon: Monitor,
    href: "/services?tab=technology",
  },
  {
    title: "People",
    icon: Users,
    href: "/services?tab=workforce",
  },
  {
    title: "Cloud",
    icon: Cpu,
    href: "/services?tab=technology",
  },
];

const workforceImages: Record<string, string> = {
  "for-employers":
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  "for-job-seekers":
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  "recruitment-staffing":
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  "compliance-regulatory":
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
};

const technologyImages: Record<string, string> = {
  "web-app-development":
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  "ai-automation":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  "custom-software":
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  ecommerce:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  cloud:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  cybersecurity:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  "data-analytics":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  "seo-digital-growth":
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
};

const partnerTraits = [
  {
    title: "Business-Focused",
    description: "We align solutions with your goals.",
    icon: Briefcase,
  },
  {
    title: "Proven Expertise",
    description: "Years of experience across industries.",
    icon: Award,
  },
  {
    title: "End-to-End Support",
    description: "From strategy to implementation and beyond.",
    icon: Handshake,
  },
  {
    title: "Global Reach",
    description: "Supporting businesses worldwide.",
    icon: Globe2,
  },
];

export function ServicesHero() {
  return (
    <PageHeroShell>
      <PageHeroCopy>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Our Services
        </p>
        <h1 className="font-serif text-[1.75rem] font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
          From Ideas to Impact — Technology & People, Under One Roof.
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base md:text-lg">
          End-to-end technology and workforce solutions that help businesses
          build, automate, connect and grow with confidence.
        </p>

        <div className="mt-8 hidden flex-col gap-3 sm:flex-row sm:items-center lg:flex">
          <Button href="#solutions" size="lg" showArrow>
            Explore Our Services
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary-light"
          >
            Talk to Our Experts
          </Button>
        </div>

        <div className="mt-10 hidden gap-4 sm:grid-cols-3 lg:grid">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex items-start gap-3">
              <IconBadge icon={stat.icon} className="h-10 w-10 rounded-lg" />
              <div>
                <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </PageHeroCopy>

      <PageHeroMedia>
        <HeroMediaStage>
          <HeroImageFrame aspect="aspect-[4/3] lg:aspect-[5/4] lg:max-h-[440px]">
            <Image
              src="/images/hero-services.jpg"
              alt="Professionals collaborating with technology"
              fill
              priority
              className="object-cover object-[center_28%]"
              sizes="(max-width: 1024px) 85vw, 480px"
            />
          </HeroImageFrame>

          {/* Left side icon stack — inset on mobile, offset on desktop */}
          <div className="absolute left-3 top-[14%] z-20 flex flex-col gap-3 lg:left-0 lg:-translate-x-[55%]">
            {heroCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.title}
                  href={card.href}
                  title={card.title}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white text-primary shadow-[0_10px_28px_rgba(15,23,42,0.14)] transition-transform hover:-translate-y-0.5 sm:h-12 sm:w-12"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              );
            })}
          </div>

          {/* Right side growth card — inset on mobile */}
          <HeroFloatCard className="bottom-[10%] right-3 lg:right-0 lg:translate-x-[42%]">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary sm:h-9 sm:w-9">
                <BarChart3 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>
              <div>
                <p className="text-[11px] font-bold text-slate-900 sm:text-sm">
                  Growth
                </p>
                <p className="text-[9px] text-muted sm:text-xs">
                  Measurable Results
                </p>
              </div>
            </div>
          </HeroFloatCard>
        </HeroMediaStage>
      </PageHeroMedia>

      <PageHeroActions>
        <div className="flex flex-col gap-3">
          <Button href="#solutions" size="lg" showArrow>
            Explore Our Services
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary-light"
          >
            Talk to Our Experts
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex items-start gap-3">
              <IconBadge icon={stat.icon} className="h-10 w-10 rounded-lg" />
              <div>
                <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </PageHeroActions>
    </PageHeroShell>
  );
}

export function ServicesDirectory() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<TabId>("technology");

  useEffect(() => {
    const param = searchParams.get("tab");
    if (param === "workforce" || param === "technology") {
      setTab(param);
    }
  }, [searchParams]);

  // After tab content mounts, scroll to #service-id if present in the URL
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    return scrollToHashWhenReady(hash, "smooth");
  }, [tab, searchParams]);

  return (
    <Section id="solutions" tone="surface">
      <Container>
        <SectionHeading
          eyebrow="Explore Our Services"
          title="Choose the Right Solution for Your Business"
          description="Switch between technology and workforce solutions to find the pathway that matches what your business needs next."
          align="center"
          className="mb-10"
        />

        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-white p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setTab("technology")}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                tab === "technology"
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-600 hover:text-primary",
              )}
            >
              <Monitor className="h-4 w-4" />
              Technology Solutions
            </button>
            <button
              type="button"
              onClick={() => setTab("workforce")}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                tab === "workforce"
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-600 hover:text-primary",
              )}
            >
              <Users className="h-4 w-4" />
              Workforce & Business Solutions
            </button>
          </div>
        </div>

        {tab === "technology" ? <TechnologyPanel /> : <WorkforcePanel />}
      </Container>
    </Section>
  );
}

type ServiceCardItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  icon: (typeof technologyServicesDetailed)[number]["icon"];
  tone?: IconTone;
};

function SolutionsPanel({
  eyebrow,
  title,
  description,
  cards,
}: {
  eyebrow: string;
  title: string;
  description: string;
  cards: ServiceCardItem[];
}) {
  return (
    <div>
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
        <h3 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-4xl">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
          {description}
        </p>
      </div>

      <div
        className={cn(
          "grid gap-5",
          cards.length <= 4
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : "sm:grid-cols-2 lg:grid-cols-4",
        )}
      >
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.id}
              id={card.id}
              href={card.href}
              className="group scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-slate-200/70"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <span
                  className={cn(
                    "absolute bottom-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-xl shadow-sm",
                    ICON_TONE_STYLES[card.tone ?? "blue"],
                  )}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-slate-900">
                  {card.title}
                </h4>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                  {card.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Explore Solutions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function TechnologyPanel() {
  const cards: ServiceCardItem[] = technologyServicesDetailed.map((service) => ({
    id: service.id,
    title: service.title,
    description: service.description,
    href: "/contact",
    image: technologyImages[service.id],
    icon: service.icon,
    tone: service.tone,
  }));

  return (
    <SolutionsPanel
      eyebrow="Technology Solutions"
      title="Innovative Technology for a Smarter Tomorrow"
      description="From websites and applications to AI automation, cloud, cybersecurity and digital growth — we build technology around how your business works."
      cards={cards}
    />
  );
}

function WorkforcePanel() {
  const cards: ServiceCardItem[] = workforceServicesDetailed.map((service) => ({
    id: service.id,
    title: service.title,
    description: service.description,
    href: service.href,
    image: workforceImages[service.id],
    icon: service.icon,
    tone: service.tone,
  }));

  return (
    <SolutionsPanel
      eyebrow="Workforce & Business Solutions"
      title="Connecting People. Strengthening Businesses."
      description="Employer support, candidate pathways, recruitment/staffing and compliance services that help you find and manage the right people with confidence."
      cards={cards}
    />
  );
}

export function ServicesPartner() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="A Partner You Can Rely On"
          description="Practical delivery, clear communication, and support that continues after the first engagement."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partnerTraits.map((trait) => (
            <article key={trait.title} className="text-center">
              <IconBadge icon={trait.icon} className="mx-auto h-14 w-14 rounded-full" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {trait.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {trait.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
