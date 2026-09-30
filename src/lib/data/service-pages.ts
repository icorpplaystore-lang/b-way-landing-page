import {
  technologyServicesDetailed,
  workforceServicesDetailed,
} from "@/lib/data/site-content";

export type ServicePage = {
  slug: string;
  title: string;
  description: string;
  points: readonly string[];
  useCases: readonly string[];
};

const recruitment = workforceServicesDetailed.find(
  (service) => service.id === "recruitment-staffing",
);

export const servicePages: ServicePage[] = [
  ...technologyServicesDetailed.map((service) => ({
    slug: service.id,
    title: service.title,
    description: service.description,
    points: service.capabilities,
    useCases: service.useCases,
  })),
  ...(recruitment
    ? [
        {
          slug: recruitment.id,
          title: recruitment.title,
          description: recruitment.description,
          points: recruitment.points,
          useCases: [
            "Growing teams",
            "Specialist roles",
            "Operational hiring",
          ],
        },
      ]
    : []),
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
