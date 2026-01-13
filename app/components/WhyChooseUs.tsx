'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Award, 
  Users, 
  Clock, 
  TrendingUp,
  Star,
  CheckCircle,
  Sparkles,
  Target,
  Heart,
  Cpu,
  ArrowRight
} from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Proven Track Record",
    description: "With 250+ successful projects and 99% client satisfaction, we deliver consistent results.",
    stats: "250+ Projects",
    color: "from-red-500 to-red-600",
    delay: 0.1
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Cutting-Edge Technology",
    description: "We use the latest technologies and frameworks to build future-proof solutions.",
    stats: "Modern Stack",
    color: "from-red-600 to-red-700",
    delay: 0.2
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Award-Winning Quality",
    description: "Recognized for excellence in design, innovation, and client satisfaction.",
    stats: "5+ Awards",
    color: "from-red-700 to-red-800",
    delay: 0.3
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Team",
    description: "50+ skilled professionals with diverse expertise across all digital domains.",
    stats: "50+ Experts",
    color: "from-red-800 to-red-900",
    delay: 0.4
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver projects promptly without compromising quality.",
    stats: "100% On Time",
    color: "from-red-900 to-red-950",
    delay: 0.5
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Growth-Focused",
    description: "Our solutions are designed to scale and grow with your business needs.",
    stats: "Scalable",
    color: "from-red-950 to-black",
    delay: 0.6
  }
];

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, TechNova Inc.",
    content: "Softtech transformed our digital presence. Their expertise and dedication exceeded our expectations.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director, Global Corp",
    content: "Outstanding work! The team delivered exactly what we needed, on time and within budget.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder, StartupXYZ",
    content: "Professional, innovative, and reliable. Best decision we made for our digital transformation.",
    rating: 5
  }
];

export default function WhyChooseUsSection() {
  const [activeReason, setActiveReason] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const stats = [
    { value: "99%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
    { value: "250+", label: "Projects Completed", icon: <CheckCircle className="w-5 h-5" /> },
    { value: "50+", label: "Global Clients", icon: <Users className="w-5 h-5" /> },
    { value: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> },
  ];

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-red-50/5 to-white dark:from-black dark:via-red-950/5 dark:to-black">
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
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-48 -right-48 w-96 h-96 border border-red-200/10 dark:border-red-800/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-64 -left-64 w-128 h-128 border border-red-300/5 dark:border-red-700/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-red-200/8 dark:border-red-800/8 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-red-300/6 dark:border-red-700/6 rounded-full"
        />

        {/* Floating Shapes */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 left-20 w-16 h-16 border border-red-400/20 dark:border-red-600/15"
          style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
        />
        
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            scale: { duration: 4, repeat: Infinity },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-40 right-32 w-20 h-20 border-2 border-dashed border-red-300/20 dark:border-red-700/15 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, 20, 0, -20, 0],
            y: [0, -20, 0, 20, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/3 w-12 h-12 border border-red-500/15 dark:border-red-500/10 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-700 dark:text-red-300">
              Why We&apos;re Different
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="block text-black dark:text-white">Why Choose</span>
            <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Softtech?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We combine technical expertise with creative innovation to deliver exceptional 
            digital solutions that drive real business growth.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left Column - Reasons Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: reason.delay, duration: 0.6 }}
                  onMouseEnter={() => setActiveReason(index)}
                  whileHover={{ y: -5 }}
                  className={`relative group cursor-pointer transition-all duration-300 ${
                    activeReason === index ? 'scale-105' : ''
                  }`}
                >
                  {/* Hover Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${activeReason === index ? 'opacity-10' : ''}`} />
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${activeReason === index ? 'opacity-15' : ''}`} />
                  
                  <div className="relative p-6 rounded-xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                    <div className="flex items-start gap-4">
                      {/* Animated Icon Container */}
                      <motion.div
                        animate={activeReason === index ? { rotate: [0, 10, -10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-xl bg-gradient-to-br ${reason.color} flex-shrink-0 shadow-md`}
                      >
                        <div className="text-white">
                          {reason.icon}
                        </div>
                      </motion.div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-black dark:text-white">
                            {reason.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Animated Check Circle */}
                    <motion.div
                      animate={activeReason === index ? { scale: [0, 1.2, 1] } : {}}
                      transition={{ duration: 0.5 }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <CheckCircle className="w-3 h-3 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            
          </motion.div>

          {/* Right Column - Highlight & Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-700/5 dark:from-red-600/20 dark:to-red-700/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-red-50/50 to-white/50 dark:from-red-950/30 dark:to-black/50 backdrop-blur-sm border border-red-200/30 dark:border-red-800/30 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-xl"
                  >
                    <Target className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">Client-Centric Approach</h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full mt-2" />
                  </div>
                </div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                >
                  We don&apos;t just build software; we build partnerships. Our collaborative 
                  process ensures your vision is realized through every stage of development.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="space-y-4"
                >
                  {[
                    "Personalized Strategy Sessions",
                    "Transparent Communication",
                    "Regular Progress Updates",
                    "Post-Launch Support"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/5 dark:from-red-500/20 dark:to-red-600/10 rounded-2xl blur-lg" />
              <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="flex justify-center mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10">
                          <div className="text-red-600 dark:text-red-400">
                            {stat.icon}
                          </div>
                        </div>
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}




{/* Testimonials */}
            // <motion.div
            //   initial={{ opacity: 0, y: 20 }}
            //   animate={isInView ? { opacity: 1, y: 0 } : {}}
            //   transition={{ delay: 0.6, duration: 0.6 }}
            //   className="relative group"
            // >
            //   <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 dark:from-red-500/10 dark:to-red-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            //   <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
            //     <div className="flex items-center gap-3 mb-6">
            //       <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />
            //       <h3 className="text-xl font-bold text-black dark:text-white">Client Testimonials</h3>
            //     </div>
                
            //     <div className="space-y-6">
            //       {testimonials.map((testimonial, index) => (
            //         <motion.div
            //           key={index}
            //           initial={{ opacity: 0, y: 20 }}
            //           animate={isInView ? { opacity: 1, y: 0 } : {}}
            //           transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
            //           whileHover={{ x: 5 }}
            //           className="p-4 rounded-xl bg-red-50/30 dark:bg-red-950/10 border border-red-100/30 dark:border-red-900/20"
            //         >
            //           <div className="flex items-center gap-1 mb-3">
            //             {[...Array(testimonial.rating)].map((_, i) => (
            //               <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            //             ))}
            //           </div>
            //           <p className="text-gray-700 dark:text-gray-300 italic mb-3">
            //             &ldquo;{testimonial.content}&rdquo;
            //           </p>
            //           <div>
            //             <div className="font-semibold text-black dark:text-white">
            //               {testimonial.name}
            //             </div>
            //             <div className="text-sm text-gray-600 dark:text-gray-400">
            //               {testimonial.role}
            //             </div>
            //           </div>
            //         </motion.div>
            //       ))}
            //     </div>
            //   </div>
            // </motion.div>