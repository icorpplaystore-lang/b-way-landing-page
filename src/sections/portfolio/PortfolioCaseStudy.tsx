import Image from "next/image";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import {
  portfolioProjects,
  type PortfolioProject,
} from "@/lib/data/portfolio-projects";

export function PortfolioCaseStudy({ project }: { project: PortfolioProject }) {
  const related = portfolioProjects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <Section>
        <Container className="max-w-6xl">
          <TextLink href="/portfolio" className="mb-6">
            All case studies
          </TextLink>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {project.category}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {project.summary}
          </p>
          <FullPagePreview project={project} />
        </Container>
      </Section>

      <Section tone="surface">
        <Container className="max-w-5xl">
          <SectionHeading
            eyebrow="Design system"
            title={`How ${project.title} is built`}
            description={project.designSystem.overview}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.designSystem.principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-5xl">
          <SectionHeading
            eyebrow="What changed"
            title="How the website was enhanced"
            description="The same story, told with a clearer system so the page does more of the explaining."
          />
          <ol className="mt-10 space-y-4">
            {project.enhancements.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-3 rounded-2xl border border-border bg-white p-6 sm:grid-cols-[auto_1fr] sm:gap-6"
              >
                <p className="text-sm font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="surface">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Client"
            title="What the client said"
            align="center"
            className="mb-8"
          />
          <figure className="rounded-3xl border border-border bg-white px-6 py-10 text-center md:px-12">
            <blockquote className="font-serif text-xl italic leading-relaxed text-slate-700 md:text-2xl">
              “{project.testimonial.quote}”
            </blockquote>
            <figcaption className="mt-8 font-semibold text-slate-900">
              {project.testimonial.name}
            </figcaption>
          </figure>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" showArrow>
              Start a website project
            </Button>
          </div>
          <div className="mt-12">
            <RelatedLinks
              title="Related pages"
              links={[
                { href: "/services/web-app-development", label: "Web & App Development" },
                { href: "/services", label: "All services" },
                { href: "/industries", label: "Industries" },
                { href: "/contact", label: "Start a project" },
                ...related.map((item) => ({
                  href: `/portfolio/${item.slug}`,
                  label: `${item.title} case study`,
                })),
              ]}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}

function FullPagePreview({ project }: { project: PortfolioProject }) {
  return (
    <figure className="mt-8">
      <div className="overflow-hidden rounded-3xl border border-border bg-white lg:hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          priority
          quality={90}
          className="h-auto w-full"
          sizes="100vw"
        />
      </div>
      <div className="hidden items-start gap-4 lg:grid lg:grid-cols-[2.5fr_1fr]">
        <PageSlice project={project} start={0} end={0.5} priority alt={project.imageAlt} />
        <div className="grid gap-4">
          <PageSlice project={project} start={0.5} end={0.75} alt="" />
          <PageSlice project={project} start={0.75} end={1} alt="" />
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        Full page of the {project.title} website.
      </figcaption>
    </figure>
  );
}

function PageSlice({
  project,
  start,
  end,
  alt,
  priority = false,
}: {
  project: PortfolioProject;
  start: number;
  end: number;
  alt: string;
  priority?: boolean;
}) {
  const slice = end - start;

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
      style={{
        aspectRatio: `${project.imageWidth} / ${project.imageHeight * slice}`,
      }}
    >
      <Image
        src={project.image}
        alt={alt}
        width={project.imageWidth}
        height={project.imageHeight}
        priority={priority}
        quality={90}
        className="absolute left-0 h-auto w-full max-w-none"
        style={{ top: `${(-start / slice) * 100}%` }}
        sizes="(max-width: 1280px) 70vw, 860px"
      />
    </div>
  );
}
