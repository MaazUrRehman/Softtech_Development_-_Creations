'use client';

import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  User,
  ChevronLeft,
  ChevronRight,
  Award,
  ThumbsUp,
  TrendingUp,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Alexandra Chen",
      role: "CEO, TechNova Inc.",
      content: "Working with this team transformed our digital presence. Their innovative approach and attention to detail exceeded our expectations at every turn. The results speak for themselves.",
      rating: 5,
      company: "TechNova",
      project: "Enterprise Platform",
      stats: { growth: "300%", satisfaction: "98%", timeline: "-30%" },
      color: "from-red-500 to-red-600"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "CTO, InnovateLabs",
      content: "The technical expertise demonstrated by this team is exceptional. They delivered a scalable solution that perfectly aligned with our business objectives. Truly outstanding work!",
      rating: 5,
      company: "InnovateLabs",
      project: "Mobile Application",
      stats: { downloads: "500K", retention: "85%", rating: "4.9" },
      color: "from-red-600 to-red-700"
    },
    {
      id: 3,
      name: "Sophia Williams",
      role: "Marketing Director, GlobalBrands",
      content: "From concept to execution, the team was professional, creative, and results-driven. Our engagement metrics have never been better. Highly recommended!",
      rating: 5,
      company: "GlobalBrands",
      project: "Brand Strategy",
      stats: { engagement: "250%", roi: "450%", reach: "3M+" },
      color: "from-red-700 to-red-800"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Founder, StartupXYZ",
      content: "As a startup, we needed a partner who understood our vision and constraints. They delivered beyond our expectations within budget and timeline. Exceptional!",
      rating: 5,
      company: "StartupXYZ",
      project: "MVP Development",
      stats: { funding: "$2.5M", users: "100K", valuation: "10x" },
      color: "from-red-800 to-red-900"
    },
    {
      id: 5,
      name: "Elena Petrova",
      role: "Product Lead, MetaCorp",
      content: "The user experience design implemented by this team has significantly improved our customer satisfaction scores. Their attention to detail is remarkable.",
      rating: 5,
      company: "MetaCorp",
      project: "UX Overhaul",
      stats: { csat: "95%", speed: "3x", errors: "-80%" },
      color: "from-red-500 to-red-700"
    },
    {
      id: 6,
      name: "David Kim",
      role: "Operations Director, LogisticsPro",
      content: "Their solution streamlined our operations and reduced costs by 40%. The team was professional, responsive, and delivered exactly what we needed.",
      rating: 5,
      company: "LogisticsPro",
      project: "Operations System",
      stats: { efficiency: "65%", cost: "-40%", delivery: "99%" },
      color: "from-red-600 to-red-800"
    }
  ];

  const stats = [
    { value: "250+", label: "Happy Clients", icon: <User className="w-5 h-5" />, color: "from-red-500 to-red-600" },
    { value: "4.9/5", label: "Average Rating", icon: <Star className="w-5 h-5" />, color: "from-red-600 to-red-700" },
    { value: "98%", label: "Client Retention", icon: <ThumbsUp className="w-5 h-5" />, color: "from-red-700 to-red-800" },
    { value: "500+", label: "Projects Delivered", icon: <Award className="w-5 h-5" />, color: "from-red-800 to-red-900" }
  ];

  const achievements = [
    "Award-winning designs",
    "Industry recognition",
    "Proven ROI delivery",
    "24/7 support",
    "Agile methodology",
    "Data-driven approach"
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, activeIndex]);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-red-50/10 to-white dark:from-black dark:via-red-950/5 dark:to-black">
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
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute top-3/4 -left-48 w-128 h-128 border border-red-100/15 dark:border-red-800/6 rounded-full"
        />

        {/* Floating Quote Icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16"
        >
          <Quote className="w-full h-full text-red-200/20 dark:text-red-800/20" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 right-20 w-12 h-12"
        >
          <Quote className="w-full h-full text-red-200/15 dark:text-red-800/15" />
        </motion.div>
        
        <motion.div
          animate={{ 
            x: [0, 15, 0, -15, 0],
            y: [0, -15, 0, 15, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-8 h-8"
        >
          <Star className="w-full h-full text-red-300/10 dark:text-red-700/5" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-700 dark:text-red-300">
              Client Success Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="block text-black dark:text-white">Trusted by Industry</span>
            <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Discover why businesses trust us to deliver exceptional results. Our clients&apos; 
            success is our greatest achievement.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Left Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 dark:from-red-500/10 dark:to-red-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                  By The Numbers
                </h3>
                <div className="space-y-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-red-50/50 to-red-100/30 dark:from-red-900/10 dark:to-red-800/10 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                          <div className={`text-red-600 dark:text-red-400`}>
                            {stat.icon}
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-black dark:text-white">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-700/5 dark:from-red-600/10 dark:to-red-700/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                <h3 className="text-xl font-bold text-black dark:text-white mb-6">
                  Why Clients Choose Us
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Center Column - Main Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="relative h-full">
              {/* Navigation Arrows */}
              <div className="absolute top-1/2 left-4 right-4 flex justify-between -translate-y-1/2 z-20">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setTimeout(() => setAutoPlay(true), 1000)}
                  className="p-3 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-red-600 dark:text-red-400" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setTimeout(() => setAutoPlay(true), 1000)}
                  className="p-3 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-red-600 dark:text-red-400" />
                </motion.button>
              </div>

              {/* Main Testimonial Card */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-red-600/5 to-red-700/5 dark:from-red-500/10 dark:via-red-600/10 dark:to-red-700/10 rounded-3xl blur-xl" />
                
                <div className="relative p-8 md:p-12 rounded-3xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-xl h-full">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className={`mb-8 p-4 rounded-2xl bg-gradient-to-br ${testimonials[activeIndex].color} bg-opacity-10 w-fit`}
                  >
                    <Quote className="w-8 h-8 text-red-600 dark:text-red-400" />
                  </motion.div>

                  {/* Content */}
                  <div className="mb-8">
                    <p className="text-2xl md:text-3xl leading-relaxed text-gray-800 dark:text-gray-200 italic mb-8">
                      "{testimonials[activeIndex].content}"
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          whileHover={{ scale: 1.2, rotate: 15 }}
                        >
                          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                      <span className="ml-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                        {testimonials[activeIndex].rating}.0
                      </span>
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center justify-between pt-8 border-t border-red-100/50 dark:border-red-900/30">
                    <div>
                      <h4 className="text-2xl font-bold text-black dark:text-white">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonials[activeIndex].role}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${testimonials[activeIndex].color} bg-opacity-10 text-red-700 dark:text-red-300`}>
                          {testimonials[activeIndex].company}
                        </span>
                        <span className="px-3 py-1 rounded-full text-sm bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-100 dark:border-red-800/30">
                          {testimonials[activeIndex].project}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 mt-8">
                    {Object.entries(testimonials[activeIndex].stats).map(([key, value], i) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="text-center p-4 rounded-xl bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-900/10 dark:to-red-800/10"
                      >
                        <div className={`text-2xl font-bold bg-gradient-to-r ${testimonials[activeIndex].color} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 capitalize mt-1">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center gap-3 mb-12"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setTimeout(() => setAutoPlay(true), 1000)}
              className="focus:outline-none"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                animate={{ 
                  width: activeIndex === index ? 48 : 12,
                  backgroundColor: activeIndex === index ? '#ef4444' : '#fecaca'
                }}
                transition={{ duration: 0.3 }}
                className="h-3 rounded-full dark:bg-red-800/30"
              />
            </button>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-red-600/5 to-red-700/5 dark:from-red-500/10 dark:via-red-600/10 dark:to-red-700/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
          <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
            <h3 className="text-center text-xl font-bold text-black dark:text-white mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {["TechNova", "GlobalBrands", "InnovateLabs", "MetaCorp", "StartupXYZ", "LogisticsPro"].map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex items-center justify-center p-4 rounded-xl bg-red-50/50 dark:bg-red-900/10 hover:bg-red-100/50 dark:hover:bg-red-800/20 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className={`text-lg font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent`}>
                      {company}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Partner
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-16 h-16 border border-red-200/25 dark:border-red-700/15 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        className="absolute top-20 right-10 w-12 h-12 border border-red-200/20 dark:border-red-600/8"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      />
    </section>
  );
}