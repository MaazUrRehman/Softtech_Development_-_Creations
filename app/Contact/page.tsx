'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  User,
  MailIcon,
  Globe,
  CheckCircle,
  Coffee,
  Zap,
  CreditCard,
  Settings,
  AlertCircle,
  Loader
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
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    
    if (!formData.subject) {
      errors.subject = 'Please select a subject';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    // Clear general error
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["softtech732@gmail.com"],
      color: "from-red-500 to-red-600",
      link: "mailto:softtech732@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+92 319 6876024"],
      color: "from-red-600 to-red-700",
      link: "tel:+923196876024"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Karachi, Pakistan"],
      color: "from-red-700 to-red-800",
      link: "https://www.google.com/maps/place/Karachi,+Pakistan/"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["24/7"],
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
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and digital payment platforms.",
      icon: <CreditCard className="w-5 h-5" /> 
    },
    {
      question: "Do you offer ongoing maintenance?",
      answer: "Yes, we provide flexible maintenance packages to keep your website updated and secure.",
      icon: <Settings className="w-5 h-5" />
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
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `linear-gradient(to right, #ef4444 1px, transparent 1px),
                               linear-gradient(to bottom, #ef4444 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
            
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
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="block">
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
                      {/* Error Message */}
                      <AnimatePresence>
                        {error && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start gap-3"
                          >
                            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <span className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              Your Name *
                            </span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border ${
                              fieldErrors.name 
                                ? 'border-red-500 focus:border-red-500' 
                                : 'border-red-100/50 dark:border-red-900/30 focus:border-red-500'
                            } focus:ring-2 focus:ring-red-500/20 dark:focus:ring-red-500/30 transition-all duration-300 outline-none`}
                            placeholder="John Doe"
                          />
                          {fieldErrors.name && (
                            <p className="mt-1 text-xs text-red-500">{fieldErrors.name}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <span className="flex items-center gap-2">
                              <MailIcon className="w-4 h-4" />
                              Email Address *
                            </span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border ${
                              fieldErrors.email 
                                ? 'border-red-500 focus:border-red-500' 
                                : 'border-red-100/50 dark:border-red-900/30 focus:border-red-500'
                            } focus:ring-2 focus:ring-red-500/20 dark:focus:ring-red-500/30 transition-all duration-300 outline-none`}
                            placeholder="john@example.com"
                          />
                          {fieldErrors.email && (
                            <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <span className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              Phone Number (Optional)
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
                              Subject *
                            </span>
                          </label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border ${
                              fieldErrors.subject 
                                ? 'border-red-500 focus:border-red-500' 
                                : 'border-red-100/50 dark:border-red-900/30 focus:border-red-500'
                            } focus:ring-2 focus:ring-red-500/20 dark:focus:ring-red-500/30 transition-all duration-300 outline-none`}
                          >
                            <option value="">Select a subject</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Mobile App">Mobile App</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Consultation">Consultation</option>
                            <option value="Other">Other</option>
                          </select>
                          {fieldErrors.subject && (
                            <p className="mt-1 text-xs text-red-500">{fieldErrors.subject}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <span className="flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            Your Message *
                          </span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border ${
                            fieldErrors.message 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'border-red-100/50 dark:border-red-900/30 focus:border-red-500'
                          } focus:ring-2 focus:ring-red-500/20 dark:focus:ring-red-500/30 transition-all duration-300 outline-none resize-none`}
                          placeholder="Tell us about your project, requirements, and goals..."
                        />
                        {fieldErrors.message && (
                          <p className="mt-1 text-xs text-red-500">{fieldErrors.message}</p>
                        )}
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
                            <Loader className="w-5 h-5 animate-spin" />
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

              {/* FAQs */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
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
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      
      <FooterSection />
    </>
  );
}


































