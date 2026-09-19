import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { articles } from "@/lib/data/site-content";

export function HomeArticles() {
  return (
    <Section tone="surface">
      <Container>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Insights"
            description="Perspectives across technology, workforce, business and compliance."
          />
          <TextLink href="/insights">View all insights</TextLink>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide">
                  <span className="text-primary">{article.category}</span>
                  <span className="text-muted">{article.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {article.title}
                </h3>
                <TextLink href="/insights" className="mt-4">
                  Read more
                </TextLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
