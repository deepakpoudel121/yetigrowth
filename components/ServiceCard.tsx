'use client'
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  Icon: LucideIcon;
  index: number;
}

const ServiceCard = ({ number, category, title, description, tags, Icon, index }: ServiceCardProps) => {
  return (
    <motion.article 
      className="group relative border-b border-white/10 hover:bg-secondary transition-colors duration-300 cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="block p-6 md:p-16 flex flex-col md:flex-row justify-between items-baseline gap-6">
        <div className="w-full md:w-2/3">
          <motion.div 
            className="flex items-center gap-4 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            <span className="font-mono text-xs text-primary">{number}</span>
            <motion.span 
              className="h-px bg-white/20"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            />
            <span className="font-mono text-xs text-neutral-500 uppercase">{category}</span>
          </motion.div>
          
          <motion.h3 
            className="font-display text-3xl sm:text-4xl md:text-6xl text-white font-normal tracking-tight group-hover:text-primary transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.25 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="mt-6 text-neutral-400 font-light max-w-lg leading-relaxed text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.35 }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-2 mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          >
            {tags.map((tag, tagIndex) => (
              <motion.span 
                key={tagIndex} 
                className="border border-white/20 px-2 py-1 text-[10px] font-mono uppercase text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.45 + tagIndex * 0.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
        
        <div className="md:text-right w-full md:w-1/3 flex justify-end items-start h-full">
          <motion.div
            className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300"
          >
            <Icon 
              className="w-12 h-12 text-primary" 
              strokeWidth={1} 
            />
          </motion.div>
        </div>
      </div>
      
      {/* Animated border on hover */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-primary"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
};

export default ServiceCard;
