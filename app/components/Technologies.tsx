'use client';

import { motion } from 'framer-motion';
import { 
  Code2,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Sparkles,
  Layers,
  Terminal,
  Server,
  GitBranch,
  Lock,
  Brain,
  TrendingUp,
  ArrowRight,
  Palette,
  Video,
  Megaphone,
  Brush,
  Scissors,
  BarChart
} from 'lucide-react';
import { JSX, useState } from 'react';

// Define types for technologies
type Technology = {
  name: string;
  icon: string;
  level: number;
  color: string;
};

type TechnologiesByCategory = {
  frontend: Technology[];
  backend: Technology[];
  design: Technology[];
  marketing: Technology[];
};

type Category = {
  id: string;
  label: string;
  icon: JSX.Element;
  count: number;
};

type TechHighlight = {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
};

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const technologies: TechnologiesByCategory = {
    frontend: [
      { name: 'React', icon: '⚛️', level: 95, color: 'from-cyan-500 to-blue-600' },
      { name: 'Next.js', icon: '▲', level: 90, color: 'from-gray-700 to-black' },
      { name: 'TypeScript', icon: 'TS', level: 88, color: 'from-blue-600 to-blue-800' },
      { name: 'Tailwind CSS', icon: '🎨', level: 92, color: 'from-teal-400 to-cyan-500' },
      { name: 'Vue.js', icon: 'V', level: 85, color: 'from-green-500 to-emerald-600' },
      { name: 'Angular', icon: '🅰️', level: 80, color: 'from-red-500 to-red-700' },
    ],
    backend: [
      { name: 'Laravel', icon: 'L', level: 92, color: 'from-red-500 to-red-700' },
      { name: 'Node.js', icon: '🟢', level: 90, color: 'from-green-600 to-green-800' },
      { name: 'Next.js API', icon: '▲', level: 88, color: 'from-gray-800 to-black' },
      { name: 'Python', icon: '🐍', level: 87, color: 'from-yellow-500 to-blue-600' },
      { name: 'MySQL', icon: '🐬', level: 89, color: 'from-blue-400 to-blue-700' },
      { name: 'MongoDB', icon: '🍃', level: 86, color: 'from-green-500 to-green-700' },
    ],
    design: [
      { name: 'Adobe Photoshop', icon: 'PS', level: 94, color: 'from-blue-400 to-indigo-600' },
      { name: 'Adobe Illustrator', icon: 'AI', level: 92, color: 'from-orange-500 to-yellow-600' },
      { name: 'Figma', icon: 'F', level: 96, color: 'from-purple-500 to-pink-600' },
      { name: 'Adobe After Effects', icon: 'AE', level: 88, color: 'from-purple-600 to-indigo-700' },
      { name: 'Blender', icon: 'B', level: 85, color: 'from-orange-600 to-orange-800' },
      { name: 'Canva', icon: 'C', level: 90, color: 'from-blue-500 to-cyan-600' },
    ],
    marketing: [
      { name: 'Google Analytics', icon: 'GA', level: 93, color: 'from-yellow-500 to-green-600' },
      { name: 'SEO Tools', icon: '🔍', level: 91, color: 'from-blue-500 to-blue-700' },
      { name: 'Facebook Ads', icon: 'f', level: 89, color: 'from-blue-600 to-indigo-700' },
      { name: 'Google Ads', icon: 'G', level: 92, color: 'from-blue-500 to-cyan-600' },
      { name: 'Email Marketing', icon: '✉️', level: 90, color: 'from-red-500 to-pink-600' },
      { name: 'Social Media', icon: '📱', level: 94, color: 'from-purple-500 to-pink-600' },
    ],
  };

  const categories: Category[] = [
    { id: 'all', label: 'All Technologies', icon: <Layers className="w-5 h-5" />, count: 24 },
    { id: 'frontend', label: 'Frontend', icon: <Globe className="w-5 h-5" />, count: 6 },
    { id: 'backend', label: 'Backend', icon: <Server className="w-5 h-5" />, count: 6 },
    { id: 'design', label: 'Design & Video', icon: <Palette className="w-5 h-5" />, count: 6 },
    { id: 'marketing', label: 'Marketing', icon: <Megaphone className="w-5 h-5" />, count: 6 },
  ];

  const techHighlights: TechHighlight[] = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Full-Stack Expertise",
      description: "End-to-end solutions from design to deployment",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Scalable",
      description: "Enterprise-grade security with scalable architecture",
      color: "from-red-600 to-red-700"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Market Ready",
      description: "Solutions optimized for marketing and user engagement",
      color: "from-red-700 to-red-800"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Creative & Technical",
      description: "Perfect blend of creative design and technical execution",
      color: "from-red-800 to-red-900"
    },
  ];

  const allTechnologies: Technology[] = [
    ...technologies.frontend,
    ...technologies.backend,
    ...technologies.design,
    ...technologies.marketing,
  ];

  // Fixed: Use type guard to check if the key exists
  const filteredTech: Technology[] = activeCategory === 'all' 
    ? allTechnologies 
    : activeCategory in technologies 
      ? technologies[activeCategory as keyof TechnologiesByCategory] 
      : [];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-red-50/5 to-white dark:from-black dark:via-red-950/5 dark:to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #ef4444 1px, transparent 1px),
                             linear-gradient(to bottom, #ef4444 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Animated Geometric Circles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-32 w-64 h-64 border border-red-100/20 dark:border-red-800/8 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-96 h-96 border border-red-200/10 dark:border-red-700/4 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute top-3/4 -left-48 w-128 h-128 border border-red-100/15 dark:border-red-800/6 rounded-full"
        />

        {/* Design & Marketing Icons Animation */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: ['0%', '100%'],
                rotate: [0, 360]
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
              className="absolute text-lg font-mono text-red-400/20 dark:text-red-600/20"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${12 + Math.random() * 10}px`,
              }}
            >
              {['🎨', '📊', '📈', '🎬', '🖌️', '📱', '💡', '🌟', '✨'][Math.floor(Math.random() * 9)]}
            </motion.div>
          ))}
        </div>

        {/* Floating Design Elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 border border-red-200/25 dark:border-red-600/12"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 right-20 w-16 h-16 border-2 border-dashed border-red-200/30 dark:border-red-700/15 rounded-full"
        />

        {/* Paint Brush Stroke */}
        <motion.div
          animate={{ 
            x: [-100, 200],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            x: { duration: 30, repeat: Infinity, ease: "linear" },
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/3 left-0 w-64 h-2 bg-gradient-to-r from-red-400/10 via-red-500/15 to-red-600/10 blur-sm"
          style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800/30 mb-6"
          >
            <Terminal className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-700 dark:text-red-300">
              Technology Stack
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="block text-black dark:text-white">Complete Digital</span>
            <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Solutions Stack
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            From cutting-edge development and stunning design to strategic marketing, 
            we master every technology needed to build and grow your digital presence.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg'
                    : 'bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 text-gray-700 dark:text-gray-300 hover:border-red-200 dark:hover:border-red-800'
                }`}
              >
                <div className={`${activeCategory === category.id ? 'text-white' : 'text-red-600 dark:text-red-400'}`}>
                  {category.icon}
                </div>
                <span>{category.label}</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                }`}>
                  {category.count}
                </span>
                
                {/* Active indicator */}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-xl border-2 border-red-400/30"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {filteredTech.map((tech: Technology, index: number) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

              <div className="relative p-6 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                {/* Tech Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto shadow-md`}
                >
                  {tech.icon}
                </motion.div>

                {/* Tech Name */}
                <h3 className="text-xl font-bold text-center text-black dark:text-white mb-3">
                  {tech.name}
                </h3>

                {/* Skill Level */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>Expertise</span>
                    <span className="font-semibold text-red-600 dark:text-red-400">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-red-100 dark:bg-red-900/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ delay: 0.2 + index * 0.05, duration: 1, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                    />
                  </div>
                </div>

                {/* Projects Count */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 mx-auto"
                >
                  <span className="text-xs font-medium text-red-700 dark:text-red-300">
                    {activeCategory === 'design' || activeCategory === 'marketing' 
                      ? `${Math.floor(Math.random() * 100) + 50}+ Projects`
                      : `${Math.floor(Math.random() * 50) + 10}+ Projects`
                    }
                  </span>
                </motion.div>
              </div>

              {/* Hover Arrow */}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="p-2 rounded-full bg-gradient-to-br from-red-500 to-red-600">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Card Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-red-600/5 to-red-700/5 rounded-3xl blur-2xl" />

          <div className="relative p-8 rounded-3xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-xl">
            <div className="text-center mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="inline-flex p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-200/30 dark:border-red-800/30 mb-4"
              >
                <Sparkles className="w-8 h-8 text-red-600 dark:text-red-400" />
              </motion.div>
              
              <h3 className="text-3xl font-bold text-black dark:text-white mb-4">
                Ready for a Complete Digital Solution?
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                From development and design to marketing, we provide everything you need 
                to build, launch, and grow your digital presence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Free Consultation
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 text-gray-700 dark:text-gray-300 font-semibold hover:border-red-200 dark:hover:border-red-800 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  View Portfolio
                  <Palette className="w-5 h-5 text-red-600 dark:text-red-400" />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        className="absolute bottom-20 left-10 w-16 h-16 border border-red-200/25 dark:border-red-700/15 rounded-full hidden lg:block"
      />
      
      <motion.div
        animate={{ 
          y: [0, 15, 0], 
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity }
        }}
        className="absolute top-20 right-10 w-12 h-12 border border-red-200/20 dark:border-red-600/8"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      />
    </section>
  );
}