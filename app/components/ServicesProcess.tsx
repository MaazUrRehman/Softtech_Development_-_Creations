'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Palette,
  Rocket,
  CheckCircle,
  Target,
  Headphones,
} from 'lucide-react';

export default function ServicesProcess() {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap",
      icon: <Target className="w-6 h-6" />,
      color: "from-red-500 to-red-600"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and prototypes for your approval",
      icon: <Palette className="w-6 h-6" />,
      color: "from-red-600 to-red-700"
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution with best practices and modern technologies",
      icon: <Code className="w-6 h-6" />,
      color: "from-red-700 to-red-800"
    },
    {
      step: "04",
      title: "Testing & Quality",
      description: "Rigorous testing to ensure flawless performance and security",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-red-800 to-red-900"
    },
    {
      step: "05",
      title: "Deployment",
      description: "Launching your solution and ensuring smooth transition",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-red-900 to-red-950"
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support and updates for continued success",
      icon: <Headphones className="w-6 h-6" />,
      color: "from-red-950 to-red-900"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-black dark:text-white">Our Service</span>
            <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Delivery Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A systematic approach that ensures quality, transparency, and success
            at every stage of your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative p-6 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <div className="text-white text-sm font-bold">
                      {step.step}
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10">
                    <div className="text-red-600 dark:text-red-400">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-xs font-medium text-red-700 dark:text-red-300 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20">
                    Step {step.step}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}