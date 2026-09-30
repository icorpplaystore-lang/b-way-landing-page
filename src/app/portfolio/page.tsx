import type { Metadata } from "next";
import { portfolioProjects } from "@/lib/data/portfolio-projects";
import { buildMetadata, PAGES } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  PortfolioCta,
  PortfolioGrid,
  PortfolioHero,
  PortfolioPartnerships,
  PortfolioTestimonialSlider,
} from "@/sections/portfolio";

export const metadata: Metadata = buildMetadata("portfolio");

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        type="page"
        path="/portfolio"
        name={PAGES.portfolio.title}
        description={PAGES.portfolio.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ]}
        itemList={portfolioProjects.map((project) => ({
          name: project.title,
          path: `/portfolio/${project.slug}`,
          image: project.image,
        }))}
      />
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioPartnerships />
      <PortfolioTestimonialSlider />
      <PortfolioCta />
    </>
  );
}
