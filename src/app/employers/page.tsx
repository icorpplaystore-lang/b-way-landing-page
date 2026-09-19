import type { Metadata } from "next";
import { buildMetadata, PAGES } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { employerSections, faqs } from "@/lib/data/site-content";

export const metadata: Metadata = buildMetadata("employers");

const employerFaqs = faqs.slice(0, 4);

export default function EmployersPage() {
  return (
    <>
      <JsonLd
        type="page"
        path="/employers"
        name={PAGES.employers.title}
        description={PAGES.employers.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "For Employers", path: "/employers" },
        ]}
        faqs={employerFaqs}
      />
      <section className="overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/50">
        <Container className="py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              For Employers
            </p>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Solutions Built Around Your Workforce Needs
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              Business-side workforce requirements and employer support designed
              to help organizations secure the people and operational assistance
              they need.
            </p>
            <Button href="/contact" className="mt-8" showArrow>
              Discuss Your Requirement
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {employerSections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <h2 className="text-xl font-bold text-slate-900">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {section.description}
                </p>
              </article>
            ))}
            <article className="rounded-2xl border border-primary/20 bg-primary-light p-6">
              <h2 className="text-xl font-bold text-slate-900">FAQ & Contact</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Have a role, timeline or compliance question? Speak with our
                employer support team.
              </p>
              <Button href="/contact" className="mt-6" showArrow>
                Discuss Your Requirement
              </Button>
            </article>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Employer FAQs"
            align="center"
            className="mb-8"
          />
          <Accordion items={employerFaqs} />
        </Container>
      </Section>
    </>
  );
}
