import type { Metadata } from "next";
import { buildMetadata, PAGES } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs, jobSeekerSections } from "@/lib/data/site-content";

export const metadata: Metadata = buildMetadata("job-seekers");

const candidateFaqs = faqs.slice(0, 3);

export default function JobSeekersPage() {
  return (
    <>
      <JsonLd
        type="page"
        path="/job-seekers"
        name={PAGES["job-seekers"].title}
        description={PAGES["job-seekers"].description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "For Job Seekers", path: "/job-seekers" },
        ]}
        faqs={candidateFaqs}
      />
      <section className="overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/50">
        <Container className="py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              For Job Seekers
            </p>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Find Opportunities That Match Your Skills
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              Support and opportunities for candidates seeking roles that match
              their skills, experience and career direction. This section is
              focused on people — not software services.
            </p>
            <Button href="/contact" className="mt-8" showArrow>
              Start Your Enquiry
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {jobSeekerSections.map((section) => (
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
              <h2 className="text-xl font-bold text-slate-900">
                Ready to take the next step?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Share your profile details and preferred opportunities with our
                candidate support team.
              </p>
              <Button href="/contact" className="mt-6" showArrow>
                Contact / Enquiry
              </Button>
            </article>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Candidate FAQs"
            align="center"
            className="mb-8"
          />
          <Accordion items={candidateFaqs} />
        </Container>
      </Section>
    </>
  );
}
