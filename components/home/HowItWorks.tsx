"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HowItWorks = ({ 
  id, 
  locale 
}: { 
  id: string; 
  locale: any; 
}) => {
  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id={id} className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {locale.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {locale.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>
          
          <div className="space-y-12 lg:space-y-16">
            {locale.steps.map((step: any, index: number) => (
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
                    <span className="text-white font-bold text-lg lg:text-xl">
                      {index + 1}
                    </span>
                  </motion.div>
                  
                  {/* Connecting Arrow (Mobile) */}
                  {index < locale.steps.length - 1 && (
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
