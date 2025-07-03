"use client";
import { motion } from "framer-motion";
import { Check, CreditCard } from "lucide-react";
import Image from "next/image";

const Benefits = ({ locale }: { locale: any }) => {
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {locale.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {locale.subtitle}
            </p>
            
            {/* Benefits List */}
            <motion.ul className="space-y-4 mb-8">
              {locale.list.map((item: string, index: number) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
            
            {/* ROI Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {locale.roi}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {locale.roiDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl p-8 shadow-2xl">
              {/* Placeholder for Business Meeting Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-600 dark:text-gray-400">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <CreditCard className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-sm font-medium">{locale.imageAlt}</p>
                </div>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">+45%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Revenue Growth</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Happy Businesses</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
