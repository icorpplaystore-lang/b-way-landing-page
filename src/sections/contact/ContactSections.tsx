"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Link2,
  Mail,
  MapPin,
  Headset,
  MessageSquare,
  Phone,
  X,
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
import {
  ENQUIRY_BUDGET_OPTIONS,
  ENQUIRY_TIMELINE_OPTIONS,
  parseEnquiry,
} from "@/lib/contact/enquiry";
import { submitEnquiry } from "@/lib/contact/submit-enquiry";
import { CONTACT_HELP_OPTIONS, SITE } from "@/lib/constants";
import { contactFeatures, contactProcess } from "@/lib/data/site-content";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const whatsappHref = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`;
const officeMapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`;

const WEEKLY_HOURS = [
  { day: "Wednesday", hours: "Open 24 hours" },
  { day: "Thursday", hours: "Open 24 hours" },
  {
    day: "Friday",
    note: "Gandhi Jayanti",
    hours: "Open 24 hours",
    hoursNote: "Hours might differ",
  },
  { day: "Saturday", hours: "Open 24 hours" },
  { day: "Sunday", hours: "Open 24 hours" },
  { day: "Monday", hours: "Open 24 hours" },
  { day: "Tuesday", hours: "Open 24 hours" },
] as const;

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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [hoursOpen, setHoursOpen] = useState(false);
  const closeHours = useCallback(() => setHoursOpen(false), []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const enquiry = parseEnquiry({
      name: data.get("name"),
      company: data.get("company"),
      email: data.get("email"),
      help: data.get("help"),
      budget: data.get("budget"),
      timeline: data.get("timeline"),
      message: data.get("message"),
      botcheck: data.get("botcheck") === "on",
    });

    if (!enquiry.ok) {
      setStatus("error");
      setErrorMessage(enquiry.message);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const result = await submitEnquiry(enquiry.data);
      if (!result.ok) {
        setStatus("error");
        setErrorMessage(result.message);
        return;
      }

      form.reset();
      setEmailTouched(false);
      setEmailValid(false);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "We couldn't send your enquiry. Check your connection and try again.",
      );
    }
  }

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
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
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
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary"
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <ContactInfoCard
                icon={Clock}
                title="Business Hours"
                onClick={() => setHoursOpen(true)}
              >
                {SITE.hours}
              </ContactInfoCard>

              <ContactInfoCard
                icon={MapPin}
                title="Office Address"
                href={officeMapsHref}
                external
              >
                {SITE.address}
              </ContactInfoCard>
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

            {status === "success" ? (
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Enquiry sent
                </p>
                <p className="mt-2 text-sm leading-relaxed text-emerald-800">
                  Thanks for reaching out. We received your message and will
                  reply by email.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm font-semibold text-primary"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <Field
                label="Full Name *"
                name="name"
                placeholder="Alex Tan"
                required
                autoComplete="name"
              />
              <Field
                label="Company Name"
                name="company"
                placeholder="Your company name"
                autoComplete="organization"
              />
              <div>
                <Field
                  label="Business Email *"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
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
                name="help"
                options={CONTACT_HELP_OPTIONS}
                required
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <SelectField
                  label="Budget Range"
                  name="budget"
                  options={ENQUIRY_BUDGET_OPTIONS}
                  placeholder="Not specified"
                />
                <SelectField
                  label="Timeline"
                  name="timeline"
                  options={ENQUIRY_TIMELINE_OPTIONS}
                  placeholder="Not specified"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Tell us about your requirement *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={4000}
                  rows={4}
                  placeholder="Briefly describe your project goals, timeline, and what success looks like..."
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none ring-primary/30 placeholder:text-slate-400 focus:ring-2"
                />
              </div>
              {status === "error" ? (
                <p className="text-sm font-medium text-rose-600" role="alert">
                  {errorMessage}
                </p>
              ) : null}
              <Button
                type="submit"
                className="w-full"
                size="lg"
                showArrow
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send Enquiry"}
              </Button>
              </form>
            )}

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: "LinkedIn", icon: Link2, className: "text-blue-600" },
                {
                  label: "Email",
                  icon: Mail,
                  className: "text-rose-600",
                  href: `mailto:${SITE.email}`,
                },
                {
                  label: "WhatsApp",
                  icon: MessageSquare,
                  className: "text-emerald-600",
                  href: `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`,
                  external: true,
                },
              ].map((item) => {
                const className = cn(
                  "inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-2 py-2 text-xs font-semibold",
                  item.className,
                );
                const content = (
                  <>
                    <item.icon className="h-3.5 w-3.5" />
                    {item.label}
                  </>
                );

                if (!item.href) {
                  return (
                    <button key={item.label} type="button" className={className}>
                      {content}
                    </button>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={className}
                    {...(item.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <BusinessHoursDialog open={hoursOpen} onClose={closeHours} />
    </Section>
  );
}

function ContactInfoCard({
  icon,
  title,
  children,
  href,
  external = false,
  onClick,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const className =
    "flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-white p-4 text-left transition-colors hover:border-primary";
  const content = (
    <>
      <div className="flex items-center gap-3">
        <IconBadge icon={icon} />
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="text-sm text-muted">{children}</p>
        </div>
      </div>
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
        <ArrowRight className="h-4 w-4" />
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}

function BusinessHoursDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close business hours"
        className="absolute inset-0 bg-slate-900/40"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="business-hours-title"
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <h3
            id="business-hours-title"
            className="text-base font-semibold text-slate-900"
          >
            Business Hours
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <ul className="mt-5 space-y-4">
          {WEEKLY_HOURS.map((entry) => (
            <li key={entry.day} className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-slate-900">{entry.day}</p>
                {"note" in entry ? (
                  <p className="text-sm text-slate-500">{entry.note}</p>
                ) : null}
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-800">{entry.hours}</p>
                {"hoursNote" in entry ? (
                  <p className="text-sm text-slate-500">{entry.hoursNote}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  autoComplete,
  onChange,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={(event) => onChange?.(event.target.value)}
        className="h-11 w-full rounded-xl border border-border bg-white px-4 text-sm outline-none ring-primary/30 placeholder:text-slate-400 focus:ring-2"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
  placeholder = "Select an option",
}: {
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="h-11 w-full rounded-xl border border-border bg-white px-4 text-sm outline-none ring-primary/30 focus:ring-2"
      >
        <option value="" disabled={required}>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
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
