"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Link2,
  Mail,
  MapPin,
  Headset,
  MessageSquare,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FlagIndia, FlagSingapore } from "@/components/ui/Flags";
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
import { CONTACT_HELP_OPTIONS, SITE } from "@/lib/constants";
import { contactFeatures, contactProcess } from "@/lib/data/site-content";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export function ContactHero() {
  return (
    <PageHeroShell>
      <PageHeroCopy>
        <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          <span className="h-px w-8 bg-primary" />
          Contact Us
        </p>
        <h1 className="font-serif text-[1.75rem] font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
          Let&apos;s Talk About Your Project
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base md:text-lg">
          Share your goals and constraints. We&apos;ll help you shape a clear
          path from discovery to delivery with the right people and technology.
        </p>
        <div className="mt-8 hidden flex-col gap-3 sm:flex-row sm:items-center lg:flex">
          <Button href="#contact-form" size="lg" showArrow>
            Get in Touch
          </Button>
          <Button
            href={`mailto:${SITE.email}`}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary-light"
          >
            Email Us
          </Button>
        </div>
        <div className="mt-10 hidden gap-5 sm:grid-cols-3 lg:grid">
          {contactFeatures.map((feature) => (
            <div key={feature.title}>
              <IconBadge icon={feature.icon} className="h-10 w-10" />
              <h3 className="mt-3 text-sm font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </PageHeroCopy>

      <PageHeroMedia>
        <HeroMediaStage>
          <HeroImageFrame aspect="aspect-[4/3] lg:aspect-[5/4] lg:max-h-[440px]">
            <Image
              src="/images/hero-contact.jpg"
              alt="Singapore Marina Bay skyline at dusk"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 70vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
          </HeroImageFrame>

          <HeroFloatCard className="top-[12%] right-3 max-w-[min(100%,170px)] lg:right-0 lg:max-w-none lg:translate-x-[40%]">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary sm:h-9 sm:w-9">
                <Headset className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>
              <div>
                <p className="text-[11px] font-bold text-slate-900 sm:text-sm">
                  24/7 Support
                </p>
                <p className="text-[9px] text-muted sm:text-xs">
                  We&apos;re here to help
                </p>
              </div>
            </div>
          </HeroFloatCard>

          <div className="absolute bottom-[10%] left-3 z-20 rounded-full bg-navy px-3 py-2 text-[10px] font-medium text-white shadow-lg sm:px-4 sm:text-xs lg:left-0 lg:-translate-x-[18%]">
            Midview City, Singapore
          </div>
        </HeroMediaStage>
      </PageHeroMedia>

      <PageHeroActions>
        <div className="flex flex-col gap-3">
          <Button href="#contact-form" size="lg" showArrow>
            Get in Touch
          </Button>
          <Button
            href={`mailto:${SITE.email}`}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary-light"
          >
            Email Us
          </Button>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {contactFeatures.map((feature) => (
            <div key={feature.title}>
              <IconBadge icon={feature.icon} className="h-10 w-10" />
              <h3 className="mt-3 text-sm font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </PageHeroActions>
    </PageHeroShell>
  );
}

export function ContactFormSection() {
  const [emailValid, setEmailValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  return (
    <Section id="contact-form" tone="surface">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              title="Talk to Our Team"
              description="Whether you're exploring a new product, scaling a team, or modernizing operations — we're ready to help."
            />

            <div className="mt-8 space-y-4">
              <ContactInfoCard
                icon={Mail}
                title="Global Email"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </ContactInfoCard>

              <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-white p-4">
                <div className="flex items-center gap-3">
                  <IconBadge icon={Phone} />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Consultation Line
                    </p>
                    <div className="mt-1.5 flex flex-col gap-1.5 text-sm text-muted">
                      <a
                        href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 hover:text-primary"
                      >
                        <FlagSingapore />
                        {SITE.phone}
                      </a>
                      <a
                        href={`tel:${SITE.phoneSecondary.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 hover:text-primary"
                      >
                        <FlagIndia />
                        {SITE.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>

              <ContactInfoCard icon={Clock} title="Business Hours">
                {SITE.hours}
              </ContactInfoCard>

              <ContactInfoCard icon={MapPin} title="Office Address">
                {SITE.address}
              </ContactInfoCard>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">
                Singapore Office
              </p>
              <p className="mt-2 text-sm text-muted">{SITE.address}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white p-6 shadow-xl shadow-slate-200/60 md:p-8">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <FileText className="h-3.5 w-3.5" />
              Enquiry Form
            </div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 md:text-3xl">
              Let&apos;s understand your requirement
            </h2>

            <form className="mt-8 space-y-5">
              <Field label="Full Name *" placeholder="Alex Tan" />
              <Field label="Company Name" placeholder="Your company name" />
              <div>
                <Field
                  label="Business Email *"
                  type="email"
                  placeholder="you@company.com"
                  onChange={(value) => {
                    setEmailTouched(true);
                    setEmailValid(value.includes("@") && value.includes("."));
                  }}
                />
                {emailTouched && emailValid ? (
                  <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Looks good
                  </p>
                ) : null}
              </div>
              <SelectField
                label="What can we help you with? *"
                options={[...CONTACT_HELP_OPTIONS]}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <SelectField
                  label="Budget Range"
                  options={[
                    "$5k – $10k",
                    "$10k – $25k",
                    "$25k – $50k",
                    "$50k – $150k",
                    "$150k+",
                  ]}
                />
                <SelectField
                  label="Timeline"
                  options={["ASAP", "1–3 months", "3–6 months", "Flexible"]}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Tell us about your requirement *
                </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your project goals, timeline, and what success looks like..."
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none ring-primary/30 placeholder:text-slate-400 focus:ring-2"
                />
              </div>
              <Button type="submit" className="w-full" size="lg" showArrow>
                Send Enquiry
              </Button>
            </form>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "LinkedIn", icon: Link2, className: "text-blue-600" },
                { label: "Email", icon: Mail, className: "text-rose-600" },
                { label: "WhatsApp", icon: MessageSquare, className: "text-emerald-600" },
                { label: "Book a Call", icon: Calendar, className: "text-orange-600" },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={cn(
                    "inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-2 py-2 text-xs font-semibold",
                    item.className,
                  )}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ContactInfoCard({
  icon,
  title,
  children,
  href,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-white p-4">
      <div className="flex items-center gap-3">
        <IconBadge icon={icon} />
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          {href ? (
            <a href={href} className="text-sm text-muted hover:text-primary">
              {children}
            </a>
          ) : (
            <p className="text-sm text-muted">{children}</p>
          )}
        </div>
      </div>
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary">
        <ArrowRight className="h-4 w-4" />
      </span>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(event) => onChange?.(event.target.value)}
        className="h-11 w-full rounded-xl border border-border bg-white px-4 text-sm outline-none ring-primary/30 placeholder:text-slate-400 focus:ring-2"
      />
    </div>
  );
}

function SelectField({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
      </label>
      <select className="h-11 w-full rounded-xl border border-border bg-white px-4 text-sm outline-none ring-primary/30 focus:ring-2">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export function ContactProcess() {
  return (
    <Section>
      <Container>
        <div className="mb-4 flex justify-center">
          <span className="rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            The Process
          </span>
        </div>
        <SectionHeading
          title="What Happens Next?"
          description="A simple path from first conversation to kickoff."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {contactProcess.map((step, index) => (
            <article
              key={step.step}
              className={cn(
                "rounded-2xl border p-6",
                index === 1 && "border-blue-100 bg-primary-light",
                index === 3 && "border-primary bg-primary text-white",
                index !== 1 && index !== 3 && "border-border bg-white",
              )}
            >
              <IconBadge
                icon={step.icon}
                className={cn(
                  index === 3 && "bg-white/15 text-white",
                )}
              />
              <p
                className={cn(
                  "mt-4 text-xs font-semibold uppercase tracking-wide",
                  index === 3 ? "text-blue-100" : "text-primary",
                )}
              >
                Step {step.step}
              </p>
              <h3
                className={cn(
                  "mt-2 text-lg font-bold",
                  index === 3 ? "text-white" : "text-slate-900",
                )}
              >
                {step.title}
              </h3>
              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed",
                  index === 3 ? "text-blue-50" : "text-muted",
                )}
              >
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
