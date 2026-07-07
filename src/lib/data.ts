export const socials = {
  email: "mailto:hello@syedmoinuddin.dev",
  bookACall: "https://cal.com/syedmoinuddin",
  linkedin: "https://linkedin.com/in/syedmoinuddin",
  github: "https://github.com/syedmoinuddin",
  zenithStudio: "https://zenithstudio.dev",
  virallens: "https://virallens.com",
};

export const skillGroups = [
  {
    title: "Frontend Tools",
    items: [
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "TypeScript",
      "Prismic CMS",
      "Redux",
      "Redux Toolkit",
      "React Testing Library",
      "Vitest",
      "HTML5",
      "Git/GitHub",
      "NextAuth",
      "Formik",
    ],
  },
  {
    title: "Backend Tools",
    items: [
      "Node.js",
      "Express.js",
      "Supabase",
      "Firebase",
      "Prisma ORM",
      "PlanetScale",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Stripe Integration",
    ],
  },
  {
    title: "UI Libraries",
    items: [
      "CSS3/SCSS/SASS",
      "Tailwind CSS",
      "Material UI",
      "Framer Motion",
      "GSAP",
      "Bootstrap",
      "Chart.js",
    ],
  },
];

export const recommendedTracks = [
  { artist: "Amy Winehouse", title: "Back To Black", art: "/images/music/black-to-back.svg" },
  { artist: "Chezile", title: "Beanie Song", art: "/images/music/beanie-song.svg" },
  { artist: "Portugal. The Man", title: "Feel It Still", art: "/images/music/feel-it-still.svg" },
  { artist: "Selena Gomez", title: "Feel Me", art: "/images/music/feel-me.svg" },
  { artist: "The Weeknd", title: "I Was Never There", art: "/images/music/i-was-never-there.svg" },
  { artist: "Kendrick Lamar", title: "Not Like Us", art: "/images/music/not-like-us.svg" },
  { artist: "NF", title: "When I Grow Up", art: "/images/music/when-i-grow-up.svg" },
  { artist: "Chord Overstreet", title: "Hold On", art: "/images/music/hold-on.svg" },
  { artist: "Adele", title: "Easy On Me", art: "/images/music/easy-on-me.svg" },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  decor?: string;
  decorSide?: "left" | "right";
  github?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "AyoRemi",
    description:
      "This is a modern e-commerce website designed as a replica of the United Store platform, featuring full SEO optimization, improved performance, and built using WordPress, Next.js, and TypeScript.",
    tags: ["React", "TailwindCSS", "FramerMotion"],
    image: "/images/projects/ayoremi.svg",
    decor: "/images/decor/cloth.svg",
    decorSide: "right",
    github: "https://github.com/syedmoinuddin/ayoremi",
    link: "#",
  },
  {
    title: "MechX-AI",
    description:
      "This is a next-generation engineering platform designed to automate mechanical tasks, offering breakthrough projects, ready-to-use solutions, and collaboration opportunities for building future mechatronics innovations.",
    tags: ["React", "TailwindCSS", "FramerMotion"],
    image: "/images/projects/mechx-ai.svg",
    decor: "/images/decor/mechx.svg",
    decorSide: "left",
    github: "https://github.com/syedmoinuddin/mechx-ai",
    link: "#",
  },
  {
    title: "ZenithSolar",
    description:
      "This is a landing page created for a solar energy company to strengthen their digital presence and showcase innovative solutions for capturing, storing, and utilizing solar power.",
    tags: ["React", "Next.js", "GSAP"],
    image: "/images/projects/zenithsolar.svg",
    github: "https://github.com/syedmoinuddin/zenithsolar",
    link: "#",
  },
  {
    title: "NovaSolar",
    description:
      "This is a landing page developed for Solaynova to showcase their innovative clean energy solutions, empowering homes, businesses, and communities to thrive sustainably.",
    tags: ["Next.js", "Typescript", "Prisma"],
    image: "/images/projects/novasolar.svg",
    github: "https://github.com/syedmoinuddin/novasolar",
    link: "#",
  },
  {
    title: "QuantumDock",
    description:
      "This is a website for an AI startup designed to present cutting-edge AI-driven data processing solutions, enabling seamless integration with multiple providers, workflow automation, and data unification.",
    tags: ["Next.js", "Typescript", "Prisma"],
    image: "/images/projects/quantumdock.svg",
    github: "https://github.com/syedmoinuddin/quantumdock",
    link: "#",
  },
  {
    title: "Dev-Creations",
    description:
      "This is a website redesign for Dev-Creations, where I utilized modern tech stacks and applied my own UI/UX design knowledge to create a more contemporary, user-friendly look and feel.",
    tags: ["Next.js", "Typescript", "Prisma"],
    image: "/images/projects/dev-creations.svg",
    github: "https://github.com/syedmoinuddin/dev-creations",
    link: "#",
  },
];

export const testimonials = [
  {
    quote:
      "One thing that truly stood out while working with Syed is his incredible speed. He has a rare ability to spin up clean, functional landing pages in no time. Whether it's a quick iteration or a fresh build, you can always count on Zenith Studio to deliver with speed and precision.",
    name: "Abhinav",
    role: "CEO @ CallKaro AI",
    avatar: "/images/testimonials/abhinav.svg",
  },
  {
    quote:
      "Working with Syed was seamless. I came with just an idea, and he turned it into a sleek, high-performing eCommerce site. He handled everything—from design to development—while keeping me in the loop. Highly recommend him and the Zenith Studio team for turning vague visions into real products.",
    name: "Ayo",
    role: "Software Developer @ Freelance",
    avatar: "/images/testimonials/ayo.svg",
  },
  {
    quote:
      "I wanted a platform that captured my journey and love for Urdu — Syed delivered exactly that. The portfolio feels personal, professional, and culturally respectful. Grateful for the care and creativity he brought to the entire process.",
    name: "Ifranulla",
    role: "Content Creator @ Independent",
    avatar: "/images/testimonials/ifranulla.svg",
  },
  {
    quote:
      "Syed built a vibrant landing page for our product launch — fast, responsive, and exactly to the brief. His ability to understand brand voice and turn it into a clean website experience is unmatched.",
    name: "Neha",
    role: "Marketing Manager @ GlowWave Media",
    avatar: "/images/testimonials/neha.svg",
  },
  {
    quote:
      "Zenith Studio helped us move from a basic idea to a polished SaaS landing page in record time. Syed's suggestions on layout, flow, and CTAs clearly show he understands not just design but real conversion strategies.",
    name: "Rohan",
    role: "Founder @ Bloom Analytics",
    avatar: "/images/testimonials/rohan.svg",
  },
  {
    quote:
      "Working with Syed was stress-free and efficient. He took ownership of the project, communicated regularly, and delivered a stunning landing page that now serves as the face of our brand online.",
    name: "Aditi",
    role: "Operations Lead @ CraftNest",
    avatar: "/images/testimonials/aditi.svg",
  },
];
