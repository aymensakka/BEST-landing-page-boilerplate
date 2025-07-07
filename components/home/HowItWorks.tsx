"use client";
import React from 'react';
import { motion, Variants } from "framer-motion";
import { ArrowRight, UserPlus, Settings, ShoppingCart, BarChart2 } from "lucide-react";

// Define the type for a single step
interface Step {
  title: string;
  description: string;
  icon?: string;
}

// Define the props type for the component
interface HowItWorksProps {
  id: string;
  locale?: {
    title?: string;
    subtitle?: string;
    steps?: Step[];
  };
}

// Default content in case translations are missing
const defaultContent = {
  title: "How It Works",
  subtitle: "Get started with our platform in just a few simple steps",
  steps: [
    {
      title: "Create Your Account",
      description: "Sign up for a free account and set up your business profile in minutes.",
      icon: "user-plus"
    },
    {
      title: "Customize Your Vouchers",
      description: "Design and customize your gift cards and vouchers with your branding and terms.",
      icon: "settings"
    },
    {
      title: "Start Selling",
      description: "Share your voucher links or integrate with your website to start selling instantly.",
      icon: "shopping-cart"
    },
    {
      title: "Manage & Track",
      description: "Easily manage your vouchers, track redemptions, and analyze performance from your dashboard.",
      icon: "bar-chart-2"
    }
  ]
};

// Icon mapping for the steps
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'user-plus': UserPlus,
  'settings': Settings,
  'shopping-cart': ShoppingCart,
  'bar-chart-2': BarChart2,
};

const HowItWorks = ({ 
  id, 
  locale = {}
}: HowItWorksProps) => {
  // Merge with default content to ensure all required fields exist
  const content = {
    title: locale?.title || defaultContent.title,
    subtitle: locale?.subtitle || defaultContent.subtitle,
    steps: (locale?.steps && locale.steps.length > 0) ? locale.steps : defaultContent.steps
  };

  // Function to get the appropriate icon component
  const getIconComponent = (iconName: string | undefined, index: number) => {
    if (!iconName) {
      return (
        <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
          {index + 1}
        </span>
      );
    }
    
    const IconComponent = iconMap[iconName];
    if (IconComponent) {
      return <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />;
    }
    
    return (
      <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
        {index + 1}
      </span>
    );
  };

  // Animation variants
  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] // Using cubic-bezier values for better type safety
      }
    }
  };

  return (
    <section id={id} className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {content.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            {content.subtitle}
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.steps?.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Central Circle */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl relative z-10"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      {getIconComponent(step.icon, index)}
                    </div>
                  </motion.div>
                  
                  {/* Connecting Arrow (Mobile) */}
                  {index < content.steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-4">
                      <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
                    </div>
                  )}
                </div>

                {/* Placeholder for Visual */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-64 h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <div className="text-center text-gray-600 dark:text-gray-400">
                      <div className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${
                        ['from-blue-400 to-blue-600', 'from-green-400 to-green-600', 'from-purple-400 to-purple-600', 
                         'from-orange-400 to-orange-600', 'from-pink-400 to-pink-600', 'from-indigo-400 to-indigo-600',
                         'from-emerald-400 to-emerald-600'][index % 7]
                      } flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                      <p className="text-sm font-medium">Step {index + 1}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
