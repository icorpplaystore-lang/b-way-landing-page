import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type CtaBannerProps = {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image?: string;
  decorativeText?: string;
  className?: string;
};

export function CtaBanner({
  title,
  description = "Partner with a team that blends technology expertise and people-first delivery to accelerate your next chapter.",
  primaryLabel = "Get a Free Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
  image = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  decorativeText,
  className,
}: CtaBannerProps) {
  return (
    <section className={cn("section-padding pt-0", className)}>
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy">
          <div className="absolute inset-0 opacity-40">
            <Image
              src={image}
              alt="City skyline"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/55" />
          </div>

          <div className="relative grid items-center gap-10 px-6 py-14 md:px-10 lg:grid-cols-2 lg:px-14 lg:py-16">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={primaryHref} showArrow>
                  {primaryLabel}
                </Button>
                <Button href={secondaryHref} variant="whiteOutline">
                  {secondaryLabel}
                </Button>
              </div>
            </div>

            {decorativeText ? (
              <div className="hidden justify-end lg:flex">
                <p className="max-w-xs text-right font-serif text-4xl font-bold leading-tight text-white/20 xl:text-5xl">
                  {decorativeText}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
