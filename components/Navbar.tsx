'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleNavClick = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Capabilities", id: "capabilities", href: "/#capabilities" },
    { label: "Projects", id: "projects", href: "/projects" },
    { label: "About", id: "about", href: "/#about" },
    { label: "Contact", id: "contact", href: "/contact" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-background/90 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="flex justify-between items-center h-16 px-4 md:px-8 max-w-[1920px] mx-auto">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <Mountain className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </motion.div>
            <div className="font-display tracking-widest text-sm font-semibold uppercase text-white">
              Yeti<span className="text-primary">Growth</span>
            </div>
          </Link>
        </motion.div>
        
        <div className="hidden md:flex gap-10 text-xs font-mono tracking-[0.2em]">
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -2 }}
            >
              {item.href.startsWith("/#") && isHomePage ? (
                <button 
                  onClick={() => handleNavClick(item.id)}
                  className="text-primary hover:text-white transition-colors uppercase link-underline"
                >
                  {item.label}
                </button>
              ) : (
                <Link 
                  href={item.href}
                  className="text-primary hover:text-white transition-colors uppercase link-underline"
                >
                  {item.label}
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <motion.button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-white/10 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="flex flex-col gap-2 px-4 py-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.href.startsWith("/#") && isHomePage ? (
                    <button 
                      onClick={() => handleNavClick(item.id)}
                      className="text-primary text-sm font-mono tracking-widest uppercase py-3 text-left border-b border-white/10 last:border-0 w-full"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-primary text-sm font-mono tracking-widest uppercase py-3 text-left border-b border-white/10 last:border-0"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;