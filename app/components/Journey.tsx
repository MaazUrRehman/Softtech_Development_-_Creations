'use client';

import { motion } from 'framer-motion';
import {  
  Zap, 
  Globe,
  Clock,
  Target,
  Rocket,
  Users,
  Award
} from 'lucide-react';

export default function HeroSection() {
  
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
                  <Clock className="w-4 h-4 text-red-600 dark:text-red-400" />
                  <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                    Our Journey
                  </span>
                </motion.div>
    
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="block text-black dark:text-white">Our Growth</span>
                  <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                    Timeline
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  A journey of innovation, growth, and success that has shaped who we are today.
                </p>
              </motion.div>
    
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-red-500/20 via-red-600/30 to-red-700/20" />
    
                <div className="space-y-12">
                  {[
                    { 
                      year: "2015", 
                      event: "Company Founded", 
                      description: "Started with a small team and big dreams to transform digital experiences",
                      icon: <Rocket className="w-5 h-5" />
                    },
                    { 
                      year: "2016", 
                      event: "First Major Client", 
                      description: "Landed our first enterprise client, establishing credibility in the market",
                      icon: <Target className="w-5 h-5" />
                    },
                    { 
                      year: "2018", 
                      event: "Team Expansion", 
                      description: "Grew to 20+ talented team members with diverse expertise",
                      icon: <Users className="w-5 h-5" />
                    },
                    { 
                      year: "2020", 
                      event: "International Reach", 
                      description: "Started serving clients across 15+ countries globally",
                      icon: <Globe className="w-5 h-5" />
                    },
                    { 
                      year: "2022", 
                      event: "Award Recognition", 
                      description: "Received multiple industry awards for excellence and innovation",
                      icon: <Award className="w-5 h-5" />
                    },
                    { 
                      year: "2024", 
                      event: "Innovation Leader", 
                      description: "Pioneering AI integration and advanced digital solutions",
                      icon: <Zap className="w-5 h-5" />
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      <div className="w-1/2 pr-8 pl-8">
                        <div className={`p-6 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg ${
                          index % 2 === 0 ? 'text-right' : 'text-left'
                        }`}>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10">
                              <div className="text-red-600 dark:text-red-400">
                                {item.icon}
                              </div>
                            </div>
                            <div className="text-lg font-bold text-red-600 dark:text-red-400">
                              {item.year}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                            {item.event}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Timeline Dot */}
                      <div className="relative z-10">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-4 border-white dark:border-black" />
                      </div>
                      
                      <div className="w-1/2" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
  );
}