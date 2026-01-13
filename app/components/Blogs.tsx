'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Code, 
  Globe,
  CheckCircle,
  Sparkles,
  Calendar,
  Clock,
  BookOpen
} from 'lucide-react';

export default function Blogs() {
  const blogPosts = [
      {
        title: "The Future of Web Development in 2024",
        excerpt: "Exploring emerging trends and technologies shaping the future of digital experiences.",
        date: "Mar 15, 2024",
        readTime: "5 min read",
        category: "Technology",
        imageColor: "from-red-500 to-red-600"
      },
      {
        title: "Design Thinking for Digital Products",
        excerpt: "How design thinking methodology can transform your digital product development process.",
        date: "Mar 10, 2024",
        readTime: "7 min read",
        category: "Design",
        imageColor: "from-red-600 to-red-700"
      },
      {
        title: "SEO Strategies That Actually Work",
        excerpt: "Proven SEO strategies to improve your website's visibility and organic traffic.",
        date: "Mar 5, 2024",
        readTime: "6 min read",
        category: "Marketing",
        imageColor: "from-red-700 to-red-800"
      },
    ];
  
  return (
     <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-red-50/5 to-white dark:from-black dark:via-red-950/5 dark:to-black">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800/30 mb-6"
            >
              <BookOpen className="w-4 h-4 text-red-600 dark:text-red-400" />
              <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                Insights & Updates
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block text-black dark:text-white">Latest From Our</span>
              <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                Blog
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with our latest insights, trends, and innovations in the 
              world of digital technology and design.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg overflow-hidden">
                  {/* Image Placeholder */}
                  <div className={`h-48 bg-gradient-to-br ${post.imageColor}`} />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-xs font-medium text-red-700 dark:text-red-300">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-1 text-red-600 dark:text-red-400 font-medium group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 text-gray-700 dark:text-gray-300 font-semibold hover:border-red-200 dark:hover:border-red-800 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                View All Blog Posts
                <BookOpen className="w-5 h-5 text-red-600 dark:text-red-400" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
  );
}