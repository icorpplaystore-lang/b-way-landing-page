import { Container } from "@/components/ui/Container";
import { IconBadge, type IconTone } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeWhyCards } from "@/lib/data/site-content";

const whyTones: IconTone[] = ["blue", "violet", "emerald", "amber"];

export function HomeWhy() {
  return (
    <Section tone="surface">
      <Container>
        <SectionHeading
          title="Solutions Built Around Real Business Needs"
          description="Technology and people working together so businesses can build, automate, connect and grow with confidence."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeWhyCards.map((card, index) => (
            <article
              key={card.title}
              className="rounded-2xl border border-border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70"
            >
              <IconBadge
                icon={card.icon}
                tone={whyTones[index % whyTones.length]}
                className="mx-auto"
              />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
