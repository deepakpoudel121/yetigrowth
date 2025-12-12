import { Users, Palette, Camera, Code } from "lucide-react";

export const capabilities = [
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    shortDescription: "Strategic partnerships with creators who amplify your brand across Nepal and beyond.",
    fullDescription: "We connect brands with the right voices. Our influencer marketing strategies leverage authentic partnerships with content creators who resonate with your target audience, driving genuine engagement and measurable results.",
    Icon: Users,
    features: [
      "Influencer Discovery & Vetting",
      "Campaign Strategy & Planning",
      "Content Collaboration",
      "Performance Analytics",
      "Long-term Partnership Building",
      "Micro & Macro Influencer Networks"
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
    shortDescription: "Visual storytelling that captures attention and communicates your brand essence.",
    fullDescription: "From brand identity to marketing collateral, our design team creates visuals that speak volumes. We blend cultural sensitivity with global design trends to create memorable visual experiences.",
    Icon: Palette,
    features: [
      "Brand Identity Design",
      "Logo & Visual Systems",
      "Marketing Collateral",
      "Social Media Graphics",
      "Packaging Design",
      "UI/UX Design"
    ],
    stats: [
      { value: "300+", label: "Brands Designed" },
      { value: "1000+", label: "Assets Created" },
      { value: "98%", label: "Client Satisfaction" }
    ]
  },
  {
    slug: "photography-videography",
    title: "Photography & Videography",
    shortDescription: "Capturing moments that tell your brand's story through stunning visuals.",
    fullDescription: "Our creative team produces high-quality visual content that elevates your brand. From product photography to cinematic brand films, we create content that connects emotionally with your audience.",
    Icon: Camera,
    features: [
      "Product Photography",
      "Brand Videography",
      "Event Coverage",
      "Drone & Aerial Shots",
      "Post-Production & Editing",
      "Social Media Content"
    ],
    stats: [
      { value: "500+", label: "Projects Shot" },
      { value: "100+", label: "Happy Clients" },
      { value: "4K+", label: "Quality Standard" }
    ]
  },
  {
    slug: "web-app-development",
    title: "Website & App Development",
    shortDescription: "High-performance digital products built for the modern web and mobile.",
    fullDescription: "We build scalable, fast, and beautiful digital experiences. From responsive websites to native mobile applications, our development team brings your vision to life with cutting-edge technology.",
    Icon: Code,
    features: [
      "Custom Web Development",
      "Mobile App Development",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Development",
      "Maintenance & Support"
    ],
    stats: [
      { value: "150+", label: "Apps Launched" },
      { value: "99.9%", label: "Uptime" },
      { value: "< 2s", label: "Load Time" }
    ]
  }
];
