"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Sparkles, CheckCircle2 } from "lucide-react";

// Define the expected locale structure
type CTALocale = {
  title?: string;
  subtitle?: string;
  primaryButton?: string;
  secondaryButton?: string;
  badge?: string;
  noCreditCard?: string;
  features?: string[];
};

const CTA = ({ id, locale = {} }: { id: string; locale?: CTALocale }) => {
  // Default features in case they're not provided in the locale
  const defaultFeatures = [
    "No credit card required",
    "Cancel anytime",
    "24/7 support"
  ];

  // Use provided features or fall back to defaults
  const features = (locale.features || defaultFeatures).slice(0, 3).map((text, index) => ({
    text: text || defaultFeatures[index] || `Feature ${index + 1}`,
    icon: CheckCircle2
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] as const 
      },
    },
  } as const;

  return (
    <section 
      id={id}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-200 dark:bg-pink-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-400 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              {locale.badge}
            </div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            {locale.title}
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
          >
            {locale.subtitle}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
          >
            <Button
              size="lg"
              className="px-10 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Rocket className="w-5 h-5 mr-2" />
              {locale.primaryButton}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-6 text-lg font-semibold border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              {locale.secondaryButton}
            </Button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 inline-flex flex-col sm:flex-row items-center gap-4 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                <feature.icon className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm font-medium">{feature.text}</span>
                {index < features.length - 1 && (
                  <span className="hidden sm:block mx-4 text-gray-300 dark:text-gray-600">•</span>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 text-sm text-gray-500 dark:text-gray-400"
          >
            <p>{locale.noCreditCard}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
