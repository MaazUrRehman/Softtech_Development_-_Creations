'use client';

import { motion } from 'framer-motion';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  ArrowRight,
  Sparkles,
  User,
  MailIcon,
  Globe,
  CheckCircle,
  Coffee,
  Users,
  Zap
} from 'lucide-react';
import Header from "../components/Header";
import FooterSection from "../components/Footer";
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["hello@digitalstudio.com", "support@digitalstudio.com"],
      color: "from-red-500 to-red-600",
      link: "mailto:hello@digitalstudio.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "from-red-600 to-red-700",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Tech Street", "San Francisco, CA 94107"],
      color: "from-red-700 to-red-800",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon - Fri: 9AM - 6PM", "Sat: 10AM - 4PM"],
      color: "from-red-800 to-red-900",
      link: null
    },
  ];

  const faqs = [
    {
      question: "What's your typical response time?",
      answer: "We respond to all inquiries within 24 hours. For urgent matters, call us directly.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer free 30-minute consultations to discuss your project requirements.",
      icon: <Coffee className="w-5 h-5" />
    },
    {
      question: "What information should I provide?",
      answer: "Share your project goals, timeline, budget, and any specific requirements you have.",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We serve clients worldwide across different time zones.",
      icon: <Globe className="w-5 h-5" />
    },
  ];

  return (
    <>
      <Header />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-white via-red-50/10 to-white dark:from-black dark:via-red-950/5 dark:to-black">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(to right, #ef4444 1px, transparent 1px),
                                 linear-gradient(to bottom, #ef4444 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }} />
            </div>

            {/* Animated Geometric Circles */}
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

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-10 w-16 h-16 border border-red-200/25 dark:border-red-700/15 rounded-full hidden lg:block"
            />
            
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 right-10 w-12 h-12 border border-red-200/20 dark:border-red-600/8"
              style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800/30 mb-6"
              >
                <MessageSquare className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                  Get in Touch
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                <span className="block text-black dark:text-white">Let's Build Something</span>
                <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                  Amazing Together
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
              >
                Ready to transform your ideas into reality? Reach out to discuss your project 
                and discover how we can help you achieve digital excellence.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-b from-white via-red-50/5 to-white dark:from-black dark:via-red-950/5 dark:to-black">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  {info.link ? (
                    <a href={info.link} className="block">
                      <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      <div className="relative p-6 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg text-center group-hover:border-red-200 dark:group-hover:border-red-800 transition-all duration-300">
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.color} mx-auto mb-6 flex items-center justify-center`}
                        >
                          <div className="text-white">
                            {info.icon}
                          </div>
                        </motion.div>
                        <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 dark:text-gray-400 mb-1">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </a>
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      <div className="relative p-6 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg text-center">
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.color} mx-auto mb-6 flex items-center justify-center`}
                        >
                          <div className="text-white">
                            {info.icon}
                          </div>
                        </motion.div>
                        <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 dark:text-gray-400 mb-1">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-red-50/5 to-white dark:from-black dark:via-red-950/5 dark:to-black">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-3xl blur-2xl" />
                <div className="relative p-8 rounded-3xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-xl">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 mx-auto mb-6 flex items-center justify-center"
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Thank you for reaching out. We'll get back to you shortly.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-800 text-white font-medium"
                      >
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <span className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              Your Name
                            </span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 focus:border-red-500 dark:focus:border-red-500 focus:ring-2 focus:ring-red-500/20 dark:focus:ring-red-500/30 transition-all duration-300 outline-none"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <span className="flex items-center gap-2">
                              <MailIcon className="w-4 h-4" />
                              Email Address
                            </span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 focus:border-red-500 dark:focus:border-red-500 focus:ring-2 focus:ring-red-500/20 dark:focus:ring-red-500/30 transition-all duration-300 outline-none"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <span className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              Phone Number
                            </span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 focus:border-red-500 dark:focus:border-red-500 focus:ring-2 focus:ring-red-500/20 dark:focus:ring-red-500/30 transition-all duration-300 outline-none"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <span className="flex items-center gap-2">
                              <MessageSquare className="w-4 h-4" />
                              Subject
                            </span>
                          </label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 focus:border-red-500 dark:focus:border-red-500 focus:ring-2 focus:ring-red-500/20 dark:focus:ring-red-500/30 transition-all duration-300 outline-none"
                          >
                            <option value="">Select a subject</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Mobile App">Mobile App</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Consultation">Consultation</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <span className="flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            Your Message
                          </span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 focus:border-red-500 dark:focus:border-red-500 focus:ring-2 focus:ring-red-500/20 dark:focus:ring-red-500/30 transition-all duration-300 outline-none resize-none"
                          placeholder="Tell us about your project, requirements, and goals..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                        className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            Sending Message...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            Send Message
                            <motion.span
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Send className="w-5 h-5" />
                            </motion.span>
                          </span>
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Map & Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Map Placeholder */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/10" />
                  <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                        123 Tech Street, San Francisco
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Click to view on Google Maps
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQs */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-700/5 rounded-3xl blur-2xl" />
                  <div className="relative p-8 rounded-3xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-xl">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                      Quick Questions
                    </h3>
                    <div className="space-y-6">
                      {faqs.map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * index }}
                          className="pb-4 border-b border-red-100/30 dark:border-red-800/30 last:border-0 last:pb-0"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10">
                              <div className="text-red-600 dark:text-red-400">
                                {faq.icon}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-black dark:text-white mb-1">
                                {faq.question}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Schedule Call CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-2xl blur-xl" />
                  <div className="relative p-6 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg text-center">
                    <Coffee className="w-12 h-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-black dark:text-white mb-3">
                      Prefer a Quick Chat?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Schedule a 30-minute consultation call with our experts.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-800 text-white font-medium"
                    >
                      Schedule a Call
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-red-50/5 to-red-50/10 dark:from-black dark:via-red-950/5 dark:to-red-950/10">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(to right, #ef4444 1px, transparent 1px),
                                 linear-gradient(to bottom, #ef4444 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }} />
            </div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="inline-flex p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-200/30 dark:border-red-800/30 mb-6"
              >
                <Users className="w-8 h-8 text-red-600 dark:text-red-400" />
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="block text-black dark:text-white">Ready to Start Your</span>
                <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                  Next Project?
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                Whether you have a project in mind or just want to explore possibilities, 
                we're here to help bring your vision to life.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Start a Project
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 text-gray-700 dark:text-gray-300 font-semibold hover:border-red-200 dark:hover:border-red-800 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    View Our Work
                    <Sparkles className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
      <FooterSection />
    </>
  );
}