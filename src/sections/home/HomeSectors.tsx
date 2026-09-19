import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { sectorSlides } from "@/lib/data/site-content";

export function HomeSectors() {
  return (
    <Section>
      <Container>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Sectors We Serve"
            description="Industry-aware solutions designed around the realities of your market, operations and customers — retaining the sector focus from the workforce side of the business."
          />
          <TextLink href="/industries">View all sectors</TextLink>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {sectorSlides.map((sector) => (
            <article
              key={sector.title}
              className="group relative h-56 overflow-hidden rounded-2xl"
            >
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
              <p className="absolute bottom-4 left-4 text-base font-semibold text-white">
                {sector.title}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
