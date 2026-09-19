import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { compliancePoints } from "@/lib/data/site-content";

export function HomeCompliance() {
  return (
    <Section tone="surface">
      <Container>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Compliance & Regulatory Excellence"
            description="Trust-building compliance guidance from the workforce side of the business — kept visible because technology and people services both require confidence."
          />
          <Button href="/compliance" showArrow>
            Explore Compliance
          </Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {compliancePoints.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl border border-border bg-white p-6"
            >
              <IconBadge icon={point.icon} />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {point.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <TextLink href="/compliance">View full compliance information</TextLink>
        </div>
      </Container>
    </Section>
  );
}
