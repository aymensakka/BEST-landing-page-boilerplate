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
      label: "useCases.experienceVouchers.title",
      description: "useCases.experienceVouchers.description",
      icon: "gift",
      features: mapToFeatureObjects([
        "useCases.experienceVouchers.features.0",
        "useCases.experienceVouchers.features.1",
        "useCases.experienceVouchers.features.2"
      ]),
      benefits: mapToFeatureObjects([
        "useCases.experienceVouchers.benefits.0",
        "useCases.experienceVouchers.benefits.1",
        "useCases.experienceVouchers.benefits.2"
      ])
    },
    {
      id: "monetary-vouchers",
      label: "useCases.monetaryVouchers.title",
      description: "useCases.monetaryVouchers.description",
      icon: "dollar-sign",
      features: mapToFeatureObjects([
        "useCases.monetaryVouchers.features.0",
        "useCases.monetaryVouchers.features.1",
        "useCases.monetaryVouchers.features.2"
      ]),
      benefits: mapToFeatureObjects([
        "useCases.monetaryVouchers.benefits.0",
        "useCases.monetaryVouchers.benefits.1",
        "useCases.monetaryVouchers.benefits.2"
      ])
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
