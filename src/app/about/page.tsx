import type { Metadata } from "next";
import { buildMetadata, PAGES } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Testimonials } from "@/components/shared/Testimonials";
import {
  AboutGlobal,
  AboutHero,
  AboutPillars,
  AboutPrinciples,
  AboutProcess,
  AboutVision,
} from "@/sections/about";
import { aboutBeliefs, testimonials } from "@/lib/data/site-content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata("about");

export default function AboutPage() {
  return (
    <>
      <JsonLd
        type="page"
        path="/about"
        name={PAGES.about.title}
        description={PAGES.about.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]}
      />
      <AboutHero />
      <AboutVision />
      <AboutPillars />
      <Section tone="surface">
        <Container>
          <SectionHeading
            title="What We Believe"
            description="Technology driven by business outcomes — with people and process at the center."
            align="center"
            className="mb-10"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutBeliefs.map((belief) => (
              <article
                key={belief.title}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {belief.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {belief.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <AboutPrinciples />
      <AboutGlobal />
      <AboutProcess />
      <Testimonials items={testimonials} columns={3} />
      <CtaBanner
        title="Working With Businesses Worldwide"
        description="Whether you need technology, workforce support or both — let's discuss what comes next."
        primaryLabel="Get a Free Consultation"
        secondaryLabel="Talk to Our Team"
        image="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=80"
      />
    </>
  );
}
