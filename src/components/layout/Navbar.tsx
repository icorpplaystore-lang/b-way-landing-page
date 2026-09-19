"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import {
  NAV_LINKS,
  TECHNOLOGY_SERVICES,
  WORKFORCE_SERVICES,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isServicesActive =
    pathname.startsWith("/services") ||
    pathname.startsWith("/employers") ||
    pathname.startsWith("/job-seekers") ||
    pathname.startsWith("/compliance");

  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/70 bg-white/90 backdrop-blur-md"
      style={{ viewTransitionName: "site-header" }}
    >      <Container className="flex h-16 items-center justify-between gap-2 lg:h-[72px]">
        <Link href="/" className="shrink-0">
          <BrandLogo size="sm" />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            if (link.href === "/services") {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/services"
                    className={cn(
                      "inline-flex items-center gap-1 text-sm font-medium transition-colors",
                      isServicesActive
                        ? "text-primary"
                        : "text-slate-600 hover:text-primary",
                    )}
                  >
                    Services
                    <ChevronDown className="h-4 w-4" />
                  </Link>

                  {servicesOpen ? (
                    <div className="absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-3">
                      <div className="grid grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-border bg-white shadow-xl shadow-slate-200/70">
                        <div className="border-r border-border p-5">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">
                            Technology Solutions
                          </p>
                          <ul className="space-y-2">
                            {TECHNOLOGY_SERVICES.map((item) => (
                              <li key={item.title}>
                                <Link
                                  href={item.href}
                                  className="block rounded-lg px-2 py-1.5 text-sm text-slate-600 transition-colors hover:bg-primary-light hover:text-primary"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-5">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">
                            Workforce & Business
                          </p>
                          <ul className="space-y-2">
                            {WORKFORCE_SERVICES.map((item) => (
                              <li key={item.title}>
                                <Link
                                  href={item.href}
                                  className="block rounded-lg px-2 py-1.5 text-sm text-slate-600 transition-colors hover:bg-primary-light hover:text-primary"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            href="/services"
                            className="mt-4 inline-flex text-sm font-semibold text-primary"
                          >
                            View all services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-slate-600 hover:text-primary",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Keep consultation CTA visible on mobile */}
          <Button
            href="/contact"
            size="sm"
            className="inline-flex h-9 max-w-[42vw] truncate px-2.5 text-[11px] sm:hidden"
          >
            Free Consultation
          </Button>
          <Button
            href="/contact"
            size="sm"
            showArrow
            className="hidden h-9 px-3 text-xs sm:inline-flex lg:hidden"
          >
            Get a Free Consultation
          </Button>
          <div className="hidden lg:block">
            <Button href="/contact" size="sm" showArrow>
              Get a Free Consultation
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-slate-700 lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {isOpen ? (
        <div className="max-h-[min(80vh,640px)] overflow-y-auto border-t border-border bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4 pb-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              if (link.href === "/services") {
                return (
                  <div key={link.href} className="rounded-lg">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium",
                        isServicesActive
                          ? "bg-primary-light text-primary"
                          : "text-slate-700 hover:bg-surface",
                      )}
                      aria-expanded={mobileServicesOpen}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileServicesOpen && "rotate-180",
                        )}
                      />
                    </button>

                    {mobileServicesOpen ? (
                      <div className="mb-2 ml-2 space-y-3 border-l-2 border-primary/20 py-2 pl-3">
                        <div>
                          <p className="mb-1.5 px-2 text-[11px] font-semibold uppercase tracking-wide text-primary">
                            Technology Solutions
                          </p>
                          <ul className="space-y-0.5">
                            <li>
                              <Link
                                href="/services?tab=technology"
                                onClick={() => setIsOpen(false)}
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-slate-800"
                              >
                                All Technology
                              </Link>
                            </li>
                            {TECHNOLOGY_SERVICES.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block rounded-md px-2 py-1.5 text-sm text-slate-600 hover:bg-primary-light hover:text-primary"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p className="mb-1.5 px-2 text-[11px] font-semibold uppercase tracking-wide text-primary">
                            Workforce & Business
                          </p>
                          <ul className="space-y-0.5">
                            <li>
                              <Link
                                href="/services?tab=workforce"
                                onClick={() => setIsOpen(false)}
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-slate-800"
                              >
                                All Workforce
                              </Link>
                            </li>
                            {WORKFORCE_SERVICES.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block rounded-md px-2 py-1.5 text-sm text-slate-600 hover:bg-primary-light hover:text-primary"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          href="/services"
                          onClick={() => setIsOpen(false)}
                          className="inline-flex px-2 text-sm font-semibold text-primary"
                        >
                          View all services →
                        </Link>
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium",
                    isActive
                      ? "bg-primary-light text-primary"
                      : "text-slate-700 hover:bg-surface",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <Button href="/contact" className="mt-3 w-full" showArrow>
              Get a Free Consultation
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
