import Link from "next/link";
import {
  AtSign,
  Link2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { FlagIndia, FlagSingapore } from "@/components/ui/Flags";
import { FOOTER_LINKS, SITE } from "@/lib/constants";

const whatsappHref = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="section-padding !pb-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-3">
            <Link href="/">
              <BrandLogo />
            </Link>
            <p className="mt-4 text-sm font-semibold text-slate-900">
              {SITE.tagline}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              {SITE.description}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-primary/15 bg-white px-3 py-2 text-xs text-slate-600">
              <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
              <span>
                Licensed by MOM, Singapore · EA Licence{" "}
                <strong className="text-slate-900">{SITE.eaLicence}</strong>
              </span>
            </div>
            <div className="mt-5 flex items-center gap-2.5">
              {[
                { Icon: Share2, label: "Share" },
                { Icon: AtSign, label: "Social" },
                { Icon: Link2, label: "Professional" },
                { Icon: MessageCircle, label: "Community" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-slate-600 transition-colors hover:border-primary hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Combined Company & Resources */}
          <div className="lg:col-span-2">
            <FooterColumn
              title="Company & Resources"
              links={FOOTER_LINKS.company}
            />
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title="Technology" links={FOOTER_LINKS.technology} />
          </div>

          <div className="lg:col-span-2">
            <FooterColumn
              title="Workforce & Business"
              links={FOOTER_LINKS.workforce}
            />
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-900">
              Contact
            </h3>

            <ul className="space-y-3.5 text-sm text-muted">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all transition-colors hover:text-primary"
                >
                  {SITE.email}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="flex flex-col gap-2.5">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                    title="Chat on WhatsApp"
                  >
                    <FlagSingapore />
                    <span>{SITE.phone}</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                      WhatsApp
                    </span>
                  </a>
                  <a
                    href={`tel:${SITE.phoneSecondary.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                  >
                    <FlagIndia />
                    <span>{SITE.phoneSecondary}</span>
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="leading-relaxed">{SITE.address}</span>
              </li>

              <li className="pl-7 text-xs leading-relaxed text-slate-500">
                {SITE.hours}
              </li>
            </ul>

            <form className="mt-6 space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-900">
                Newsletter
              </p>
              <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-11 w-full rounded-lg border border-border bg-white px-3 text-sm outline-none ring-primary/30 placeholder:text-slate-400 focus:ring-2"
                />
                <Button type="submit" className="shrink-0 sm:px-6 lg:w-full">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-4 py-5 text-sm text-muted lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <span className="hidden text-slate-300 sm:inline">·</span>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
            <span className="hidden text-slate-300 sm:inline">·</span>
            <a href="/llms.txt" className="hover:text-primary">
              For AI systems
            </a>
            <span className="hidden text-slate-300 sm:inline">·</span>
            <Link
              href="/compliance"
              className="inline-flex items-center gap-1.5 font-medium text-primary hover:text-primary-dark"
            >
              <ShieldCheck className="h-4 w-4" />
              EA Licence: {SITE.eaLicence}
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-900">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
