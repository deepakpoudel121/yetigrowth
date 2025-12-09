'use client';

import { motion } from "framer-motion";
import { ExternalLink, FolderOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="w-full mx-auto max-w-[1920px] md:border-x border-white/10 bg-background pt-16">
        {/* Hero Section */}
        <section className="p-6 md:p-16 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FolderOpen className="w-5 h-5 text-primary" />
              <span className="font-mono text-xs tracking-widest text-primary uppercase">Our Work</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white font-medium tracking-tight mb-6">
              Project<br />
              <span className="text-primary">Showcase</span>
            </h1>
            <p className="text-neutral-400 text-lg max-w-xl">
              Explore our portfolio of successful projects across Nepal and beyond. Each project represents our commitment to excellence and innovation.
            </p>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`group relative block border border-white/10 bg-secondary/20 hover:bg-secondary/40 hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Project image with fallback */}
                  <div className="h-48 bg-gradient-to-br from-secondary to-background border-b border-white/10 overflow-hidden relative">
                    {project.image ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-6xl font-display text-primary/20">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-primary uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-[10px] font-mono text-background bg-primary px-2 py-0.5 uppercase">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-xl text-white font-medium mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="border border-white/10 px-2 py-1 text-[10px] font-mono uppercase text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="border border-white/10 px-2 py-1 text-[10px] font-mono uppercase text-neutral-400">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-primary text-xs font-mono uppercase tracking-wider group-hover:underline flex items-center gap-1">
                        View Details
                      </span>
                      
                      {project.url && (
                        <motion.span
                          className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ x: 2 }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.url, '_blank', 'noopener,noreferrer');
                          }}
                        >
                          <span>Visit Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </motion.span>
                      )}
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="p-6 md:p-16 bg-primary text-background">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-medium mb-2">Have a project in mind?</h2>
              <p className="text-background/70">Let's create something amazing together.</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-block border-2 border-background px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-background hover:text-primary transition-colors"
              >
                Start Your Project
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}