'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Lightbulb, 
  Zap, 
  CheckCircle, 
  BarChart,
  RefreshCw,
  Shield,
  Rocket,
  Award,
  Clock,
  TrendingUp,
  Brain,
  Heart,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

export default function Methodology() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "Discover",
      description: "Deep dive into your business goals, audience, and competitive landscape.",
      icon: <Target className="w-6 h-6" />,
      duration: "1-2 Weeks",
      deliverables: ["Market Analysis", "User Research", "Project Scope"],
      color: "from-red-500 to-red-600"
    },
    {
      id: 2,
      title: "Plan",
      description: "Create detailed action plan with clear milestones and success metrics.",
      icon: <Brain className="w-6 h-6" />,
      duration: "1 Week",
      deliverables: ["Strategy", "Timeline", "Budget"],
      color: "from-red-600 to-red-700"
    },
    {
      id: 3,
      title: "Design",
      description: "Craft intuitive user experiences through wireframes and prototypes.",
      icon: <Lightbulb className="w-6 h-6" />,
      duration: "2-3 Weeks",
      deliverables: ["UI/UX", "Prototypes", "Design System"],
      color: "from-red-700 to-red-800"
    },
    {
      id: 4,
      title: "Build",
      description: "Develop robust solutions with cutting-edge technologies.",
      icon: <Zap className="w-6 h-6" />,
      duration: "4-8 Weeks",
      deliverables: ["Development", "API Integration", "QA"],
      color: "from-red-800 to-red-900"
    },
    {
      id: 5,
      title: "Test",
      description: "Ensure performance, security, and seamless user experience.",
      icon: <CheckCircle className="w-6 h-6" />,
      duration: "1-2 Weeks",
      deliverables: ["Testing", "Security Audit", "Optimization"],
      color: "from-red-500 to-red-700"
    },
    {
      id: 6,
      title: "Launch",
      description: "Deploy and continuously optimize based on real-world data.",
      icon: <Rocket className="w-6 h-6" />,
      duration: "Ongoing",
      deliverables: ["Deployment", "Analytics", "Support"],
      color: "from-red-600 to-red-800"
    }
  ];

  const values = [
    {
      title: "User-Centric",
      description: "Everything we do revolves around user experience.",
      icon: <Users className="w-5 h-5" />,
      color: "text-red-600 bg-red-50 dark:bg-red-900/20"
    },
    {
      title: "Innovation",
      description: "Constantly exploring new technologies and approaches.",
      icon: <Zap className="w-5 h-5" />,
      color: "text-red-700 bg-red-50 dark:bg-red-900/20"
    },
    {
      title: "Transparency",
      description: "Clear communication and honest feedback.",
      icon: <Shield className="w-5 h-5" />,
      color: "text-red-800 bg-red-50 dark:bg-red-900/20"
    },
    {
      title: "Agile",
      description: "Flexible, iterative development that adapts.",
      icon: <RefreshCw className="w-5 h-5" />,
      color: "text-red-900 bg-red-50 dark:bg-red-900/20"
    }
  ];

  const stats = [
    { label: "Projects", value: "250+", icon: <Rocket className="w-5 h-5" /> },
    { label: "Satisfaction", value: "98%", icon: <Heart className="w-5 h-5" /> },
    { label: "On Time", value: "95%", icon: <Clock className="w-5 h-5" /> },
    { label: "Growth", value: "40% YoY", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-red-50/20 to-white dark:from-black dark:via-red-950/10 dark:to-black">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #ef4444 1px, transparent 1px),
                             linear-gradient(to bottom, #ef4444 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-48 h-48 border border-red-100/20 dark:border-red-800/10 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800/30 mb-6">
            <Brain className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-700 dark:text-red-300">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-black dark:text-white">How We</span>
            <span className="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Deliver Excellence
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A proven 6-step methodology that transforms your vision into reality
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-4 rounded-xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/20">
                  <div className="text-red-600 dark:text-red-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-black dark:text-white">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-black dark:text-white mb-8">
            Our 6-Step Methodology
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: step.id * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                className="cursor-pointer"
              >
                <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                  activeStep === step.id
                    ? 'border-red-300 dark:border-red-700 bg-gradient-to-br from-white to-red-50/50 dark:from-black dark:to-red-900/10 shadow-lg'
                    : 'border-red-100/50 dark:border-red-900/30 bg-white/80 dark:bg-black/80 backdrop-blur-sm hover:border-red-200 dark:hover:border-red-800'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color}`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20">
                      <Clock className="w-3 h-3 text-red-600 dark:text-red-400" />
                      <span className="text-xs font-medium text-red-700 dark:text-red-300">
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {step.description}
                  </p>

                  <motion.div
                    initial={false}
                    animate={{ height: activeStep === step.id ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-red-100/50 dark:border-red-900/30">
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-100 dark:border-red-800/30"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex justify-center mt-4">
                    <motion.div
                      animate={{ rotate: activeStep === step.id ? 180 : 0 }}
                      className="p-1 rounded-full bg-red-50 dark:bg-red-900/20"
                    >
                      <ChevronDown className="w-4 h-4 text-red-600 dark:text-red-400" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-black dark:text-white mb-8">
            What Drives Us
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-5 rounded-xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30"
              >
                <div className={`p-3 rounded-lg ${value.color} w-fit mb-4`}>
                  {value.icon}
                </div>
                <h4 className="font-bold text-black dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-red-50 to-red-100/50 dark:from-red-900/10 dark:to-red-800/10 border border-red-200/50 dark:border-red-800/20">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Ready to Start?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's apply our proven methodology to your project
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/35 transition-all duration-300"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-200 dark:border-red-800/30 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}