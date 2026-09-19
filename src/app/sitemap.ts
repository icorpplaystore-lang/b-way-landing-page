import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { PAGES } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return Object.values(PAGES).map((page) => ({
    url: page.path === "/" ? SITE.url : `${SITE.url}${page.path}`,
    lastModified: now,
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : page.path === "/contact" ? 0.9 : 0.7,
  }));
}
