'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  ShoppingBag, 
  Briefcase, 
  Palette,
  Code,
  BarChart,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Filter,
  Circle
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Globe className="w-4 h-4" /> },
    { id: 'web', label: 'Web Design', icon: <Code className="w-4 h-4" /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'ecommerce', label: 'E-commerce', icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 'branding', label: 'Branding', icon: <Palette className="w-4 h-4" /> },
    { id: 'business', label: 'Business', icon: <Briefcase className="w-4 h-4" /> },
  ];

  const projects = [
    {
      id: 1,
      title: "Nexus Financial Platform",
      category: "web",
      description: "A comprehensive financial management platform with real-time analytics and reporting tools.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      color: "from-red-500 to-red-600",
      imageColor: "bg-gradient-to-br from-red-500/20 to-red-600/20",
      stats: { clients: "+500", growth: "45%", satisfaction: "98%" }
    },
    {
      id: 2,
      title: "UrbanFit Mobile App",
      category: "mobile",
      description: "Fitness tracking application with AI-powered workout recommendations and social features.",
      technologies: ["React Native", "Firebase", "GraphQL", "TensorFlow.js"],
      color: "from-red-600 to-red-700",
      imageColor: "bg-gradient-to-br from-red-600/20 to-red-700/20",
      stats: { downloads: "250K", rating: "4.9", active: "50K" }
    },
    {
      id: 3,
      title: "LuxeStyle E-commerce",
      category: "ecommerce",
      description: "Premium fashion e-commerce platform with AR try-on features and personalized recommendations.",
      technologies: ["Next.js", "Stripe", "MongoDB", "Three.js"],
      color: "from-red-700 to-red-800",
      imageColor: "bg-gradient-to-br from-red-700/20 to-red-800/20",
      stats: { revenue: "$5M+", conversion: "8.5%", retention: "75%" }
    },
    {
      id: 4,
      title: "MediCare Health Portal",
      category: "web",
      description: "Healthcare management system for clinics with appointment scheduling and patient records.",
      technologies: ["Vue.js", "Python", "Django", "MySQL"],
      color: "from-red-800 to-red-900",
      imageColor: "bg-gradient-to-br from-red-800/20 to-red-900/20",
      stats: { patients: "10K+", efficiency: "60%", accuracy: "99.5%" }
    },
    {
      id: 5,
      title: "Bloom Brand Identity",
      category: "branding",
      description: "Complete brand identity system for a sustainable cosmetics company.",
      technologies: ["Figma", "Adobe Suite", "Blender", "After Effects"],
      color: "from-red-500 to-red-700",
      imageColor: "bg-gradient-to-br from-red-500/20 to-red-700/20",
      stats: { recognition: "85%", engagement: "3x", sales: "+120%" }
    },
    {
      id: 6,
      title: "LogiTrack Pro",
      category: "business",
      description: "Enterprise logistics and supply chain management solution with IoT integration.",
      technologies: ["Angular", "Java", "Spring Boot", "Redis"],
      color: "from-red-600 to-red-800",
      imageColor: "bg-gradient-to-br from-red-600/20 to-red-800/20",
      stats: { delivery: "95%", cost: "-30%", capacity: "2.5x" }
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
    resetAutoPlay();
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
    resetAutoPlay();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(handleNextSlide, 5000);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNextSlide();
    if (isRightSwipe) handlePrevSlide();
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(handleNextSlide, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentSlide, filteredProjects.length]);

  useEffect(() => {
    // Reset to first slide when category changes
    setCurrentSlide(0);
  }, [selectedCategory]);

  const handleModalClose = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setSelectedProject(null);
    }
  };

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
            <Filter className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-700 dark:text-red-300">
              Our Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="block text-black dark:text-white">Crafted with</span>
            <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Precision & Passion
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Explore our collection of innovative projects that have transformed businesses 
            and delivered exceptional results across various industries.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-black dark:text-white flex items-center gap-3">
              <BarChart className="w-6 h-6 text-red-600" />
              Filter by Category
            </h3>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25'
                    : 'bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20'
                }`}
              >
                {category.icon}
                <span className="font-semibold">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mb-16"
        >
          {/* Carousel Container */}
          <div 
            className="relative overflow-hidden rounded-3xl bg-white/40 dark:bg-black/40 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Carousel Navigation Buttons */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={handleNextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform" />
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              {isAutoPlaying ? (
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <div className="w-2 h-2 bg-red-600 dark:bg-red-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Auto</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <Circle className="w-4 h-4" />
                  <span className="text-sm font-medium">Paused</span>
                </div>
              )}
            </button>

            {/* Carousel Slides */}
            <div className="relative h-[600px]">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: currentSlide === index ? 1 : 0,
                    scale: currentSlide === index ? 1 : 0.9,
                    x: `${(index - currentSlide) * 100}%`
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`absolute inset-0 flex items-center justify-center p-8 ${
                    currentSlide === index ? 'pointer-events-auto' : 'pointer-events-none'
                  }`}
                >
                  <div className="max-w-6xl w-full h-full flex flex-col lg:flex-row gap-8 items-center">
                    {/* Project Image/Color Area */}
                    <div className={`lg:w-1/2 h-full ${project.imageColor} rounded-2xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
                      
                      {/* Animated background elements */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-20 -right-20 w-64 h-64 border border-red-200/20 dark:border-red-600/8 rounded-full"
                      />
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-20 -left-20 w-64 h-64 border border-red-200/20 dark:border-red-600/8 rounded-full"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                          {categories.find(c => c.id === project.category)?.label}
                        </span>
                      </div>
                      
                      {/* Stats overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="text-center p-3 rounded-xl bg-white/90 dark:bg-black/90 backdrop-blur-sm">
                              <div className={`text-xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                                {value}
                              </div>
                              <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                                {key}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="lg:w-1/2 space-y-6">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                          {project.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-xl font-bold text-black dark:text-white mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/30 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Details Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProject(project.id)}
                        className="group px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/35 transition-all duration-300 flex items-center gap-3"
                      >
                        <span>View Project Details</span>
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`p-1 transition-all duration-300 ${
                    currentSlide === index ? 'scale-125' : 'opacity-50 hover:opacity-75'
                  }`}
                >
                  <div 
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-gradient-to-r from-red-500 to-red-600' 
                        : 'bg-red-300 dark:bg-red-700'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-6 right-6 z-20 px-4 py-2 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30">
              <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                {currentSlide + 1} / {filteredProjects.length}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to start your next project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/35 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <span>Start Your Project</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={handleModalClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            ref={modalRef}
            className="relative max-w-4xl w-full rounded-2xl bg-white dark:bg-black p-8 overflow-hidden"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${projects.find(p => p.id === selectedProject)?.color} flex items-center justify-center`}>
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-black dark:text-white">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <p className="text-red-600 dark:text-red-400">
                    {categories.find(c => c.id === projects.find(p => p.id === selectedProject)?.category)?.label}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                {projects.find(p => p.id === selectedProject)?.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {Object.entries(projects.find(p => p.id === selectedProject)?.stats || {}).map(([key, value]) => (
                  <div key={key} className="text-center p-4 rounded-xl bg-red-50 dark:bg-red-900/20">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${projects.find(p => p.id === selectedProject)?.color} bg-clip-text text-transparent`}>
                      {value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 capitalize mt-2">
                      {key}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xl font-bold text-black dark:text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {projects.find(p => p.id === selectedProject)?.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 dark:from-red-500/20 dark:to-red-600/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}