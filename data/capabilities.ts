import { Users, Palette, Camera, Code, Search, Monitor } from "lucide-react";

export const capabilities = [
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    shortDescription: "Strategic influencer partnerships and content creator collaborations to amplify your brand reach and engagement.",
    fullDescription: "Connect with authentic influencers and content creators who align with your brand values. Our influencer marketing services leverage data-driven strategies to identify, vet, and manage partnerships with micro and macro influencers across Instagram, TikTok, YouTube, and Facebook for maximum ROI.",
    Icon: Users,
    features: [
      "Influencer Discovery & Vetting",
      "Campaign Strategy & Management",
      "Content Creator Partnerships",
      "Performance Analytics & Reporting",
      "Brand Ambassador Programs",
      "Multi-Platform Influencer Networks"
    ],
    stats: [
      { value: "200+", label: "Influencer Partners" },
      { value: "50M+", label: "Reach Generated" },
      { value: "15%", label: "Avg. Engagement Rate" }
    ]
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    shortDescription: "Professional graphic design and branding services for modern businesses and digital brands.",
    fullDescription: "Expert graphic design agency specializing in brand identity, logo design, and visual communication. We create compelling designs that combine aesthetic excellence with strategic thinking to help your business stand out in competitive markets and connect with target audiences.",
    Icon: Palette,
    features: [
      "Brand Identity & Logo Design",
      "Business Collateral Design",
      "Social Media Graphics",
      "Packaging Design",
      "Marketing Materials Design",
      "UI/UX Design"
    ],
    stats: [
      { value: "300+", label: "Brands Designed" },
      { value: "1000+", label: "Design Assets Created" },
      { value: "98%", label: "Client Satisfaction" }
    ]
  },
  {
    slug: "photography-videography",
    title: "Photography & Videography",
    shortDescription: "Professional photography and videography services for brands, products, events, and commercial projects.",
    fullDescription: "Leading photography and videography production company offering product photography, brand videos, event coverage, and commercial content creation. Our team uses cutting-edge equipment including 4K cameras and drones to capture stunning visuals that tell your brand story.",
    Icon: Camera,
    features: [
      "Product Photography",
      "Commercial Videography",
      "Event Coverage & Documentation",
      "Drone & Aerial Photography",
      "Video Editing & Post-Production",
      "Social Media Content Creation"
    ],
    stats: [
      { value: "500+", label: "Projects Completed" },
      { value: "100+", label: "Satisfied Clients" },
      { value: "4K", label: "Ultra HD Quality" }
    ]
  },
  {
    slug: "web-app-development",
    title: "Web & App Development",
    shortDescription: "Custom website development and mobile app development services using modern technologies and frameworks.",
    fullDescription: "Professional web development and mobile app development company building fast, responsive, and scalable digital solutions. We create custom websites, e-commerce platforms, and mobile applications using latest technologies to help businesses establish strong online presence and drive growth.",
    Icon: Code,
    features: [
      "Custom Website Development",
      "Mobile App Development",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "API & Software Development",
      "Maintenance & Support"
    ],
    stats: [
      { value: "150+", label: "Apps Launched" },
      { value: "99.9%", label: "Uptime Guarantee" },
      { value: "< 2s", label: "Page Load Speed" }
    ]
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    shortDescription: "Professional SEO services to increase search rankings, organic traffic, and online visibility for your business.",
    fullDescription: "Expert SEO company specializing in search engine optimization, local SEO, and Google My Business management. Our proven SEO strategies help businesses rank higher on Google search results, drive qualified organic traffic, and increase conversions through technical optimization and content strategy.",
    Icon: Search,
    features: [
      "Local & Technical SEO",
      "Google My Business Optimization",
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Content SEO & Link Building",
      "SEO Audit & Analytics"
    ],
    stats: [
      { value: "300%", label: "Avg. Traffic Increase" },
      { value: "85%", label: "First Page Rankings" },
      { value: "50+", label: "Businesses Ranked" }
    ]
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    shortDescription: "Strategic IT consulting and digital transformation services for business modernization and growth.",
    fullDescription: "Professional IT consulting company providing technology strategy, cloud migration, and digital transformation services. Our experienced IT consultants help businesses modernize operations, improve efficiency, reduce costs, and leverage technology for competitive advantage with customized solutions.",
    Icon: Monitor,
    features: [
      "IT Strategy & Planning",
      "Cloud Migration & Infrastructure",
      "Digital Transformation Consulting",
      "Network & Security Setup",
      "Cybersecurity Consulting",
      "24/7 IT Support & Maintenance"
    ],
    stats: [
      { value: "80+", label: "Businesses Consulted" },
      { value: "40%", label: "Cost Reduction" },
      { value: "24/7", label: "Support Available" }
    ]
  }
];