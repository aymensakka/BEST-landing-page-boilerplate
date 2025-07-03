import { useTranslations } from "next-intl";

export type IconName = 'gift' | 'dollar' | 'smartphone' | 'clock' | 'bar-chart' | 'users' | 'award' | 'ticket';

export type UseCase = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  iconColor: string;
  features: {
    icon: IconName;
    iconColor: string;
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
};

export function generateUseCasePages(t: any): UseCase[] {
  return [
    {
      id: 'experience-vouchers',
      title: t('useCases.experienceVouchers.title'),
      description: t('useCases.experienceVouchers.description'),
      icon: 'gift',
      iconColor: 'text-purple-600',
      features: t('useCases.experienceVouchers.features', { returnObjects: true }).map((feature: string, index: number) => ({
        title: feature,
        description: feature,
        icon: ['gift', 'clock', 'bar-chart', 'users'][index % 4] as IconName,
        iconColor: ['text-purple-600', 'text-blue-600', 'text-green-600', 'text-yellow-600'][index % 4]
      })),
      stats: t('useCases.experienceVouchers.stats', { returnObjects: true })
    },
    {
      id: 'monetary-vouchers',
      title: t('useCases.monetaryVouchers.title'),
      description: t('useCases.monetaryVouchers.description'),
      icon: 'dollar',
      iconColor: 'text-green-600',
      features: t('useCases.monetaryVouchers.features', { returnObjects: true }).map((feature: string, index: number) => ({
        title: feature,
        description: feature,
        icon: ['dollar', 'smartphone', 'clock', 'award'][index % 4] as IconName,
        iconColor: ['text-green-600', 'text-blue-500', 'text-yellow-600', 'text-purple-500'][index % 4]
      })),
      stats: t('useCases.monetaryVouchers.stats', { returnObjects: true })
    },
    {
      id: 'marketing-vouchers',
      title: t('useCases.marketingVouchers.title'),
      description: t('useCases.marketingVouchers.description'),
      icon: 'award',
      iconColor: 'text-blue-600',
      features: t('useCases.marketingVouchers.features', { returnObjects: true }).map((feature: string, index: number) => ({
        title: feature,
        description: feature,
        icon: ['award', 'bar-chart', 'clock', 'users'][index % 4] as IconName,
        iconColor: ['text-blue-600', 'text-purple-500', 'text-yellow-500', 'text-green-500'][index % 4]
      })),
      stats: t('useCases.marketingVouchers.stats', { returnObjects: true })
    },
    {
      id: 'discount-cards',
      title: t('useCases.discountCards.title'),
      description: t('useCases.discountCards.description'),
      icon: 'ticket',
      iconColor: 'text-yellow-600',
      features: t('useCases.discountCards.features', { returnObjects: true }).map((feature: string, index: number) => ({
        title: feature,
        description: feature,
        icon: ['ticket', 'bar-chart', 'clock', 'award'][index % 4] as IconName,
        iconColor: ['text-yellow-600', 'text-purple-500', 'text-blue-500', 'text-green-500'][index % 4]
      })),
      stats: t('useCases.discountCards.stats', { returnObjects: true })
    },
    {
      id: 'loyalty-cards',
      title: t('useCases.loyaltyCards.title'),
      description: t('useCases.loyaltyCards.description'),
      icon: 'award',
      iconColor: 'text-red-600',
      features: t('useCases.loyaltyCards.features', { returnObjects: true }).map((feature: string, index: number) => ({
        title: feature,
        description: feature,
        icon: ['award', 'users', 'bar-chart', 'gift'][index % 4] as IconName,
        iconColor: ['text-red-600', 'text-blue-500', 'text-purple-500', 'text-yellow-500'][index % 4]
      })),
      stats: t('useCases.loyaltyCards.stats', { returnObjects: true })
    },
    {
      id: 'event-tickets',
      title: t('useCases.eventTickets.title'),
      description: t('useCases.eventTickets.description'),
      icon: 'ticket',
      iconColor: 'text-indigo-600',
      features: t('useCases.eventTickets.features', { returnObjects: true }).map((feature: string, index: number) => ({
        title: feature,
        description: feature,
        icon: ['ticket', 'clock', 'users', 'bar-chart'][index % 4] as IconName,
        iconColor: ['text-indigo-600', 'text-purple-500', 'text-blue-500', 'text-green-500'][index % 4]
      })),
      stats: t('useCases.eventTickets.stats', { returnObjects: true })
    },
    {
      id: 'membership-cards',
      title: t('useCases.membershipCards.title'),
      description: t('useCases.membershipCards.description'),
      icon: 'users',
      iconColor: 'text-blue-700',
      features: t('useCases.membershipCards.features', { returnObjects: true }).map((feature: string, index: number) => ({
        title: feature,
        description: feature,
        icon: ['users', 'award', 'gift', 'clock'][index % 4] as IconName,
        iconColor: ['text-blue-700', 'text-purple-600', 'text-green-600', 'text-yellow-600'][index % 4]
      })),
      stats: t('useCases.membershipCards.stats', { returnObjects: true })
    }
  ];
}

// Type for the translation function from next-intl
type TranslationKeys = any; // Using any to avoid complex type issues with next-intl

export function getUseCaseById(id: string, t: TranslationKeys): UseCase | undefined {
  return generateUseCasePages(t).find(useCase => useCase.id === id);
}
