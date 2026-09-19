import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  technologyTestimonials,
  workforceTestimonials,
} from "@/lib/data/site-content";

export function HomeTestimonials() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="What Our Clients Say"
          description="Feedback grouped by audience so technology and workforce experiences stay clear."
          align="center"
          className="mb-12"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <TestimonialGroup
            label="Technology Clients"
            items={technologyTestimonials}
          />
          <TestimonialGroup
            label="Business / Workforce Clients"
            items={workforceTestimonials}
          />
        </div>
      </Container>
    </Section>
  );
}

function TestimonialGroup({
  label,
  items,
}: {
  label: string;
  items: typeof technologyTestimonials;
}) {
  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {label}
      </p>
      <div className="space-y-4">
        {items.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-border bg-white p-6 shadow-sm"
          >
            <p className="text-sm leading-relaxed text-slate-600 italic">
              “{item.quote}”
            </p>
            <div className="mt-5 flex items-center gap-3">
              <Image
                src={item.avatar}
                alt={item.name}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
