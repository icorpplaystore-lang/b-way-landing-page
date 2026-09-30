import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { noIndexRobots } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page is not part of the B-Way website.",
  robots: noIndexRobots,
};

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl font-bold text-slate-900">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        That address is not a published B-Way page. Use the menu or go back to
        the homepage.
      </p>
      <div className="mt-8">
        <Button href="/" showArrow>
          Back to home
        </Button>
      </div>
    </Container>
  );
}
