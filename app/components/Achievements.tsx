'use client';

import { motion } from 'framer-motion';
import { 
  Trophy,
  Users,
  Clock,
  Target,
  Award,
  Star,
  TrendingUp,
  Rocket,
  Sparkles,
  Zap,
  CheckCircle,
  Globe,
  Heart,
  Coffee,
  Code2,
  Palette,
  BarChart
} from 'lucide-react';

export default function Achievements() {
  const stats = [
    {
      icon: <Trophy className="w-6 h-6" />,
      value: "200+",
      label: "Projects Completed",
      description: "Successful digital solutions delivered",
      color: "from-red-500 to-red-600",
      delay: 0.1
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "150+",
      label: "Happy Clients",
      description: "Global client satisfaction",
      color: "from-red-600 to-red-700",
      delay: 0.2
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "8+",
      label: "Years Experience",
      description: "Industry expertise since 2015",
      color: "from-red-700 to-red-800",
      delay: 0.3
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: "99%",
      label: "Success Rate",
      description: "Project delivery success",
      color: "from-red-800 to-red-900",
      delay: 0.4
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started with a vision to transform digital experiences",
      icon: <Rocket className="w-5 h-5" />,
      color: "border-red-500/30"
    },
    {
      year: "2017",
      title: "First 100 Projects",
      description: "Reached milestone of 100 successful projects",
      icon: <Target className="w-5 h-5" />,
      color: "border-red-600/30"
    },
    {
      year: "2019",
      title: "International Recognition",
      description: "Expanded services to global clients",
      icon: <Globe className="w-5 h-5" />,
      color: "border-red-700/30"
    },
    {
      year: "2021",
      title: "Award Winning",
      description: "Received multiple industry awards",
      icon: <Award className="w-5 h-5" />,
      color: "border-red-800/30"
    },
    {
      year: "2023",
      title: "Innovation Leader",
      description: "Pioneered AI integration in web solutions",
      icon: <Zap className="w-5 h-5" />,
      color: "border-red-900/30"
    },
    {
      year: "2024",
      title: "Excellence Certified",
      description: "Achieved highest client satisfaction ratings",
      icon: <Star className="w-5 h-5" />,
      color: "border-red-950/30"
    },
  ];

  const awards = [
    {
      title: "Best Digital Agency 2023",
      issuer: "Design Awards International",
      icon: <Award className="w-8 h-8" />,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Excellence in Web Development",
      issuer: "Tech Innovation Summit",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Client Satisfaction Award",
      issuer: "Customer Choice Awards",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Innovation in Design",
      issuer: "Creative Design Forum",
      icon: <Palette className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Growth Excellence",
      issuer: "Business Achievement Council",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Technical Excellence",
      issuer: "Developer Community Awards",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-cyan-500 to-cyan-600"
    },
  ];

  const clientStats = [
    { value: "95%", label: "Retention Rate", icon: <Users className="w-4 h-4" /> },
    { value: "4.9/5", label: "Client Rating", icon: <Star className="w-4 h-4" /> },
    { value: "24/7", label: "Support", icon: <Coffee className="w-4 h-4" /> },
    { value: "50+", label: "Countries", icon: <Globe className="w-4 h-4" /> },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-red-50/5 to-white dark:from-black dark:via-red-950/5 dark:to-black">
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

        {/* Floating Trophies & Awards */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: ['0%', '100%'],
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
              className="absolute text-lg"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${14 + Math.random() * 12}px`,
                color: i % 3 === 0 ? '#fca5a5' : i % 3 === 1 ? '#f87171' : '#dc2626',
                opacity: 0.15
              }}
            >
              {['🏆', '⭐', '🎯', '🚀', '✨', '🏅', '👑', '💎', '🌟'][Math.floor(Math.random() * 9)]}
            </motion.div>
          ))}
        </div>

        {/* Floating Achievement Elements */}
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
          className="absolute top-20 left-10 w-20 h-20 border border-red-200/25 dark:border-red-600/12"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 right-20 w-16 h-16 border-2 border-dashed border-red-200/30 dark:border-red-700/15 rounded-full"
        />

        {/* Confetti Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: ['0%', '100%'],
                x: [0, Math.sin(i) * 50],
                rotate: [0, 360]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear"
              }}
              className="absolute w-2 h-2"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                backgroundColor: ['#ef4444', '#dc2626', '#b91c1c'][Math.floor(Math.random() * 3)],
                borderRadius: '50%',
                opacity: 0.4
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
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
            <Trophy className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-700 dark:text-red-300">
              Our Journey & Success
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="block text-black dark:text-white">Milestones &</span>
            <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Celebrating years of excellence, innovation, and client success that have defined 
            our journey in the digital world.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + stat.delay, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} />

              <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg text-center">
                {/* Animated Counter */}
                <div className="flex items-center justify-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10`}
                  >
                    <div className="text-red-600 dark:text-red-400">
                      {stat.icon}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                    className="text-4xl font-bold bg-gradient-to-br from-red-600 to-red-800 bg-clip-text text-transparent"
                  >
                    {stat.value}
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.description}
                </p>

                {/* Progress Pulse */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${stat.color}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="inline-flex p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-200/30 dark:border-red-800/30 mb-4"
            >
              <Award className="w-8 h-8 text-red-600 dark:text-red-400" />
            </motion.div>
            <h3 className="text-3xl font-bold text-black dark:text-white mb-4">
              Awards & Recognition
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Celebrating excellence through industry recognition and awards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                {/* Award Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${award.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative p-6 rounded-xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 rounded-lg bg-gradient-to-br ${award.color} flex-shrink-0`}
                    >
                      <div className="text-white">
                        {award.icon}
                      </div>
                    </motion.div>

                    <div>
                      <h4 className="text-lg font-bold text-black dark:text-white mb-1">
                        {award.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {award.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Shining Effect */}
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                    className="absolute top-2 right-2 opacity-50"
                  >
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        className="absolute bottom-20 left-10 w-16 h-16 border border-red-200/25 dark:border-red-700/15 rounded-full hidden lg:block"
      />
      
      <motion.div
        animate={{ 
          y: [0, 15, 0], 
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity }
        }}
        className="absolute top-20 right-10 w-12 h-12 border border-red-200/20 dark:border-red-600/8"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      />
    </section>
  );
}