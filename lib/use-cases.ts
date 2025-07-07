import { UseCase } from "@/types/use-case";

const useCases: Omit<UseCase, 'title' | 'label' | 'description'>[] = [
  // Experience Vouchers
  {
    id: "experience-vouchers",
    icon: "gift",
    hero: {
      title: "Unforgettable Experiences, Effortless Gifting",
      subtitle: "Transform your business with our digital experience vouchers that create lasting memories and drive customer engagement"
    },
    overview: {
      title: "Experience Vouchers for Every Occasion",
      description: "Offer your customers the gift of choice with our versatile experience vouchers. Perfect for birthdays, anniversaries, corporate rewards, and special occasions, our platform makes it easy to create, distribute, and track digital vouchers that never expire until used."
    },
    features: [
      { 
        icon: "gift",
        title: "Digital & Physical Options",
        description: "Choose between instant digital delivery or premium printed vouchers with custom branding"
      },
      { 
        icon: "smartphone",
        title: "Mobile-First Experience",
        description: "Easy redemption via mobile devices with QR code scanning and digital wallets"
      },
      { 
        icon: 'clock',
        title: "Flexible Validity",
        description: "Set custom expiration dates or offer open-ended vouchers that never expire"
      },
      { 
        icon: 'bar-chart-2',
        title: "Real-time Analytics",
        description: "Track redemption rates, customer behavior, and revenue impact with our comprehensive dashboard"
      },
    ],
    benefits: [
      {
        icon: "dollar-sign",
        title: "Increased Revenue",
        description: "72% of recipients spend more than the voucher's face value"
      },
      {
        icon: "users",
        title: "New Customer Acquisition",
        description: "60% of consumers discover new brands through vouchers"
      },
      {
        icon: "repeat",
        title: "Higher Retention",
        description: "45% of voucher users become repeat customers"
      },
      {
        icon: "trending-up",
        title: "Breakage Revenue",
        description: "10-15% of gift vouchers typically go unredeemed"
      }
    ],
    stats: [
      {
        value: "85%",
        label: "Customer Satisfaction"
      },
      {
        value: "3.5x",
        label: "Average Spend Over Face Value"
      },
      {
        value: "92%",
        label: "Redemption Rate"
      }
    ],
    cta: {
      title: "Ready to Transform Your Gifting Strategy?",
      description: "Join thousands of businesses boosting their revenue and customer engagement with our experience voucher platform.",
      buttonText: "Get Started Today",
      buttonHref: "/contact"
    },
    testimonial: {
      quote: "Since implementing Gifthero's experience vouchers, we've seen a 40% increase in repeat business and our customers love the flexibility.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "Adventure Co."
    },
  },
  // Loyalty Programs
  {
    id: "loyalty-programs",
    icon: "award",
    hero: {
      title: "Build Lasting Customer Relationships",
      subtitle: "Create a loyalty program that keeps customers coming back and spending more with your business"
    },
    overview: {
      title: "Loyalty That Drives Results",
      description: "Our comprehensive loyalty platform helps you create meaningful connections with your customers through rewards, points, and exclusive benefits that keep them engaged and coming back for more."
    },
    features: [
      { 
        icon: "award",
        title: "Customizable Rewards",
        description: "Create a points system, tiered memberships, or cashback rewards that match your business model"
      },
      { 
        icon: "users",
        title: "Member Segmentation",
        description: "Target different customer segments with personalized offers and rewards"
      },
      { 
        icon: 'bar-chart-2',
        title: "Performance Analytics",
        description: "Track program performance, customer behavior, and ROI with our powerful analytics dashboard"
      },
      { 
        icon: 'smartphone',
        title: "Mobile App Integration",
        description: "Seamlessly integrate with your mobile app or use our white-label solution"
      },
    ],
    benefits: [
      {
        icon: "repeat",
        title: "Increased Retention",
        description: "Loyal customers spend 67% more than new ones"
      },
      {
        icon: "trending-up",
        title: "Higher Spend",
        description: "Members spend 18% more than non-members"
      },
      {
        icon: "users",
        title: "Valuable Data",
        description: "Gain insights into customer preferences and behavior"
      },
      {
        icon: "message-square",
        title: "Word of Mouth",
        description: "Satisfied members refer 5x more customers"
      }
    ],
    stats: [
      {
        value: "75%",
        label: "of consumers prefer brands with rewards"
      },
      {
        value: "4.5x",
        label: "higher spend from loyal customers"
      },
      {
        value: "89%",
        label: "of consumers are more loyal with points programs"
      }
    ],
    cta: {
      title: "Ready to Build Customer Loyalty?",
      description: "Discover how our loyalty platform can transform your customer relationships and boost your bottom line.",
      buttonText: "Start Your Program",
      buttonHref: "/contact"
    },
    testimonial: {
      quote: "Our loyalty program powered by Gifthero has increased our repeat business by 65% in just six months. The platform is intuitive and our customers love the rewards.",
      author: "Michael Chen",
      role: "CEO",
      company: "Urban Eats"
    },
  },
  // Event Ticketing & Access
  {
    id: "ticketing",
    icon: "ticket",
    hero: {
      title: "Seamless Event Management",
      subtitle: "Sell tickets, manage access, and create unforgettable event experiences with our comprehensive platform"
    },
    overview: {
      title: "End-to-End Event Solutions",
      description: "From small gatherings to large-scale conferences, our ticketing and access management system provides everything you need to plan, promote, and execute successful events."
    },
    features: [
      { 
        icon: "ticket",
        title: "Flexible Ticketing",
        description: "Create multiple ticket types with different prices, capacities, and perks"
      },
      { 
        icon: "smartphone",
        title: "Mobile Check-in",
        description: "Fast, contactless entry with QR code scanning and digital tickets"
      },
      { 
        icon: 'clock',
        title: "Real-time Updates",
        description: "Keep attendees informed with automated notifications and alerts"
      },
      { 
        icon: 'users',
        title: "Attendee Management",
        description: "Track attendance, manage waitlists, and gather valuable attendee data"
      },
    ],
    benefits: [
      {
        icon: "credit-card",
        title: "Increase Sales",
        description: "Sell tickets 24/7 through multiple channels"
      },
      {
        icon: "shield",
        title: "Reduce Fraud",
        description: "Secure ticketing with unique QR codes and validation"
      },
      {
        icon: "bar-chart-2",
        title: "Valuable Insights",
        description: "Real-time data on ticket sales and attendee behavior"
      },
      {
        icon: "zap",
        title: "Save Time",
        description: "Automate ticketing and check-in processes"
      }
    ],
    stats: [
      {
        value: "40%",
        label: "faster check-in times"
      },
      {
        value: "95%",
        label: "reduction in ticket fraud"
      },
      {
        value: "3M+",
        label: "tickets processed annually"
      }
    ],
    cta: {
      title: "Ready to Transform Your Events?",
      description: "Discover how our ticketing and access solutions can take your events to the next level.",
      buttonText: "Get Started",
      buttonHref: "/contact"
    },
    testimonial: {
      quote: "The Gifthero platform has revolutionized how we manage our events. The check-in process is seamless, and the real-time data helps us make better decisions on the fly.",
      author: "Jessica Williams",
      role: "Event Director",
      company: "Summit Events"
    },
  },
  // Employee Rewards & Recognition
  {
    id: "employee-rewards",
    icon: "award",
    hero: {
      title: "Recognize, Reward, Retain",
      subtitle: "Boost employee engagement and retention with a powerful rewards and recognition platform"
    },
    overview: {
      title: "A Culture of Appreciation",
      description: "Our employee rewards platform makes it easy to recognize achievements, celebrate milestones, and create a positive workplace culture that attracts and retains top talent."
    },
    features: [
      { 
        icon: "award",
        title: "Recognition Programs",
        description: "Create custom recognition programs that align with your company values"
      },
      { 
        icon: "users",
        title: "Peer Recognition",
        description: "Empower employees to recognize each other's contributions"
      },
      { 
        icon: 'gift',
        title: "Reward Catalog",
        description: "Choose from thousands of rewards or add your own custom options"
      },
      { 
        icon: 'bar-chart-2',
        title: "Engagement Analytics",
        description: "Measure the impact of your recognition programs with detailed reporting"
      },
    ],
    benefits: [
      {
        icon: "smile",
        title: "Higher Engagement",
        description: "Recognized employees are 63% more engaged"
      },
      {
        icon: "users",
        title: "Better Retention",
        description: "Companies with recognition programs have 31% lower turnover"
      },
      {
        icon: "trending-up",
        title: "Increased Productivity",
        description: "Recognized employees are 23% more productive"
      },
      {
        icon: "award",
        title: "Stronger Culture",
        description: "Build a culture of appreciation and recognition"
      }
    ],
    stats: [
      {
        value: "85%",
        label: "of employees feel more motivated"
      },
      {
        value: "4x",
        label: "more likely to stay with the company"
      },
      {
        value: "90%",
        label: "of employees say recognition matters"
      }
    ],
    cta: {
      title: "Ready to Transform Your Workplace?",
      description: "Discover how our employee rewards platform can help you build a more engaged and productive team.",
      buttonText: "Learn More",
      buttonHref: "/contact"
    },
    testimonial: {
      quote: "Since implementing Gifthero's employee rewards platform, we've seen a 40% increase in employee satisfaction scores and a significant drop in turnover. The platform is intuitive and our team loves it!",
      author: "David Kim",
      role: "HR Director",
      company: "TechForward"
    },
  },
  // Gift Cards
  {
    id: "gift-cards",
    icon: "gift",
    hero: {
      title: "The Perfect Gift, Every Time",
      subtitle: "Sell digital and physical gift cards that drive sales and delight customers"
    },
    overview: {
      title: "Gift Cards That Work for Your Business",
      description: "Our flexible gift card platform helps you create, sell, and manage digital and physical gift cards that drive revenue, attract new customers, and increase brand awareness."
    },
    features: [
      { 
        icon: "dollar-sign",
        title: "Digital & Physical Cards",
        description: "Offer both digital and physical gift card options to meet customer preferences"
      },
      { 
        icon: "smartphone",
        title: "Mobile-First Experience",
        description: "Easy purchasing and redemption via mobile devices with digital wallets"
      },
      { 
        icon: 'tag',
        title: "Custom Designs",
        description: "Create beautiful, on-brand gift cards with your logo and colors"
      },
      { 
        icon: 'users',
        title: "Bulk Purchasing",
        description: "Enable corporate and bulk purchases with custom pricing and terms"
      },
    ],
    benefits: [
      {
        icon: "dollar-sign",
        title: "Immediate Revenue",
        description: "Get paid upfront for gift cards that may be redeemed later"
      },
      {
        icon: "users",
        title: "New Customers",
        description: "72% of gift card recipients are new to the business"
      },
      {
        icon: "trending-up",
        title: "Higher Spend",
        description: "Customers spend 20-40% more than the gift card value"
      },
      {
        icon: "repeat",
        title: "Repeat Business",
        description: "76% of gift card users return for additional purchases"
      }
    ],
    stats: [
      {
        value: "$200B+",
        label: "annual gift card market size"
      },
      {
        value: "72%",
        label: "of consumers have received a gift card"
      },
      {
        value: "$59",
        label: "average gift card value"
      }
    ],
    cta: {
      title: "Ready to Boost Your Revenue with Gift Cards?",
      description: "Discover how our gift card platform can help you increase sales and attract new customers.",
      buttonText: "Get Started",
      buttonHref: "/contact"
    },
    testimonial: {
      quote: "Gifthero's gift card solution has been a game-changer for our business. We've seen a 35% increase in holiday sales and attracted hundreds of new customers.",
      author: "Emily Rodriguez",
      role: "Retail Manager",
      company: "Urban Trends"
    },
  },
  // Monetary Vouchers
  {
    id: "monetary-vouchers",
    icon: "credit-card",
    hero: {
      title: "Flexible Value, Maximum Impact",
      subtitle: "Monetary vouchers that drive sales, reward customers, and simplify your incentive programs"
    },
    overview: {
      title: "The Power of Monetary Value",
      description: "Our monetary voucher solutions provide the perfect balance of flexibility and control, allowing you to deliver value that customers can use exactly how they want, while maintaining your brand presence and driving business results."
    },
    features: [
      { 
        icon: "dollar-sign",
        title: "Fixed-Value Vouchers",
        description: "Issue vouchers with set monetary values for predictable budgeting and spending"
      },
      { 
        icon: "smartphone",
        title: "Digital Delivery",
        description: "Instant digital delivery via email, SMS, or mobile apps for immediate use"
      },
      { 
        icon: 'shield',
        title: "Secure & Reliable",
        description: "Advanced security features including unique codes, expiration dates, and usage limits"
      },
      { 
        icon: 'bar-chart-2',
        title: "Detailed Reporting",
        description: "Comprehensive analytics on redemption rates, customer behavior, and ROI"
      },
    ],
    benefits: [
      {
        icon: "dollar-sign",
        title: "Increased Sales",
        description: "Customers spend 2.5x the voucher value on average"
      },
      {
        icon: "users",
        title: "Customer Acquisition",
        description: "Attract new customers with compelling monetary incentives"
      },
      {
        icon: "repeat",
        title: "Repeat Business",
        description: "65% of voucher users make additional purchases"
      },
      {
        icon: "trending-up",
        title: "Brand Loyalty",
        description: "Build lasting relationships with valuable incentives"
      }
    ],
    stats: [
      {
        value: "78%",
        label: "of consumers prefer monetary vouchers"
      },
      {
        value: "3.2x",
        label: "average spend over voucher value"
      },
      {
        value: "85%",
        label: "redemption rate"
      }
    ],
    cta: {
      title: "Ready to Boost Your Business with Monetary Vouchers?",
      description: "Discover how our flexible voucher solutions can drive sales and customer engagement for your business.",
      buttonText: "Get Started",
      buttonHref: "/contact"
    },
    testimonial: {
      quote: "Monetary vouchers have transformed our customer acquisition strategy. We've seen a 45% increase in new customers and a 30% boost in average order value since implementing Gifthero's solution.",
      author: "Rachel Chen",
      role: "Head of Marketing",
      company: "Urban Retail Group"
    },
  },
  // Corporate Gifting
  {
    id: "corporate-gifting",
    icon: "briefcase",
    hero: {
      title: "Elevate Your Corporate Gifting Strategy",
      subtitle: "Thoughtful, branded gifts that strengthen business relationships and drive engagement"
    },
    overview: {
      title: "Corporate Gifting That Makes an Impact",
      description: "Our corporate gifting platform helps businesses of all sizes create meaningful connections with clients, employees, and partners through personalized, memorable gifts that reflect your brand values and appreciation."
    },
    features: [
      { 
        icon: "gift",
        title: "Curated Gift Collections",
        description: "Choose from premium, customizable gifts for every occasion and budget"
      },
      { 
        icon: "edit-3",
        title: "Custom Branding",
        description: "Add your logo, colors, and personalized messages to every gift"
      },
      { 
        icon: 'truck',
        title: "Global Delivery",
        description: "Seamless shipping to recipients worldwide with real-time tracking"
      },
      { 
        icon: 'users',
        title: "Bulk Management",
        description: "Easily manage large-scale gift campaigns with our intuitive platform"
      },
    ],
    benefits: [
      {
        icon: "heart",
        title: "Strengthen Relationships",
        description: "Show appreciation and build lasting business connections"
      },
      {
        icon: "trending-up",
        title: "Increase Brand Loyalty",
        description: "84% of recipients feel more positive about brands that send gifts"
      },
      {
        icon: "users",
        title: "Employee Retention",
        description: "Recognized employees are 4x more likely to stay"
      },
      {
        icon: "bar-chart-2",
        title: "Measurable ROI",
        description: "Track engagement and measure the impact of your gifting"
      }
    ],
    stats: [
      {
        value: "92%",
        label: "of executives say gifting builds relationships"
      },
      {
        value: "4x",
        label: "more likely to close deals with gifts"
      },
      {
        value: "78%",
        label: "of companies plan to increase gifting budgets"
      }
    ],
    cta: {
      title: "Ready to Transform Your Corporate Gifting?",
      description: "Discover how our gifting solutions can help you build stronger business relationships and drive engagement.",
      buttonText: "Explore Gifts",
      buttonHref: "/contact"
    },
    testimonial: {
      quote: "Gifthero's corporate gifting platform has revolutionized how we show appreciation to our clients. The ability to track deliveries and see recipient reactions has been invaluable for our relationship-building efforts.",
      author: "Michael Thompson",
      role: "VP of Business Development",
      company: "Horizon Partners"
    },
  },
  // Membership & Subscription Programs
  {
    id: "membership-subscription",
    icon: "star",
    hero: {
      title: "Build Recurring Revenue with Membership Programs",
      subtitle: "Create valuable subscription experiences that keep customers engaged and coming back"
    },
    overview: {
      title: "Memberships That Matter",
      description: "Transform one-time buyers into loyal subscribers with our comprehensive membership and subscription platform. Create recurring revenue streams while delivering exceptional value to your most engaged customers."
    },
    features: [
      { 
        icon: "layers",
        title: "Flexible Tiers",
        description: "Create multiple membership levels with different benefits and pricing"
      },
      { 
        icon: "refresh-cw",
        title: "Recurring Billing",
        description: "Automated billing cycles with secure payment processing"
      },
      { 
        icon: 'award',
        title: "Exclusive Benefits",
        description: "Offer members-only perks, discounts, and early access"
      },
      { 
        icon: 'bar-chart-2',
        title: "Performance Insights",
        description: "Track member engagement, churn rates, and revenue metrics"
      },
    ],
    benefits: [
      {
        icon: "repeat",
        title: "Predictable Revenue",
        description: "Steady cash flow from recurring subscriptions"
      },
      {
        icon: "users",
        title: "Higher CLV",
        description: "Subscribers spend 3-5x more than one-time buyers"
      },
      {
        icon: "shield",
        title: "Reduced Churn",
        description: "Exclusive benefits keep members engaged long-term"
      },
      {
        icon: "message-circle",
        title: "Community Building",
        description: "Foster a sense of belonging among members"
      }
    ],
    stats: [
      {
        value: "100%",
        label: "year-over-year growth in subscriptions"
      },
      {
        value: "75%",
        label: "of consumers prefer subscription services"
      },
      {
        value: "5x",
        label: "higher customer lifetime value"
      }
    ],
    cta: {
      title: "Ready to Launch Your Membership Program?",
      description: "Discover how our platform can help you build a thriving subscription business with engaged, loyal members.",
      buttonText: "Get Started",
      buttonHref: "/contact"
    },
    testimonial: {
      quote: "Since implementing Gifthero's membership platform, we've grown our subscriber base by 200% and increased our monthly recurring revenue by 150%. The flexibility and insights have been game-changing.",
      author: "Sophia Martinez",
      role: "Director of Growth",
      company: "Wellness Collective"
    },
  },
  // Referral & Affiliate Programs
  {
    id: "referral-affiliate",
    icon: "users",
    hero: {
      title: "Turn Customers into Your Best Marketers",
      subtitle: "Powerful referral and affiliate programs that drive growth through word-of-mouth"
    },
    overview: {
      title: "Harness the Power of Word-of-Mouth",
      description: "Leverage your happiest customers and trusted partners to promote your brand with our comprehensive referral and affiliate marketing platform. Drive high-quality traffic, increase conversions, and grow your business through the power of personal recommendations."
    },
    features: [
      { 
        icon: "share-2",
        title: "Easy Sharing",
        description: "One-click sharing to social media, email, and messaging apps"
      },
      { 
        icon: "gift",
        title: "Automated Rewards",
        description: "Set up custom incentives that are automatically delivered"
      },
      { 
        icon: 'user-plus',
        title: "Affiliate Management",
        description: "Onboard, track, and manage your network of affiliates"
      },
      { 
        icon: 'bar-chart-2',
        title: "Performance Analytics",
        description: "Track clicks, conversions, and ROI in real-time"
      },
    ],
    benefits: [
      {
        icon: "trending-up",
        title: "Higher Conversion",
        description: "Referred customers convert 3-5x more than other channels"
      },
      {
        icon: "dollar-sign",
        title: "Lower CAC",
        description: "Acquire customers at a fraction of traditional marketing costs"
      },
      {
        icon: "users",
        title: "Quality Leads",
        description: "Referred customers have a 37% higher retention rate"
      },
      {
        icon: "award",
        title: "Brand Trust",
        description: "92% of people trust recommendations from people they know"
      }
    ],
    stats: [
      {
        value: "5x",
        label: "higher conversion rate from referrals"
      },
      {
        value: "82%",
        label: "of consumers seek referrals before purchasing"
      },
      {
        value: "16%",
        label: "higher lifetime value for referred customers"
      }
    ],
    cta: {
      title: "Ready to Launch Your Referral Program?",
      description: "Discover how our platform can help you turn your customers and partners into powerful brand advocates.",
      buttonText: "Get Started",
      buttonHref: "/contact"
    },
    testimonial: {
      quote: "Gifthero's referral platform has been instrumental in our growth. We've seen a 300% increase in customer acquisition through referrals, with a 40% lower cost per acquisition compared to other channels.",
      author: "James Wilson",
      role: "Growth Marketing Director",
      company: "Peak Performance"
    },
  },
];

export const getUseCases = (): Omit<UseCase, 'title' | 'label' | 'description'>[] => {
  return useCases;
};

export const getUseCaseById = (id: string): Omit<UseCase, 'title' | 'label' | 'description'> | undefined => {
  return useCases.find(useCase => useCase.id === id);
};
