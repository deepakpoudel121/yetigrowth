'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "" });
      }, 3000);
    }
  };

  const MotionWrapper = isMounted ? motion.div : 'div';
  const MotionH2 = isMounted ? motion.h2 : 'h2';
  const MotionSpan = isMounted ? motion.span : 'span';
  const MotionP = isMounted ? motion.p : 'p';
  const MotionA = isMounted ? motion.a : 'a';
  const MotionButton = isMounted ? motion.button : 'button';

  return (
    <footer id="contact" className="bg-primary text-primary-foreground p-6 md:p-16 overflow-hidden">
      <MotionWrapper 
        className="flex flex-col md:flex-row justify-between gap-12"
        {...(isMounted && {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.5 }
        })}
      >
        
        <div className="w-full md:w-1/2">
          <MotionH2 
            className="font-display text-4xl sm:text-5xl md:text-7xl tracking-tighter uppercase mb-6 leading-none"
            {...(isMounted && {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.1 }
            })}
          >
            <MotionSpan 
              className="block"
              {...(isMounted && {
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: 0.1 }
              })}
            >
              Ready to
            </MotionSpan>
            <MotionSpan 
              className="block"
              {...(isMounted && {
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: 0.2 }
              })}
            >
              Scale Up?
            </MotionSpan>
          </MotionH2>
          
          <MotionP 
            className="font-sans text-lg font-medium max-w-md mb-8"
            {...(isMounted && {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.3 }
            })}
          >
            Let's discuss how we can transform your digital presence. Based in Kathmandu, serving the world.
          </MotionP>
          
          <MotionA 
            href="mailto:hello@yetigrowth.np" 
            className="inline-flex items-center gap-3 border-b-2 border-primary-foreground pb-1 text-xl md:text-2xl font-mono hover:pl-4 transition-all duration-300 group"
            {...(isMounted && {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.4 },
              whileHover: { x: 10 }
            })}
          >
            hello@yetigrowth.np
            {isMounted ? (
              <motion.div
                animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-6 h-6" />
              </motion.div>
            ) : (
              <div>
                <ArrowUpRight className="w-6 h-6" />
              </div>
            )}
          </MotionA>
        </div>

        <div className="w-full md:w-1/3 flex flex-col justify-between">
          <div className="space-y-4 mb-12">
            <MotionWrapper 
              className="relative"
              {...(isMounted && {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.2 }
              })}
            >
              <input 
                type="text" 
                placeholder="NAME" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-primary-foreground/30 py-3 text-sm font-mono uppercase placeholder-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors"
                required
              />
            </MotionWrapper>
            
            <MotionWrapper 
              className="relative"
              {...(isMounted && {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.3 }
              })}
            >
              <input 
                type="email" 
                placeholder="EMAIL" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-primary-foreground/30 py-3 text-sm font-mono uppercase placeholder-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors"
                required
              />
            </MotionWrapper>
            
            <MotionWrapper 
              className="relative pt-4"
              {...(isMounted && {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.4 }
              })}
            >
              <MotionButton 
                onClick={handleSubmit}
                className="w-full border border-primary-foreground py-4 text-xs font-mono uppercase tracking-widest hover:bg-primary-foreground hover:text-primary transition-colors flex justify-between px-4 items-center disabled:opacity-50 disabled:cursor-not-allowed"
                {...(isMounted && {
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 }
                })}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⟳</span>
                    Sending...
                  </span>
                ) : (
                  <>
                    <span>Send Request</span>
                    {isMounted ? (
                      <motion.div whileHover={{ x: 5, rotate: 15 }}>
                        <Send className="w-4 h-4" />
                      </motion.div>
                    ) : (
                      <div>
                        <Send className="w-4 h-4" />
                      </div>
                    )}
                  </>
                )}
              </MotionButton>
            </MotionWrapper>
            
            {isSubmitted && isMounted && (
              <motion.div 
                className="text-center text-sm font-mono uppercase pt-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Request Sent! We'll contact you within 24 hours.
              </motion.div>
            )}
          </div>

          <MotionWrapper 
            className="flex gap-4"
            {...(isMounted && {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.5 }
            })}
          >
            {[
              { Icon: Facebook, href: "#", label: "Facebook" },
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map(({ Icon, href, label }, index) => {
              const LinkComponent = isMounted ? motion.a : 'a';
              return (
                <LinkComponent 
                  key={index}
                  href={href}
                  aria-label={label}
                  className="p-3 border border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary transition-colors rounded-full"
                  {...(isMounted && {
                    whileHover: { scale: 1.1, rotate: 5 },
                    whileTap: { scale: 0.9 },
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: 0.5 + index * 0.1 }
                  })}
                >
                  <Icon className="w-5 h-5" />
                </LinkComponent>
              );
            })}
          </MotionWrapper>
        </div>
      </MotionWrapper>

      <MotionWrapper 
        className="border-t border-primary-foreground/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest opacity-60"
        {...(isMounted && {
          initial: { opacity: 0 },
          whileInView: { opacity: 0.6 },
          viewport: { once: true },
          transition: { delay: 0.6 }
        })}
      >
        <span>© 2024 YetiGrowth Agency.</span>
        <span className="mt-2 md:mt-0">Designed in Nepal</span>
      </MotionWrapper>
    </footer>
  );
};

export default Footer;