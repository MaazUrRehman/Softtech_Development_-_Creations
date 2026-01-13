'use client';

import { motion } from 'framer-motion';
import {
    Search,
    Palette,
    Code,
    TestTube,
    Rocket,
    RefreshCw,
    CheckCircle,
    Users,
    ArrowRight,
    Sparkles,
    Zap,
    Layers,
    Cpu
} from 'lucide-react';

export default function HowWeWork() {
    const steps = [
        {
            number: "01",
            icon: <Search className="w-6 h-6" />,
            title: "Discovery & Analysis",
            description: "Deep dive into your business goals, target audience, and technical requirements to craft the perfect strategy.",
            color: "from-red-500 to-red-600",
            features: ["Requirement Analysis", "Market Research", "Competitor Analysis", "Goal Setting"]
        },
        {
            number: "02",
            icon: <Palette className="w-6 h-6" />,
            title: "Design & Prototyping",
            description: "Creating intuitive user interfaces and interactive prototypes that bring your vision to life.",
            color: "from-red-600 to-red-700",
            features: ["UI/UX Design", "Wireframing", "Prototyping", "User Testing"]
        },
        {
            number: "03",
            icon: <Code className="w-6 h-6" />,
            title: "Development",
            description: "Agile development using cutting-edge technologies to build robust, scalable solutions.",
            color: "from-red-700 to-red-800",
            features: ["Frontend Development", "Backend Development", "API Integration", "Database Design"]
        },
        {
            number: "04",
            icon: <TestTube className="w-6 h-6" />,
            title: "Testing & Quality",
            description: "Comprehensive testing to ensure flawless performance across all devices and platforms.",
            color: "from-red-800 to-red-900",
            features: ["Unit Testing", "Integration Testing", "Performance Testing", "Security Audit"]
        },
        {
            number: "05",
            icon: <Rocket className="w-6 h-6" />,
            title: "Deployment",
            description: "Smooth deployment with continuous integration and delivery pipelines for seamless launches.",
            color: "from-red-900 to-red-950",
            features: ["CI/CD Pipeline", "Server Configuration", "Domain Setup", "SSL Certification"]
        },
        {
            number: "06",
            icon: <RefreshCw className="w-6 h-6" />,
            title: "Maintenance & Support",
            description: "Ongoing support, updates, and optimization to keep your solution performing at its best.",
            color: "from-red-950 to-red-900",
            features: ["Regular Updates", "Performance Monitoring", "Technical Support", "Feature Enhancements"]
        }
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

                {/* Additional floating shapes */}
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
                    className="absolute top-20 right-10 w-20 h-20 border border-red-200/25 dark:border-red-600/12"
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                />

                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-32 left-20 w-16 h-16 border-2 border-dashed border-red-200/30 dark:border-red-700/15 rounded-full"
                />

                <motion.div
                    animate={{
                        x: [0, 15, 0, -15, 0],
                        y: [0, -15, 0, 15, 0]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-40 left-1/4 w-12 h-12 border border-red-300/20 dark:border-red-500/8 rounded-full"
                />

                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                        scale: { duration: 4, repeat: Infinity }
                    }}
                    className="absolute bottom-1/3 right-20 w-24 h-24 border border-red-200/20 dark:border-red-600/8"
                    style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
                />
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
                        <Zap className="w-4 h-4 text-red-600 dark:text-red-400" />
                        <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                            Our Process
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        <span className="block text-black dark:text-white">Our Proven</span>
                        <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                            Development Process
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                    >
                        A systematic approach that transforms ideas into exceptional digital products through
                        collaboration, innovation, and technical excellence.
                    </motion.p>
                </motion.div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/20 via-red-600/30 to-red-700/20 hidden lg:block" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.8 }}
                                className={`relative ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:mt-32'}`}
                            >
                                {/* Step Number Connection */}
                                <div className="absolute hidden lg:block top-8 -left-12 w-24 h-0.5 bg-gradient-to-r from-red-500/30 to-red-600/30" />

                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative group"
                                >
                                    {/* Glow Effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} />

                                    <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 shadow-lg">
                                        {/* Step Header */}
                                        <div className="flex items-start gap-6 mb-6">
                                            <motion.div
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                                className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                                            >
                                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-md">
                                                    <span className="text-xs font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                                                        {step.number}
                                                    </span>
                                                </div>
                                                <div className="text-white">
                                                    {step.icon}
                                                </div>
                                            </motion.div>

                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                                                    {step.title}
                                                </h3>
                                                <div className={`h-1 w-12 bg-gradient-to-r ${step.color} rounded-full mb-4`} />
                                                <p className="text-gray-600 dark:text-gray-300">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Features List */}
                                        <div className="grid grid-cols-2 gap-3 mt-6">
                                            {step.features.map((feature, featureIndex) => (
                                                <motion.div
                                                    key={featureIndex}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2 + featureIndex * 0.1 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <div className={`p-1 rounded-full bg-gradient-to-br ${step.color} bg-opacity-10`}>
                                                        <CheckCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                        {feature}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Progress Arrow */}
                                        {index < steps.length - 1 && (
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:block"
                                            >
                                                <div className={`p-2 rounded-full bg-gradient-to-br ${step.color} bg-opacity-10 border border-red-200/30 dark:border-red-800/30`}>
                                                    <ArrowRight className="w-5 h-5 text-red-600 dark:text-red-400" />
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Methodology Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mt-20"
                >
                </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-10 w-16 h-16 border border-red-200/25 dark:border-red-700/15 rounded-full hidden lg:block"
            />
            <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, 180, 360] }}
                transition={{
                    y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute top-20 left-10 w-12 h-12 border border-red-200/20 dark:border-red-600/8"
                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            />
        </section>
    );
}