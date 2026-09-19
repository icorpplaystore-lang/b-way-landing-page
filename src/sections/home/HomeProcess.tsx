import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { howWeWorkSteps } from "@/lib/data/site-content";

export function HomeProcess() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="From Requirement to Real-World Solution"
          description="A process that works for both technology projects and workforce or business services."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howWeWorkSteps.map((step) => (
            <article
              key={step.step}
              className="rounded-2xl border border-border bg-white p-6"
            >
              <p className="text-3xl font-bold text-primary">{step.step}</p>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/contact" showArrow>
            Start with a consultation
          </Button>
        </div>
      </Container>
    </Section>
  );
}
