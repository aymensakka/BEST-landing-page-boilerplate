import { UseCase as BaseUseCase } from '@/types/use-case';

export interface UseCase extends Omit<BaseUseCase, 'features' | 'benefits'> {
  // This interface extends the base UseCase type from types/use-case.ts
  // We omit features and benefits to override them with our specific structure
  
  // Features as an array of objects with title and optional description
  features?: Array<{
    title: string;
    description?: string;
    icon?: string | React.ReactNode;
  }>;
  
  // Benefits as an array of objects with title and optional description
  benefits?: Array<{
    title: string;
    description?: string;
    icon?: string | React.ReactNode;
  }>;
  
  // Keep these for backward compatibility with existing code
  featuresTitle?: string;
  featuresSubtitle?: string;
  benefitsTitle?: string;
  benefitsSubtitle?: string;
}

// Helper function to transform string arrays into feature/benefit objects
const mapToFeatureObjects = (items: string[]) => 
  items.map(item => ({
    title: item,
    description: '', // Empty description by default
    icon: 'check' // Default icon
  }));

// This is a regular function, not a hook, since it doesn't use any React hooks
export const getUseCases = (): UseCase[] => {
  return [
    {
      id: "experience-vouchers",
      label: "Experience Vouchers",
      description: "Craft unforgettable moments with experience vouchers",
      icon: "gift",
      features: [
        {
          title: "Customizable Experience Templates",
          description: "Design beautiful, on-brand vouchers for any experience with our intuitive editor. No coding required.",
          icon: "check"
        },
        {
          title: "Integrated Booking & Scheduling",
          description: "Allow customers to book specific dates and times upon purchase, syncing directly with your availability calendar.",
          icon: "check"
        },
        {
          title: "Tiered & Packaged Experiences",
          description: "Bundle multiple services or create premium tiers (e.g., 'VIP Spa Day') to increase the value of each sale.",
          icon: "check"
        },
        {
          title: "Automated Reminders & Communication",
          description: "Reduce no-shows with automated email and SMS reminders for upcoming bookings.",
          icon: "check"
        }
      ],
      benefits: [
        {
          title: "Attract New Demographics",
          description: "Reach customers seeking gifts that are more personal and memorable than physical products.",
          icon: "check"
        },
        {
          title: "Boost Off-Peak Sales",
          description: "Create and promote special experiences to fill capacity during traditionally slow periods.",
          icon: "check"
        },
        {
          title: "Increase Per-Customer Spending",
          description: "Experience vouchers often lead to additional on-site purchases and up-sells.",
          icon: "check"
        },
        {
          title: "Generate Social Buzz",
          description: "Unique experiences are highly shareable on social media, providing organic marketing for your brand.",
          icon: "check"
        }
      ]
    },
    {
      id: "monetary-vouchers",
      label: "Monetary Vouchers",
      description: "Flexible monetary vouchers for any occasion",
      icon: "dollar-sign",
      features: [
        {
          title: "Variable & Fixed Denominations",
          description: "Let customers choose any value or offer pre-set amounts (e.g., $25, $50, $100).",
          icon: "check"
        },
        {
          title: "Bulk Generation & Distribution",
          description: "Easily create and send hundreds of unique voucher codes for corporate clients or marketing campaigns.",
          icon: "check"
        },
        {
          title: "Advanced Security Features",
          description: "Protect against fraud with unique codes, expiration dates, and detailed redemption tracking.",
          icon: "check"
        },
        {
          title: "Omnichannel Redemption",
          description: "Allow customers to redeem their vouchers seamlessly online, in-store, or over the phone.",
          icon: "check"
        }
      ],
      benefits: [
        {
          title: "Improve Immediate Cash Flow",
          description: "Receive payment upfront, before products or services are rendered, boosting your working capital.",
          icon: "check"
        },
        {
          title: "Increase Average Order Value",
          description: "Customers redeeming vouchers often spend more than the voucher's face value.",
          icon: "check"
        },
        {
          title: "Reduce Customer Acquisition Cost",
          description: "Vouchers are often shared as gifts, bringing in new customers at no additional marketing cost.",
          icon: "check"
        },
        {
          title: "Build Customer Loyalty",
          description: "Regular voucher programs encourage repeat purchases and strengthen customer relationships.",
          icon: "check"
        }
      ]
    },
    {
      id: "gift-cards",
      label: "useCases.giftCards.title",
      description: "useCases.giftCards.description",
      icon: "credit-card",
      features: mapToFeatureObjects([
        "useCases.giftCards.features.0",
        "useCases.giftCards.features.1",
        "useCases.giftCards.features.2"
      ]),
      benefits: mapToFeatureObjects([
        "useCases.giftCards.benefits.0",
        "useCases.giftCards.benefits.1",
        "useCases.giftCards.benefits.2"
      ])
    },
    {
      id: "loyalty-programs",
      label: "useCases.loyaltyPrograms.title",
      description: "useCases.loyaltyPrograms.description",
      icon: "users",
      features: mapToFeatureObjects([
        "useCases.loyaltyPrograms.features.0",
        "useCases.loyaltyPrograms.features.1",
        "useCases.loyaltyPrograms.features.2"
      ]),
      benefits: mapToFeatureObjects([
        "useCases.loyaltyPrograms.benefits.0",
        "useCases.loyaltyPrograms.benefits.1",
        "useCases.loyaltyPrograms.benefits.2"
      ])
    },
    {
      id: "ticketing",
      label: "useCases.ticketing.title",
      description: "useCases.ticketing.description",
      icon: "ticket",
      features: mapToFeatureObjects([
        "useCases.ticketing.features.0",
        "useCases.ticketing.features.1",
        "useCases.ticketing.features.2"
      ]),
      benefits: mapToFeatureObjects([
        "useCases.ticketing.benefits.0",
        "useCases.ticketing.benefits.1",
        "useCases.ticketing.benefits.2"
      ])
    },
    {
      id: "employee-rewards",
      label: "useCases.employeeRewards.title",
      description: "useCases.employeeRewards.description",
      icon: "award",
      features: mapToFeatureObjects([
        "useCases.employeeRewards.features.0",
        "useCases.employeeRewards.features.1",
        "useCases.employeeRewards.features.2"
      ]),
      benefits: mapToFeatureObjects([
        "useCases.employeeRewards.benefits.0",
        "useCases.employeeRewards.benefits.1",
        "useCases.employeeRewards.benefits.2"
      ])
    },
    {
      id: "customer-retention",
      label: "useCases.customerRetention.title",
      description: "useCases.customerRetention.description",
      icon: "users",
      features: mapToFeatureObjects([
        "useCases.customerRetention.features.0",
        "useCases.customerRetention.features.1",
        "useCases.customerRetention.features.2"
      ]),
      benefits: mapToFeatureObjects([
        "useCases.customerRetention.benefits.0",
        "useCases.customerRetention.benefits.1",
        "useCases.customerRetention.benefits.2"
      ])
    },
    {
      id: "marketing-campaigns",
      label: "useCases.marketingCampaigns.title",
      description: "useCases.marketingCampaigns.description",
      icon: "bar-chart-2",
      features: mapToFeatureObjects([
        "Campaign management",
        "A/B testing",
        "Audience segmentation"
      ]),
      benefits: mapToFeatureObjects([
        "Increase customer engagement",
        "Track campaign performance",
        "Optimize marketing spend"
      ])
    },
    {
      id: "event-ticketing",
      label: "useCases.eventTicketing.title",
      description: "useCases.eventTicketing.description",
      icon: "ticket",
      features: mapToFeatureObjects([
        "useCases.eventTicketing.features.0",
        "useCases.eventTicketing.features.1",
        "useCases.eventTicketing.features.2"
      ]),
      benefits: mapToFeatureObjects([
        "useCases.eventTicketing.benefits.0",
        "useCases.eventTicketing.benefits.1",
        "useCases.eventTicketing.benefits.2"
      ])
    },
    {
      id: "corporate-gifting",
      label: "useCases.corporateGifting.title",
      description: "useCases.corporateGifting.description",
      icon: "gift",
      features: mapToFeatureObjects([
        "useCases.corporateGifting.features.0",
        "useCases.corporateGifting.features.1",
        "useCases.corporateGifting.features.2"
      ]),
      benefits: mapToFeatureObjects([
        "useCases.corporateGifting.benefits.0",
        "useCases.corporateGifting.benefits.1",
        "useCases.corporateGifting.benefits.2"
      ])
    }
  ];
};

// For backward compatibility
export const useUseCases = getUseCases;
