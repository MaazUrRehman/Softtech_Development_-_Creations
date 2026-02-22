// components/PortfolioHero.tsx
'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Briefcase, Award, Users, Globe, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioHero() {
  const stats = [
    { value: '150+', label: 'Projects Completed', icon: <Briefcase className="w-5 h-5" /> },
    { value: '50+', label: 'Happy Clients', icon: <Users className="w-5 h-5" /> },
    { value: '15+', label: 'Industry Awards', icon: <Award className="w-5 h-5" /> },
    { value: '10+', label: 'Years Experience', icon: <Globe className="w-5 h-5" /> },
  ];

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-white via-red-50/30 to-white dark:from-black dark:via-red-950/10 dark:to-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -right-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ef4444 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-700 dark:text-red-300">
              Our Digital Portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="block text-black dark:text-white">Transforming Ideas Into</span>
            <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Digital Masterpieces
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Explore our collection of innovative solutions across web development, mobile apps, 
            design, and digital marketing. Each project represents our commitment to excellence 
            and client success.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#showcase"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/35 transition-all duration-300 flex items-center gap-3"
            >
              <span>View Our Work</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/Contact"
              className="group px-8 py-4 rounded-xl bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-red-200/50 dark:border-red-800/30 text-gray-700 dark:text-gray-300 font-semibold hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 flex items-center gap-3"
            >
              <span>Start Your Project</span>
              <Briefcase className="w-5 h-5 text-red-600 dark:text-red-400" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}