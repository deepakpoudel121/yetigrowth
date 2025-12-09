'use client'

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TechCardProps {
  Icon: LucideIcon;
  title: string;
  subtitle: string;
  index: number;
}

const TechCard = ({ Icon, title, subtitle, index }: TechCardProps) => {
  return (
    <motion.div 
      className="border border-white/10 p-4 hover:border-primary transition-colors group cursor-pointer relative overflow-hidden"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute inset-0 bg-primary/5"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        whileHover={{ rotate: 15, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-6 h-6 text-neutral-500 group-hover:text-primary mb-3 transition-colors relative z-10" />
      </motion.div>
      
      <h5 className="text-white font-mono text-xs uppercase relative z-10">{title}</h5>
      <p className="text-neutral-500 text-[10px] mt-1 relative z-10">{subtitle}</p>
    </motion.div>
  );
};

export default TechCard;
