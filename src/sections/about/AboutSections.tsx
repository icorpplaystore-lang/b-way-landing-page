import Image from "next/image";
import {
  Award,
  CheckCircle2,
  Globe2,
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
import {
  aboutProcess,
  homeSolutions,
  principles,
} from "@/lib/data/site-content";

const regions = [
  "World Wide",
  "Europe & Middle East",
  "Asia & Pacific",
  "Australia & New Zealand",
];

export function AboutHero() {
  return (
    <PageHeroShell>
      <PageHeroCopy>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          About Us
        </p>
        <h1 className="font-serif text-[1.75rem] font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
          Driving Global Business Through Technology and People
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base md:text-lg">
          Technology. People. Business. We build digital solutions, connect
          people and help organizations move forward with practical support.
        </p>
        <div className="mt-8 hidden flex-col gap-3 sm:flex-row sm:items-center lg:flex">
          <Button href="/portfolio" size="lg" showArrow>
            Learn More
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary-light"
          >
            Contact Us
          </Button>
        </div>
        <div className="mt-10 hidden gap-4 sm:grid-cols-3 lg:grid">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "200+", label: "Projects Completed" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </PageHeroCopy>

      <PageHeroMedia>
        <HeroMediaStage>
          <HeroImageFrame aspect="aspect-[4/3] lg:aspect-[5/4] lg:max-h-[440px]">
            <Image
              src="/images/hero-about.png"
              alt="Team collaborating on a development project"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 70vw, 480px"
            />
          </HeroImageFrame>

          <HeroFloatCard className="bottom-[10%] right-3 max-w-[min(100%,180px)] lg:right-0 lg:max-w-none lg:translate-x-[40%]">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary sm:h-9 sm:w-9">
                <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>
              <div>
                <p className="text-[11px] font-bold text-slate-900 sm:text-sm">
                  Best Team Award
                </p>
                <p className="text-[9px] text-muted sm:text-xs">
                  People-first delivery
                </p>
              </div>
            </div>
          </HeroFloatCard>
        </HeroMediaStage>
      </PageHeroMedia>

      <PageHeroActions>
        <div className="flex flex-col gap-3">
          <Button href="/portfolio" size="lg" showArrow>
            Learn More
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary-light"
          >
            Contact Us
          </Button>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "200+", label: "Projects Completed" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </PageHeroActions>
    </PageHeroShell>
  );
}

export function AboutVision() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Our Story"
          title="From a Shared Vision to a Global Impact"
          align="center"
          className="mb-12"
        />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Corporate building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg">
              <Globe2 className="h-6 w-6" />
            </div>
          </div>
          <div>
            <p className="text-base leading-relaxed text-muted">
              What started as a focused technology practice has grown into a
              dual engine of product engineering and people solutions. Today we
              partner with organizations across industries to design systems
              that scale and teams that deliver.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { value: "99%", label: "Customer Satisfaction" },
                { value: "25+", label: "Markets Supported" },
                { value: "500+", label: "Specialists in Network" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-border pb-3"
                >
                  <p className="text-sm text-muted">{item.label}</p>
                  <p className="text-lg font-bold text-primary">{item.value}</p>
                </div>
              ))}
            </div>
            <TextLink href="/contact" className="mt-6">
              Read More
            </TextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function AboutPillars() {
  return (
    <Section tone="surface">
      <Container>
        <SectionHeading
          eyebrow="Our Capabilities"
          title="Two Stronger Pillars, One United Purpose."
          description="Technology solutions and business consulting working together for outcomes that last."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {homeSolutions.map((pillar) => (
            <article
              key={pillar.title}
              className="grid overflow-hidden rounded-2xl border border-border bg-white md:grid-cols-[1.2fr_0.8fr]"
            >
              <div className="p-7">
                <IconBadge icon={pillar.icon} />
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
                <TextLink href="/services" className="mt-5">
                  Explore more
                </TextLink>
              </div>
              <div className="relative min-h-44">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function AboutPrinciples() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Our Values"
          title="The Principles That Guide Us"
          align="center"
          className="mb-12"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-2xl border border-border bg-white p-6"
            >
              <IconBadge icon={principle.icon} />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {principle.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {principle.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function AboutGlobal() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Global Reach"
          title="Supporting Businesses Worldwide"
          className="mb-10"
        />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-3">
            {regions.map((region, index) => (
              <div
                key={region}
                className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                  index === 0
                    ? "bg-primary text-white"
                    : "border border-border bg-white text-slate-700"
                }`}
              >
                {region}
              </div>
            ))}
            <Button href="/contact" className="mt-4" showArrow>
              View More
            </Button>
          </div>
          <div className="flex min-h-72 items-center justify-center rounded-3xl border border-border bg-surface p-8">
            <div className="text-center">
              <Globe2 className="mx-auto h-16 w-16 text-primary/40" />
              <p className="mt-4 text-sm text-muted">
                Global delivery footprint with hubs across Asia-Pacific, Europe,
                and North America.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function AboutProcess() {
  return (
    <Section tone="surface">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="From Understanding to Long-Term Success"
          align="center"
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aboutProcess.map((step, index) => (
            <article key={step.title} className="relative text-center">
              <IconBadge icon={step.icon} className="mx-auto h-14 w-14 rounded-full" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
