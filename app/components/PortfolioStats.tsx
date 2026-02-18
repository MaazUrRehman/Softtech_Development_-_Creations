// components/PortfolioStats.tsx
'use client';

import { motion } from 'framer-motion';
import { Award, Users, Code, Globe, TrendingUp, Star, Clock, Coffee } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function PortfolioStats() {
  const [stats, setStats] = useState([
    { value: 0, target: 150, label: 'Projects Completed', icon: <Code className="w-6 h-6" />, suffix: '+' },
    { value: 0, target: 50, label: 'Happy Clients', icon: <Users className="w-6 h-6" />, suffix: '+' },
    { value: 0, target: 15, label: 'Industry Awards', icon: <Award className="w-6 h-6" />, suffix: '+' },
    { value: 0, target: 10, label: 'Years Experience', icon: <Clock className="w-6 h-6" />, suffix: '+' },
    { value: 0, target: 98, label: 'Client Satisfaction', icon: <Star className="w-6 h-6" />, suffix: '%' },
    { value: 0, target: 24, label: 'Countries Served', icon: <Globe className="w-6 h-6" />, suffix: '+' },
    { value: 0, target: 500, label: 'Cups of Coffee', icon: <Coffee className="w-6 h-6" />, suffix: 'K+' },
    { value: 0, target: 200, label: 'Growth Rate', icon: <TrendingUp className="w-6 h-6" />, suffix: '%' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats =>
        prevStats.map(stat => ({
          ...stat,
          value: stat.value < stat.target ? Math.min(stat.value + Math.ceil(stat.target / 50), stat.target) : stat.target
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Delivering excellence through every project and partnership
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-6 rounded-2xl bg-white dark:bg-black border border-red-200/50 dark:border-red-800/30 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}