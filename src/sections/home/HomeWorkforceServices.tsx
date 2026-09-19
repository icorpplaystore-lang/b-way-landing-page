import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { workforceServicesDetailed } from "@/lib/data/site-content";

export function HomeWorkforceServices() {
  return (
    <Section tone="surface">
      <Container>
        <SectionHeading
          title="Workforce & Business Solutions"
          description="Employer support, candidate pathways, recruitment/staffing and compliance — structured clearly from the workforce side of the business."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {workforceServicesDetailed.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl border border-border bg-white p-7"
            >
              <IconBadge icon={service.icon} tone={service.tone} />
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="text-sm text-slate-700">
                    • {point}
                  </li>
                ))}
              </ul>
              <TextLink href={service.href} className="mt-5">
                Explore {service.title}
              </TextLink>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
