import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

type UseCase = {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  status: "available" | "soon" | "beta";
  href: string;
};

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: lang, namespace: "useCases" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default function UseCasesPage() {
  const t = useTranslations("useCases");
  const locale = useLocale();

  const useCases: UseCase[] = [
    {
      id: "experience-vouchers",
      title: t("experienceVouchers.title"),
      description: t("experienceVouchers.description"),
      icon: "🎁",
      features: [
        t("experienceVouchers.features.0"),
        t("experienceVouchers.features.1"),
        t("experienceVouchers.features.2"),
      ],
      status: "available",
      href: `/${locale}/use-cases/experience-vouchers`,
    },
    {
      id: "monetary-vouchers",
      title: t("monetaryVouchers.title"),
      description: t("monetaryVouchers.description"),
      icon: "💵",
      features: [
        t("monetaryVouchers.features.0"),
        t("monetaryVouchers.features.1"),
        t("monetaryVouchers.features.2"),
      ],
      status: "available",
      href: `/${locale}/use-cases/monetary-vouchers`,
    },
    {
      id: "marketing-vouchers",
      title: t("marketingVouchers.title"),
      description: t("marketingVouchers.description"),
      icon: "📢",
      features: [
        t("marketingVouchers.features.0"),
        t("marketingVouchers.features.1"),
        t("marketingVouchers.features.2"),
      ],
      status: "available",
      href: `/${locale}/use-cases/marketing-vouchers`,
    },
    {
      id: "discount-cards",
      title: t("discountCards.title"),
      description: t("discountCards.description"),
      icon: "💳",
      features: [
        t("discountCards.features.0"),
        t("discountCards.features.1"),
        t("discountCards.features.2"),
      ],
      status: "available",
      href: `/${locale}/use-cases/discount-cards`,
    },
    {
      id: "membership-cards",
      title: t("membershipCards.title"),
      description: t("membershipCards.description"),
      icon: "👥",
      features: [
        t("membershipCards.features.0"),
        t("membershipCards.features.1"),
        t("membershipCards.features.2"),
      ],
      status: "soon",
      href: "#",
    },
    {
      id: "loyalty-cards",
      title: t("loyaltyCards.title"),
      description: t("loyaltyCards.description"),
      icon: "🏆",
      features: [
        t("loyaltyCards.features.0"),
        t("loyaltyCards.features.1"),
        t("loyaltyCards.features.2"),
      ],
      status: "beta",
      href: `/${locale}/use-cases/loyalty-cards`,
    },
    {
      id: "event-tickets",
      title: t("eventTickets.title"),
      description: t("eventTickets.description"),
      icon: "🎟️",
      features: [
        t("eventTickets.features.0"),
        t("eventTickets.features.1"),
        t("eventTickets.features.2"),
      ],
      status: "available",
      href: `/${locale}/use-cases/event-tickets`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{useCase.icon}</div>
                    <Badge
                      variant={
                        useCase.status === "available"
                          ? "success"
                          : useCase.status === "beta"
                          ? "warning"
                          : "outline"
                      }
                      className="text-xs font-medium"
                    >
                      {useCase.status === "available"
                        ? t("status.available")
                        : useCase.status === "beta"
                        ? t("status.beta")
                        : t("status.soon")}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {useCase.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {useCase.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Button
                      asChild={useCase.status !== "soon"}
                      disabled={useCase.status === "soon"}
                      variant={useCase.status === "soon" ? "outline" : "default"}
                      className={`w-full ${
                        useCase.status === "soon"
                          ? "cursor-not-allowed"
                          : "group-hover:bg-blue-600"
                      }`}
                    >
                      {useCase.status === "soon" ? (
                        <span>{t("comingSoon")}</span>
                      ) : (
                        <Link
                          href={useCase.href}
                          className="flex items-center justify-center"
                        >
                          {t("learnMore")}
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
