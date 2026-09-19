"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigateToHash } from "@/lib/navigation/scroll";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
};

export function TextLink({
  href,
  children,
  className,
  showArrow = true,
}: TextLinkProps) {
  const classes = cn(
    "inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark",
    className,
  );

  const content = (
    <>
      {children}
      {showArrow ? <ArrowRight className="h-4 w-4" /> : null}
    </>
  );

  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className={classes}
        onClick={(event) => {
          event.preventDefault();
          navigateToHash(href);
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
