import type { Metadata } from "next";
import { buildMetadata, PAGES } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  Lock,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata("compliance");

const commitments = [
  "No discrimination by age, race, gender, religion, or disability",
  "Merit-based candidate selection",
  "Transparent job requirements",
  "Proper Fair Consideration Framework (FCF) advertisement compliance",
];

const employerGuidance = [
  "MyCareersFuture advertisement support",
  "Local candidate consideration protocols",
  "Documentation of hiring decisions",
  "MOM submission best practices",
];

const practices = [
  {
    title: "Explicit Consent",
    description: "We obtain clear consent before collecting any personal data.",
  },
  {
    title: "Secure Storage",
    description:
      "Data is stored with encryption and role-based access controls.",
  },
  {
    title: "Purpose Limitation",
    description:
      "Data is used only for recruitment and placement purposes.",
  },
  {
    title: "Retention Policy",
    description:
      "2-year retention period (subject to consent renewal).",
  },
  {
    title: "Individual Rights",
    description:
      "Access, correction, or deletion requests are honored promptly.",
  },
];

const employerDocs = [
  "Company business profile",
  "Job description / contract template",
  "FCF advertisement proof",
  "Workplace safety details",
  "CPF and insurance records",
];

const candidateDocs = [
  "Valid passport (min. 6 months)",
  "Educational certificates",
  "Employment references",
  "Medical examination report",
  "Police clearance certificate",
  "Skills certifications",
];

export default function CompliancePage() {
  return (
    <>
      <JsonLd
        type="page"
        path="/compliance"
        name={PAGES.compliance.title}
        description={PAGES.compliance.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Compliance", path: "/compliance" },
        ]}
      />
      <section className="overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/50">
        <Container className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Trust & Compliance
            </p>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Compliance & Regulatory Excellence
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              We put regulatory compliance and fair hiring at the heart of
              everything we do.
            </p>

            <div className="mx-auto mt-8 max-w-md rounded-2xl border border-primary/20 bg-white p-5 text-left shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                MOM EA Licence No.: 25C3124
              </p>
              <p className="mt-1 text-sm text-muted">
                Licensed by Ministry of Manpower, Singapore
              </p>
              <a
                href="https://www.mom.gov.sg"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Verify Licence on MOM Portal
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container className="max-w-5xl space-y-6">
          <article className="rounded-3xl border border-border bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <IconBadge icon={FileCheck2} />
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  EA Licence Verification
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  Broadway Global Solutions Pte Ltd holds Employment Agency (EA)
                  Licence Number <strong>25C3124</strong> issued by Singapore&apos;s
                  Ministry of Manpower. We operate in compliance with MOM
                  regulations and the Comprehensive Employment Intermediary
                  (CEI) framework.
                </p>
                <div className="mt-5 flex items-start gap-3 rounded-2xl bg-primary-light/60 px-4 py-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  You can verify our licence status at any time through the MOM
                  Employment Agency Directory using our licence number.
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-border bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <IconBadge
                icon={Users}
                className="bg-emerald-100 text-emerald-600"
              />
              <div className="w-full">
                <h2 className="text-2xl font-bold text-slate-900">
                  Fair Consideration Framework
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  We are committed to fair and non-discriminatory hiring
                  practices aligned with TAFEP guidelines.
                </p>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl bg-emerald-50/80 p-5">
                    <h3 className="font-semibold text-slate-900">
                      Our Commitments
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {commitments.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-emerald-50/80 p-5">
                    <h3 className="font-semibold text-slate-900">
                      Employer Guidance
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {employerGuidance.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-border bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <IconBadge icon={Lock} className="bg-violet-100 text-violet-600" />
              <div className="w-full">
                <h2 className="text-2xl font-bold text-slate-900">
                  PDPA Notice & Data Protection
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  We comply fully with Singapore&apos;s Personal Data Protection
                  Act (PDPA). All candidate and employer data is collected,
                  stored, and processed with high standards of security and
                  privacy. See our{" "}
                  <a href="/privacy" className="font-semibold text-primary">
                    Privacy Policy
                  </a>{" "}
                  for full details.
                </p>
                <div className="mt-6 space-y-4 rounded-2xl bg-violet-50/70 p-5">
                  {practices.map((practice, index) => (
                    <div key={practice.title} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {practice.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted">
                          {practice.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-border bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <IconBadge
                icon={FileCheck2}
                className="bg-orange-100 text-orange-600"
              />
              <div className="w-full">
                <h2 className="text-2xl font-bold text-slate-900">
                  Recruitment Transparency Checklist
                </h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl bg-orange-50/70 p-5">
                    <h3 className="font-semibold text-slate-900">
                      Employer Documents
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {employerDocs.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-orange-50/70 p-5">
                    <h3 className="font-semibold text-slate-900">
                      Candidate Documents
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {candidateDocs.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-primary/20 bg-primary-light/50 p-6 text-center md:p-10">
            <h2 className="font-serif text-2xl font-bold text-slate-900 md:text-3xl">
              Questions About Compliance?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
              Need help with documentation, licence verification, or regulatory
              questions? Our team is ready to assist.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href="/contact" showArrow>
                Contact Compliance Team
              </Button>
              <Button href="/privacy" variant="outline">
                Privacy Policy
              </Button>
              <Button href="/terms" variant="outline">
                Terms of Service
              </Button>
            </div>
            <p className="mt-6 text-xs text-slate-500">
              {SITE.email} · {SITE.phone} · {SITE.address}
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
