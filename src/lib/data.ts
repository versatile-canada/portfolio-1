export const socials = {
  email: "mailto:hello@versatile.agency",
  bookACall: "https://cal.com/versatile-agency",
  linkedin: "https://linkedin.com/company/versatile-agency",
  instagram: "https://instagram.com/versatile.agency",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const industries = [
  "Roofing & Exteriors",
  "Plumbing & HVAC",
  "Electrical Contracting",
  "Construction & Remodeling",
  "Law Firms",
  "Accounting & Finance",
  "Dental & Medical",
  "Consulting",
  "Real Estate",
  "Home Services",
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "Brand & Strategy",
    description:
      "Positioning, messaging, and visual identity that make a contracting crew or a corner-office firm equally impossible to ignore.",
    icon: "Compass",
  },
  {
    title: "Premium Web Design",
    description:
      "Editorial-grade layouts built to earn trust in the first three seconds — whether the visitor needs a roof or a retainer.",
    icon: "PenTool",
  },
  {
    title: "Development",
    description:
      "Fast, resilient builds on modern frameworks. No bloated templates — every site is hand-built and stress-tested.",
    icon: "Code2",
  },
  {
    title: "Conversion Optimization",
    description:
      "Forms, funnels, and call-tracking tuned so traffic turns into quote requests, consultations, and booked jobs.",
    icon: "TrendingUp",
  },
  {
    title: "Local & Organic Search",
    description:
      "Technical SEO and local-map optimization built for how blue-collar and white-collar clients actually get found.",
    icon: "Search",
  },
  {
    title: "Care & Growth Plans",
    description:
      "Ongoing updates, uptime monitoring, and quarterly performance reviews so the site keeps compounding after launch.",
    icon: "ShieldCheck",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We learn your trade or practice, your customers, and what's actually costing you leads today.",
  },
  {
    step: "02",
    title: "Strategy & Sitemap",
    description:
      "A conversion-first blueprint mapped to how blue- and white-collar buyers actually decide.",
  },
  {
    step: "03",
    title: "Design Concept",
    description:
      "A premium visual direction — bold typography, restrained motion, a brand you'd be proud to hand a client.",
  },
  {
    step: "04",
    title: "Build & Development",
    description:
      "Hand-coded, mobile-first, and fast — every animation and interaction production-tested before it ships.",
  },
  {
    step: "05",
    title: "QA & Launch",
    description:
      "Cross-device QA, tracking installed, forms fire-tested, then a clean, zero-downtime launch.",
  },
  {
    step: "06",
    title: "Grow & Optimize",
    description:
      "We watch the numbers post-launch and keep refining the pages that turn visits into revenue.",
  },
];

export type CaseStudy = {
  title: string;
  industry: string;
  description: string;
  tags: string[];
  result: string;
  image: string;
  decor?: string;
  decorSide?: "left" | "right";
  link?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Ironclad Roofing",
    industry: "Roofing & Exteriors",
    description:
      "A rebuild that replaced a dated brochure site with an estimate-first experience built around storm-damage urgency.",
    tags: ["Web Design", "Development", "Local SEO"],
    result: "+186% quote requests in 90 days",
    image: "/images/projects/ironclad-roofing.svg",
    decor: "/images/decor/helmet.svg",
    decorSide: "right",
    link: "#",
  },
  {
    title: "Meridian Law Group",
    industry: "Law Firm",
    description:
      "An editorial, trust-driven site for a civil litigation firm, rebuilt around case results and consultation booking.",
    tags: ["Brand", "Web Design", "CRO"],
    result: "+92% consultation bookings",
    image: "/images/projects/meridian-law.svg",
    decor: "/images/decor/scale.svg",
    decorSide: "left",
    link: "#",
  },
  {
    title: "Apex Plumbing & HVAC",
    industry: "Home Services",
    description:
      "A same-day-service site with call-tracking and a service-area funnel tuned for emergency search traffic.",
    tags: ["Development", "Local SEO", "CRO"],
    result: "3.2x organic local leads",
    image: "/images/projects/apex-plumbing.svg",
    link: "#",
  },
  {
    title: "Sterling & Cole CPA",
    industry: "Accounting & Finance",
    description:
      "A refined, credibility-first site for a boutique accounting firm targeting high-value business clients.",
    tags: ["Brand", "Web Design"],
    result: "+64% new client inquiries",
    image: "/images/projects/sterling-cole.svg",
    link: "#",
  },
  {
    title: "Brightline Electrical",
    industry: "Electrical Contracting",
    description:
      "A mobile-first rebuild for a residential and commercial electrical contractor, optimized for on-site search.",
    tags: ["Development", "CRO"],
    result: "+210% mobile conversion rate",
    image: "/images/projects/brightline-electrical.svg",
    link: "#",
  },
  {
    title: "Harbor Dental Group",
    industry: "Dental & Medical",
    description:
      "A calm, premium patient experience with real-time appointment requests across three clinic locations.",
    tags: ["Web Design", "Development", "Local SEO"],
    result: "+78% appointment requests",
    image: "/images/projects/harbor-dental.svg",
    link: "#",
  },
];

export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Launch",
    price: "$4,500",
    cadence: "one-time",
    description: "For single-location trades and firms who need a premium site, fast.",
    features: [
      "5-page premium, mobile-first site",
      "Custom brand-aligned design",
      "Quote / consultation request forms",
      "On-page SEO foundation",
      "30-day post-launch support",
    ],
  },
  {
    name: "Growth",
    price: "$8,500",
    cadence: "one-time",
    description: "Our most popular package — built to actively convert and compound.",
    features: [
      "Everything in Launch",
      "Conversion-optimized funnels & CRO",
      "Local SEO & map-pack optimization",
      "CRM / booking system integration",
      "Quarterly performance reporting",
      "90-day post-launch support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "quoted",
    description: "For multi-location operators and franchises with complex needs.",
    features: [
      "Everything in Growth",
      "Multi-location landing page system",
      "Custom web app features",
      "Dedicated strategist & priority support",
      "Ongoing care & growth plan",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Versatile rebuilt our site in three weeks and our phones haven't stopped ringing since. They understood roofing customers better than we did.",
    name: "Marcus Ridley",
    role: "Owner @ Ironclad Roofing",
    avatar: "/images/testimonials/marcus.svg",
  },
  {
    quote:
      "Every other agency treated us like a generic small business. Versatile designed a site that actually reflects the caliber of firm we are.",
    name: "Elena Marsh",
    role: "Managing Partner @ Meridian Law Group",
    avatar: "/images/testimonials/elena.svg",
  },
  {
    quote:
      "We went from a Wix site nobody trusted to a booking system that fills our schedule. Best investment we've made in the business.",
    name: "Tony DiFranco",
    role: "Owner @ Apex Plumbing & HVAC",
    avatar: "/images/testimonials/tony.svg",
  },
  {
    quote:
      "Sharp, fast, and they actually listened. New client inquiries are up significantly and the site finally looks like the firm we've built.",
    name: "Priya Sterling",
    role: "Partner @ Sterling & Cole CPA",
    avatar: "/images/testimonials/priya.svg",
  },
  {
    quote:
      "The mobile experience alone paid for the project. Most of our calls come from someone standing in front of a breaker box.",
    name: "Jamal Brightline",
    role: "Founder @ Brightline Electrical",
    avatar: "/images/testimonials/jamal.svg",
  },
  {
    quote:
      "Patients tell us the new site is the reason they picked us over the practice down the street. That's not something we expected from a website.",
    name: "Dr. Wren Harbor",
    role: "Clinical Director @ Harbor Dental Group",
    avatar: "/images/testimonials/wren.svg",
  },
];
