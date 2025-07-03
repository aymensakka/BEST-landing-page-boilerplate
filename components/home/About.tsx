"use client";
import { motion } from "framer-motion";
import { Globe, Building2, Shield, Headphones } from "lucide-react";

const About = ({ 
  id, 
  locale 
}: { 
  id: string; 
  locale: any; 
}) => {
  const stats = [
    {
      icon: Globe,
      value: locale.stats.languages,
      label: "Languages",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Building2,
      value: locale.stats.businesses,
      label: "Businesses",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      value: locale.stats.uptime,
      label: "Uptime",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Headphones,
      value: locale.stats.support,
      label: "Support",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id={id} className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
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
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {locale.description}
            </p>
          </motion.div>
          
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Content */}
                <div className="relative text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Value */}
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom Section with Visual Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          {/* Trust Indicators */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              {/* Trust Badge 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  GDPR Compliant
                </div>
              </motion.div>
              
              {/* Trust Badge 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  SSL Secured
                </div>
              </motion.div>
              
              {/* Trust Badge 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Enterprise Ready
                </div>
              </motion.div>
              
              {/* Trust Badge 4 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Expert Support
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
