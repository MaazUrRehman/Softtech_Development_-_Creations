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
      name: "Ahmed Raza",
      role: "Owner, Raza Textile Mills",
      content: "Team ne humare textile business ke liye jo e-commerce website banayi hai, uski waja se ab hum poore Pakistan se orders le rahe hain. Sales mein 200% izafa howa hai. Web design bohat professional hai aur mobile par bhi perfect kaam karta hai.",
      rating: 5,
      company: "Raza Textile Mills",
      project: "E-commerce Website + Branding",
      stats: { sales: "+200%", orders: "500+", reach: "Pakistan Wide" },
      color: "from-green-600 to-green-700",
      service: "E-commerce Development"
    },
    {
      id: 2,
      name: "Fatima Akhtar",
      role: "Founder, The Desi Kitchen",
      content: "Humare food business ke liye social media marketing aur graphic designing mein inka kaam zabardast hai. Jo posters aur banners banaye hain, unki waja se Instagram par 50k followers ho gaye hain. Orders mein bhi bohat izafa howa.",
      rating: 5,
      company: "The Desi Kitchen",
      project: "Social Media Marketing + Graphic Design",
      stats: { followers: "50K+", orders: "3x", engagement: "85%" },
      color: "from-green-600 to-green-800",
      service: "Digital Marketing"
    },
    {
      id: 3,
      name: "Kamran Ali",
      role: "Director, Ali Traders",
      content: "Business branding aur logo design mein inka kaam bohat professional hai. Jo brand identity banayi hai, us se hamare customers mein trust bara hai. Visiting cards aur brochures bhi bohat achi quality ke banaye hain.",
      rating: 4,
      company: "Ali Traders",
      project: "Complete Branding + Stationery Design",
      stats: { recognition: "70%", leads: "+150%", retention: "90%" },
      color: "from-green-700 to-green-800",
      service: "Branding & Graphic Design"
    },
    {
      id: 4,
      name: "Sana Mirza",
      role: "CEO, Mirza Construction",
      content: "Humare construction business ke liye web development aur digital marketing mein inki services bohat beneficial sabit huin. Website se daily 15-20 genuine inquiries aa rahi hain. Google par bhi hamari ranking bohat achi hai.",
      rating: 4,
      company: "Mirza Construction",
      project: "Web Development + SEO",
      stats: { inquiries: "+400%", ranking: "Top 3", traffic: "10x" },
      color: "from-green-700 to-green-900",
      service: "Web Development"
    },
    {
      id: 5,
      name: "Bilal Ahmed",
      role: "Owner, Ahmed Electronics",
      content: "E-commerce website aur Facebook Ads ke through hum poore Pakistan mein bech rahe hain. Sales mein 300% izafa howa. Team ne jo product photography aur banners banaye hain, wo professional hain.",
      rating: 5,
      company: "Ahmed Electronics",
      project: "E-commerce + Social Media Ads",
      stats: { sales: "+300%", conversion: "12%", roi: "400%" },
      color: "from-green-600 to-green-800",
      service: "E-commerce & SMM"
    },
    {
      id: 6,
      name: "Rabia Khalid",
      role: "Founder, Rabia's Beauty Clinic",
      content: "Beauty clinic ke liye jo branding, logo aur social media marketing ki hai, us se bahut naye clients aye hain. Instagram reels aur posts design itni achi hain ke clients khud share karte hain. Highly recommended!",
      rating: 5,
      company: "Rabia's Beauty Clinic",
      project: "Complete Digital Package",
      stats: { clients: "+200%", booking: "95%", reach: "500K+" },
      color: "from-green-600 to-green-800",
      service: "Complete Branding & Marketing"
    },
    {
      id: 7,
      name: "Tariq Mehmood",
      role: "Partner, Mehmood & Sons",
      content: "Hamare wholesale business ke liye jo website banayi hai, us se ab retailers online order kar rahe hain. Graphic design team ne jo catalogue banaya hai, wo bohat impressive hai. Process automate honey se time ki bohat bachat hui.",
      rating: 4,
      company: "Mehmood & Sons",
      project: "B2B Website + Catalogue Design",
      stats: { orders: "60%", time: "-40%", satisfaction: "98%" },
      color: "from-green-700 to-green-800",
      service: "Web Development & Design"
    },
    {
      id: 8,
      name: "Zainab Farooq",
      role: "Director, Zainab's Boutique",
      content: "Fashion boutique ke liye branding aur social media marketing mein inka kaam outstanding hai. Jo logo aur posters design kiye hain, wo unique aur eye-catching hain. Influencer marketing campaign ne bhi bohat help ki.",
      rating: 5,
      company: "Zainab's Boutique",
      project: "Branding + Influencer Marketing",
      stats: { sales: "+180%", instagram: "75K", brandValue: "+200%" },
      color: "from-green-600 to-green-800",
      service: "Social Media Marketing"
    }
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
                <div className="absolute  inset-0 bg-gradient-to-br from-red-500/5 via-red-600/5 to-red-700/5 dark:from-red-500/10 dark:via-red-600/10 dark:to-red-700/10 rounded-3xl blur-xl" />

                <div className="relative p-12 md:p-12 rounded-3xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-xl h-full">
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