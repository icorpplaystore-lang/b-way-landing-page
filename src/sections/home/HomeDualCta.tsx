import { Cpu, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function HomeDualCta() {
  return (
    <Section>
      <Container>
        <div className="rounded-3xl border border-border bg-surface px-6 py-12 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
              Looking for the Right Solution for Your Business?
            </h2>
            <p className="mt-4 text-muted">
              Choose the pathway that matches what you need next — technology or
              workforce support.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-7">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Need Technology?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Build, automate, secure or improve your digital operations.
              </p>
              <Button href="/services?tab=technology" className="mt-6" showArrow>
                Explore Technology
              </Button>
            </div>

            <div className="rounded-2xl border border-border bg-white p-7">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Need Workforce Support?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Find the right workforce/business solution for your requirements.
              </p>
              <Button href="/services?tab=workforce" className="mt-6" showArrow>
                Explore Workforce Solutions
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
