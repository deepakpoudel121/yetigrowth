export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  featured: boolean;
  image: string;
  url: string;
  tags?: string[]; // Optional for backward compatibility
}

export const projects: Project[] = [
  {
    slug: "gurucool",
    title: "GuruCool — Online Learning Platform",
    category: "Web Development",
    description: "A modern e-learning platform built for scalability. Includes interactive courses, personalized dashboards, real-time analytics, and an intuitive UI designed to boost student engagement.",
    problem: "Traditional LMS platforms were cluttered and lacked data-driven insights.",
    solution: "Delivered a clean, fast, and analytics-focused system that enhances both learning and admin productivity.",
    tech: ["Next.js", "Laravel", "Tailwind", "MySQL", "SEO Optimization"],
    featured: true,
    image: "/images/projects/gurucool.png",
    url: "https://gurucool-hq51.vercel.app/"
  },
  {
    slug: "trading-journal",
    title: "Trading Journal Dashboard",
    category: "Finance · Analytics",
    description: "A powerful trading journal system featuring detailed analytics, P/L charts, trade tagging, and performance insights for traders to refine their strategy with clarity.",
    problem: "Traders struggled with scattered data and no unified system to analyze mistakes or track performance.",
    solution: "Created a sleek dashboard that centralizes trade logs, visualizes patterns, and supports smarter decision-making.",
    tech: ["React", "Recharts", "Firebase", "Tailwind"],
    featured: false,
    image: "/images/projects/tradelog.png",
    url: "https://tradelog-eight.vercel.app/"
  },
  {
    slug: "operate-catalyst",
    title: "Operate Catalyst — Agency Landing Page",
    category: "Landing Page · Brand Website",
    description: "High-converting landing page for a short-form content agency. Built with a fast frontend, smooth animations, sharp branding, and a funnel-optimized layout.",
    problem: "Client needed a premium landing page that communicates authority and drives inbound leads.",
    solution: "Delivered a bold, clean design paired with strategic copy and conversion-ready sections.",
    tech: ["Next.js", "Tailwind", "GSAP Animations"],
    featured: false,
    image: "/images/projects/catalyst.png",
    url: "https://www.operatecatalyst.com/"
  },
  {
    slug: "chitwan-jobs",
    title: "Chitwan Jobs Portal",
    category: "Web Platform · Job Portal",
    description: "A regional job marketplace for Chitwan, connecting local talent with employers. Includes job posting tools, applicant workflows, and a clean candidate experience.",
    problem: "Local businesses lacked a centralized digital hiring tool tailored for the Chitwan workforce.",
    solution: "Built a lightweight, user-friendly job portal optimized for speed, accessibility, and local hiring needs.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    featured: false,
    image: "/images/projects/chitwanjobs.png",
    url: "https://chitwanjobs.vercel.app/"
  },
   {
  "slug": "moda-cafe",
  "title": "Moda Cafe Website",
  "category": "Web Platform",
  "description": "A modern cafe website showcasing Mediterranean-inspired cuisine and ambiance in Bharatpur, Chitwan.",
  "problem": "Local cafe needed an engaging online presence to showcase their unique Mediterranean dining experience and attract customers in the Chitwan region.",
  "solution": "Built a visually appealing, responsive website with smooth animations and modern design to highlight the cafe's menu, ambiance, and 'Eat Outside The Box' philosophy.",
  "tech": ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  "featured": true,
  "image": "/images/projects/moda-cafe.png",
  "url": "https://moda-cafe-design.vercel.app/"
  }
];