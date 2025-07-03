import { Gift, Smartphone, Clock, BarChart2, DollarSign, Tag, Users, Award, Ticket } from "lucide-react";

type UseCase = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  features: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
};

export const getUseCaseData = (t: any): UseCase[] => [
  {
    id: "experience-vouchers",
    title: t("experienceVouchers.title"),
    description: t("experienceVouchers.description"),
    icon: <Gift className="w-8 h-8 text-blue-500" />,
    features: [
      {
        icon: <Gift className="w-6 h-6 text-blue-500" />,
        title: t("experienceVouchers.features.0.title"),
        description: t("experienceVouchers.features.0.description"),
      },
      {
        icon: <Smartphone className="w-6 h-6 text-purple-500" />,
        title: t("experienceVouchers.features.1.title"),
        description: t("experienceVouchers.features.1.description"),
      },
      {
        icon: <Clock className="w-6 h-6 text-green-500" />,
        title: t("experienceVouchers.features.2.title"),
        description: t("experienceVouchers.features.2.description"),
      },
      {
        icon: <BarChart2 className="w-6 h-6 text-orange-500" />,
        title: t("experienceVouchers.features.3.title"),
        description: t("experienceVouchers.features.3.description"),
      },
    ],
    stats: [
      { value: t("experienceVouchers.stats.0.value"), label: t("experienceVouchers.stats.0.label") },
      { value: t("experienceVouchers.stats.1.value"), label: t("experienceVouchers.stats.1.label") },
      { value: t("experienceVouchers.stats.2.value"), label: t("experienceVouchers.stats.2.label") },
    ],
  },
  // Add other use cases following the same pattern
  {
    id: "monetary-vouchers",
    title: t("monetaryVouchers.title"),
    description: t("monetaryVouchers.description"),
    icon: <DollarSign className="w-8 h-8 text-green-500" />,
    features: [
      {
        icon: <DollarSign className="w-6 h-6 text-green-500" />,
        title: t("monetaryVouchers.features.0.title"),
        description: t("monetaryVouchers.features.0.description"),
      },
      // Add other features
    ],
    stats: [
      { value: t("monetaryVouchers.stats.0.value"), label: t("monetaryVouchers.stats.0.label") },
      // Add other stats
    ],
  },
  // Add other use cases...
];

export const getUseCaseById = (id: string, t: any) => {
  return getUseCaseData(t).find(useCase => useCase.id === id);
};
