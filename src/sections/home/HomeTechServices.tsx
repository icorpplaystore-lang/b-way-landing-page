import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { technologyServicesDetailed } from "@/lib/data/site-content";

export function HomeTechServices() {
  return (
    <Section>
      <Container>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Technology Solutions for Modern Businesses"
            description="Eight core technology capabilities preserved from the technology offering — presented clearly for modern business needs."
          />
          <TextLink href="/services?tab=technology">View all technology</TextLink>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {technologyServicesDetailed.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70"
            >
              <IconBadge icon={service.icon} tone={service.tone} />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
