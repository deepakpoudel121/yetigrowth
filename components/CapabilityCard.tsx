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
          className="group relative border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md hover:bg-gradient-to-br hover:from-white/5 hover:to-white/10 hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden h-full rounded-3xl"
          whileHover={{ y: -12 }}
          transition={{ duration: 0.3 }}
        >
          {/* Morphing gradient blobs */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 group-hover:bg-primary/20 transition-all duration-700" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 group-hover:bg-primary/20 transition-all duration-700" />
          
          <div className="p-6 md:p-8 flex flex-col h-full min-h-[280px] relative z-10">
            <motion.div
              className="mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-18 h-18">
                <div className="absolute w-18 h-18 bg-primary/20 rounded-full animate-ping group-hover:bg-primary/40" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-black" strokeWidth={2} />
                </div>
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
        </motion.article>
      </Link>
    </motion.div>
  );
};

export default CapabilityCard;