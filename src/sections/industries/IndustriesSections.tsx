import Image from "next/image";
import {
  Building2,
  CheckCircle2,
  Handshake,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
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
import { TextLink } from "@/components/ui/TextLink";
import { Accordion } from "@/components/ui/Accordion";
import {
  expertiseReasons,
  faqs,
  industrySectors,
} from "@/lib/data/site-content";

const heroStats = [
  { value: "10+", label: "Years Experience" },
  { value: "250+", label: "Projects Delivered" },
  { value: "100+", label: "Happy Clients" },
  { value: "98%", label: "Client Retention" },
];

const featureStrip = [
  { title: "Industry Focused Solutions", icon: Building2 },
  { title: "Technology + People Expertise", icon: Layers },
  { title: "Focus on Quality", icon: ShieldCheck },
  { title: "Long Term Partnership", icon: Handshake },
];

export function IndustriesHero() {
  return (
    <PageHeroShell
      footer={
        <div className="grid gap-4 rounded-2xl border border-border bg-white/80 p-5 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
          {featureStrip.map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <IconBadge icon={item.icon} className="h-10 w-10" />
              <p className="text-sm font-semibold text-slate-800">{item.title}</p>
            </div>
          ))}
        </div>
      }
    >
      <PageHeroCopy>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Sectors We Serve
        </p>
        <h1 className="font-serif text-[1.75rem] font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
          Solutions Tailored For Your Industry
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base md:text-lg">
          We design technology and workforce solutions around the workflows,
          regulations, and growth patterns of your sector.
        </p>
        <div className="mt-8 hidden grid-cols-2 gap-5 sm:grid-cols-4 lg:grid">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </PageHeroCopy>

      <PageHeroMedia>
        <HeroMediaStage>
          <HeroImageFrame aspect="aspect-[4/3] lg:aspect-[5/4] lg:max-h-[420px]">
            <Image
              src="/images/hero-industries.jpg"
              alt="Modern city skyline"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 70vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
          </HeroImageFrame>

          <HeroFloatCard className="bottom-[8%] left-3 right-auto max-w-[200px] sm:max-w-[220px] lg:left-0 lg:-translate-x-[28%]">
            <div className="flex items-start gap-2.5">
              <IconBadge
                icon={Sparkles}
                tone="sky"
                className="h-9 w-9 shrink-0"
                iconClassName="h-4 w-4"
              />
              <div className="min-w-0 pt-0.5">
                <p className="text-[13px] font-semibold leading-snug tracking-tight text-slate-900">
                  Industry-ready tech
                </p>
                <TextLink
                  href="/contact"
                  className="mt-1.5 text-[11px] font-medium tracking-wide"
                >
                  Talk to us
                </TextLink>
              </div>
            </div>
          </HeroFloatCard>
        </HeroMediaStage>
      </PageHeroMedia>

      <PageHeroActions>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </PageHeroActions>
    </PageHeroShell>
  );
}

export function IndustriesGrid() {
  return (
    <Section>
      <Container>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Sectors We Serve"
            description="Explore how we support organizations across complex, regulated, and fast-moving industries."
          />
          <TextLink href="/contact">View All Sectors</TextLink>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industrySectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <article
                key={sector.title}
                className="overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70"
              >
                <div className="relative h-48">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <Icon className="mb-3 h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold text-slate-900">
                    {sector.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {sector.description}
                  </p>
                  <div className="mt-4 space-y-3 rounded-xl bg-surface p-4 text-sm">
                    <p>
                      <span className="font-semibold text-slate-900">
                        Workforce:{" "}
                      </span>
                      <span className="text-muted">{sector.workforce}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">
                        Technology:{" "}
                      </span>
                      <span className="text-muted">{sector.technology}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">
                        Automation:{" "}
                      </span>
                      <span className="text-muted">{sector.automation}</span>
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export function IndustriesFeatured() {
  return (
    <Section tone="surface">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Construction site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-border bg-white/95 p-5 shadow-xl backdrop-blur sm:left-8 sm:right-auto sm:max-w-sm">
              <div className="space-y-3 text-sm">
                <p className="font-semibold text-slate-900">
                  45% Efficiency Increase
                </p>
                <p className="text-muted">300+ Projects completed</p>
                <p className="text-muted">120+ Active field workers</p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Detailed Industry
            </p>
            <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
              Construction
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Digitize field operations, improve safety compliance, and give
              project leaders a single source of truth across sites, teams, and
              timelines.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Streamlined resource tracking",
                "Automated safety and compliance checks",
                "Integrated project management",
                "Real-time dashboard updates",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/contact" className="mt-8" showArrow>
              Explore Construction Solutions
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function IndustriesExpertise() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="Why Industry-Specific Expertise Matters"
          description="Generic solutions create friction. Domain-aware delivery creates momentum."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseReasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-2xl border border-border bg-surface p-6 text-center"
            >
              <IconBadge icon={reason.icon} className="mx-auto" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function IndustriesFaq() {
  return (
    <Section tone="surface" id="faq">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Answers to common questions about how we engage across technology and workforce needs."
          align="center"
          className="mb-10"
        />
        <Accordion items={faqs} />
      </Container>
    </Section>
  );
}
