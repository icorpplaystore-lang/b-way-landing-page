import type { Metadata } from "next";
import { buildMetadata, PAGES } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { faqs } from "@/lib/data/site-content";
import {
  IndustriesExpertise,
  IndustriesFaq,
  IndustriesFeatured,
  IndustriesGrid,
  IndustriesHero,
} from "@/sections/industries";

export const metadata: Metadata = buildMetadata("industries");

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        type="page"
        path="/industries"
        name={PAGES.industries.title}
        description={PAGES.industries.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ]}
        faqs={faqs}
      />
      <IndustriesHero />
      <IndustriesGrid />
      <IndustriesFeatured />
      <IndustriesExpertise />
      <CtaBanner
        title="Let's Build a Stronger Tomorrow"
        primaryLabel="Schedule a Consultation"
        secondaryLabel="Learn More"
      />
      <IndustriesFaq />
    </>
  );
}
