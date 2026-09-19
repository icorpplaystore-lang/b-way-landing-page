import { SITE } from "@/lib/constants";
import { absoluteUrl, PAGES } from "@/lib/seo/metadata";

export const ENTITY = {
  organization: `${SITE.url}/#organization`,
  website: `${SITE.url}/#website`,
  logo: `${SITE.url}/#logo`,
  localBusiness: `${SITE.url}/#localbusiness`,
} as const;

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ENTITY.organization,
    name: SITE.legalName,
    alternateName: [SITE.name, SITE.shortName, "Broadway Global Solutions"],
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      "@id": ENTITY.logo,
      url: absoluteUrl("/bgs-logo.svg"),
      caption: "BGS",
    },
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "22 Sin Ming Lane, #06-76, Midview City",
      addressLocality: SITE.addressLocality,
      postalCode: SITE.postalCode,
      addressCountry: SITE.addressCountry,
    },
    areaServed: [
      { "@type": "Country", name: "Singapore" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "Web and app development",
      "AI automation",
      "Cloud solutions",
      "Workforce and staffing",
      "Employment agency compliance",
      "Digital transformation",
    ],
    identifier: {
      "@type": "PropertyValue",
      name: "MOM EA Licence",
      value: SITE.eaLicence,
    },
    sameAs: [] as string[],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: SITE.phone,
        email: SITE.email,
        areaServed: "SG",
        availableLanguage: ["English"],
        url: absoluteUrl("/contact"),
      },
    ],
  };
}

/** LocalBusiness for GEO / local SEO (Singapore HQ) */
export function localBusinessNode() {
  return {
    "@type": "ProfessionalService",
    "@id": ENTITY.localBusiness,
    name: SITE.legalName,
    image: absoluteUrl("/bgs-logo.svg"),
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "22 Sin Ming Lane, #06-76, Midview City",
      addressLocality: "Singapore",
      postalCode: SITE.postalCode,
      addressCountry: "SG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 1.3588,
      longitude: 103.8339,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    parentOrganization: { "@id": ENTITY.organization },
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": ENTITY.website,
    name: SITE.name,
    alternateName: [SITE.shortName, SITE.legalName],
    url: `${SITE.url}/`,
    publisher: { "@id": ENTITY.organization },
    inLanguage: "en-SG",
    description: SITE.description,
  };
}

export function webPageNode(opts: {
  path: string;
  name: string;
  description: string;
}) {
  const url = absoluteUrl(opts.path);
  return {
    "@type": "WebPage",
    "@id": url,
    url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": ENTITY.website },
    about: { "@id": ENTITY.organization },
    inLanguage: "en-SG",
  };
}

export function breadcrumbListNode(
  crumbs: { name: string; path: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function faqPageNode(
  faqItems: { question: string; answer: string }[],
) {
  if (!faqItems.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function jsonLdGraph(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}

/** Homepage graph — Organization + LocalBusiness + WebSite + WebPage */
export function homepageStructuredData() {
  return jsonLdGraph([
    organizationNode(),
    localBusinessNode(),
    websiteNode(),
    {
      ...webPageNode({
        path: "/",
        name: PAGES.home.title,
        description: PAGES.home.description,
      }),
      "@id": `${SITE.url}/#webpage`,
      primaryImageOfPage: { "@id": ENTITY.logo },
    },
  ]);
}

export function pageStructuredData(opts: {
  path: string;
  name: string;
  description: string;
  breadcrumbs?: { name: string; path: string }[];
  faqs?: { question: string; answer: string }[];
}) {
  const nodes: Record<string, unknown>[] = [
    organizationNode(),
    webPageNode(opts),
  ];
  if (opts.breadcrumbs?.length) {
    nodes.push(breadcrumbListNode(opts.breadcrumbs));
  }
  const faq = opts.faqs?.length ? faqPageNode(opts.faqs) : null;
  if (faq) nodes.push(faq);
  return jsonLdGraph(nodes);
}
