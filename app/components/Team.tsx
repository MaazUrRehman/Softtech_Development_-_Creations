'use client';

import { motion } from 'framer-motion';
import { 
  Clock,
  Users,
} from 'lucide-react';
import { useState } from 'react';

export default function Team() {
  

    const teamMembers = [
    {
      name: "Alex Morgan",
      role: "CEO & Founder",
      expertise: "Digital Strategy & Leadership",
      experience: "10+ Years",
      imageColor: "from-red-500 to-red-600",
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      expertise: "Technology Architecture",
      experience: "8+ Years",
      imageColor: "from-red-600 to-red-700",
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Marcus Johnson",
      role: "Creative Director",
      expertise: "UI/UX & Brand Design",
      experience: "7+ Years",
      imageColor: "from-red-700 to-red-800",
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Priya Patel",
      role: "Head of Development",
      expertise: "Full-Stack Development",
      experience: "9+ Years",
      imageColor: "from-red-800 to-red-900",
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "David Kim",
      role: "Marketing Director",
      expertise: "Digital Marketing & SEO",
      experience: "6+ Years",
      imageColor: "from-red-900 to-red-950",
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Elena Rossi",
      role: "Project Manager",
      expertise: "Agile & Scrum Master",
      experience: "5+ Years",
      imageColor: "from-red-950 to-red-900",
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
  ];
  return (
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-red-50/5 to-white dark:from-black dark:via-red-950/5 dark:to-black">
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
              <Users className="w-4 h-4 text-red-600 dark:text-red-400" />
              <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                Meet Our Experts
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block text-black dark:text-white">Our Dedicated</span>
              <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                Team of Experts
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A talented team of innovators, creators, and problem-solvers with diverse expertise 
              spanning technology, design, marketing, and project management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-6 rounded-3xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.imageColor} mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-lg`}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </motion.div>

                  {/* Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <div className="text-red-600 dark:text-red-400 font-medium mb-3">
                      {member.role}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {member.expertise}
                    </p>
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30">
                      <Clock className="w-3 h-3 text-red-600 dark:text-red-400" />
                      <span className="text-xs font-medium text-red-700 dark:text-red-300">
                        {member.experience}
                      </span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {['linkedin', 'twitter', 'github'].map((platform) => (
                      <motion.a
                        key={platform}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="p-2 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 hover:border-red-300 dark:hover:border-red-700 transition-colors"
                      >
                        <div className="w-4 h-4 text-red-600 dark:text-red-400" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span className="flex items-center justify-center gap-2">
                Join Our Growing Team
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Users className="w-5 h-5" />
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
  );
}