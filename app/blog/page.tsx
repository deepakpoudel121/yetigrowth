// app/blog/page.tsx
'use client';

import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { blogs } from '@/data/blogs';

export default function BlogList() {
  const featuredPosts = blogs.filter(post => post.featured);
  const regularPosts = blogs.filter(post => !post.featured);

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
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-mono text-xs tracking-widest text-primary uppercase">
                Insights & Updates
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white font-medium tracking-tight mb-6">
              The YetiGrowth<br />
              <span className="text-primary">Blog</span>
            </h1>
            <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
              Expert insights on web development, digital marketing, and business growth 
              strategies tailored for the Nepali market.
            </p>
          </motion.div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="p-6 md:p-12 border-b border-white/10">
            <motion.h2 
              className="font-mono text-xs tracking-widest text-primary mb-8 uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Featured Articles
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <motion.article
                    className="border border-white/10 bg-secondary/20 hover:bg-secondary/40 hover:border-primary/30 transition-all duration-300 h-full overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden border-b border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-secondary flex items-center justify-center">
                          <span className="text-6xl font-display text-primary/20">
                            {post.title.charAt(0)}
                          </span>
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-mono uppercase tracking-wider">
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 mb-4 text-xs text-neutral-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-2xl text-white font-medium mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-neutral-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Author & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-xs font-medium text-primary">
                              {post.author.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="text-white text-xs font-medium">{post.author.name}</p>
                            <p className="text-neutral-500 text-[10px]">{post.author.role}</p>
                          </div>
                        </div>

                        <motion.div
                          className="flex items-center gap-2 text-primary text-xs font-mono uppercase"
                          whileHover={{ x: 5 }}
                        >
                          Read More
                          <ArrowRight className="w-3 h-3" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="p-6 md:p-12">
          <motion.h2 
            className="font-mono text-xs tracking-widest text-primary mb-8 uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Latest Articles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <motion.article
                  className="border border-white/10 bg-secondary/20 hover:bg-secondary/40 hover:border-primary/30 transition-all duration-300 h-full overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden border-b border-white/10">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary flex items-center justify-center">
                        <span className="text-4xl font-display text-primary/20">
                          {post.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 text-[10px] font-mono uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3 text-[10px] text-neutral-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-lg text-white font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-neutral-400 text-xs mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <span className="text-neutral-500 text-[10px]">{post.author.name}</span>
                      <motion.span
                        className="text-primary text-[10px] font-mono uppercase"
                        whileHover={{ x: 3 }}
                      >
                        Read →
                      </motion.span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}