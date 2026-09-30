import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { PortfolioCaseStudy } from "@/sections/portfolio/PortfolioCaseStudy";
import {
  getPortfolioProject,
  portfolioProjects,
} from "@/lib/data/portfolio-projects";
import { absoluteUrl, indexedPageFields, noIndexRobots } from "@/lib/seo/metadata";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) {
    return { robots: noIndexRobots };
  }

  const path = `/portfolio/${project.slug}`;
  const canonical = absoluteUrl(path);

  return {
    ...indexedPageFields(path),
    title: project.seoTitle,
    description: project.seoDescription,
    keywords: [
      project.title,
      "website case study",
      "design system",
      "B-Way",
      "Broadway Global Solutions",
    ],
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      url: canonical,
      siteName: "B-Way",
      locale: "en_SG",
      type: "article",
      images: [
        {
          url: project.image,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoTitle,
      description: project.seoDescription,
      images: [project.image],
    },
  };
}

export default async function PortfolioCaseStudyPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        type="page"
        path={`/portfolio/${project.slug}`}
        name={project.seoTitle}
        description={project.seoDescription}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: project.title, path: `/portfolio/${project.slug}` },
        ]}
        creativeWork={{
          name: project.seoTitle,
          description: project.seoDescription,
          image: project.image,
          path: `/portfolio/${project.slug}`,
        }}
      />
      <PortfolioCaseStudy project={project} />
    </>
  );
}
