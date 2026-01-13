'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Code, 
  Globe,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let animationId: number;
    let time = 0;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(${255 - Math.random() * 100}, ${Math.random() * 50}, ${Math.random() * 50}, ${0.3 + Math.random() * 0.2})`
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(0.5, 'rgba(239, 68, 68, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw geometric patterns
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.1)';
      ctx.lineWidth = 1;
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const offsetX = Math.sin(time + x * 0.01) * 10;
          const offsetY = Math.cos(time + y * 0.01) * 10;
          
          ctx.beginPath();
          ctx.moveTo(x + offsetX, y + offsetY);
          ctx.lineTo(x + gridSize + offsetX, y + offsetY);
          ctx.lineTo(x + gridSize + offsetX, y + gridSize + offsetY);
          ctx.stroke();
        }
      }

      // Draw particles
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          particle.x -= dx * 0.02;
          particle.y -= dy * 0.02;
        }
        
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw floating geometric shapes
      const shapes = [
        { x: canvas.width * 0.8, y: canvas.height * 0.2, size: 60, rotation: time },
        { x: canvas.width * 0.2, y: canvas.height * 0.7, size: 80, rotation: -time },
        { x: canvas.width * 0.6, y: canvas.height * 0.6, size: 40, rotation: time * 0.5 }
      ];

      shapes.forEach(shape => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.15)';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        
        // Draw hexagon
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * 2 * Math.PI) / 6;
          const x = Math.cos(angle) * shape.size;
          const y = Math.sin(angle) * shape.size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const stats = [
    { value: '250+', label: 'Projects Delivered', icon: <Code className="w-5 h-5" /> },
    { value: '99%', label: 'Client Satisfaction', icon: <CheckCircle className="w-5 h-5" /> },
    { value: '50+', label: 'Happy Clients', icon: <Globe className="w-5 h-5" /> },
    { value: '24/7', label: 'Support', icon: <Shield className="w-5 h-5" /> },
  ];

  const features = [
    { text: 'Modern & Scalable Solutions', icon: <Zap className="w-5 h-5" /> },
    { text: 'Cutting-Edge Technology Stack', icon: <Sparkles className="w-5 h-5" /> },
    { text: 'Performance Optimized', icon: <ArrowRight className="w-5 h-5" /> },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-red-50/20 to-white dark:from-black dark:via-red-950/10 dark:to-black"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Geometric Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: -100, y: -100 }}
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-red-200/20 dark:border-red-800/20 rounded-full"
        />
        <motion.div
          initial={{ x: 100, y: 100 }}
          animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-red-300/15 dark:border-red-700/15 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-64 h-64 border border-red-400/10 dark:border-red-600/10"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-red-600 dark:text-red-400" />
              <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                Trusted by 50+ Global Companies
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="block text-black dark:text-white">
                Transform Your
              </span>
              <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                Digital Presence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            >
              We craft exceptional digital experiences that drive results. 
              From cutting-edge web applications to scalable enterprise solutions, 
              we turn your vision into reality.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-800/50 transition-colors">
                    <div className="text-red-600 dark:text-red-400">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/Contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-red-500/25 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="/Portfolio"
                className="group px-8 py-4 border-2 border-red-600 dark:border-red-500 text-red-700 dark:text-red-400 font-semibold rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  View Our Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-4 w-64 h-80 bg-gradient-to-br from-red-500/10 to-red-600/5 dark:from-red-500/5 dark:to-red-600/10 backdrop-blur-sm rounded-2xl border border-red-200/20 dark:border-red-700/20 p-6 shadow-xl"
            >
              <div className="w-full h-32 bg-gradient-to-r from-red-400/20 to-red-500/20 rounded-lg mb-4" />
              <div className="space-y-3">
                <div className="h-3 bg-red-300/20 dark:bg-red-600/20 rounded-full" />
                <div className="h-3 bg-red-300/20 dark:bg-red-600/20 rounded-full w-2/3" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 -left-4 w-56 h-72 bg-gradient-to-tr from-white/10 to-red-100/5 dark:from-black/10 dark:to-red-900/5 backdrop-blur-sm rounded-2xl border border-red-200/20 dark:border-red-700/20 p-6 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-red-300" />
                  <div className="w-3 h-3 rounded-full bg-red-200" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    className="aspect-square bg-gradient-to-br from-red-400/30 to-red-500/20 rounded"
                  />
                ))}
              </div>
            </motion.div>

            {/* Main Visual */}
            <div className="relative w-full h-[500px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 m-auto w-96 h-96 border border-red-300/20 dark:border-red-700/20 rounded-full"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 m-auto w-80 h-80 border-2 border-dashed border-red-400/30 dark:border-red-600/30 rounded-full"
              />
              
              <div className="absolute inset-0 m-auto w-64 h-64 bg-gradient-to-br from-red-600/20 via-red-500/10 to-transparent dark:from-red-700/20 dark:via-red-600/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                  className="w-48 h-48 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex flex-col items-center justify-center text-white shadow-2xl shadow-red-600/30"
                >
                  <Zap className="w-16 h-16 mb-4" />
                  <div className="text-2xl font-bold">SOFTTECH</div>
                  <div className="text-sm opacity-90">Since 2015</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-red-400/50 dark:border-red-600/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-red-500/70 dark:bg-red-400/70 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}