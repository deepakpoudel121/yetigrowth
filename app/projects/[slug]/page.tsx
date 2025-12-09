'use client';
import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

interface ProjectDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = use(params);
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative w-full min-h-[70vh] flex items-end overflow-hidden border-b border-white/10">
        {/* Background Image with Overlay */}
        {project.image && (
          <div className="absolute inset-0 z-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </div>
        )}

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-arch-grid opacity-30 z-0" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pb-16 pt-32">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/#work"
              className="group inline-flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-xs uppercase tracking-widest">Back to Projects</span>
            </Link>
          </motion.div>

          {/* Project Meta */}
          <motion.div 
            className="flex flex-wrap items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 border border-primary/30 text-primary">
              {project.category}
            </span>
            {project.featured && (
              <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 bg-primary/10 text-primary border border-primary/30">
                Featured
              </span>
            )}
          </motion.div>

          {/* Project Title */}
          <motion.h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] text-white font-medium uppercase mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {project.title}
          </motion.h1>

          {/* Project Description */}
          <motion.p 
            className="font-mono text-base md:text-lg text-neutral-400 max-w-3xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {project.description}
          </motion.p>

          {/* Live Site Button */}
          {project.url && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border border-primary/30 px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <span className="font-mono text-xs tracking-widest uppercase text-primary group-hover:text-primary-foreground">
                  Visit Live Site
                </span>
                <ExternalLink className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Project Image */}
            {project.image && (
              <motion.div 
                className="relative aspect-video w-full overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            )}

            {/* The Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="border-l-2 border-primary pl-6">
                <h2 className="font-display text-3xl md:text-4xl tracking-tight text-white uppercase mb-4">
                  The Challenge
                </h2>
                <p className="text-neutral-400 leading-relaxed text-base">
                  {project.problem}
                </p>
              </div>
            </motion.div>

            {/* Our Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="border-l-2 border-primary pl-6">
                <h2 className="font-display text-3xl md:text-4xl tracking-tight text-white uppercase mb-4">
                  Our Solution
                </h2>
                <p className="text-neutral-400 leading-relaxed text-base">
                  {project.solution}
                </p>
              </div>
            </motion.div>

            {/* Results/Impact Section (if you want to add) */}
            <motion.div
              className="bg-white/5 border border-white/10 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-display text-2xl tracking-tight text-white uppercase mb-6">
                Project Highlights
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-neutral-400 text-sm">Modern, responsive design optimized for all devices</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-neutral-400 text-sm">Enhanced user experience with intuitive navigation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-neutral-400 text-sm">SEO-optimized architecture for better visibility</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <motion.div
              className="border border-white/10 p-6 bg-white/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-xl tracking-tight text-white uppercase mb-6">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="font-mono text-xs px-3 py-1.5 bg-background border border-white/10 text-neutral-400 hover:border-primary/30 hover:text-primary transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              className="border border-white/10 p-6 bg-white/5 space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-display text-xl tracking-tight text-white uppercase mb-4">
                Project Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Tag className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mb-1">Category</p>
                    <p className="text-sm text-neutral-300">{project.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Box */}
            <motion.div
              className="border border-primary/30 p-6 bg-primary/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-display text-xl tracking-tight text-white uppercase mb-3">
                Interested?
              </h3>
              <p className="text-sm text-neutral-400 mb-4">
                Let's discuss how we can help bring your vision to life.
              </p>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 border border-primary/30 px-4 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full justify-center"
              >
                <span className="font-mono text-xs tracking-widest uppercase text-primary group-hover:text-primary-foreground">
                  Get in Touch
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="w-full border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              className="text-neutral-400 text-base md:text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let's discuss how we can help elevate your digital presence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 border border-primary/30 px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <span className="font-mono text-sm tracking-widest uppercase text-primary group-hover:text-primary-foreground">
                  Start Your Climb
                </span>
                <ExternalLink className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}