'use client'

import { motion } from "framer-motion";
import { LayoutGrid, Code2, BarChart2, PenTool } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    number: "01",
    category: "Core Infrastructure",
    title: "Web Development",
    description: "High-performance websites tailored for the Nepalese market. From custom React applications to robust WordPress solutions that load fast on local networks.",
    tags: ["Next.js", "WordPress", "Headless CMS"],
    Icon: Code2,
  },
  {
    number: "02",
    category: "Visibility",
    title: "SEO & Marketing",
    description: "Data-driven strategies to dominate search results in Nepal and abroad. We handle Google Ads, Social Media campaigns, and organic growth optimization.",
    tags: ["Technical SEO", "Content Strategy", "Analytics"],
    Icon: BarChart2,
  },
  {
    number: "03",
    category: "Visual Language",
    title: "Brand Identity",
    description: "Creating memorable visual systems that resonate with local culture while maintaining global standards. Logo design, UI/UX, and complete brand guidelines.",
    tags: ["Figma", "UI Design", "Rebranding"],
    Icon: PenTool,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative">
      {/* Sticky Header */}
      <motion.div 
        className="w-full border-b border-white/10 p-4 md:px-8 flex items-center justify-between sticky top-16 bg-background/95 z-40 backdrop-blur-md"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <LayoutGrid className="w-[18px] h-[18px] text-primary" />
          </motion.div>
          <h2 className="font-mono text-xs tracking-[0.25em] uppercase text-white">Our Capabilities</h2>
        </div>
        <motion.span 
          className="font-mono text-xs text-neutral-500 hidden md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          FULL SERVICE DIGITAL
        </motion.span>
      </motion.div>

      <div className="flex flex-col">
        {services.map((service, index) => (
          <ServiceCard key={service.number} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
