"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Gift, 
  CreditCard, 
  TrendingUp, 
  Percent, 
  Users, 
  Trophy, 
  Calendar,
  CheckCircle,
  Clock
} from "lucide-react";

const UseCases = ({ 
  id, 
  locale 
}: { 
  id: string; 
  locale: any; 
}) => {
  const categories = [
    {
      title: locale.marketingCards.title,
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600",
      cards: [
        {
          ...locale.marketingCards.experienceVoucher,
          icon: Gift,
          gradient: "from-blue-500 to-cyan-500"
        },
        {
          ...locale.marketingCards.monetaryVoucher,
          icon: CreditCard,
          gradient: "from-green-500 to-emerald-500"
        },
        {
          ...locale.marketingCards.marketingVoucher,
          icon: TrendingUp,
          gradient: "from-purple-500 to-violet-500"
        },
        {
          ...locale.marketingCards.discountCards,
          icon: Percent,
          gradient: "from-orange-500 to-red-500"
        }
      ]
    },
    {
      title: locale.loyaltyPrograms.title,
      icon: Trophy,
      color: "from-purple-500 to-purple-600",
      cards: [
        {
          ...locale.loyaltyPrograms.membershipId,
          icon: Users,
          gradient: "from-indigo-500 to-blue-500"
        },
        {
          ...locale.loyaltyPrograms.loyaltyCard,
          icon: Trophy,
          gradient: "from-pink-500 to-rose-500"
        }
      ]
    },
    {
      title: locale.eventManagement.title,
      icon: Calendar,
      color: "from-green-500 to-green-600",
      cards: [
        {
          ...locale.eventManagement.eventTickets,
          icon: Calendar,
          gradient: "from-emerald-500 to-teal-500"
        }
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id={id} className="py-24 bg-white dark:bg-gray-800">
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
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            {locale.subtitle}
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center justify-center mb-12">
                <div className={`flex items-center space-x-3 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-2xl shadow-lg`}>
                  <category.icon className="w-6 h-6" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.cards.map((card: any, cardIndex: number) => (
                  <motion.div
                    key={cardIndex}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: cardIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant={card.status === "Available" ? "default" : "secondary"}
                        className={`${
                          card.status === "Available" 
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                            : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                        }`}
                      >
                        {card.status === "Available" ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <Clock className="w-3 h-3 mr-1" />
                        )}
                        {card.status}
                      </Badge>
                    </div>

                    {/* Icon */}
                    <div className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg`}>
                      <card.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                      {card.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {card.features.slice(0, 3).map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                          {feature}
                        </div>
                      ))}
                      {card.features.length > 3 && (
                        <div className="text-xs text-gray-400">
                          +{card.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-gray-50 dark:group-hover:bg-gray-800 transition-colors duration-300"
                      disabled={card.status !== "Available"}
                    >
                      {card.status === "Available" ? "Learn More" : "Coming Soon"}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
