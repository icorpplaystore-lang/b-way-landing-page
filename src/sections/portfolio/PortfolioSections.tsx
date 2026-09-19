"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
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
  partnershipStats,
  portfolioFilters,
  portfolioProjects,
  testimonials,
} from "@/lib/data/site-content";
import { cn } from "@/lib/utils";

export function PortfolioHero() {
  return (
    <PageHeroShell>
      <PageHeroCopy>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Our Success & Recognition
        </p>
        <h1 className="font-serif text-[1.75rem] font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
          Real Solutions. Real Impact.
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base md:text-lg">
          Explore selected work across web, mobile, SaaS, and AI — built for
          teams that needed clarity, speed, and lasting partnership.
        </p>
        <div className="mt-8 hidden gap-5 sm:grid-cols-3 lg:grid">
          {[
            { value: "700+", label: "Projects Delivered" },
            { value: "150+", label: "Happy Clients" },
            { value: "99%", label: "Customer Retention" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </PageHeroCopy>

      <PageHeroMedia>
        <HeroMediaStage>
          <HeroImageFrame aspect="aspect-[4/3] lg:aspect-[5/4] lg:max-h-[440px]">
            <Image
              src="/images/hero-portfolio.jpg"
              alt="Professional working with data dashboards"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 70vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
          </HeroImageFrame>

          <HeroFloatCard className="bottom-[10%] right-3 max-w-[min(100%,180px)] lg:right-0 lg:max-w-none lg:translate-x-[40%]">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary sm:h-9 sm:w-9">
                <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>
              <div>
                <p className="text-[11px] font-bold text-slate-900 sm:text-sm">
                  Success Recognition
                </p>
                <p className="text-[9px] text-muted sm:text-xs">Proven delivery</p>
              </div>
            </div>
          </HeroFloatCard>
        </HeroMediaStage>
      </PageHeroMedia>

      <PageHeroActions>
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { value: "700+", label: "Projects Delivered" },
            { value: "150+", label: "Happy Clients" },
            { value: "99%", label: "Customer Retention" },
          ].map((stat) => (
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

export function PortfolioGrid() {
  const [filter, setFilter] = useState("All");

  const projects = useMemo(() => {
    if (filter === "All") return portfolioProjects;
    return portfolioProjects.filter((project) => project.filter === filter);
  }, [filter]);

  return (
    <Section>
      <Container>
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Solutions We've Built for Growing Businesses"
          />
          <div className="flex gap-2">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-slate-600"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-slate-600"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {portfolioFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                filter === item
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-slate-600 hover:border-primary hover:text-primary",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70"
            >
              <div className="relative h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <TextLink href="/contact" className="mt-5">
                  View Case Study
                </TextLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function PortfolioPartnerships() {
  return (
    <Section tone="surface">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            title="Lasting Partnerships"
            description="We measure success by retention, recognition, and the results our clients keep building on after launch."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {partnershipStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <IconBadge icon={stat.icon} />
                <p className="mt-4 text-3xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function PortfolioTestimonialSlider() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <Section>
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Client Stories"
          title="What Our Clients Say"
          align="center"
          className="mb-10"
        />
        <div className="relative rounded-3xl border border-border bg-surface px-6 py-10 md:px-12">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() =>
              setIndex((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1,
              )
            }
            className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-slate-600 md:inline-flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() =>
              setIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1,
              )
            }
            className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-slate-600 md:inline-flex"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <p className="text-center font-serif text-xl italic leading-relaxed text-slate-700 md:text-2xl">
            “{item.quote}”
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Image
              src={item.avatar}
              alt={item.name}
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="text-center">
              <p className="font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-muted">{item.role}</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function PortfolioCta() {
  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 md:px-12 lg:px-16">
          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                Have a Similar Project in Mind?
              </h2>
              <p className="mt-4 max-w-xl text-slate-300">
                Tell us about your goals and we&apos;ll help shape a practical
                path from idea to launch.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="white" showArrow>
                  Get Free Consultation
                </Button>
                <Button href="/contact" variant="whiteOutline">
                  Contact Our Experts
                </Button>
              </div>
            </div>
            <p className="hidden text-right font-serif text-4xl font-bold leading-tight text-white/15 xl:block xl:text-5xl">
              IDEAS
              <br />
              SOLUTIONS
              <br />
              REAL IMPACT
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
