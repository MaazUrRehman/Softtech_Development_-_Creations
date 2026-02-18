// components/PortfolioServices.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Cpu, 
  Palette, 
  Film,
  TrendingUp,
  ShoppingCart,
  Workflow,
  Cloud,
  Brain,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Rocket
} from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.',
    icon: <Code className="w-8 h-8" />,
    features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimized'],
    color: 'from-red-600 to-red-700'
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless user experiences across all devices.',
    icon: <Smartphone className="w-8 h-8" />,
    features: ['iOS & Android', 'React Native', 'Flutter', 'Performance Focused'],
    color: 'from-orange-600 to-orange-700'
  },
  {
    title: 'Custom Software',
    description: 'Tailor-made software solutions designed to solve your unique business challenges and streamline operations.',
    icon: <Cpu className="w-8 h-8" />,
    features: ['Enterprise Solutions', 'Scalable Architecture', 'API Integration', 'Custom Workflows'],
    color: 'from-amber-600 to-amber-700'
  },
  {
    title: 'UI/UX & Branding',
    description: 'Beautiful, intuitive interfaces and comprehensive branding that engages users and builds brand loyalty.',
    icon: <Palette className="w-8 h-8" />,
    features: ['User Research', 'Wireframing', 'Brand Identity', 'Design Systems'],
    color: 'from-emerald-600 to-emerald-700'
  },
  {
    title: 'Video & Photo Editing',
    description: 'Professional multimedia content creation and editing that tells your brand story compellingly.',
    icon: <Film className="w-8 h-8" />,
    features: ['4K Video Editing', 'Motion Graphics', 'Photo Retouching', 'Animation'],
    color: 'from-blue-600 to-blue-700'
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that increase visibility, engagement, and conversions.',
    icon: <TrendingUp className="w-8 h-8" />,
    features: ['SEO/SEM', 'Social Media', 'Content Strategy', 'Analytics'],
    color: 'from-violet-600 to-violet-700'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Full-featured online stores with secure payment processing and inventory management.',
    icon: <ShoppingCart className="w-8 h-8" />,
    features: ['Shopify/WooCommerce', 'Payment Gateways', 'Inventory System', 'Multi-channel'],
    color: 'from-purple-600 to-purple-700'
  },
  {
    title: 'Business Automation',
    description: 'Automate repetitive tasks and integrate systems to improve efficiency and reduce costs.',
    icon: <Workflow className="w-8 h-8" />,
    features: ['Process Automation', 'CRM Integration', 'Workflow Optimization', 'Reporting'],
    color: 'from-pink-600 to-pink-700'
  },
  {
    title: 'Cloud & IT Services',
    description: 'Secure, scalable cloud infrastructure and comprehensive IT support for your business.',
    icon: <Cloud className="w-8 h-8" />,
    features: ['AWS/Azure', 'DevOps', 'Security', '24/7 Monitoring'],
    color: 'from-cyan-600 to-cyan-700'
  },
  {
    title: 'AI & Smart Systems',
    description: 'Intelligent solutions leveraging artificial intelligence to drive innovation and efficiency.',
    icon: <Brain className="w-8 h-8" />,
    features: ['Machine Learning', 'Chatbots', 'Predictive Analytics', 'Automation'],
    color: 'from-indigo-600 to-indigo-700'
  },
  {
    title: 'Cyber Security & Compliance',
    description: 'Protect your digital assets with advanced security solutions, audits, and compliance standards.',
    icon: <ShieldCheck className="w-8 h-8" />,
    features: ['Penetration Testing', 'Data Protection', 'ISO Compliance', 'Vulnerability Audits'],
    color: 'from-slate-600 to-slate-700'
  },
  {
    title: 'Startup & SaaS Solutions',
    description: 'Complete product development solutions for startups and SaaS businesses — from idea to scalable digital platforms.',
    icon: <Rocket className="w-8 h-8" />,
    features: ['MVP Development', 'SaaS Architecture', 'Subscription Systems', 'Growth Scaling'],
    color: 'from-teal-600 to-teal-700'
  }
];

export default function PortfolioServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-red-50/10 to-white dark:from-black dark:via-red-950/5 dark:to-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #ef4444 1px, transparent 1px),
                             linear-gradient(to bottom, #ef4444 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 mb-6">
            <Sparkles className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-700 dark:text-red-300">
              Comprehensive Solutions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Services We Offer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            End-to-end digital solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative h-full bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl border border-red-200/20 dark:border-red-800/20 p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                
                <motion.div
                  animate={{
                    background: hoveredService === index 
                      ? `linear-gradient(135deg, var(--tw-gradient-stops))`
                      : 'linear-gradient(135deg, transparent, transparent)'
                  }}
                  className={`absolute inset-0 opacity-10 bg-gradient-to-br ${service.color}`}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  animate={{ 
                    scale: hoveredService === index ? 1.1 : 1,
                    rotate: hoveredService === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 shadow-lg`}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-red-800 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 2).map((feature, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 2 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      +{service.features.length - 2}
                    </span>
                  )}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-red-600 dark:text-red-400 font-semibold text-sm group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}