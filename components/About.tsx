'use client'
import { motion } from "framer-motion";
import { Flag, Cpu, Layers, ShoppingBag, Search, Smartphone } from "lucide-react";

// TechCard Component
const TechCard = ({ Icon, title, subtitle, index }: { 
  Icon: React.ElementType; 
  title: string; 
  subtitle: string; 
  index: number;
}) => {
  return (
    <motion.div
      className="p-6 border border-white/10 bg-neutral-900/50 hover:bg-neutral-900 transition-colors group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="inline-block"
      >
        <Icon className="w-8 h-8 text-primary mb-4" />
      </motion.div>
      <h5 className="font-sans text-lg font-medium text-white mb-1">{title}</h5>
      <p className="font-mono text-xs text-neutral-400 uppercase tracking-wider">{subtitle}</p>
    </motion.div>
  );
};

const techStack = [
  { Icon: Layers, title: "Full Stack", subtitle: "MERN / JAMStack" },
  { Icon: ShoppingBag, title: "Commerce", subtitle: "Shopify / Woo" },
  { Icon: Search, title: "Growth", subtitle: "SEO / SEM" },
  { Icon: Smartphone, title: "Mobile", subtitle: "React Native / iOS" },
];

const About = () => {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-white/10">
      {/* Left: Narrative */}
      <motion.div 
        className="border-r border-white/10 p-6 md:p-12 flex flex-col justify-between min-h-[500px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <motion.h4 
            className="font-mono text-xs tracking-widest text-primary mb-8 uppercase flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <Flag className="w-3.5 h-3.5" />
            </motion.div>
            Our Mission
          </motion.h4>
          
          <motion.p 
            className="font-sans text-xl md:text-2xl text-white leading-relaxed font-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Nepal is rising digitally. We exist to bridge the gap between traditional business values and modern digital necessity. We build scalable, robust systems that help Nepalese businesses compete globally.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.span 
              className="block text-4xl font-display text-primary mb-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              50+
            </motion.span>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Projects Delivered</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <motion.span 
              className="block text-4xl font-display text-primary mb-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              24/7
            </motion.span>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Local Support</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right: Tech Stack Grid */}
      <div className="p-6 md:p-12 bg-arch-grid">
        <motion.h4 
          className="font-mono text-xs tracking-widest text-primary mb-8 uppercase flex items-center gap-2"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="inline-flex"
          >
            <Cpu className="w-3.5 h-3.5" />
          </motion.div>
          Digital Arsenal
        </motion.h4>
        
        <div className="grid grid-cols-2 gap-4">
          {techStack.map((tech, index) => (
            <TechCard key={index} {...tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;