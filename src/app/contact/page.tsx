import type { Metadata } from "next";
import { buildMetadata, PAGES } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  ContactFormSection,
  ContactHero,
  ContactProcess,
} from "@/sections/contact";

export const metadata: Metadata = buildMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <JsonLd
        type="page"
        path="/contact"
        name={PAGES.contact.title}
        description={PAGES.contact.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <ContactHero />
      <ContactFormSection />
      <ContactProcess />
    </>
  );
}
