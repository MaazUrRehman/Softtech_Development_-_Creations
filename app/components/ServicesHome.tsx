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
  CheckCircle,
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
    description: 'Protect your digital assets with advanced security solutions, audits, and compliance standards to ensure data safety and trust.',
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

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="relative py-10 overflow-hidden bg-gradient-to-b from-white via-red-50/10 to-white dark:from-black dark:via-red-950/5 dark:to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-64 -right-64 w-128 h-128 border border-red-200/10 dark:border-red-800/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-96 -left-96 w-192 h-192 border border-red-300/5 dark:border-red-700/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-94 -left-64 w-228 h-228 border border-red-200/10 dark:border-red-800/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-26 -right-96 w-392 h-392 border border-red-300/5 dark:border-red-700/5 rounded-full"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #ef4444 1px, transparent 1px),
                             linear-gradient(to bottom, #ef4444 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-700 dark:text-red-300">
              Comprehensive Solutions
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-black dark:text-white">
              Our Expert
            </span>
            <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive suite of digital services designed to transform your 
            business and drive measurable results in today&apos;s competitive landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="relative h-full bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl border border-red-200/20 dark:border-red-800/20 p-8 shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 overflow-hidden">
                
                {/* Animated Background Gradient */}
                <motion.div
                  animate={{
                    background: hoveredService === index 
                      ? `linear-gradient(135deg, var(--tw-gradient-stops))`
                      : 'linear-gradient(135deg, transparent, transparent)'
                  }}
                  className={`absolute inset-0 opacity-10 bg-gradient-to-br ${service.color}`}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Service Icon */}
                <motion.div
                  animate={{ 
                    scale: hoveredService === index ? 1.1 : 1,
                    rotate: hoveredService === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {service.icon}
                </motion.div>

                {/* Service Title & Description */}
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-red-800 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-red-600 dark:text-red-400 font-semibold group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Hover Border Effect */}
                <motion.div
                  animate={{
                    opacity: hoveredService === index ? 1 : 0,
                    scale: hoveredService === index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 border-2 border-transparent group-hover:border-red-400/20 dark:group-hover:border-red-600/20 rounded-2xl pointer-events-none"
                />
              </div>

              {/* Floating Dots Pattern */}
              <motion.div
                animate={{ 
                  opacity: hoveredService === index ? 0.3 : 0,
                  scale: hoveredService === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="absolute -top-4 -right-4 w-24 h-24 pointer-events-none"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      x: [0, 10, 0],
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                    className="absolute w-2 h-2 rounded-full bg-red-400/50"
                    style={{
                      left: `${Math.random() * 80}%`,
                      top: `${Math.random() * 80}%`
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-8 w-16 h-16 border border-red-300/20 dark:border-red-700/20 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-8 w-12 h-12 border-2 border-dashed border-red-400/20 dark:border-red-600/20 rounded-full pointer-events-none"
      />
    </section>
  );
}