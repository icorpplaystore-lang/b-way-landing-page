import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata("terms");

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

export default function TermsOfServicePage() {
  return (
    <>
      <section className="overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/50">
        <Container className="py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Legal
            </p>
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
              <Scale className="h-7 w-7" />
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              These terms govern your use of the {SITE.name} website and related
              technology, workforce, and business services provided by{" "}
              {SITE.legalName}.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Last updated: September 2026 · EA Licence No.: {SITE.eaLicence}
            </p>

            <div className="mt-8 max-w-md rounded-2xl border border-primary/20 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                MOM EA Licence No.: {SITE.eaLicence}
              </p>
              <p className="mt-1 text-sm text-muted">
                Licensed by Ministry of Manpower, Singapore
              </p>
              <a
                href={SITE.momPortalUrl}
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
              <div className="w-full">
                <h2 className="text-2xl font-bold text-slate-900">
                  EA Licence Verification
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {SITE.legalName} holds Employment Agency (EA) Licence Number{" "}
                  <strong>{SITE.eaLicence}</strong> issued by Singapore&apos;s
                  Ministry of Manpower. We operate in compliance with the
                  Employment Agencies Act and the Comprehensive Employment
                  Intermediary (CEI) framework for applicable workforce services.
                </p>

                <div className="mt-6 rounded-2xl border border-primary/20 bg-primary-light/50 p-5">
                  <p className="text-sm font-semibold text-slate-900">
                    MOM EA Licence No.: {SITE.eaLicence}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Licensed by Ministry of Manpower, Singapore
                  </p>
                  <a
                    href={SITE.momPortalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Verify Licence on MOM Portal
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-2xl bg-surface px-4 py-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  You can verify our licence status at any time through the MOM
                  Employment Agency Directory using our licence number{" "}
                  <strong>{SITE.eaLicence}</strong>.
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-border bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <IconBadge icon={Scale} />
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Acceptance of Terms
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  By accessing this website or engaging our services, you agree
                  to these Terms of Service and our{" "}
                  <a href="/privacy" className="font-semibold text-primary">
                    Privacy Policy
                  </a>
                  . If you do not agree, please discontinue use of the site and
                  related services.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    "Website content is provided for general information and business enquiry purposes",
                    "Service engagements are subject to separate statements of work, proposals, or agreements where applicable",
                    "You are responsible for providing accurate information in enquiries and applications",
                    "We may update these terms periodically; continued use constitutes acceptance of updated terms",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
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
                  practices aligned with Tripartite Alliance for Fair and
                  Progressive Employment Practices (TAFEP) guidelines.
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
              <IconBadge
                icon={FileCheck2}
                className="bg-orange-100 text-orange-600"
              />
              <div className="w-full">
                <h2 className="text-2xl font-bold text-slate-900">
                  Recruitment Transparency Checklist
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  For workforce engagements, the following documentation may be
                  required to support transparent and compliant recruitment.
                </p>
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

          <article className="rounded-3xl border border-border bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <IconBadge icon={ShieldCheck} />
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Service Use & Liability
                </h2>
                <ul className="mt-5 space-y-3">
                  {[
                    "Technology and workforce services are provided according to agreed scope, timelines, and commercial terms",
                    "Website information does not constitute legal, immigration, or employment advice unless expressly stated in a signed engagement",
                    "We take reasonable care in service delivery but are not liable for indirect or consequential losses arising from website use",
                    "Nothing in these terms limits rights you may have under Singapore law that cannot be excluded",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-primary/20 bg-primary-light/40 p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Questions About These Terms?
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Contact us at {SITE.email} or {SITE.phone}. Office:{" "}
                  {SITE.address}.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact" showArrow>
                  Contact Compliance Team
                </Button>
                <Button href="/compliance" variant="outline">
                  View Compliance
                </Button>
              </div>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}
