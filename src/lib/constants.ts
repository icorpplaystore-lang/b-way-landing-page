export const SITE = {
  name: "B-Way",
  shortName: "BGS",
  legalName: "Broadway Global Solutions Pte Ltd",
  tagline: "Technology. People. Business.",
  description:
    "B-Way (Broadway Global Solutions) helps businesses build digital solutions, automate operations, connect with the right people, and grow with compliant workforce support from Singapore.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bwayglobal.com",
  email: "admin@bwayglobal.com",
  phone: "+65 6909 1234",
  phoneSecondary: "+91 9840377410",
  whatsapp: "+65 6909 1234",
  address: "22 Sin Ming Lane, #06-76, Midview City, Singapore 573969",
  addressLocality: "Singapore",
  addressCountry: "SG",
  postalCode: "573969",
  hours: "Monday – Friday: 9:00 AM – 6:00 PM UTC+8",
  eaLicence: "25C3124",
  momPortalUrl: "https://www.mom.gov.sg",
  locale: "en_SG",
  twitterHandle: "",
} as const;

export const BASE_KEYWORDS = [
  "B-Way",
  "BGS",
  "Broadway Global Solutions",
  "technology solutions Singapore",
  "workforce solutions Singapore",
  "web app development",
  "AI automation",
  "recruitment Singapore",
  "EA licence",
  "digital transformation",
  "custom software",
  "cloud solutions",
  "compliance MOM",
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const TECHNOLOGY_SERVICES = [
  {
    title: "Web & App Development",
    href: "/services?tab=technology#web-app-development",
    description:
      "Modern websites and applications built for performance, usability, and scale.",
  },
  {
    title: "AI Automation",
    href: "/services?tab=technology#ai-automation",
    description:
      "Intelligent workflows that reduce manual work across sales, support, and operations.",
  },
  {
    title: "Custom Software Development",
    href: "/services?tab=technology#custom-software",
    description:
      "Tailored platforms designed around how your business actually operates.",
  },
  {
    title: "E-commerce",
    href: "/services?tab=technology#ecommerce",
    description:
      "Storefronts, catalog systems, and commerce journeys built to convert and grow.",
  },
  {
    title: "Cloud Solutions",
    href: "/services?tab=technology#cloud",
    description:
      "Secure, scalable cloud environments that support reliability and cost control.",
  },
  {
    title: "Cybersecurity",
    href: "/services?tab=technology#cybersecurity",
    description:
      "Protect systems, data, and customer trust with practical security practices.",
  },
  {
    title: "Data Analytics",
    href: "/services?tab=technology#data-analytics",
    description:
      "Clear reporting and insight systems that help teams make better decisions.",
  },
  {
    title: "SEO & Digital Growth",
    href: "/services?tab=technology#seo-digital-growth",
    description:
      "Visibility and growth programs aligned to acquisition, conversion, and retention.",
  },
] as const;

export const WORKFORCE_SERVICES = [
  {
    title: "For Employers",
    href: "/employers",
    description:
      "Workforce requirements, employer support, and business-side staffing solutions.",
  },
  {
    title: "For Job Seekers",
    href: "/job-seekers",
    description:
      "Opportunities, candidate support, and guidance for professionals seeking roles.",
  },
  {
    title: "Recruitment / Staffing",
    href: "/services?tab=workforce#recruitment-staffing",
    description:
      "Recruitment and staffing services that connect businesses with the right people.",
  },
  {
    title: "Compliance & Regulatory",
    href: "/compliance",
    description:
      "Compliance support, regulatory processes, documentation, and policy guidance.",
  },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Insights", href: "/insights" },
    { label: "FAQs", href: "/industries#faq" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  technology: TECHNOLOGY_SERVICES.map((item) => ({
    label: item.title,
    href: item.href,
  })),
  workforce: [
    { label: "For Employers", href: "/employers" },
    { label: "For Job Seekers", href: "/job-seekers" },
    { label: "Recruitment / Staffing", href: "/services?tab=workforce#recruitment-staffing" },
    { label: "Compliance & Regulatory", href: "/compliance" },
    { label: "Sectors We Serve", href: "/industries" },
  ],
} as const;

export const CONTACT_HELP_OPTIONS = [
  "Technology",
  "AI Automation",
  "Software Development",
  "E-commerce",
  "Cloud",
  "Cybersecurity",
  "Data Analytics",
  "SEO & Digital Growth",
  "Workforce / Employer Solutions",
  "Job Seeker / Candidate Support",
  "Compliance & Regulatory",
  "Other",
] as const;
