"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { articles, insightCategories } from "@/lib/data/site-content";
import { cn } from "@/lib/utils";

export default function InsightsContent() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return articles;
    return articles.filter((article) => article.category === filter);
  }, [filter]);

  return (
    <>
      <section className="overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/50">
        <Container className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Insights
            </p>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Ideas Across Technology, Workforce & Business
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              Broad enough for both business areas — technology, automation,
              software, workforce, compliance and growth.
            </p>
          </div>
        </Container>
      </section>

      <Section className="!pt-0">
        <Container>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {insightCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  filter === category
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-white text-slate-600 hover:border-primary hover:text-primary",
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
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
                  <h2 className="mt-3 text-lg font-bold text-slate-900">
                    {article.title}
                  </h2>
                  <TextLink href="/contact" className="mt-4">
                    Read more
                  </TextLink>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 ? (
            <SectionHeading
              title="No articles in this category yet"
              description="Try another category or browse all insights."
              align="center"
              className="py-16"
            />
          ) : null}
        </Container>
      </Section>
    </>
  );
}
