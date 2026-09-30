"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { portfolioProjects } from "@/lib/data/portfolio-projects";
import { getServicePage } from "@/lib/data/service-pages";

const LABELS: Record<string, string> = {
  services: "Services",
  industries: "Industries",
  portfolio: "Portfolio",
  about: "About Us",
  insights: "Insights",
  contact: "Contact",
  employers: "For Employers",
  "job-seekers": "For Job Seekers",
  compliance: "Compliance",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
};

const UNDER_SERVICES = new Set(["employers", "job-seekers", "compliance"]);

export function Breadcrumbs() {
  const pathname = usePathname();
  const crumbs = buildCrumbs(pathname);
  if (crumbs.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border/70 bg-white">
      <Container>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 py-3 text-sm text-muted">
          {crumbs.map((crumb, index) => {
            const current = index === crumbs.length - 1;
            return (
              <li key={crumb.path} className="inline-flex items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-slate-300">
                    /
                  </span>
                ) : null}
                {current ? (
                  <span aria-current="page" className="font-medium text-slate-900">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.path} className="hover:text-primary">
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}

function buildCrumbs(pathname: string) {
  if (!pathname || pathname === "/") return [];

  const segments = pathname.split("/").filter(Boolean);
  const section = segments[0];
  const crumbs = [{ name: "Home", path: "/" }];

  if (UNDER_SERVICES.has(section)) {
    crumbs.push({ name: "Services", path: "/services" });
  }

  if (section === "services" && segments[1]) {
    const service = getServicePage(segments[1]);
    crumbs.push({ name: "Services", path: "/services" });
    crumbs.push({
      name: service?.title ?? "Service",
      path: `/services/${segments[1]}`,
    });
    return crumbs;
  }

  if (section === "portfolio" && segments[1]) {
    const project = portfolioProjects.find((item) => item.slug === segments[1]);
    crumbs.push({ name: "Portfolio", path: "/portfolio" });
    crumbs.push({
      name: project?.title ?? "Case study",
      path: `/portfolio/${segments[1]}`,
    });
    return crumbs;
  }

  crumbs.push({
    name: LABELS[section] ?? "Page",
    path: `/${section}`,
  });
  return crumbs;
}
