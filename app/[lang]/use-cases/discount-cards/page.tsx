import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

import { getUseCaseById } from "@/lib/generate-use-cases";
import UseCaseTemplate from "@/components/use-cases/UseCaseTemplate";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = await getTranslations({ 
    locale: lang, 
    namespace: "useCases.discountCards" 
  });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default function DiscountCardsPage() {
  const t = useTranslations("useCases.discountCards");
  const useCase = getUseCaseById("discount-cards", t);

  if (!useCase) {
    return <div>Use case not found</div>;
  }

  return <UseCaseTemplate useCase={useCase} />;
}
