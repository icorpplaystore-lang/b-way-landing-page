import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "white" | "surface" | "navy";
};

export function Section({
  children,
  className,
  id,
  tone = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        tone === "white" && "bg-white",
        tone === "surface" && "bg-surface",
        tone === "navy" && "bg-navy text-white",
        className,
      )}
    >
      {children}
    </section>
  );
}
