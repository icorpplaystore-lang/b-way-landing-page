import type { Metadata } from "next";
import { BASE_KEYWORDS, SITE } from "@/lib/constants";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

/** Registry of page SEO — mirrors need-any-tool PAGES pattern */
export const PAGES: Record<string, PageSeo> = {
  home: {
    title: "B-Way | Technology & People Solutions in Singapore",
    description: SITE.description,
    path: "/",
    keywords: [
      "B-Way Singapore",
      "technology and workforce solutions",
      "digital solutions Singapore",
    ],
  },
  services: {
    title: "Services — Technology & Workforce Solutions",
    description:
      "Explore B-Way technology solutions and workforce & business services: web & apps, AI automation, cloud, recruitment, and compliance support.",
    path: "/services",
    keywords: ["technology services", "workforce services", "AI automation"],
  },
  industries: {
    title: "Industries We Serve",
    description:
      "Sector-focused technology and workforce solutions for construction, logistics, IT, healthcare, hospitality, retail, and more.",
    path: "/industries",
    keywords: ["industry solutions Singapore", "sector workforce solutions"],
  },
  portfolio: {
    title: "Portfolio — Real Solutions. Real Impact.",
    description:
      "Selected B-Way projects across web, mobile, SaaS, and AI — built for clarity, speed, and lasting partnership.",
    path: "/portfolio",
    keywords: ["project portfolio", "case studies", "digital products"],
  },
  about: {
    title: "About Us — Broadway Global Solutions",
    description:
      "Learn about B-Way (Broadway Global Solutions Pte Ltd): technology, people, and business solutions from Singapore with MOM EA Licence 25C3124.",
    path: "/about",
    keywords: ["Broadway Global Solutions", "about B-Way", "EA 25C3124"],
  },
  insights: {
    title: "Insights & Articles",
    description:
      "Practical insights on technology, workforce, compliance, and business growth from the B-Way team.",
    path: "/insights",
    keywords: ["business insights", "technology articles"],
  },
  contact: {
    title: "Contact Us — Get a Free Consultation",
    description:
      "Talk to B-Way about technology, automation, workforce, or compliance needs. Midview City, Singapore · admin@bwayglobal.com",
    path: "/contact",
    keywords: ["contact B-Way", "free consultation Singapore"],
  },
  employers: {
    title: "For Employers — Workforce Solutions",
    description:
      "Employer-facing workforce support, staffing pathways, and business-ready candidate alignment from B-Way.",
    path: "/employers",
    keywords: ["employer solutions", "staffing Singapore"],
  },
  "job-seekers": {
    title: "For Job Seekers — Career Opportunities",
    description:
      "Candidate support and opportunity pathways with B-Way — skills matching, guidance, and placement coordination.",
    path: "/job-seekers",
    keywords: ["job seekers Singapore", "career opportunities"],
  },
  compliance: {
    title: "Compliance & Regulatory Excellence",
    description:
      "Compliance guidance, regulatory process support, and documentation pathways. Licensed by MOM, Singapore — EA Licence 25C3124.",
    path: "/compliance",
    keywords: ["MOM compliance", "EA licence Singapore", "regulatory support"],
  },
  privacy: {
    title: "Privacy Policy",
    description: `How ${SITE.legalName} collects, uses, and protects personal data.`,
    path: "/privacy",
  },
  terms: {
    title: "Terms of Service",
    description: `Terms governing use of the ${SITE.name} website and related services.`,
    path: "/terms",
  },
};

export function absoluteUrl(path = "/"): string {
  const base = SITE.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Builds Next.js Metadata for a registered page (SEO + AEO/GEO friendly).
 */
export function buildMetadata(pageKey: keyof typeof PAGES): Metadata {
  const page = PAGES[pageKey];
  if (!page) throw new Error(`Unknown pageKey: ${String(pageKey)}`);

  const canonical = absoluteUrl(page.path);
  const keywords = Array.from(
    new Set([...(page.keywords || []), ...BASE_KEYWORDS]),
  );

  return {
    title: {
      absolute: page.title,
    },
    description: page.description,
    keywords,
    authors: [{ name: SITE.legalName, url: SITE.url }],
    creator: SITE.legalName,
    publisher: SITE.legalName,
    applicationName: SITE.name,
    category: "Business",
    alternates: {
      canonical,
      languages: {
        "en-SG": canonical,
        en: canonical,
      },
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url: canonical,
      siteName: SITE.name,
      title: page.title,
      description: page.description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${SITE.name} — Technology & People Solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "geo.region": "SG-01",
      "geo.placename": "Singapore, Midview City",
      "geo.position": "1.3588;103.8339",
      ICBM: "1.3588, 103.8339",
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  ...buildMetadata("home"),
  title: {
    default: PAGES.home.title,
    template: `%s | ${SITE.name}`,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0044CC" },
    { media: "(prefers-color-scheme: dark)", color: "#0044CC" },
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/bgs-logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  category: "Business",
};
