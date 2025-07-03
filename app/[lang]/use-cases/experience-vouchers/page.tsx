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
    namespace: "useCases.experienceVouchers" 
  });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default function ExperienceVouchersPage() {
  const t = useTranslations("useCases.experienceVouchers");
  const useCase = getUseCaseById("experience-vouchers", t);

  if (!useCase) {
    return <div>Use case not found</div>;
  }

  return <UseCaseTemplate useCase={useCase} />;
}
