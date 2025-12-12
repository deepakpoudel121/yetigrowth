'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-mono text-xs tracking-widest text-primary uppercase">Get in Touch</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white font-medium tracking-tight mb-6">
              Let's Start<br />
              <span className="text-primary">Something Great</span>
            </h1>
            <p className="text-neutral-400 text-lg max-w-xl">
              Ready to elevate your digital presence? We'd love to hear about your project and explore how we can help.
            </p>
          </motion.div>
        </section>

        {/* Contact Form & Info */}
        <section className="grid md:grid-cols-2 border-b border-white/10">
          {/* Form */}
          <div className="p-6 md:p-12 border-r border-white/10">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="influencer">Influencer Marketing</option>
                    <option value="design">Graphic Design</option>
                    <option value="photo-video">Photography & Videography</option>
                    <option value="development">Web & App Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <motion.button
                onClick={handleSubmit}
                className="w-full md:w-auto border border-primary text-primary px-8 py-4 hover:bg-primary hover:text-background transition-colors flex items-center justify-center gap-3 font-mono text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <span className="animate-spin">⟳</span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary/10 border border-primary/20 p-4 text-primary text-sm font-mono"
                >
                  ✓ Message Sent! We'll get back to you within 24 hours.
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="p-6 md:p-12 bg-secondary/20">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="font-mono text-xs tracking-widest text-primary mb-8 uppercase">Contact Information</h2>

              <div className="space-y-8">
                <motion.a
                  href="mailto:hello@yetigrowth.np"
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-neutral-500 uppercase mb-1">Email</span>
                    <span className="text-white group-hover:text-primary transition-colors">hello@yetigrowth.np</span>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+9771234567890"
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-neutral-500 uppercase mb-1">Phone</span>
                    <span className="text-white group-hover:text-primary transition-colors">+977 986 5505 986</span>
                  </div>
                </motion.a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-neutral-500 uppercase mb-1">Office</span>
                    <span className="text-white">
                      Bharatpur-10, Chitwan<br />
                      Nepal 44600
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <span className="block text-xs font-mono text-neutral-500 uppercase mb-4">Follow Us</span>
                <div className="flex gap-4">
                  <motion.div whileHover={{ y: -3 }}>
                    <Link
                      href="#"
                      className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-primary" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -3 }}>
                    <Link
                      href="#"
                      className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-primary" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -3 }}>
                    <Link
                      href="#"
                      className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-64 md:h-96 bg-secondary/30 flex items-center justify-center border-b border-white/10">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-4" />
            <p className="text-neutral-500 font-mono text-sm">Chitwan, Nepal</p>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono uppercase tracking-widest text-neutral-500">
          <span>© 2025 YetiGrowth Agency.</span>
          <span className="mt-2 md:mt-0">Designed in Nepal</span>
        </footer>
      </main>
    </div>
  )}