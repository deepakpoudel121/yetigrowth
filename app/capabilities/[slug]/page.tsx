'use client'
import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { capabilities } from "@/data/capabilities";

interface CapabilityDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CapabilityDetail({ params }: CapabilityDetailProps) {
  const { slug } = use(params);
  const capability = capabilities.find(c => c.slug === slug);

  if (!capability) {
    notFound();
  }

  const { Icon } = capability;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="w-full mx-auto max-w-[1920px] md:border-x border-white/10 bg-background pt-16">
        {/* Hero Section */}
        <section className="relative border-b border-white/10">
          <div className="p-6 md:p-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                href="/#capabilities" 
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors text-sm font-mono mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Capabilities
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div
                  className="w-20 h-20 border border-primary/30 flex items-center justify-center mb-8 bg-primary/5"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </motion.div>

                <motion.h1 
                  className="font-display text-4xl md:text-6xl text-white font-medium tracking-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {capability.title}
                </motion.h1>

                <motion.p 
                  className="text-neutral-400 text-lg leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {capability.fullDescription}
                </motion.p>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-3 border border-primary/30 px-6 py-3 hover:bg-primary hover:text-background transition-all duration-300 text-primary font-mono text-sm uppercase tracking-wider"
                  >
                    Start a Project
                  </Link>
                </motion.div>
              </div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {capability.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="border border-white/10 p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <span className="block text-3xl md:text-4xl font-display text-primary mb-2">{stat.value}</span>
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="p-6 md:p-16 border-b border-white/10">
          <motion.h2 
            className="font-mono text-xs tracking-widest text-primary mb-8 uppercase flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capability.features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 border border-white/5 hover:border-primary/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white font-light">{feature}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="p-6 md:p-16 bg-secondary/30">
          <div className="text-center max-w-2xl mx-auto">
            <motion.h2 
              className="font-display text-3xl md:text-4xl text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to get started?
            </motion.h2>
            <motion.p 
              className="text-neutral-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Let's discuss how our {capability.title.toLowerCase()} services can help grow your brand.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary text-background px-8 py-4 hover:bg-primary/90 transition-colors font-mono text-sm uppercase tracking-wider"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}