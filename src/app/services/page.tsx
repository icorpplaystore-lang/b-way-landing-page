import type { Metadata } from "next";
import { Suspense } from "react";
import { buildMetadata, PAGES } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/shared/CtaBanner";
import {
  ServicesDirectory,
  ServicesHero,
  ServicesPartner,
} from "@/sections/services/ServicesDirectory";

export const metadata: Metadata = buildMetadata("services");

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        type="page"
        path="/services"
        name={PAGES.services.title}
        description={PAGES.services.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <ServicesHero />
      <Suspense
        fallback={
          <div className="section-padding bg-surface text-center text-muted">
            Loading services…
          </div>
        }
      >
        <ServicesDirectory />
      </Suspense>
      <ServicesPartner />
      <CtaBanner
        title="Let's Build, Connect & Grow Together"
        description="Tell us whether you need technology, workforce support, or both — and we'll guide the next step."
        primaryLabel="Get a Free Consultation"
        secondaryLabel="Talk to Our Team"
      />
    </>
  );
}
