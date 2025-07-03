import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Type for the translation function from next-intl
type TranslationKeys = any; // Using any to avoid complex type issues with next-intl

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/Icon";
import { UseCase, IconName } from "@/lib/generate-use-cases";

interface UseCaseTemplateProps {
  useCase: UseCase;
  children?: React.ReactNode;
}

export default function UseCaseTemplate({ useCase, children }: UseCaseTemplateProps) {
  const t = useTranslations("useCases");
  const locale = useLocale();
  const tCommon = useTranslations("common");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <Link
              href={`/${locale}/use-cases`}
              className="inline-flex items-center text-sm font-medium text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              {tCommon("backToUseCases")}
            </Link>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name={useCase.icon} className={`w-8 h-8 ${useCase.iconColor}`} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {useCase.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {useCase.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold"
              >
                <Link href={`/${locale}/demo`}>
                  {t("cta.tryForFree")}
                </Link>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              >
                {t("cta.contactSales")}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-12">
        <Container>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCase.stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t("features.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("features.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCase.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Additional Content */}
      {children}

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold"
              >
                <Link href={`/${locale}/demo`}>
                  {t("cta.primaryButton")}
                </Link>
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg font-semibold border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {t("cta.secondaryButton")}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
