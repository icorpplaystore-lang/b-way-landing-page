import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import {
  CheckCircle2,
  Database,
  ExternalLink,
  FileCheck2,
  FileText,
  Lock,
  Mail,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata("privacy");

const practices = [
  {
    title: "Explicit Consent",
    description:
      "We obtain clear consent before collecting any personal data.",
  },
  {
    title: "Secure Storage",
    description:
      "Data is stored with encryption and role-based access controls.",
  },
  {
    title: "Purpose Limitation",
    description:
      "Data is used only for recruitment, placement, service delivery, and related business purposes you have been informed about.",
  },
  {
    title: "Retention Policy",
    description:
      "We apply a 2-year retention period (subject to consent renewal and applicable legal requirements).",
  },
  {
    title: "Individual Rights",
    description:
      "Access, correction, or deletion requests are honored promptly in accordance with the PDPA.",
  },
];

const collectionPoints = [
  "Name, contact details, and professional profile information",
  "Curriculum vitae, employment history, and supporting documents",
  "Employer company details and hiring requirements",
  "Enquiry form submissions and communication records",
  "Website usage information required to operate and improve our services",
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/50">
        <Container className="py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Legal
            </p>
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
              <Lock className="h-7 w-7" />
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              We comply fully with Singapore&apos;s Personal Data Protection Act
              (PDPA). All candidate and employer data is collected, stored, and
              processed with high standards of security and privacy.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Last updated: September 2026 · Applies to {SITE.name} /{" "}
              {SITE.legalName}
            </p>

            <div className="mt-8 max-w-md rounded-2xl border border-primary/20 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                MOM EA Licence No.: {SITE.eaLicence}
              </p>
              <p className="mt-1 text-sm text-muted">
                Licensed by Ministry of Manpower, Singapore
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={SITE.momPortalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Verify Licence on MOM Portal
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link
                  href="/compliance"
                  className="text-sm font-semibold text-slate-600 hover:text-primary"
                >
                  View Compliance →
                </Link>
              </div>
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
                  Licensed Employment Agency
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {SITE.legalName} holds Employment Agency (EA) Licence Number{" "}
                  <strong>{SITE.eaLicence}</strong> issued by Singapore&apos;s
                  Ministry of Manpower. Personal data processed for recruitment
                  and placement is handled under applicable MOM regulations, the
                  Comprehensive Employment Intermediary (CEI) framework, and this
                  Privacy Policy.
                </p>
                <div className="mt-5 flex items-start gap-3 rounded-2xl bg-primary-light/60 px-4 py-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  You can verify our licence status at any time through the MOM
                  Employment Agency Directory using licence number{" "}
                  <strong>{SITE.eaLicence}</strong>.
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-border bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <IconBadge icon={ShieldCheck} />
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  PDPA Notice & Data Protection
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {SITE.legalName} (&quot;{SITE.name}&quot;, &quot;we&quot;,
                  &quot;us&quot;, or &quot;our&quot;) is committed to protecting
                  personal data in line with Singapore&apos;s Personal Data
                  Protection Act (PDPA). This Privacy Policy explains how we
                  collect, use, disclose, and safeguard personal data in
                  connection with our technology, workforce, and business
                  solutions.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-border bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <IconBadge icon={Database} />
              <div className="w-full">
                <h2 className="text-2xl font-bold text-slate-900">
                  Information We Collect
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Depending on how you interact with us, we may collect:
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {collectionPoints.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl bg-surface px-4 py-3 text-sm text-slate-700"
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
              <IconBadge icon={Lock} className="bg-violet-100 text-violet-600" />
              <div className="w-full">
                <h2 className="text-2xl font-bold text-slate-900">
                  Data Protection Practices
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Our data handling practices are designed to keep personal
                  information secure, purpose-limited, and under your control.
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
              <IconBadge icon={FileText} />
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  How We Use Personal Data
                </h2>
                <ul className="mt-5 space-y-3">
                  {[
                    "To respond to enquiries and provide requested services",
                    "To support recruitment, staffing, and placement activities",
                    "To deliver technology and business solutions you engage us for",
                    "To communicate service updates, compliance requirements, and relevant information",
                    "To meet legal, regulatory, and audit obligations in Singapore",
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
              <IconBadge icon={Scale} />
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Your Rights Under the PDPA
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  You may request access to, correction of, or withdrawal of
                  consent for your personal data, subject to applicable law. To
                  exercise these rights, contact us using the details below. We
                  will respond within a reasonable timeframe.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-primary/20 bg-primary-light/40 p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <IconBadge icon={Mail} />
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Privacy Contact
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    For privacy requests or questions about this policy, email{" "}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="font-semibold text-primary"
                    >
                      {SITE.email}
                    </a>{" "}
                    or write to us at {SITE.address}.
                  </p>
                </div>
              </div>
              <Button href="/contact" showArrow>
                Contact Us
              </Button>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}
