// components/PortfolioTechnologies.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  Layers,
  Globe,
  Server,
  Palette,
  Megaphone,
  ArrowRight,
  Sparkles,
  Terminal
} from 'lucide-react';
import { useState } from 'react';

type Technology = {
  name: string;
  icon: string;
  level: number;
  color: string;
};

export default function PortfolioTechnologies() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const technologies = {
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
      { name: 'Python', icon: '🐍', level: 87, color: 'from-yellow-500 to-blue-600' },
      { name: 'MySQL', icon: '🐬', level: 89, color: 'from-blue-400 to-blue-700' },
      { name: 'MongoDB', icon: '🍃', level: 86, color: 'from-green-500 to-green-700' },
      { name: 'PostgreSQL', icon: '🐘', level: 88, color: 'from-blue-500 to-indigo-600' },
    ],
    design: [
      { name: 'Figma', icon: 'F', level: 96, color: 'from-purple-500 to-pink-600' },
      { name: 'Adobe XD', icon: 'XD', level: 94, color: 'from-pink-500 to-rose-600' },
      { name: 'Photoshop', icon: 'PS', level: 92, color: 'from-blue-500 to-indigo-600' },
      { name: 'Illustrator', icon: 'AI', level: 90, color: 'from-orange-500 to-yellow-600' },
      { name: 'After Effects', icon: 'AE', level: 88, color: 'from-purple-600 to-indigo-700' },
      { name: 'Blender', icon: 'B', level: 85, color: 'from-orange-600 to-orange-800' },
    ],
    marketing: [
      { name: 'Google Analytics', icon: 'GA', level: 93, color: 'from-yellow-500 to-green-600' },
      { name: 'SEO Tools', icon: '🔍', level: 91, color: 'from-blue-500 to-blue-700' },
      { name: 'Facebook Ads', icon: 'f', level: 89, color: 'from-blue-600 to-indigo-700' },
      { name: 'Google Ads', icon: 'G', level: 92, color: 'from-blue-500 to-cyan-600' },
      { name: 'HubSpot', icon: 'H', level: 88, color: 'from-orange-500 to-red-600' },
      { name: 'Mailchimp', icon: '✉️', level: 90, color: 'from-yellow-500 to-orange-600' },
    ],
  };

  const categories = [
    { id: 'all', label: 'All Technologies', icon: <Layers className="w-5 h-5" />, count: 24 },
    { id: 'frontend', label: 'Frontend', icon: <Globe className="w-5 h-5" />, count: 6 },
    { id: 'backend', label: 'Backend', icon: <Server className="w-5 h-5" />, count: 6 },
    { id: 'design', label: 'Design', icon: <Palette className="w-5 h-5" />, count: 6 },
    { id: 'marketing', label: 'Marketing', icon: <Megaphone className="w-5 h-5" />, count: 6 },
  ];

  const allTechnologies: Technology[] = [
    ...technologies.frontend,
    ...technologies.backend,
    ...technologies.design,
    ...technologies.marketing,
  ];

  const filteredTech: Technology[] = activeCategory === 'all' 
    ? allTechnologies 
    : activeCategory in technologies 
      ? technologies[activeCategory as keyof typeof technologies] 
      : [];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-red-50/5 to-white dark:from-black dark:via-red-950/5 dark:to-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #ef4444 1px, transparent 1px),
                             linear-gradient(to bottom, #ef4444 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800/30 mb-6">
            <Terminal className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-700 dark:text-red-300">
              Technology Stack
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Technologies We Master
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Cutting-edge tools and frameworks we use to build exceptional digital solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
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
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredTech.map((tech: Technology, index: number) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

              <div className="relative p-6 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto shadow-md`}
                >
                  {tech.icon}
                </div>

                <h3 className="text-xl font-bold text-center text-black dark:text-white mb-3">
                  {tech.name}
                </h3>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>Expertise</span>
                    <span className="font-semibold text-red-600 dark:text-red-400">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-red-100 dark:bg-red-900/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.03, duration: 1, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}