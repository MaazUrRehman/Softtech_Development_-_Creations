'use client';

import { motion } from 'framer-motion';
import { 
  Check,
  X,
  Star,
  Zap,
  Crown,
  Rocket,
  Shield,
  Clock,
  Users,
  Database,
  Globe,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Award
} from 'lucide-react';
import { useState } from 'react';

export default function PricePlanSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedPlan, setSelectedPlan] = useState<string>('professional');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small projects and startups',
      icon: <Star className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      monthlyPrice: 29,
      annualPrice: 24,
      popular: false,
      features: [
        { text: 'Up to 5 pages website', included: true },
        { text: 'Basic SEO optimization', included: true },
        { text: 'Mobile responsive design', included: true },
        { text: 'Contact form integration', included: true },
        { text: 'Basic analytics setup', included: true },
        { text: 'E-commerce functionality', included: false },
        { text: 'Custom domain', included: false },
        { text: 'Priority support', included: false },
        { text: 'Advanced animations', included: false },
        { text: 'Monthly maintenance', included: false },
      ],
      cta: 'Get Started'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-red-600 to-red-700',
      monthlyPrice: 79,
      annualPrice: 65,
      popular: true,
      features: [
        { text: 'Up to 15 pages website', included: true },
        { text: 'Advanced SEO optimization', included: true },
        { text: 'Mobile responsive design', included: true },
        { text: 'Contact form integration', included: true },
        { text: 'Advanced analytics setup', included: true },
        { text: 'Basic e-commerce', included: true },
        { text: 'Custom domain', included: true },
        { text: 'Priority support', included: true },
        { text: 'Advanced animations', included: true },
        { text: 'Monthly maintenance', included: false },
      ],
      cta: 'Get Professional'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large scale businesses',
      icon: <Crown className="w-6 h-6" />,
      color: 'from-red-700 to-red-800',
      monthlyPrice: 199,
      annualPrice: 165,
      popular: false,
      features: [
        { text: 'Unlimited pages website', included: true },
        { text: 'Premium SEO optimization', included: true },
        { text: 'Mobile responsive design', included: true },
        { text: 'Advanced form integrations', included: true },
        { text: 'Premium analytics setup', included: true },
        { text: 'Full e-commerce suite', included: true },
        { text: 'Multiple custom domains', included: true },
        { text: '24/7 priority support', included: true },
        { text: 'Premium animations', included: true },
        { text: 'Weekly maintenance', included: true },
      ],
      cta: 'Contact Sales'
    }
  ];

  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support for all plans'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Team Collaboration',
      description: 'Multiple team members can work together seamlessly'
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: 'Scalable Infrastructure',
      description: 'Grow your resources as your business expands'
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Delivered', icon: <Rocket className="w-5 h-5" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Star className="w-5 h-5" /> },
    { value: '24/7', label: 'Support Available', icon: <Clock className="w-5 h-5" /> },
    { value: '50+', label: 'Countries Served', icon: <Globe className="w-5 h-5" /> }
  ];

  const savings = {
    monthly: 0,
    annual: 20
  };

  const getPrice = (monthly: number, annual: number) => {
    return billingCycle === 'monthly' ? monthly : annual;
  };

  const calculateSavings = (monthlyPrice: number, annualPrice: number) => {
    const yearlyMonthlyTotal = monthlyPrice * 12;
    const yearlyAnnualTotal = annualPrice * 12;
    return Math.round(((yearlyMonthlyTotal - yearlyAnnualTotal) / yearlyMonthlyTotal) * 100);
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

        {/* Floating shapes */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-20 left-10 w-12 h-12 border border-red-200/15 dark:border-red-700/8 rounded-full"
        />
        
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 right-10 w-8 h-8 border border-red-300/10 dark:border-red-600/5 rounded-full"
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
            <Sparkles className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-700 dark:text-red-300">
              Transparent Pricing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="block text-black dark:text-white">Choose Your Perfect</span>
            <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Plan
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Flexible pricing plans designed to help your business grow. 
            No hidden fees, no surprises.
          </motion.p>
        </motion.div>

        
        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className={`text-lg font-semibold transition-colors ${billingCycle === 'monthly' ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-16 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 p-1 focus:outline-none focus:ring-2 focus:ring-red-500/50"
            >
              <motion.div
                animate={{ x: billingCycle === 'monthly' ? 0 : 32 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="w-6 h-6 bg-white rounded-full shadow-lg"
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-lg font-semibold transition-colors ${billingCycle === 'annual' ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                Annual
              </span>
              {billingCycle === 'annual' && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full"
                >
                  Save {savings.annual}%
                </motion.span>
              )}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 dark:text-gray-400 text-center"
          >
            {billingCycle === 'annual' 
              ? 'Switch to annual billing and save up to 20% on all plans!'
              : 'Switch to monthly billing for maximum flexibility.'}
          </motion.p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative cursor-pointer ${selectedPlan === plan.id ? 'scale-105' : ''} transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="px-6 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-sm shadow-lg shadow-red-500/25">
                    MOST POPULAR
                  </div>
                </motion.div>
              )}

              {/* Plan Card */}
              <div className={`relative h-full rounded-2xl overflow-hidden ${
                selectedPlan === plan.id 
                  ? 'ring-2 ring-red-500 dark:ring-red-400' 
                  : ''
              }`}>
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5`} />
                
                {/* Main Card */}
                <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-red-100/50 dark:border-red-900/30 h-full">
                  {/* Header */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${plan.color} bg-opacity-10`}>
                            <div className="text-red-600 dark:text-red-400">
                              {plan.icon}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-black dark:text-white">
                            {plan.name}
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {plan.description}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl md:text-5xl font-bold text-black dark:text-white">
                          ${getPrice(plan.monthlyPrice, plan.annualPrice)}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">/month</span>
                      </div>
                      {billingCycle === 'annual' && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-green-600 dark:text-green-400 text-sm mt-2"
                        >
                          Save ${(plan.monthlyPrice - plan.annualPrice) * 12} annually
                        </motion.div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                        selectedPlan === plan.id || plan.popular
                          ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/35'
                          : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-800/30'
                      }`}
                    >
                      {plan.cta}
                    </motion.button>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-red-100/50 to-transparent dark:via-red-900/30" />

                  {/* Features List */}
                  <div className="p-8">
                    <h4 className="text-lg font-semibold text-black dark:text-white mb-6">
                      What&apos;s included:
                    </h4>
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 + idx * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`p-1 rounded-full ${feature.included ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-red-500/10 text-red-600 dark:text-red-400'}`}>
                            {feature.included ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <X className="w-4 h-4" />
                            )}
                          </div>
                          <span className={`${feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-500'}`}>
                            {feature.text}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       

        
      </div>
    </section>
  );
}