'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle, Phone, Mail, Calendar, MessageSquare } from 'lucide-react';
import { useState } from 'react';

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  primaryButton?: {
    text: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  secondaryButton?: {
    text: string;
    onClick: () => void;
  };
  showContactForm?: boolean;
  showBenefits?: boolean;
  theme?: 'red' | 'blue' | 'green' | 'purple' | 'dark';
  layout?: 'centered' | 'split' | 'simple';
}

export default function CallToAction({
  title = "Ready to Transform Your Vision into Reality?",
  subtitle = "Join hundreds of satisfied clients who have elevated their business with our expertise. Let's build something amazing together.",
  primaryButton = {
    text: "Start Your Project",
    onClick: () => console.log("Primary button clicked"),
    icon: <ArrowRight className="w-5 h-5" />
  },
  secondaryButton = {
    text: "Schedule a Call",
    onClick: () => console.log("Secondary button clicked")
  },
  showContactForm = true,
  showBenefits = true,
  theme = 'red',
  layout = 'centered'
}: CallToActionProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const themes = {
    red: {
      gradient: 'from-red-500 to-red-600',
      light: 'from-red-50 to-red-100',
      dark: 'from-red-900 to-red-800',
      border: 'border-red-200',
      darkBorder: 'border-red-800/30',
      text: 'text-red-600',
      darkText: 'text-red-400'
    },
    blue: {
      gradient: 'from-blue-500 to-blue-600',
      light: 'from-blue-50 to-blue-100',
      dark: 'from-blue-900 to-blue-800',
      border: 'border-blue-200',
      darkBorder: 'border-blue-800/30',
      text: 'text-blue-600',
      darkText: 'text-blue-400'
    },
    green: {
      gradient: 'from-green-500 to-green-600',
      light: 'from-green-50 to-green-100',
      dark: 'from-green-900 to-green-800',
      border: 'border-green-200',
      darkBorder: 'border-green-800/30',
      text: 'text-green-600',
      darkText: 'text-green-400'
    },
    purple: {
      gradient: 'from-purple-500 to-purple-600',
      light: 'from-purple-50 to-purple-100',
      dark: 'from-purple-900 to-purple-800',
      border: 'border-purple-200',
      darkBorder: 'border-purple-800/30',
      text: 'text-purple-600',
      darkText: 'text-purple-400'
    },
    dark: {
      gradient: 'from-gray-800 to-gray-900',
      light: 'from-gray-800 to-gray-900',
      dark: 'from-gray-900 to-gray-800',
      border: 'border-gray-700',
      darkBorder: 'border-gray-700/30',
      text: 'text-gray-300',
      darkText: 'text-gray-400'
    }
  };

  const selectedTheme = themes[theme];

  const benefits = [
    "Free 30-minute consultation",
    "Customized project proposal",
    "No-obligation quote",
    "24-hour response time",
    "Flexible engagement models"
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      action: "Call now"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      detail: "hello@example.com",
      action: "Send email"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Schedule",
      detail: "30-min slot available",
      action: "Book meeting"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePrimaryClick = () => {
    if (showContactForm) {
      // Scroll to form
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      primaryButton.onClick();
    }
  };

  const renderCenteredLayout = () => (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${selectedTheme.light} dark:${selectedTheme.dark} border ${selectedTheme.border} dark:${selectedTheme.darkBorder} mb-6"
          >
            <Sparkles className={`w-4 h-4 ${selectedTheme.text} dark:${selectedTheme.darkText}`} />
            <span className={`text-sm font-semibold ${selectedTheme.text} dark:${selectedTheme.darkText}`}>
              Let's Get Started
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="block text-black dark:text-white">{title.split('?')[0]}</span>
            <span className={`block bg-gradient-to-r ${selectedTheme.gradient} bg-clip-text text-transparent`}>
              {title.split('?')[1] ? '?' + title.split('?')[1] : ''}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrimaryClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`group px-8 py-4 rounded-xl bg-gradient-to-r ${selectedTheme.gradient} text-white font-semibold shadow-lg shadow-${theme}-500/25 hover:shadow-xl hover:shadow-${theme}-500/35 transition-all duration-300 flex items-center gap-3 justify-center`}
            >
              <span>{primaryButton.text}</span>
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {primaryButton.icon || <ArrowRight className="w-5 h-5" />}
              </motion.span>
            </motion.button>

            {secondaryButton && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={secondaryButton.onClick}
                className="px-8 py-4 rounded-xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
              >
                {secondaryButton.text}
              </motion.button>
            )}
          </motion.div>
        </motion.div>

        {showBenefits && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-gray-100 dark:border-gray-800/50"
                >
                  <CheckCircle className={`w-6 h-6 ${selectedTheme.text} dark:${selectedTheme.darkText} mb-2`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {showContactForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            id="contact-form"
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-800">
              <div className="text-center mb-8">
                <MessageSquare className={`w-12 h-12 ${selectedTheme.text} dark:${selectedTheme.darkText} mx-auto mb-4`} />
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                  Get in Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    We've received your message and will contact you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project, timeline, and budget..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className={`w-full py-4 rounded-xl bg-gradient-to-r ${selectedTheme.gradient} text-white font-semibold shadow-lg shadow-${theme}-500/25 hover:shadow-xl hover:shadow-${theme}-500/35 transition-all duration-300`}
                  >
                    Submit Request
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        )}

        {!showContactForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-gray-100 dark:border-gray-800/50 text-center"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedTheme.gradient} flex items-center justify-center mx-auto mb-4`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-black dark:text-white mb-2">{method.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{method.detail}</p>
                  <button
                    onClick={() => console.log(`Clicked ${method.title}`)}
                    className={`text-sm font-semibold ${selectedTheme.text} dark:${selectedTheme.darkText} hover:opacity-80 transition-opacity`}
                  >
                    {method.action} →
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );

  const renderSplitLayout = () => (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${selectedTheme.light} dark:${selectedTheme.dark} border ${selectedTheme.border} dark:${selectedTheme.darkBorder} mb-6"
          >
            <Sparkles className={`w-4 h-4 ${selectedTheme.text} dark:${selectedTheme.darkText}`} />
            <span className={`text-sm font-semibold ${selectedTheme.text} dark:${selectedTheme.darkText}`}>
              Take Action Now
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-black dark:text-white">{title.split('?')[0]}</span>
            <span className={`block bg-gradient-to-r ${selectedTheme.gradient} bg-clip-text text-transparent`}>
              {title.split('?')[1] ? '?' + title.split('?')[1] : ''}
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {subtitle}
          </p>

          {showBenefits && (
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className={`w-5 h-5 ${selectedTheme.text} dark:${selectedTheme.darkText}`} />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrimaryClick}
              className={`group px-8 py-4 rounded-xl bg-gradient-to-r ${selectedTheme.gradient} text-white font-semibold shadow-lg shadow-${theme}-500/25 hover:shadow-xl hover:shadow-${theme}-500/35 transition-all duration-300 flex items-center gap-3`}
            >
              <span>{primaryButton.text}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {secondaryButton && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={secondaryButton.onClick}
                className="px-8 py-4 rounded-xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
              >
                {secondaryButton.text}
              </motion.button>
            )}
          </div>
        </motion.div>

        {showContactForm ? (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
              Start Your Project
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full py-4 rounded-xl bg-gradient-to-r ${selectedTheme.gradient} text-white font-semibold shadow-lg shadow-${theme}-500/25 hover:shadow-xl hover:shadow-${theme}-500/35 transition-all duration-300`}
              >
                Get Free Consultation
              </motion.button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-gray-100 dark:border-gray-800/50"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${selectedTheme.gradient} flex items-center justify-center`}>
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-black dark:text-white">{method.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{method.detail}</p>
                </div>
                <button
                  onClick={() => console.log(`Clicked ${method.title}`)}
                  className={`text-sm font-semibold ${selectedTheme.text} dark:${selectedTheme.darkText} hover:opacity-80 transition-opacity whitespace-nowrap`}
                >
                  {method.action}
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );

  const renderSimpleLayout = () => (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-black dark:text-white">{title}</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrimaryClick}
            className={`group px-6 py-3 rounded-lg bg-gradient-to-r ${selectedTheme.gradient} text-white font-semibold shadow-lg shadow-${theme}-500/25 hover:shadow-xl hover:shadow-${theme}-500/35 transition-all duration-300 flex items-center gap-2 justify-center`}
          >
            <span>{primaryButton.text}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          {secondaryButton && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={secondaryButton.onClick}
              className="px-6 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              {secondaryButton.text}
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );

  const renderLayout = () => {
    switch (layout) {
      case 'split':
        return renderSplitLayout();
      case 'simple':
        return renderSimpleLayout();
      default:
        return renderCenteredLayout();
    }
  };

  return (
    <section className={`py-24 bg-gradient-to-b from-white via-${theme}-50/5 to-white dark:from-black dark:via-${theme}-950/5 dark:to-black`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className={`absolute top-1/4 -right-32 w-64 h-64 border border-${theme}-100/20 dark:border-${theme}-800/8 rounded-full`}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className={`absolute bottom-1/4 -left-32 w-64 h-64 border border-${theme}-200/10 dark:border-${theme}-700/4 rounded-full`}
        />
      </div>

      <div className="relative z-10">
        {renderLayout()}
      </div>
    </section>
  );
}