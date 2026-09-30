import {
  homepageStructuredData,
  pageStructuredData,
  serializeJsonLd,
} from "@/lib/seo/jsonld";

type JsonLdProps =
  | { type: "home" }
  | {
      type: "page";
      path: string;
      name: string;
      description: string;
      breadcrumbs?: { name: string; path: string }[];
      faqs?: { question: string; answer: string }[];
      itemList?: { name: string; path: string; image?: string }[];
      creativeWork?: {
        name: string;
        description: string;
        image: string;
        path: string;
      };
      service?: {
        name: string;
        description: string;
        path: string;
      };
    };

/** AEO-friendly JSON-LD for search & answer engines */
export function JsonLd(props: JsonLdProps) {
  const data =
    props.type === "home"
      ? homepageStructuredData()
      : pageStructuredData(props);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
