import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-white p-6",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60",
        className,
      )}
    >
      {children}
    </div>
  );
}
