'use client';

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
  ShieldCheck,
  Rocket,
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Zap,
  Layers,
  BarChart,
  Server,
  Database,
  Globe,
  Lock,
  GitBranch,
  Monitor,
  Camera,
  Megaphone,
  CreditCard,
  Bot,
  Headphones,
  FileCode,
  PenTool,
  Video,
  ChartBar,
  Store,
  Cog,
  Shield
} from 'lucide-react';
import Header from "../components/Header";
import { useState } from 'react';
import FooterSection from '../components/Footer';

export default function ServicesGrid( ) {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.',
      icon: <Code className="w-8 h-8" />,
      features: ['Node.js', 'Laravel', 'Django', 'Nest.js', 'SEO Optimized', 'Firebase', 'Mongo Db', 'MySql'],
      color: 'from-red-600 to-red-700',
      subServices: [
        {
          name: 'Frontend Development',
          description: 'Building interactive user interfaces with modern frameworks',
          tools: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Framer Motion', 'UI/UX Design', 'Responsive Design'],
          icon: <Monitor className="w-6 h-6" />
        },
        {
          name: 'Backend Development',
          description: 'Robust server-side solutions and API development',
          tools: ['Node.js', 'Express', 'Python', 'Laravel', 'PostgreSQL', 'MongoDB', 'RESTful APIs', 'GraphQL', 'Authentication', 'Cloud Integration'],
          icon: <Server className="w-6 h-6" />
        },
        {
          name: 'Full-Stack Solutions',
          description: 'End-to-end web applications with complete functionality',
          tools: ['MERN Stack', 'Next.js API', 'GraphQL', '.Net', 'Serverless', 'CI/CD', 'Testing & QA', 'Performance Optimization', 'Cloud Integration'],
          icon: <Layers className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless user experiences across all devices.',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['iOS & Android', 'React Native', 'Flutter', 'Performance Focused'],
      color: 'from-orange-600 to-orange-700',
      subServices: [
        {
          name: 'React Native ',
          description: 'High-performance apps built specifically for iOS devices',
          tools: ['Swift', 'SwiftUI', 'Xcode', 'Core Data', 'ARKit'],
          icon: <Smartphone className="w-6 h-6" />
        },
        {
          name: 'Flutter ',
          description: 'Custom Android applications for optimal performance',
          tools: ['Kotlin', 'Java', 'Android Studio', 'Getx', 'Firebase', 'Slivers', 'Dart', 'Dio'],
          icon: <Smartphone className="w-6 h-6" />
        },
        {
          name: 'Cross-Platform Apps',
          description: 'Single codebase apps that work on both iOS and Android',
          tools: ['React Native', 'Flutter', 'Expo', 'Xamarin', 'Ionic'],
          icon: <Globe className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'Custom Software',
      description: 'Tailor-made software solutions designed to solve your unique business challenges and streamline operations.',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Enterprise Solutions', 'Scalable Architecture', 'API Integration', 'Custom Workflows'],
      color: 'from-amber-600 to-amber-700',
      subServices: [
        {
          name: 'Enterprise Software',
          description: 'Large-scale solutions for business process management',
          tools: ['.NET', 'Java Spring', 'Microservices', 'Docker', 'Kubernetes'],
          icon: <Database className="w-6 h-6" />
        },
        {
          name: 'CRM Systems',
          description: 'Custom customer relationship management solutions',
          tools: ['Salesforce', 'HubSpot API', 'Custom CRM', 'Analytics', 'Automation'],
          icon: <Users className="w-6 h-6" />
        },
        {
          name: 'ERP Solutions',
          description: 'Enterprise resource planning for business operations',
          tools: ['SAP', 'Oracle', 'Custom ERP', 'Inventory Management', 'Accounting'],
          icon: <BarChart className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'UI/UX & Branding',
      description: 'Beautiful, intuitive interfaces and comprehensive branding that engages users and builds brand loyalty.',
      icon: <Palette className="w-8 h-8" />,
      features: ['User Research', 'Wireframing', 'Brand Identity', 'Design Systems'],
      color: 'from-emerald-600 to-emerald-700',
      subServices: [
        {
          name: 'UI/UX Design',
          description: 'User-centered design for optimal user experience',
          tools: ['Figma', 'Adobe XD', 'Sketch', 'User Testing', 'Prototyping'],
          icon: <PenTool className="w-6 h-6" />
        },
        {
          name: 'Brand Identity',
          description: 'Complete brand development and visual identity',
          tools: ['Logo Design', 'Brand Guidelines', 'Typography', 'Color Systems'],
          icon: <Target className="w-6 h-6" />
        },
        {
          name: 'Design Systems',
          description: 'Consistent design frameworks for scalable products',
          tools: ['Component Libraries', 'Style Guides', 'Design Tokens', 'Documentation'],
          icon: <Layers className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'Video & Photo Editing',
      description: 'Professional multimedia content creation and editing that tells your brand story compellingly.',
      icon: <Film className="w-8 h-8" />,
      features: ['4K Video Editing', 'Motion Graphics', 'Photo Retouching', 'Animation'],
      color: 'from-blue-600 to-blue-700',
      subServices: [
        {
          name: 'Video Production',
          description: 'High-quality video content creation and editing',
          tools: ['Premiere Pro', 'Final Cut Pro', 'DaVinci Resolve', 'After Effects'],
          icon: <Video className="w-6 h-6" />
        },
        {
          name: 'Motion Graphics',
          description: 'Animated graphics and visual effects for videos',
          tools: ['After Effects', 'Cinema 4D', 'Blender', 'Motion Design'],
          icon: <Film className="w-6 h-6" />
        },
        {
          name: 'Photo Editing',
          description: 'Professional photo retouching and manipulation',
          tools: ['Photoshop', 'Lightroom', 'Capture One', 'Photo Restoration'],
          icon: <Camera className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that increase visibility, engagement, and conversions.',
      icon: <TrendingUp className="w-8 h-8" />,
      features: ['SEO/SEM', 'Social Media', 'Content Strategy', 'Analytics'],
      color: 'from-violet-600 to-violet-700',
      subServices: [
        {
          name: 'SEO & SEM',
          description: 'Search engine optimization and marketing',
          tools: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Ads', 'Keyword Research'],
          icon: <ChartBar className="w-6 h-6" />
        },
        {
          name: 'Social Media Marketing',
          description: 'Strategic social media campaigns and management',
          tools: ['Facebook Ads', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok'],
          icon: <Megaphone className="w-6 h-6" />
        },
        {
          name: 'Content Marketing',
          description: 'Content creation and strategy for brand growth',
          tools: ['Content Planning', 'Blog Writing', 'Email Marketing', 'Newsletters'],
          icon: <FileCode className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Full-featured online stores with secure payment processing and inventory management.',
      icon: <ShoppingCart className="w-8 h-8" />,
      features: ['Shopify/WooCommerce', 'Payment Gateways', 'Inventory System', 'Multi-channel'],
      color: 'from-purple-600 to-purple-700',
      subServices: [
        {
          name: 'E-commerce Platforms',
          description: 'Custom online store development',
          tools: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Custom CMS'],
          icon: <Store className="w-6 h-6" />
        },
        {
          name: 'Payment Integration',
          description: 'Secure payment gateway integration',
          tools: ['Stripe', 'PayPal', 'Square', 'Razorpay', 'Payment Security'],
          icon: <CreditCard className="w-6 h-6" />
        },
        {
          name: 'Inventory Management',
          description: 'Complete inventory and order management systems',
          tools: ['ERP Integration', 'Order Tracking', 'Stock Management', 'Shipping APIs'],
          icon: <Database className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'Business Automation',
      description: 'Automate repetitive tasks and integrate systems to improve efficiency and reduce costs.',
      icon: <Workflow className="w-8 h-8" />,
      features: ['Process Automation', 'CRM Integration', 'Workflow Optimization', 'Reporting'],
      color: 'from-pink-600 to-pink-700',
      subServices: [
        {
          name: 'Workflow Automation',
          description: 'Automating business processes and workflows',
          tools: ['Zapier', 'Make', 'Automation Scripts', 'Workflow Design', 'BPMN'],
          icon: <Cog className="w-6 h-6" />
        },
        {
          name: 'CRM Automation',
          description: 'Customer relationship management automation',
          tools: ['Salesforce Automation', 'HubSpot Workflows', 'Email Sequences', 'Lead Scoring'],
          icon: <Users className="w-6 h-6" />
        },
        {
          name: 'Reporting Automation',
          description: 'Automated reporting and data visualization',
          tools: ['Power BI', 'Tableau', 'Custom Dashboards', 'Data Pipelines', 'Scheduled Reports'],
          icon: <BarChart className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'Cloud & IT Services',
      description: 'Secure, scalable cloud infrastructure and comprehensive IT support for your business.',
      icon: <Cloud className="w-8 h-8" />,
      features: ['AWS/Azure', 'DevOps', 'Security', '24/7 Monitoring'],
      color: 'from-cyan-600 to-cyan-700',
      subServices: [
        {
          name: 'Cloud Infrastructure',
          description: 'Cloud platform setup and management',
          tools: ['AWS', 'Azure', 'Google Cloud', 'Serverless', 'Cloud Architecture'],
          icon: <Cloud className="w-6 h-6" />
        },
        {
          name: 'DevOps Services',
          description: 'Development operations and CI/CD pipelines',
          tools: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Infrastructure as Code'],
          icon: <GitBranch className="w-6 h-6" />
        },
        {
          name: 'IT Support',
          description: '24/7 technical support and maintenance',
          tools: ['Network Monitoring', 'Help Desk', 'System Administration', 'Backup Solutions'],
          icon: <Headphones className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'AI & Smart Systems',
      description: 'Intelligent solutions leveraging artificial intelligence to drive innovation and efficiency.',
      icon: <Brain className="w-8 h-8" />,
      features: ['Machine Learning', 'Chatbots', 'Predictive Analytics', 'Automation'],
      color: 'from-indigo-600 to-indigo-700',
      subServices: [
        {
          name: 'Machine Learning',
          description: 'AI models and predictive analytics',
          tools: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Data Science'],
          icon: <Brain className="w-6 h-6" />
        },
        {
          name: 'Chatbot Development',
          description: 'Intelligent conversational AI assistants',
          tools: ['Dialogflow', 'Rasa', 'OpenAI API', 'Custom NLP', 'Voice Assistants'],
          icon: <Bot className="w-6 h-6" />
        },
        {
          name: 'AI Automation',
          description: 'AI-powered business process automation',
          tools: ['Computer Vision', 'Natural Language Processing', 'Process Mining', 'RPA'],
          icon: <Zap className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'Cyber Security & Compliance',
      description: 'Protect your digital assets with advanced security solutions, audits, and compliance standards.',
      icon: <ShieldCheck className="w-8 h-8" />,
      features: ['Penetration Testing', 'Data Protection', 'ISO Compliance', 'Vulnerability Audits'],
      color: 'from-slate-600 to-slate-700',
      subServices: [
        {
          name: 'Security Audits',
          description: 'Comprehensive security assessments and testing',
          tools: ['Penetration Testing', 'Vulnerability Scanning', 'Security Audits', 'Risk Assessment'],
          icon: <Shield className="w-6 h-6" />
        },
        {
          name: 'Data Protection',
          description: 'Data security and compliance solutions',
          tools: ['GDPR Compliance', 'Data Encryption', 'Access Control', 'Privacy Policies'],
          icon: <Lock className="w-6 h-6" />
        },
        {
          name: 'Security Monitoring',
          description: '24/7 security monitoring and threat detection',
          tools: ['SIEM', 'Threat Intelligence', 'Log Analysis', 'Incident Response'],
          icon: <Monitor className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'Startup & SaaS Solutions',
      description: 'Complete product development solutions for startups and SaaS businesses.',
      icon: <Rocket className="w-8 h-8" />,
      features: ['MVP Development', 'SaaS Architecture', 'Subscription Systems', 'Growth Scaling'],
      color: 'from-teal-600 to-teal-700',
      subServices: [
        {
          name: 'MVP Development',
          description: 'Minimum viable product development for startups',
          tools: ['Rapid Prototyping', 'User Feedback', 'Lean Development', 'Product Validation'],
          icon: <Rocket className="w-6 h-6" />
        },
        {
          name: 'SaaS Platform Development',
          description: 'Scalable software-as-a-service platforms',
          tools: ['Multi-tenancy', 'Subscription Billing', 'User Management', 'API Development'],
          icon: <Cloud className="w-6 h-6" />
        },
        {
          name: 'Growth & Scaling',
          description: 'Scaling solutions for growing businesses',
          tools: ['Performance Optimization', 'Load Balancing', 'Database Scaling', 'Microservices'],
          icon: <TrendingUp className="w-6 h-6" />
        }
      ]
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
            <span className="block text-black dark:text-white">Our Complete</span>
            <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Service Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of digital services designed to meet
            every aspect of your business needs and drive digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className={`relative group ${expandedService === index ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${expandedService === index ? 'opacity-5' : ''}`} />

              <motion.div
                layout
                className={`relative rounded-3xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg overflow-hidden ${expandedService === index ? 'cursor-default' : 'cursor-pointer'}`}
                onClick={() => setExpandedService(expandedService === index ? null : index)}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {service.description}
                      </p>
                    </div>

                    <motion.div
                      animate={{ rotate: expandedService === index ? 180 : 0 }}
                      className="text-red-600 dark:text-red-400"
                    >
                    </motion.div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: expandedService === index ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {expandedService === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="pt-6 border-t border-red-100/30 dark:border-red-800/30"
                      >
                        <h4 className="text-lg font-bold text-black dark:text-white mb-4">
                          Sub-Services & Technologies
                        </h4>

                        <div className="grid md:grid-cols-3 gap-6">
                          {service.subServices.map((sub: any, subIndex: number) => (
                            <motion.div
                              key={subIndex}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * subIndex }}
                              className="p-4 rounded-xl bg-gradient-to-br from-red-50/30 to-red-100/30 dark:from-red-900/10 dark:to-red-800/10 border border-red-100/30 dark:border-red-800/30"
                            >
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10">
                                  <div className="text-red-600 dark:text-red-400">
                                    {sub.icon}
                                  </div>
                                </div>
                                <h5 className="font-bold text-black dark:text-white">
                                  {sub.name}
                                </h5>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                {sub.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {sub.tools.map((tool: string, toolIndex: number) => (
                                  <span
                                    key={toolIndex}
                                    className="px-3 py-1 rounded-full bg-white/50 dark:bg-black/50 text-xs font-medium text-red-700 dark:text-red-300 border border-red-200/30 dark:border-red-800/30"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="mt-6">
                          <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            Key Features
                          </h5>
                          <div className="flex flex-wrap gap-3">
                            {service.features.map((feature: string, featureIndex: number) => (
                              <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.05 * featureIndex }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-red-50/50 to-red-100/50 dark:from-red-900/20 dark:to-red-800/20 border border-red-200/30 dark:border-red-800/30"
                              >
                                <CheckCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                                <span className="text-sm font-medium text-red-700 dark:text-red-300">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Features Preview (when collapsed) */}
                  {expandedService !== index && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.features.slice(0, 3).map((feature: string, featureIndex: number) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 rounded-full bg-gradient-to-br from-red-50/50 to-red-100/50 dark:from-red-900/20 dark:to-red-800/20 text-xs font-medium text-red-700 dark:text-red-300 border border-red-200/30 dark:border-red-800/30"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-3 py-1 rounded-full bg-gradient-to-br from-red-50/50 to-red-100/50 dark:from-red-900/20 dark:to-red-800/20 text-xs font-medium text-red-700 dark:text-red-300 border border-red-200/30 dark:border-red-800/30">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}