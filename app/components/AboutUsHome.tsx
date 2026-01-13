'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  Eye,
  Lightbulb,
  Rocket,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function AboutUsHomeSection() {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Partnering for shared our success",
      color: "from-red-600 to-red-700"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Delivering exceptional quality always",
      color: "from-red-700 to-red-800"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth",
      description: "Evolving with market trends & strategies",
      color: "from-red-800 to-red-900"
    }
  ];

  return (
    <section className="relative pt-24 pb-12 overflow-hidden bg-gradient-to-b from-white via-red-50/10 to-white dark:from-black dark:via-red-950/5 dark:to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern - Lighter Colors */}
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #ef4444 1px, transparent 1px),
                             linear-gradient(to bottom, #ef4444 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Animated Geometric Circles - Lighter Borders */}
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
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute -top-48 -right-48 w-192 h-192 border border-red-200/8 dark:border-red-700/3 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 border border-red-100/12 dark:border-red-800/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4 w-56 h-56 border border-red-200/10 dark:border-red-700/4 rounded-full"
        />

        {/* Additional floating shapes - Lighter */}
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
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 right-20 w-16 h-16 border-2 border-dashed border-red-200/30 dark:border-red-700/15 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, 15, 0, -15, 0],
            y: [0, -15, 0, 15, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-1/4 w-12 h-12 border border-red-300/20 dark:border-red-500/8 rounded-full"
        />
        
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity }
          }}
          className="absolute top-2/3 left-20 w-24 h-24 border border-red-200/20 dark:border-red-600/8"
          style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
        />
        
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-20 left-1/3 w-14 h-14 border border-red-200/25 dark:border-red-700/10"
          style={{ clipPath: 'polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)' }}
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
            <Sparkles className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-700 dark:text-red-300">
              Our Story & Mission
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="block text-black dark:text-white">Crafting Digital</span>
            <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Excellence Since 2015
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We&apos;re not just developers; we&apos;re digital architects crafting experiences that 
            inspire, engage, and deliver measurable results for businesses worldwide.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left Column - Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 dark:from-red-500/10 dark:to-red-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-md"
                  >
                    <Rocket className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">Our Mission</h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full mt-2" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, 
                  enhance user experiences, and create lasting impact in an ever-evolving 
                  technological landscape.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-700/5 dark:from-red-600/10 dark:to-red-700/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: -15 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-md"
                  >
                    <Eye className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">Our Vision</h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full mt-2" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  To be the global leader in digital transformation, setting new standards 
                  for innovation, quality, and client success in the technology industry.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-700 to-red-800 flex items-center justify-center shadow-md"
                >
                  <Lightbulb className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">Core Values</h3>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative p-6 rounded-xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`p-3 rounded-lg bg-gradient-to-br ${value.color} bg-opacity-10 w-fit mb-4`}
                    >
                      <div className="text-white dark:text-white">
                        {value.icon}
                      </div>
                    </motion.div>
                    <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Additional Floating Elements - Lighter */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-16 h-16 border border-red-200/25 dark:border-red-700/15 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, 180, 360] }}
        transition={{ 
          y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        className="absolute top-20 right-10 w-12 h-12 border border-red-200/20 dark:border-red-600/8"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      />
    </section>
  );
}