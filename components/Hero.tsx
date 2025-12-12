'use client'
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import HeroGrid from "./HeroGrid";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="hero" className="relative w-full min-h-screen overflow-hidden flex items-center border-b border-white/10">
      <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-4 md:px-12 py-24 md:py-32 bg-arch-grid relative z-10">
          <motion.div 
            className="flex justify-between items-start w-full opacity-60 mb-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-white">Est. 2025</span>
            <span className="font-mono text-xs uppercase tracking-widest text-white text-right lg:hidden">
              Kathmandu<br />Nepal
            </span>
          </motion.div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="relative z-10">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-[0.9] text-white font-medium uppercase">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0, duration: 0.6, ease: "easeOut" }}
                >
                  Digital
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
                >
                  Marketing
                </motion.span>
                <motion.span 
                  className="block text-primary"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                >
                  Partners.
                </motion.span>
              </h1>
              
              <motion.div 
                className="mt-8 flex flex-col gap-8 border-t border-white/10 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <p className="font-mono text-sm max-w-md text-neutral-400 font-light leading-relaxed">
                  We guide your brand up the digital mountain — with strategic web development, SEO, and growth marketing built to help businesses rise above the competition.
                </p>
                <motion.button 
                  onClick={scrollToContact}
                  className="group flex items-center gap-4 border border-primary/30 px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-fit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-mono text-xs tracking-widest uppercase text-primary group-hover:text-primary-foreground">
                    Start Your Climb
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:text-primary-foreground group-hover:translate-x-1 transition-all" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Side - Grid Reveal with Yeti */}
        <div className="hidden lg:flex flex-col border-l border-white/10 relative">
          <motion.div 
            className="absolute top-8 right-8 opacity-60 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-white text-right block">
              Kathmandu<br />Nepal
            </span>
          </motion.div>
          
          <div className="flex-1 relative">
            <HeroGrid />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </motion.div>
    </header>
  );
};

export default Hero;
