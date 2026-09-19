import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { IconBadge, type IconTone } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  automationUseCases,
  automationWorkflow,
} from "@/lib/data/site-content";

const automationTones: IconTone[] = [
  "violet",
  "blue",
  "emerald",
  "orange",
  "sky",
];

export function HomeAutomation() {
  return (
    <Section tone="surface" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.08),_transparent_45%)]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="AI Automation"
          title="Turn Manual Work Into Automated Workflows"
          description="A technology differentiator that stands apart from workforce services — helping teams move from enquiry to action with less friction."
          align="center"
          className="mb-12"
        />

        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-2">
          {automationWorkflow.map((step, index) => (
            <div key={step} className="flex w-full flex-col items-center">
              <div className="w-full rounded-xl border border-primary/20 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm">
                {step}
              </div>
              {index < automationWorkflow.length - 1 ? (
                <ArrowDown className="my-1 h-4 w-4 text-primary" />
              ) : null}
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {automationUseCases.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-white p-5 text-center"
            >
              <IconBadge
                icon={item.icon}
                tone={automationTones[index % automationTones.length]}
                className="mx-auto"
              />
              <p className="mt-3 text-sm font-semibold text-slate-900">
                {item.title}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/services?tab=technology#ai-automation" showArrow>
            Explore AI Automation
          </Button>
        </div>
      </Container>
    </Section>
  );
}
