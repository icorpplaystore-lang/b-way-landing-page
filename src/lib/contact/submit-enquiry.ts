import type { EnquiryInput } from "@/lib/contact/enquiry";

export async function submitEnquiry(enquiry: EnquiryInput) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const inbox = process.env.NEXT_PUBLIC_CONTACT_INBOX_EMAIL;

  if (!accessKey || !inbox) {
    return {
      ok: false as const,
      message: "The contact form is temporarily unavailable.",
    };
  }

  if (enquiry.botcheck) {
    return { ok: true as const };
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New website enquiry: ${enquiry.help}`,
      from_name: "B-Way Website",
      name: enquiry.name,
      email: enquiry.email,
      company: enquiry.company || "Not provided",
      help_with: enquiry.help,
      budget_range: enquiry.budget || "Not specified",
      timeline: enquiry.timeline || "Not specified",
      message: enquiry.message,
      inbox,
      botcheck: false,
    }),
  });

  const result = (await response.json().catch(() => null)) as {
    success?: boolean;
  } | null;

  if (!response.ok || !result?.success) {
    return {
      ok: false as const,
      message: "We couldn't send your enquiry. Please try again in a moment.",
    };
  }

  return { ok: true as const };
}
