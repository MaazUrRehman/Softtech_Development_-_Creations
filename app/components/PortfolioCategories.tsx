// components/PortfolioCategories.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  ShoppingBag, 
  Briefcase, 
  Palette,
  Code,
  BarChart,
  Filter
} from 'lucide-react';

interface PortfolioCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function PortfolioCategories({ selectedCategory, onCategoryChange }: PortfolioCategoriesProps) {
  const categories = [
    { id: 'all', label: 'All Projects', icon: <Globe className="w-4 h-4" /> },
    { id: 'web', label: 'Web Design', icon: <Code className="w-4 h-4" /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'ecommerce', label: 'E-commerce', icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 'branding', label: 'Branding', icon: <Palette className="w-4 h-4" /> },
    { id: 'business', label: 'Business', icon: <Briefcase className="w-4 h-4" /> },
  ];

  return (
    <section className="py-12 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-black dark:text-white flex items-center justify-center gap-3 mb-4">
            <BarChart className="w-6 h-6 text-red-600" />
            Browse by Category
          </h3>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategoryChange(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25'
                    : 'bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20'
                }`}
              >
                <span className={selectedCategory === category.id ? 'text-white' : 'text-red-600 dark:text-red-400'}>
                  {category.icon}
                </span>
                <span className="font-semibold">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}