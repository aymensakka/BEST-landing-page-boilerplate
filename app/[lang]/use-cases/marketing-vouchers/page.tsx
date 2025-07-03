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
    namespace: "useCases.marketingVouchers" 
  });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default function MarketingVouchersPage() {
  const t = useTranslations("useCases.marketingVouchers");
  const useCase = getUseCaseById("marketing-vouchers", t);

  if (!useCase) {
    return <div>Use case not found</div>;
  }

  return <UseCaseTemplate useCase={useCase} />;
}
