import { CONTACT_HELP_OPTIONS } from "@/lib/constants";

export const ENQUIRY_BUDGET_OPTIONS = [
  "$5k – $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $150k",
  "$150k+",
] as const;

export const ENQUIRY_TIMELINE_OPTIONS = [
  "ASAP",
  "1–3 months",
  "3–6 months",
  "Flexible",
] as const;

export type EnquiryInput = {
  name: string;
  company: string;
  email: string;
  help: string;
  budget: string;
  timeline: string;
  message: string;
  botcheck: boolean;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseEnquiry(
  input: unknown,
): { ok: true; data: EnquiryInput } | { ok: false; message: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, message: "Please complete the form and try again." };
  }

  const body = input as Record<string, unknown>;
  const name = readText(body.name);
  const company = readText(body.company);
  const email = readText(body.email);
  const help = readText(body.help);
  const budget = readText(body.budget);
  const timeline = readText(body.timeline);
  const message = readText(body.message);

  if (name.length < 2 || name.length > 120) {
    return { ok: false, message: "Enter your full name." };
  }

  if (company.length > 160) {
    return { ok: false, message: "Company name is too long." };
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 160) {
    return { ok: false, message: "Enter a valid business email." };
  }

  if (!isAllowed(help, CONTACT_HELP_OPTIONS)) {
    return { ok: false, message: "Select what we can help you with." };
  }

  if (budget && !isAllowed(budget, ENQUIRY_BUDGET_OPTIONS)) {
    return { ok: false, message: "Select a valid budget range." };
  }

  if (timeline && !isAllowed(timeline, ENQUIRY_TIMELINE_OPTIONS)) {
    return { ok: false, message: "Select a valid timeline." };
  }

  if (message.length < 10 || message.length > 4000) {
    return {
      ok: false,
      message: "Tell us a bit more about your requirement (at least a sentence).",
    };
  }

  return {
    ok: true,
    data: {
      name,
      company,
      email,
      help,
      budget,
      timeline,
      message,
      botcheck: body.botcheck === true || body.botcheck === "on",
    },
  };
}

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isAllowed(value: string, options: readonly string[]) {
  return options.includes(value);
}
