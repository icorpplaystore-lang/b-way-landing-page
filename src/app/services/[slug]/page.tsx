import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { getServicePage, servicePages } from "@/lib/data/service-pages";
import { indexedPageFields, noIndexRobots } from "@/lib/seo/metadata";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return { robots: noIndexRobots };

  const path = `/services/${service.slug}`;
  const title = `${service.title} in Singapore`;
  const description = `${service.description} Broadway Global Solutions (B-Way), Midview City, Singapore.`;

  return {
    ...indexedPageFields(path),
    title,
    description,
    keywords: [service.title, `${service.title} Singapore`, "B-Way"],
    openGraph: {
      title,
      description,
      url: path,
      siteName: "B-Way",
      locale: "en_SG",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${service.title} — B-Way`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const related = servicePages
    .filter((item) => item.slug !== service.slug)
    .slice(0, 4);

  return (
    <>
      <JsonLd
        type="page"
        path={path}
        name={`${service.title} in Singapore`}
        description={service.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path },
        ]}
        service={{
          name: service.title,
          description: service.description,
          path,
        }}
      />
      <Section>
        <Container className="max-w-3xl">
          <TextLink href="/services" className="mb-6">
            All services
          </TextLink>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Services
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {service.title} in Singapore
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            {service.description}
          </p>
          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            What this includes
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
            {service.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Who it is for
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
            {service.useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/contact" showArrow>
              Talk about {service.title}
            </Button>
          </div>
        </Container>
      </Section>
      <Section tone="surface">
        <Container className="max-w-3xl">
          <RelatedLinks
            title="Related pages"
            links={[
              { href: "/services", label: "All technology and workforce services" },
              { href: "/portfolio", label: "Website case studies" },
              { href: "/industries", label: "Industries we serve" },
              { href: "/contact", label: "Contact B-Way" },
              ...related.map((item) => ({
                href: `/services/${item.slug}`,
                label: item.title,
              })),
            ]}
          />
        </Container>
      </Section>
    </>
  );
}
