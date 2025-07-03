"use client";
import { motion } from "framer-motion";
import { 
  Users, 
  Store, 
  QrCode, 
  Mail, 
  TrendingUp, 
  BarChart3,
  ArrowRight
} from "lucide-react";

const Features = ({ 
  id, 
  locale 
}: { 
  id: string; 
  locale: any; 
}) => {
  const features = [
    {
      icon: Users,
      title: locale.cards.groupGifts.title,
      description: locale.cards.groupGifts.description,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Store,
      title: locale.cards.inStoreSales.title,
      description: locale.cards.inStoreSales.description,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: QrCode,
      title: locale.cards.qrValidation.title,
      description: locale.cards.qrValidation.description,
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Mail,
      title: locale.cards.postalDelivery.title,
      description: locale.cards.postalDelivery.description,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: locale.cards.marketing.title,
      description: locale.cards.marketing.description,
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: BarChart3,
      title: locale.cards.autonomy.title,
      description: locale.cards.autonomy.description,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id={id} className="py-24 bg-gray-50 dark:bg-gray-900">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              
              {/* Icon */}
              <div className={`relative mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Learn More Arrow */}
                <div className="mt-6 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
