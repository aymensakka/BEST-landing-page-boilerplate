'use client';

import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import dynamic from 'next/dynamic';
import { UseCase } from '@/types/use-case';
import { NextIntlClientProvider } from 'next-intl';
import { useTranslations } from 'next-intl';

// Dynamically import the template with no SSR to avoid hydration issues
const UseCaseTemplate = dynamic(
  () => import('@/components/use-cases/UseCaseTemplate'),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }
);

interface UseCasePageClientProps {
  useCase: UseCase;
  lang: string;
}

// Helper function to safely get translations
const useSafeTranslations = (namespace: string) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTranslations(namespace);
  } catch (error) {
    console.error(`Error loading translations for namespace: ${namespace}`, error);
    return (key: string, values?: Record<string, any>) => {
      console.warn(`Missing translation for key: ${namespace}.${key}`);
      return values?.defaultValue || key.split('.').pop() || key;
    };
  }
};

export default function UseCasePageClient({ useCase, lang }: UseCasePageClientProps) {
  const t = useSafeTranslations('common');
  
  // Debug logging
  console.log('[UseCasePageClient] useCase object:', useCase);
  console.log('[UseCasePageClient] useCase.id:', useCase?.id);
  console.log('[UseCasePageClient] lang:', lang);
  
  if (!useCase) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{t('error.useCaseNotFound', { defaultValue: 'Use Case Not Found' })}</AlertTitle>
          <AlertDescription className="mb-4">
            {t('error.useCaseNotFoundDescription', { 
              defaultValue: 'The requested use case could not be found.' 
            })}
          </AlertDescription>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" /> {t('back', { defaultValue: 'Go back' })}
          </Button>
        </Alert>
      </div>
    );
  }
  
  // Ensure all required properties are present with proper fallbacks
  const safeUseCase = {
    ...useCase,
    id: useCase.id || 'unknown',
    label: useCase.label || useCase.title || useCase.id.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' '),
    title: useCase.title || useCase.label || useCase.id.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' '),
    description: useCase.description || useCase.overview?.description || '',
    features: Array.isArray(useCase.features) ? useCase.features : [],
    benefits: Array.isArray(useCase.benefits) ? useCase.benefits : [],
    icon: useCase.icon || 'gift',
    hero: useCase.hero || { 
      title: useCase.title || useCase.label || useCase.id,
      subtitle: useCase.description || '' 
    },
    overview: useCase.overview || {
      title: useCase.title || useCase.label || useCase.id,
      description: useCase.description || ''
    },
    cta: useCase.cta || {
      title: t('cta.title', { defaultValue: 'Ready to get started?' }),
      buttonText: t('cta.getStarted', { defaultValue: 'Get Started' }),
      buttonHref: `/${lang}/get-started`,
    },
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NextIntlClientProvider locale={lang}>
        <UseCaseTemplate useCase={safeUseCase} />
      </NextIntlClientProvider>
    </div>
  );
}
