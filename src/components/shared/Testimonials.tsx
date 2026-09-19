import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { TestimonialItem } from "@/types";

type TestimonialsProps = {
  items: TestimonialItem[];
  columns?: 2 | 3;
  eyebrow?: string;
};

export function Testimonials({
  items,
  columns = 2,
  eyebrow = "CLIENT STORIES",
}: TestimonialsProps) {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title="What Our Clients Say"
          description="Trusted by teams who value clarity, delivery quality, and long-term partnership."
          align="center"
          className="mb-12"
        />
        <div
          className={cn(
            "grid gap-6",
            columns === 2 && "md:grid-cols-2",
            columns === 3 && "md:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {items.slice(0, columns === 2 ? 2 : 3).map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-border bg-white p-7 shadow-sm shadow-slate-100"
            >
              <p className="font-serif text-5xl leading-none text-primary/30">“</p>
              <p className="mt-2 text-base leading-relaxed text-slate-600 italic">
                {item.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
