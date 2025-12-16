// app/blog/[slug]/page.tsx
import React from "react";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";

interface BlogDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

// Markdown-style renderer component
const MarkdownContent = ({ content }: { content: string }) => {
  const lines = content.trim().split('\n');
  
  const renderLine = (line: string, index: number) => {
    // Headers
    if (line.startsWith('# ')) {
      return <h1 key={index} className="font-display text-4xl md:text-5xl text-white font-medium mb-6 mt-12 first:mt-0">{line.slice(2)}</h1>;
    }
    if (line.startsWith('## ')) {
      return <h2 key={index} className="font-display text-3xl md:text-4xl text-white font-medium mb-5 mt-10 border-l-4 border-primary pl-4">{line.slice(3)}</h2>;
    }
    if (line.startsWith('### ')) {
      return <h3 key={index} className="font-display text-2xl md:text-3xl text-white font-medium mb-4 mt-8">{line.slice(4)}</h3>;
    }
    
    // Bold text
    if (line.startsWith('**') && line.endsWith('**')) {
      return <p key={index} className="text-white font-semibold text-lg mb-4 mt-6">{line.slice(2, -2)}</p>;
    }
    
    // Lists
    if (line.startsWith('- ')) {
      return (
        <li key={index} className="text-neutral-300 leading-relaxed mb-2 ml-6">
          <span className="text-primary mr-2">•</span>
          {line.slice(2)}
        </li>
      );
    }
    
    // Numbered lists
    const numberedMatch = line.match(/^(\d+)\.\s(.+)/);
    if (numberedMatch) {
      return (
        <li key={index} className="text-neutral-300 leading-relaxed mb-2 ml-6">
          <span className="text-primary font-mono mr-2">{numberedMatch[1]}.</span>
          {numberedMatch[2]}
        </li>
      );
    }
    
    // Checkmarks/crosses
    if (line.startsWith('✅') || line.startsWith('❌')) {
      return <p key={index} className="text-neutral-300 mb-2">{line}</p>;
    }
    
    // Code blocks
    if (line.startsWith('```')) {
      const lang = line.slice(3);
      return <div key={index} className="font-mono text-xs bg-secondary/50 border border-white/10 px-3 py-2 text-primary mb-2">{lang && `// ${lang}`}</div>;
    }
    
    // Inline code
    if (line.includes('`') && !line.startsWith('```')) {
      const parts = line.split('`');
      return (
        <p key={index} className="text-neutral-300 leading-relaxed mb-4">
          {parts.map((part, i) => 
            i % 2 === 0 ? part : <code key={i} className="bg-secondary/50 px-2 py-0.5 text-primary font-mono text-sm">{part}</code>
          )}
        </p>
      );
    }
    
    // Tables (basic detection)
    if (line.includes('|') && line.trim().startsWith('|')) {
      const cells = line.split('|').filter(Boolean).map(c => c.trim());
      const isHeader = index > 0 && lines[index - 1] && lines[index - 1].includes('---');
      const Tag = isHeader ? 'td' : 'th';
      
      return (
        <tr key={index} className={isHeader ? "border-t border-white/20" : ""}>
          {cells.map((cell, i) => (
            <Tag 
              key={i} 
              className={isHeader ? "border border-white/10 px-4 py-2 text-neutral-300 text-sm" : "border border-white/10 px-4 py-2 text-white font-semibold text-sm bg-secondary/30"}
            >
              {cell}
            </Tag>
          ))}
        </tr>
      );
    }
    
    // Skip table separators
    if (line.trim().startsWith('|') && line.includes('---')) {
      return null;
    }
    
    // Empty lines
    if (line.trim() === '') {
      return <div key={index} className="h-4" />;
    }
    
    // Regular paragraphs
    return <p key={index} className="text-neutral-300 leading-relaxed mb-4 text-base">{line}</p>;
  };
  
  const elements: React.ReactElement[] = [];
  let inTable = false;
  let tableRows: React.ReactElement[] = [];
  
  lines.forEach((line, index) => {
    const rendered = renderLine(line, index);
    
    if (line.includes('|') && line.trim().startsWith('|') && !line.includes('---')) {
      inTable = true;
      if (rendered) tableRows.push(rendered);
    } else {
      if (inTable && tableRows.length > 0) {
        elements.push(
          <table key={`table-${index}`} className="w-full mb-8 mt-6 border-collapse">
            <tbody>{tableRows}</tbody>
          </table>
        );
        tableRows = [];
        inTable = false;
      }
      if (rendered) elements.push(rendered);
    }
  });
  
  if (tableRows.length > 0) {
    elements.push(
      <table key="table-end" className="w-full mb-8 mt-6 border-collapse">
        <tbody>{tableRows}</tbody>
      </table>
    );
  }
  
  return <div className="prose-custom">{elements}</div>;
};

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = blogs.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogs
    .filter(p => p.slug !== slug && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-end overflow-hidden border-b border-white/10">
        {/* Background Image */}
        {post.coverImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </div>
        )}

        <div className="absolute inset-0 bg-arch-grid opacity-30 z-0" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-8 pb-12 pt-32">
          <div className="animate-fade-in">
            <Link 
              href="/blog"
              className="group inline-flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-xs uppercase tracking-widest">Back to Blog</span>
            </Link>
          </div>

          <div className="animate-fade-in-up">
            <span className="inline-block font-mono text-xs uppercase tracking-widest px-3 py-1 border border-primary/30 text-primary mb-6">
              {post.category}
            </span>

            <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-tight text-white font-medium mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 font-mono">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">
                    {post.author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm">{post.author.name}</p>
                  <p className="text-neutral-500 text-xs">{post.author.role}</p>
                </div>
              </div>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="w-full max-w-4xl mx-auto px-4 md:px-8 py-16">
        <div className="relative animate-fade-in-up">
          {/* Share Sidebar (Desktop) */}
          <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-20">
            <div className="flex flex-col gap-4 bg-secondary/50 border border-white/10 p-3">
              <button className="text-neutral-400 hover:text-primary transition-colors" aria-label="Share">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="text-neutral-400 hover:text-primary transition-colors" aria-label="Bookmark">
                <Bookmark className="w-5 h-5" />
              </button>
              <div className="w-full h-px bg-white/10 my-2" />
              <button className="text-neutral-400 hover:text-primary transition-colors" aria-label="Share on Facebook">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="text-neutral-400 hover:text-primary transition-colors" aria-label="Share on LinkedIn">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="text-neutral-400 hover:text-primary transition-colors" aria-label="Share on Twitter">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            <MarkdownContent content={post.content} />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-mono px-3 py-1.5 bg-secondary border border-white/10 text-neutral-400 hover:border-primary/30 hover:text-primary transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="w-full border-t border-white/10 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            <h2 className="font-display text-3xl text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="border border-white/10 bg-background hover:border-primary/30 transition-all duration-300 h-full overflow-hidden hover:-translate-y-1">
                    <div className="relative h-40 overflow-hidden border-b border-white/10">
                      {relatedPost.coverImage ? (
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-secondary flex items-center justify-center">
                          <span className="text-3xl font-display text-primary/20">
                            {relatedPost.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <span className="text-primary text-xs font-mono uppercase mb-2 block">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-display text-lg text-white group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-neutral-400 text-xs line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="w-full border-t border-white/10 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4 animate-fade-in-up">
            Ready to Grow Your Business?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up">
            Let&apos;s discuss how our digital marketing and development services can help you achieve your goals.
          </p>
          <div className="animate-fade-in-up">
            <Link
              href="/contact"
              className="inline-block border-2 border-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}