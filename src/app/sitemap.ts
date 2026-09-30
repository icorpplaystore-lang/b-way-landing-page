import type { MetadataRoute } from "next";
import { portfolioProjects } from "@/lib/data/portfolio-projects";
import { servicePages } from "@/lib/data/service-pages";
import { absoluteUrl, PAGES } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = Object.values(PAGES).map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: now,
    changeFrequency: (page.path === "/" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority:
      page.path === "/"
        ? 1
        : page.path === "/contact" || page.path === "/services"
          ? 0.9
          : 0.7,
  }));

  const services = servicePages.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudies = portfolioProjects.map((project) => ({
    url: absoluteUrl(`/portfolio/${project.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    images: [absoluteUrl(project.image)],
  }));

  return [...pages, ...services, ...caseStudies];
}
