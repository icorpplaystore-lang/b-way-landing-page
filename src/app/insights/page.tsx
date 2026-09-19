import type { Metadata } from "next";
import { buildMetadata, PAGES } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import InsightsContent from "@/sections/insights/InsightsContent";

export const metadata: Metadata = buildMetadata("insights");

export default function InsightsPage() {
  return (
    <>
      <JsonLd
        type="page"
        path="/insights"
        name={PAGES.insights.title}
        description={PAGES.insights.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ]}
      />
      <InsightsContent />
    </>
  );
}
