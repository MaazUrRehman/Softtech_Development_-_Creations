// components/PortfolioShowcase.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Circle,
  Briefcase
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  color: string;
  imageColor: string;
  stats: { [key: string]: string }; // Fixed: allows any string key with string value
}

interface PortfolioShowcaseProps {
  selectedCategory: string;
  projects: Project[];
}

export default function PortfolioShowcase({ selectedCategory, projects }: PortfolioShowcaseProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'branding', label: 'Branding' },
    { id: 'business', label: 'Business' },
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

  const handleModalClose = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setSelectedProject(null);
    }
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
  }, [isAutoPlaying]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedCategory]);

  if (filteredProjects.length === 0) {
    return (
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">No projects found in this category.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="showcase" className="relative py-16 overflow-hidden bg-gradient-to-b from-white via-red-50/10 to-white dark:from-black dark:via-red-950/5 dark:to-black">
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          <div 
            className="relative overflow-hidden rounded-3xl bg-white/40 dark:bg-black/40 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Navigation Buttons */}
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

            {/* Slides */}
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
                    {/* Project Image Area */}
                    <div className={`lg:w-1/2 h-full ${project.imageColor} rounded-2xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
                      
                      {/* Animated elements */}
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
                      
                      {/* Stats */}
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

            {/* Indicators */}
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

            {/* Counter */}
            <div className="absolute bottom-6 right-6 z-20 px-4 py-2 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30">
              <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                {currentSlide + 1} / {filteredProjects.length}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
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

            {(() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;
              
              return (
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-black dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-red-600 dark:text-red-400">
                        {categories.find(c => c.id === project.category)?.label}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-4 rounded-xl bg-red-50 dark:bg-red-900/20">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
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
                      {project.technologies.map((tech, i) => (
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
              );
            })()}
          </motion.div>
        </div>
      )}
    </section>
  );
}