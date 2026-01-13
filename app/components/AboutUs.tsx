'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  Eye,
  Lightbulb,
  Rocket,
  Sparkles,
  ArrowRight,
  Globe,
  Shield,
  Heart,
  Coffee,
  Clock,
  Zap,
  Star,
  Trophy,
  ChevronRight,
  MessageCircle,
  BookOpen,
  CheckCircle,
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  Layers,
  Cpu,
  Palette,
  BarChart,
  Terminal,
  GitBranch,
  Server,
  Smartphone,
  Cloud,
  Code2,
  Brain,
  GitMerge,
  FileText,
  ShieldCheck
} from 'lucide-react';


export default function AboutUs() {
  
  const certifications = [
    { name: "Google Partner", issuer: "Google", year: "2024", icon: "G" },
    { name: "Adobe Certified", issuer: "Adobe", year: "2023", icon: "A" },
    { name: "AWS Certified", issuer: "Amazon Web Services", year: "2023", icon: "☁️" },
    { name: "Microsoft Partner", issuer: "Microsoft", year: "2024", icon: "M" },
    { name: "ISO 27001 Certified", issuer: "International Standards", year: "2023", icon: "🛡️" },
    { name: "Clutch Top Developer", issuer: "Clutch.co", year: "2024", icon: "⭐" },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Partnering for shared our success",
      color: "from-red-600 to-red-700"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Delivering exceptional quality always",
      color: "from-red-700 to-red-800"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth",
      description: "Evolving with market trends & strategies",
      color: "from-red-800 to-red-900"
    }
  ];

  return (
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
              <Sparkles className="w-4 h-4 text-red-600 dark:text-red-400" />
              <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                Welcome to Our Story
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="block text-black dark:text-white">We Craft Digital</span>
              <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                Excellence Since 2015
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
            >
              We&apos;re more than just developers - we&apos;re digital architects, creative thinkers, 
              and strategic partners dedicated to transforming ideas into exceptional digital experiences 
              that drive business growth and user engagement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Your Project
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
                  Meet Our Team
                  <Users className="w-5 h-5 text-red-600 dark:text-red-400" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {[
              { value: "200+", label: "Projects Completed", icon: <Target className="w-6 h-6" />, color: "from-red-500 to-red-600" },
              { value: "150+", label: "Happy Clients", icon: <Users className="w-6 h-6" />, color: "from-red-600 to-red-700" },
              { value: "8+", label: "Years Experience", icon: <Clock className="w-6 h-6" />, color: "from-red-700 to-red-800" },
              { value: "99%", label: "Success Rate", icon: <Star className="w-6 h-6" />, color: "from-red-800 to-red-900" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative p-6 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                      <div className="text-red-600 dark:text-red-400">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-br from-red-600 to-red-800 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-red-50/5 to-white dark:from-black dark:via-red-950/5 dark:to-black">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, #ef4444 1px, transparent 1px),
                               linear-gradient(to bottom, #ef4444 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Target className="w-4 h-4 text-red-600 dark:text-red-400" />
              <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                Our Purpose & Vision
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block text-black dark:text-white">Driving Innovation</span>
              <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                Through Purpose
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We believe in creating digital solutions that not only meet business objectives 
              but also deliver exceptional user experiences and drive meaningful impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 dark:from-red-500/10 dark:to-red-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-md"
                    >
                      <Rocket className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-black dark:text-white">Our Mission</h3>
                      <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full mt-2" />
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    To empower businesses with innovative digital solutions that drive growth, 
                    enhance user experiences, and create lasting impact in an ever-evolving 
                    technological landscape through creativity, technology, and strategic thinking.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-700/5 dark:from-red-600/10 dark:to-red-700/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: -15 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-md"
                    >
                      <Eye className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-black dark:text-white">Our Vision</h3>
                      <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full mt-2" />
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    To be the global leader in digital transformation, setting new standards 
                    for innovation, quality, and client success while shaping the future of 
                    technology and digital experiences worldwide.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Values */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-700 to-red-800 flex items-center justify-center shadow-md"
                  >
                    <Lightbulb className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">Core Values</h3>
                    <p className="text-gray-600 dark:text-gray-400">The principles that guide everything we do</p>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className="relative p-6 rounded-xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                      <motion.div
                        whileHover={{ rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`p-3 rounded-lg bg-gradient-to-br ${value.color} bg-opacity-10 w-fit mb-4`}
                      >
                        <div className="text-white dark:text-white">
                          {value.icon}
                        </div>
                      </motion.div>
                      <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
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
              <Rocket className="w-8 h-8 text-red-600 dark:text-red-400" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block text-black dark:text-white">Ready to Start Your</span>
              <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                Digital Journey?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Let&apos;s work together to bring your vision to life with cutting-edge 
              technology, creative design, and strategic thinking.
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
                  Schedule a Call
                  <Phone className="w-5 h-5 text-red-600 dark:text-red-400" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}