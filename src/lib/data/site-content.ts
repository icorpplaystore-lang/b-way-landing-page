import {
  Award,
  BarChart3,
  Briefcase,
  Building2,
  Cloud,
  Factory,
  FileCheck2,
  GraduationCap,
  HardHat,
  HeartPulse,
  Hotel,
  Landmark,
  LineChart,
  Lock,
  MonitorSmartphone,
  Network,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Truck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export const homeWhyCards = [
  {
    title: "Build",
    description: "Websites, applications, software and digital platforms.",
    icon: MonitorSmartphone,
  },
  {
    title: "Automate",
    description: "Reduce repetitive work with AI and connected workflows.",
    icon: Zap,
  },
  {
    title: "Connect",
    description:
      "Access workforce and business solutions that help teams operate effectively.",
    icon: Users,
  },
  {
    title: "Grow",
    description:
      "Combine technology, people and operational support to move your business forward.",
    icon: LineChart,
  },
];

export const technologyServicesDetailed = [
  {
    id: "web-app-development",
    title: "Web & App Development",
    description:
      "Modern websites and mobile applications engineered for speed, clarity, and long-term maintainability.",
    capabilities: [
      "Responsive web experiences",
      "Cross-platform mobile apps",
      "Product UI implementation",
      "Performance optimization",
    ],
    useCases: ["Corporate platforms", "Customer portals", "Internal tools"],
    icon: Smartphone,
    tone: "blue" as const,
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Intelligent workflows that turn manual enquiry, support, and operations work into repeatable systems.",
    capabilities: [
      "Lead qualification flows",
      "Support automation",
      "Document processing",
      "Reporting automation",
    ],
    useCases: ["Sales ops", "Customer support", "Back-office workflows"],
    icon: Zap,
    tone: "violet" as const,
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "Bespoke software shaped around your processes, integrations, and growth roadmap.",
    capabilities: [
      "Custom platforms",
      "API integrations",
      "Workflow systems",
      "Ongoing product evolution",
    ],
    useCases: ["Operations platforms", "Industry tools", "Business systems"],
    icon: MonitorSmartphone,
    tone: "indigo" as const,
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    description:
      "Commerce experiences that connect catalog, checkout, inventory, and customer journeys.",
    capabilities: [
      "Storefront development",
      "Payment integrations",
      "Catalog management",
      "Conversion optimization",
    ],
    useCases: ["D2C brands", "Retailers", "Marketplace sellers"],
    icon: ShoppingBag,
    tone: "orange" as const,
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description:
      "Cloud architecture and managed environments designed for reliability, scale, and cost clarity.",
    capabilities: [
      "Cloud migration",
      "Infrastructure setup",
      "Monitoring & reliability",
      "Cost optimization",
    ],
    useCases: ["SaaS products", "Enterprise apps", "Data platforms"],
    icon: Cloud,
    tone: "sky" as const,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Practical security practices that protect systems, data, and customer trust.",
    capabilities: [
      "Security assessments",
      "Access controls",
      "Monitoring support",
      "Hardening guidance",
    ],
    useCases: ["Customer platforms", "Internal systems", "Regulated teams"],
    icon: Lock,
    tone: "rose" as const,
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description:
      "Insight-ready dashboards and reporting that help leadership and operations act faster.",
    capabilities: [
      "KPI dashboards",
      "Data pipelines",
      "Operational reporting",
      "Decision support",
    ],
    useCases: ["Executive reporting", "Ops visibility", "Growth tracking"],
    icon: BarChart3,
    tone: "emerald" as const,
  },
  {
    id: "seo-digital-growth",
    title: "SEO & Digital Growth",
    description:
      "Growth programs focused on visibility, acquisition quality, and measurable digital performance.",
    capabilities: [
      "Technical SEO",
      "Content growth systems",
      "Conversion pathways",
      "Performance tracking",
    ],
    useCases: ["Lead generation", "Brand discovery", "Market expansion"],
    icon: Search,
    tone: "amber" as const,
  },
];

export const workforceServicesDetailed = [
  {
    id: "for-employers",
    title: "For Employers",
    description:
      "Business-side workforce requirements and employer support designed to help organizations secure the people and operational assistance they need.",
    href: "/employers",
    points: [
      "Workforce requirement discussions",
      "Employer-facing support pathways",
      "Role and team planning assistance",
      "Business-ready candidate alignment",
    ],
    icon: Briefcase,
    tone: "blue" as const,
  },
  {
    id: "for-job-seekers",
    title: "For Job Seekers",
    description:
      "Support and opportunities for candidates seeking roles that match their skills, experience, and career direction.",
    href: "/job-seekers",
    points: [
      "Candidate opportunity pathways",
      "Skills and role matching support",
      "Application guidance",
      "Ongoing candidate assistance",
    ],
    icon: Users,
    tone: "violet" as const,
  },
  {
    id: "recruitment-staffing",
    title: "Recruitment / Staffing",
    description:
      "Recruitment and staffing services that help businesses fill critical roles with suitable professionals across operational and specialist needs.",
    href: "/services?tab=workforce#recruitment-staffing",
    points: [
      "Role-based recruitment support",
      "Staffing for operational requirements",
      "Candidate shortlisting",
      "Placement coordination",
    ],
    icon: Award,
    tone: "emerald" as const,
  },
  {
    id: "compliance-regulatory",
    title: "Compliance & Regulatory Excellence",
    description:
      "Compliance information, regulatory processes, documentation support, and guidance that help businesses and candidates operate with confidence.",
    href: "/compliance",
    points: [
      "Compliance overview and guidance",
      "Regulatory process support",
      "Documentation pathways",
      "Employer and candidate responsibilities",
    ],
    icon: ShieldCheck,
    tone: "teal" as const,
  },
];

export const sectorSlides = [
  {
    title: "Construction",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "IT",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Retail",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Finance",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=700&q=80",
  },
];

export const industrySectors = [
  {
    title: "Construction",
    description:
      "Workforce support and digital tools for project tracking, safety, and field coordination.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    icon: HardHat,
    workforce: "Recruitment and staffing solutions for site and project roles.",
    technology: "Project dashboards, workforce tracking, and operational systems.",
    automation: "Safety checks, reporting, and resource coordination workflows.",
  },
  {
    title: "Logistics",
    description:
      "People and technology solutions that keep goods, fleets, and operations moving with clarity.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    icon: Truck,
    workforce: "Staffing for warehouse, transport, and operations teams.",
    technology: "Tracking platforms, routing visibility, and partner portals.",
    automation: "Lead-to-dispatch and reporting automation opportunities.",
  },
  {
    title: "IT",
    description:
      "Specialist talent pathways and technology delivery for digital-first organizations.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    icon: Network,
    workforce: "Recruitment support for technical and delivery roles.",
    technology: "Custom software, cloud, and product engineering.",
    automation: "Internal workflow and support automation systems.",
  },
  {
    title: "Healthcare",
    description:
      "Trusted people support and practical digital systems for care and operations teams.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
    icon: HeartPulse,
    workforce: "Candidate and employer pathways for healthcare operations.",
    technology: "Portals, scheduling systems, and operational platforms.",
    automation: "Enquiry handling and administrative workflow automation.",
  },
  {
    title: "Hospitality",
    description:
      "Workforce and digital experience solutions for hotels, venues, and guest-facing teams.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    icon: Hotel,
    workforce: "Staffing and recruitment support for hospitality roles.",
    technology: "Guest experience platforms and operations tools.",
    automation: "Booking, support, and reporting automation.",
  },
  {
    title: "Retail",
    description:
      "Commerce technology and workforce solutions for store, warehouse, and digital teams.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    icon: ShoppingBag,
    workforce: "Retail and operations staffing support.",
    technology: "E-commerce, inventory visibility, and customer journeys.",
    automation: "Order, support, and campaign workflow automation.",
  },
  {
    title: "Finance",
    description:
      "Secure technology and people solutions for financial and regulated teams.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    icon: Landmark,
    workforce: "Specialist recruitment support for finance operations.",
    technology: "Secure platforms, analytics, and reporting systems.",
    automation: "Document and reporting automation opportunities.",
  },
  {
    title: "Manufacturing",
    description:
      "Operational workforce support and systems that improve visibility across plant and process teams.",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80",
    icon: Factory,
    workforce: "Recruitment and staffing for production and operations roles.",
    technology: "Dashboards, quality systems, and connected workflows.",
    automation: "Reporting and production coordination automation.",
  },
  {
    title: "Education",
    description:
      "People and digital platforms that support institutions, learners, and administrative teams.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    icon: GraduationCap,
    workforce: "Staffing support for education operations and specialist roles.",
    technology: "Learning platforms and administration systems.",
    automation: "Enquiry and admissions workflow automation.",
  },
];

export const automationWorkflow = [
  "Customer Enquiry",
  "AI Understanding",
  "Lead Qualification",
  "Workflow Automation",
  "Team Action",
  "Reporting",
];

export const automationUseCases = [
  { title: "Lead Automation", icon: Sparkles },
  { title: "Customer Support", icon: Users },
  { title: "Invoice Automation", icon: FileCheck2 },
  { title: "HR Automation", icon: Briefcase },
  { title: "Reporting Automation", icon: BarChart3 },
];

export const howWeWorkSteps = [
  {
    step: "01",
    title: "Understand",
    description:
      "Understand your business, workforce or technology requirement.",
  },
  {
    step: "02",
    title: "Plan",
    description: "Define the appropriate solution, scope and roadmap.",
  },
  {
    step: "03",
    title: "Deliver",
    description: "Build, implement, connect or deploy the solution.",
  },
  {
    step: "04",
    title: "Support",
    description: "Continue supporting the business after delivery.",
  },
];

export const homeProjects = [
  {
    title: "Logistics Management Platform",
    description: "End-to-end shipment visibility with real-time tracking and analytics.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "Web",
  },
  {
    title: "Healthcare Patient Portal",
    description: "Secure appointments, records, and care coordination in one place.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    category: "Mobile Apps",
  },
  {
    title: "AI Ops Assistant",
    description: "Automation layer that reduces manual triage across support workflows.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    category: "AI & Automation",
  },
  {
    title: "Retail Commerce Suite",
    description: "Omnichannel storefront with inventory sync and personalized journeys.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    category: "E-commerce",
  },
];

export const portfolioFilters = [
  "All",
  "Websites",
  "Web Applications",
  "Mobile Apps",
  "AI & Automation",
  "E-commerce",
  "Custom Software",
  "Data & Analytics",
];

export const portfolioProjects = [
  {
    title: "Logistics Management Platform",
    description: "Unified operations suite for routing, inventory, and partner coordination.",
    category: "Transportation",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    tags: ["Strategy", "Logistics"],
    filter: "Web Applications",
  },
  {
    title: "Patient Care Companion",
    description: "Mobile experience for appointments, reminders, and secure messaging.",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    tags: ["Mobile", "UX"],
    filter: "Mobile Apps",
  },
  {
    title: "Commerce Growth Engine",
    description: "High-converting storefront with personalization and inventory sync.",
    category: "Retail",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    tags: ["E-commerce", "Growth"],
    filter: "E-commerce",
  },
  {
    title: "Finance Insights Cloud",
    description: "Analytics product for executive reporting and forecasting.",
    category: "Fintech",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    tags: ["SaaS", "Analytics"],
    filter: "Data & Analytics",
  },
  {
    title: "AI Ops Assistant",
    description: "Automation layer that reduces manual triage across support workflows.",
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    tags: ["AI", "Automation"],
    filter: "AI & Automation",
  },
  {
    title: "Corporate Website System",
    description: "Brand website platform with modular pages and growth-ready SEO foundations.",
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
    tags: ["Websites", "SEO"],
    filter: "Websites",
  },
];

export const technologyTestimonials = [
  {
    quote:
      "B-Way helped us modernize our operations without disrupting the business. The team was sharp, reliable, and truly invested in our outcomes.",
    name: "Aparna Sharma",
    role: "COO, Apex Logistics",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    quote:
      "From strategy to delivery, everything was clear and collaborative. We now ship faster and our customers notice the difference.",
    name: "Daniel Okonkwo",
    role: "CTO, Northline Health",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
];

export const workforceTestimonials = [
  {
    quote:
      "Their workforce support helped us fill critical roles with candidates who understood our operational realities.",
    name: "Shweta Mehra",
    role: "HR Lead, BrightCart",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    quote:
      "Clear process, strong communication, and genuine care for both employer and candidate needs.",
    name: "James Okello",
    role: "Operations Manager, Harbor Hospitality",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
];

export const testimonials = [
  ...technologyTestimonials,
  ...workforceTestimonials,
];

export const articles = [
  {
    category: "AI & Automation",
    date: "Sep 12, 2026",
    title: "How AI Automation Is Reshaping Mid-Market Operations",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Workforce",
    date: "Sep 05, 2026",
    title: "Building Digital Teams That Scale With Your Product",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Compliance",
    date: "Aug 28, 2026",
    title: "A Practical Guide to Compliance Confidence for Growing Businesses",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Cloud",
    date: "Aug 18, 2026",
    title: "Cloud Migration Without Downtime: What Matters Most",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Business",
    date: "Aug 10, 2026",
    title: "When Technology and Workforce Strategy Need to Work Together",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Cybersecurity",
    date: "Aug 02, 2026",
    title: "Security Practices That Protect Growth Without Slowing Delivery",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  },
];

export const insightCategories = [
  "All",
  "Technology",
  "AI & Automation",
  "Software",
  "Cybersecurity",
  "Cloud",
  "E-commerce",
  "Data & Analytics",
  "Workforce",
  "Business",
  "Compliance",
];

export const compliancePoints = [
  {
    title: "Compliance Overview",
    description:
      "Clear guidance on the compliance expectations relevant to workforce and business engagements.",
    icon: ShieldCheck,
  },
  {
    title: "Regulatory Framework",
    description:
      "Support around regulatory processes so employers and candidates understand what is required.",
    icon: Landmark,
  },
  {
    title: "Documentation",
    description:
      "Structured documentation pathways that help keep records, policies, and requirements organized.",
    icon: FileCheck2,
  },
  {
    title: "Employer Responsibilities",
    description:
      "Practical clarity on employer-side responsibilities throughout the workforce engagement process.",
    icon: Briefcase,
  },
  {
    title: "Candidate Responsibilities",
    description:
      "Guidance for candidates on documentation, process steps, and information they may need to provide.",
    icon: Users,
  },
  {
    title: "Ongoing Support",
    description:
      "Continued assistance so compliance and regulatory questions can be addressed with confidence.",
    icon: Workflow,
  },
];

export const employerSections = [
  {
    title: "Employer Requirements",
    description:
      "Share your workforce needs, role expectations, timelines, and operational context so we can understand the right support pathway.",
  },
  {
    title: "Available Solutions",
    description:
      "Access employer-facing workforce solutions, recruitment support, and business assistance aligned to your requirements.",
  },
  {
    title: "Process",
    description:
      "From requirement discussion to candidate alignment and placement coordination, the process remains clear and practical.",
  },
  {
    title: "Compliance",
    description:
      "Compliance and regulatory considerations are addressed as part of the employer journey, not as an afterthought.",
  },
  {
    title: "Employer Support",
    description:
      "Ongoing communication and support help keep expectations aligned throughout the engagement.",
  },
];

export const jobSeekerSections = [
  {
    title: "Opportunities",
    description:
      "Explore opportunities that match your skills, experience, and preferred work direction.",
  },
  {
    title: "Candidate Process",
    description:
      "A clear process from enquiry and profile review through to matching and next steps.",
  },
  {
    title: "Required Information",
    description:
      "Guidance on the information and documentation candidates may need to prepare.",
  },
  {
    title: "Support",
    description:
      "Candidate support focused on clarity, communication, and practical next actions.",
  },
  {
    title: "Compliance / Documentation",
    description:
      "Where applicable, documentation and compliance expectations are explained clearly for candidates.",
  },
];

export const faqs = [
  {
    question: "Do you provide both technology and workforce solutions?",
    answer:
      "Yes. We support businesses with technology solutions such as web, software, AI automation, cloud and cybersecurity, as well as workforce and business solutions including employer support, candidate pathways, recruitment/staffing and compliance guidance.",
  },
  {
    question: "How do I know which service path to choose?",
    answer:
      "If you need to build, automate, secure or improve digital systems, start with Technology Solutions. If you need people, recruitment, employer support or compliance guidance, start with Workforce & Business Solutions. Our contact form also lets you select the area you need help with.",
  },
  {
    question: "Can technology and workforce support work together?",
    answer:
      "Yes. Many businesses need both — for example digital platforms alongside recruitment support, or automation alongside operational staffing. We can discuss a combined approach where it makes sense.",
  },
  {
    question: "Where can I learn about compliance requirements?",
    answer:
      "Visit our Compliance & Regulatory Excellence page for overview information, documentation guidance, responsibilities and support pathways.",
  },
  {
    question: "What happens after I submit an enquiry?",
    answer:
      "We review your requirement, clarify the best pathway, and recommend next steps whether the need is technology, workforce support, compliance or a combination of both.",
  },
];

export const teamMembers = [
  {
    name: "Aisha Rahman",
    role: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Marcus Chen",
    role: "Chief Technology Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Priya Nair",
    role: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "James Okello",
    role: "Engineering Lead",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sofia Alvarez",
    role: "People & Talent Lead",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Noah Patel",
    role: "Delivery Director",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
];

export const aboutBeliefs = [
  {
    title: "Understand Before We Build",
    description: "We clarify the business need before recommending technology or workforce solutions.",
  },
  {
    title: "Keep Solutions Practical",
    description: "Every recommendation should be usable, measurable, and grounded in real operations.",
  },
  {
    title: "Build for Scalability",
    description: "Systems and teams should be ready to grow as the business grows.",
  },
  {
    title: "Support Beyond Launch",
    description: "Delivery is only the start — ongoing support keeps outcomes durable.",
  },
];

export const partnershipStats = [
  { value: "95%", label: "Client Retention", icon: Award },
  { value: "250+", label: "Successful Projects", icon: Briefcase },
  { value: "10+", label: "Years of Experience", icon: LineChart },
  { value: "5+", label: "Industry Recognitions", icon: Sparkles },
];

export const expertiseReasons = [
  {
    title: "Deeper Understanding",
    description: "We speak your industry language and design around real operational realities.",
    icon: Building2,
  },
  {
    title: "Faster Implementation",
    description: "Proven patterns reduce discovery time and accelerate useful outcomes.",
    icon: Zap,
  },
  {
    title: "Lower Risk",
    description: "Domain-aware decisions help avoid costly rework and compliance surprises.",
    icon: Lock,
  },
  {
    title: "Long-Term Value",
    description: "Solutions are built to evolve with markets, teams, and growth.",
    icon: Award,
  },
];

// Backwards-compatible aliases used by older section imports during migration
export const homeStats = [
  { value: "10+", label: "Years Experience", icon: Briefcase },
  { value: "150+", label: "Happy Clients", icon: Users },
  { value: "200+", label: "Projects Done", icon: Award },
];

export const homeSolutions = [
  {
    title: "Technology Solutions",
    description:
      "From websites and mobile applications to AI automation, custom software, cloud, cybersecurity and data analytics, we build technology around the way your business works.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    href: "/services?tab=technology",
    icon: MonitorSmartphone,
  },
  {
    title: "Workforce & Business Solutions",
    description:
      "Connect your business with the people, workforce solutions and support needed to operate and grow with confidence.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    href: "/services?tab=workforce",
    icon: Users,
  },
];

export const principles = [
  {
    title: "Innovation First",
    points: [
      "Challenge assumptions early",
      "Prototype before overbuilding",
      "Measure real user value",
      "Improve continuously",
    ],
    icon: Sparkles,
  },
  {
    title: "Financial Stability",
    points: [
      "Prioritize sustainable delivery",
      "Protect long-term ROI",
      "Avoid unnecessary complexity",
      "Plan for growth responsibly",
    ],
    icon: Landmark,
  },
  {
    title: "The Bigger Picture",
    points: [
      "Align tech with business goals",
      "Design for people and process",
      "Think beyond the first release",
      "Build partnerships that last",
    ],
    icon: Building2,
  },
  {
    title: "Always Learning",
    points: [
      "Stay curious and humble",
      "Share knowledge openly",
      "Adopt proven modern tools",
      "Raise the bar together",
    ],
    icon: GraduationCap,
  },
];

export const aboutProcess = howWeWorkSteps.map((step, index) => ({
  title: step.title,
  description: step.description,
  icon: [Users, LineChart, Workflow, BarChart3][index],
}));

export const contactFeatures = [
  {
    title: "Quick Response",
    description: "We reply promptly so momentum never stalls.",
    icon: Zap,
  },
  {
    title: "Expert Consultation",
    description: "Talk directly with specialists who understand your domain.",
    icon: Users,
  },
  {
    title: "Global Support",
    description: "Reliable assistance across time zones and markets.",
    icon: Network,
  },
];

export const contactProcess = [
  {
    step: "01",
    title: "You Contact Us",
    description: "Share your goals, timeline, and current challenges.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "We Understand",
    description: "We dig into requirements and success criteria together.",
    icon: Users,
  },
  {
    step: "03",
    title: "We Recommend",
    description: "You receive a clear plan with scope and next steps.",
    icon: Briefcase,
  },
  {
    step: "04",
    title: "We Start",
    description: "The right team begins delivery with transparent progress.",
    icon: Zap,
  },
];
