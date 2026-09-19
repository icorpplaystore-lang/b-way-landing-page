import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const solutionCards = [
  {
    href: "/services?tab=technology",
    title: "Technology Solutions",
    description:
      "Custom software, web & mobile applications, AI automation, cloud, cybersecurity and data solutions built around your business goals.",
    linkLabel: "Explore Technology Solutions",
    icon: Cpu,
    accent: "blue" as const,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Technology dashboard on laptop",
  },
  {
    href: "/services?tab=workforce",
    title: "Workforce & Business Solutions",
    description:
      "Recruitment, staffing, employer support, candidate solutions, and compliance services to help you find and manage the right people.",
    linkLabel: "Explore Workforce Solutions",
    icon: Users,
    accent: "violet" as const,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Professionals collaborating",
  },
];

export function HomePillars() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Our Solutions"
          title="Two Powerful Solutions. One Vision."
          description="Technology and people working together to help your business move forward."
          align="center"
          className="mb-12"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {solutionCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group grid overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-slate-200/70 md:grid-cols-2"
              >
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                      card.accent === "violet"
                        ? "bg-violet-100 text-violet-600"
                        : "bg-primary-light text-primary"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {card.description}
                  </p>
                  <span
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
                      card.accent === "violet"
                        ? "text-violet-600"
                        : "text-primary"
                    }`}
                  >
                    {card.linkLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
                <div className="relative min-h-52 md:min-h-full">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
