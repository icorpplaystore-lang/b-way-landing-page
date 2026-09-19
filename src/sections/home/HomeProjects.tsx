import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { homeProjects } from "@/lib/data/site-content";

const categories = [
  "Web",
  "Mobile Apps",
  "AI & Automation",
  "Custom Software",
  "E-commerce",
  "Data & Analytics",
];

export function HomeProjects() {
  return (
    <Section tone="surface">
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Solutions We've Built"
            description="Selected technology work across websites, applications, automation and digital platforms."
          />
          <Button href="/portfolio" showArrow>
            View All Projects
          </Button>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-slate-600"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70"
            >
              <div className="relative h-44 bg-surface">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {project.category}
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <TextLink href="/portfolio" className="mt-4">
                  View Case Study
                </TextLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
