'use client';

import { motion } from 'framer-motion';
import { 
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Youtube,
  Globe,
  Heart,
  ChevronUp,
  Send,
  Clock,
  CheckCircle,
  Shield,
  Sparkles
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FooterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/About' },
    { name: 'Portfolio', href: '/Portfolio' },
    { name: 'Services', href: '/Services' },
    { name: 'Contact', href: '/Contact' },
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'IT Consulting',
    'Graphics Design',
    'Video Editing',
    'Digital Marketing',
    'E-commerce Solutions',
    'Cloud Services',
    'AI Integration',
    'Maintenance & Support',
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      value: 'hello@softtech.com',
      href: 'mailto:hello@softtech.com',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Working Hours',
      value: 'Mon - Fri: 9:00 - 18:00',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
  ];

  const companyInfo = [
    { icon: <CheckCircle className="w-4 h-4" />, text: 'ISO 9001 Certified' },
    { icon: <Shield className="w-4 h-4" />, text: 'GDPR Compliant' },
    { icon: <Globe className="w-4 h-4" />, text: 'Global Presence' },
  ];

  return (
    <footer className="relative overflow-hidden transition-all duration-500 bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-red-200/30 dark:border-red-900/30">
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              {/* Logo Section */}
              <Link 
                href="/" 
                className="flex items-center gap-3 group mb-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-red-500/20 dark:group-hover:shadow-red-600/30 transition-all duration-300">
                  <div className="w-5 h-5 bg-white rounded-sm" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-black dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors duration-300">
                    Softtech
                  </div>
                  <div className="text-sm text-red-700 dark:text-red-400 uppercase group-hover:text-red-800 dark:group-hover:text-red-300 transition-colors duration-300">
                    Development & Creations
                  </div>
                </div>
              </Link>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800/30 mb-6"
              >
                <Sparkles className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                  Digital Excellence Since 2015
                </span>
              </motion.div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                Let&apos;s create something extraordinary together. Get in touch to start 
                your digital transformation journey.
              </p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-red-100/30 dark:border-red-900/20 hover:shadow-lg hover:border-red-200/50 dark:hover:border-red-800/50 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-3 rounded-lg bg-gradient-to-br from-red-500 to-red-600 bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}
                  >
                    <div className="text-red-600 dark:text-red-400">
                      {item.icon}
                    </div>
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {item.title}
                    </div>
                    <div className="font-semibold text-black dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-black dark:text-white mb-6 flex items-center gap-3 uppercase tracking-wider">
              <ArrowRight className="w-5 h-5 text-red-600" />
              Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300 uppercase tracking-wider text-sm"
                  >
                    <motion.span
                      animate={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-2 h-2 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="group-hover:font-semibold transition-all relative">
                      {link.name}
                      <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full bg-red-600 dark:bg-red-500 transition-all duration-300" />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-black dark:text-white mb-6 flex items-center gap-3 uppercase tracking-wider">
              <ArrowRight className="w-5 h-5 text-red-600" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group"
                >
                  <CheckCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300 cursor-pointer text-sm">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        

        
        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-red-200/30 to-transparent dark:via-red-800/20 mb-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Softtech. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Made with <Heart className="w-4 h-4 inline text-red-600 dark:text-red-400" /> by our amazing team
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  backgroundColor: '#ef4444'
                }}
                className="p-3 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-red-100/30 dark:border-red-900/20 text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800/30 hover:shadow-lg transition-all duration-300"
          >
            <span className="text-sm font-semibold text-red-700 dark:text-red-300 uppercase tracking-wider">
              Back to Top
            </span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-lg bg-red-600/10 group-hover:bg-red-600/20 transition-colors"
            >
              <ChevronUp className="w-4 h-4 text-red-600 dark:text-red-400" />
            </motion.div>
          </motion.button>
        </div>

        {/* Legal Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-red-100/20 dark:border-red-900/10"
        >
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-sm text-gray-500 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300 uppercase tracking-wider"
            >
              {link}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}