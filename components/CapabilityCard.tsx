'use client'
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface CapabilityCardProps {
  slug: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

const CapabilityCard = ({ slug, title, description, Icon, index }: CapabilityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/capabilities/${slug}`}>
        <motion.article 
          className="group relative border border-white/10 bg-secondary/30 hover:bg-secondary hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden h-full"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 md:p-8 flex flex-col h-full min-h-[280px]">
            <motion.div
              className="mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            >
              <div className="w-14 h-14 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
            </motion.div>
            
            <motion.h3 
              className="font-display text-xl md:text-2xl text-white font-medium tracking-tight group-hover:text-primary transition-colors duration-300 mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
            >
              {title}
            </motion.h3>
            
            <motion.p 
              className="text-neutral-400 font-light leading-relaxed text-sm flex-grow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="mt-6 flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              <span>Explore</span>
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </motion.div>
          </div>
          
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/0 group-hover:border-primary/50 transition-colors duration-300" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/0 group-hover:border-primary/50 transition-colors duration-300" />
        </motion.article>
      </Link>
    </motion.div>
  );
};

export default CapabilityCard;