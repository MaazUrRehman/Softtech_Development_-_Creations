// components/PortfolioProcess.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  PenTool, 
  Code, 
  Rocket, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';
import { useState } from 'react';

export default function PortfolioProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Discovery',
      description: 'We dive deep into your business goals, target audience, and project requirements.',
      color: 'from-red-500 to-red-600',
      details: [
        'Requirements Analysis',
        'Market Research',
        'User Personas',
        'Competitor Analysis',
        'Project Roadmap'
      ]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Design',
      description: 'Creating beautiful, intuitive designs that align with your brand and user needs.',
      color: 'from-red-600 to-red-700',
      details: [
        'Wireframing',
        'UI/UX Design',
        'Prototyping',
        'Design Systems',
        'User Testing'
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Development',
      description: 'Building robust, scalable solutions using cutting-edge technologies.',
      color: 'from-red-700 to-red-800',
      details: [
        'Frontend Development',
        'Backend Architecture',
        'Database Design',
        'API Integration',
        'Quality Assurance'
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Launch & Growth',
      description: 'Deploying your project and providing ongoing support and optimization.',
      color: 'from-red-800 to-red-900',
      details: [
        'Deployment',
        'Performance Monitoring',
        'SEO Optimization',
        'Analytics Setup',
        'Continuous Support'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Our Development Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A systematic approach to delivering exceptional digital solutions
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative mb-12">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-red-200 via-red-300 to-red-200 dark:from-red-800/30 dark:via-red-700/30 dark:to-red-800/30 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                onClick={() => setActiveStep(index)}
                className="relative cursor-pointer group"
              >
                <div className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeStep === index 
                    ? `border-red-500 dark:border-red-400 bg-gradient-to-br ${step.color} text-white`
                    : 'border-red-100 dark:border-red-900/30 bg-white/80 dark:bg-black/80 backdrop-blur-sm hover:border-red-200 dark:hover:border-red-700'
                }`}>
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`mb-4 p-3 rounded-xl inline-block ${
                    activeStep === index 
                      ? 'bg-white/20' 
                      : `bg-gradient-to-br ${step.color} bg-opacity-10`
                  }`}>
                    <div className={activeStep === index ? 'text-white' : `text-red-600 dark:text-red-400`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-2 ${
                    activeStep === index ? 'text-white' : 'text-black dark:text-white'
                  }`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-sm ${
                    activeStep === index ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {step.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute bottom-4 right-4 ${
                      activeStep === index ? 'text-white' : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 border border-red-200 dark:border-red-800/30"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${steps[activeStep].color} text-white`}>
              {steps[activeStep].icon}
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {steps[activeStep].title} Phase Details
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps[activeStep].details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-200/50 dark:border-red-800/30"
              >
                <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{detail}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}