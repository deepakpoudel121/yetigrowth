'use client'
import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import CapabilityCard from "./CapabilityCard";
import { capabilities } from "@/data/capabilities";

const Capabilities = () => {
  return (
    <section id="capabilities" className="relative">
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

      <div className="p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={capability.slug}
              slug={capability.slug}
              title={capability.title}
              description={capability.shortDescription}
              Icon={capability.Icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
