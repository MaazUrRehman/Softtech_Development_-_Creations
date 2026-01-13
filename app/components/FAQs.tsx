'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Clock, Globe, MessageCircle, Shield, TrendingUp, Zap } from 'lucide-react';

export default function FAqs() {
    const faqs = [
    {
      question: "What industries do you specialize in?",
      answer: "We work across various industries including e-commerce, healthcare, finance, education, and SaaS. Our adaptable approach allows us to deliver excellent results regardless of your industry.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity. Small projects take 4-8 weeks, medium projects 8-16 weeks, and large enterprise solutions 16+ weeks. We provide detailed timelines during discovery.",
      icon: <Clock className="w-5 h-5" />
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive maintenance and support packages including updates, security monitoring, performance optimization, and technical support.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      question: "What makes your approach unique?",
      answer: "Our unique blend of technical expertise, creative design, and strategic marketing ensures comprehensive solutions that drive real business results and growth.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      question: "How do you handle project communication?",
      answer: "We maintain transparent communication through regular updates, dedicated Slack channels, weekly meetings, and a project management portal for real-time progress tracking.",
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing: fixed-price for well-defined projects, time-and-materials for evolving projects, and dedicated team models for long-term partnerships.",
      icon: <TrendingUp className="w-5 h-5" />
    },
  ];
  
  return (
          <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-red-50/5 to-white dark:from-black dark:via-red-950/5 dark:to-black">
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <MessageCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                  <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                    Frequently Asked Questions
                  </span>
                </motion.div>
    
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="block text-black dark:text-white">Common Questions</span>
                  <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                    Answered
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Get answers to common questions about our services, processes, and partnerships.
                </p>
              </motion.div>
    
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    className="group"
                  >
                    <div className="p-6 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg hover:border-red-200 dark:hover:border-red-800 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10">
                          <div className="text-red-600 dark:text-red-400">
                            {faq.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                            {faq.question}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {faq.answer}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-red-600 dark:text-red-400 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
  );
}