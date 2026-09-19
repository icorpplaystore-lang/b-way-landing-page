import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SectorItem = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export type ProjectItem = {
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  filter: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type StatItem = {
  value: string;
  label: string;
  icon?: LucideIcon;
};
