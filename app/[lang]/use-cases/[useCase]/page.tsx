// This is a server component that fetches data and passes it to the client component
import { notFound } from 'next/navigation';
import { getUseCases } from '@/hooks/useUseCases';
import { NextIntlClientProvider } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import UseCasePageClient from './UseCasePageClient';

// We'll handle metadata in the layout component instead
export async function generateMetadata({
  params: { useCase, lang },
}: {
  params: { useCase: string; lang: string };
}) {
  // Get the use case details
  const useCases = getUseCases();
  const currentUseCase = useCases.find(uc => uc.id === useCase);
  
  if (!currentUseCase) {
    return {
      title: 'Use Case Not Found',
      description: 'The requested use case could not be found.',
    };
  }
  
  // Get the title from various possible locations in order of preference
  const title = currentUseCase.hero?.title || 
               currentUseCase.overview?.title ||
               currentUseCase.label || 
               useCase.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  
  // Get the description from various possible locations in order of preference
  const description = currentUseCase.overview?.description || 
                    currentUseCase.description ||
                    `Discover how Gifthero's ${title} solution can transform your business`;
  
  return {
    title: `Gifthero - ${title}`,
    description,
    openGraph: {
      title: `Gifthero - ${title}`,
      description,
      type: 'website',
      locale: lang,
      siteName: 'Gifthero',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Gifthero - ${title}`,
      description,
    },
  };
}

export async function generateStaticParams() {
  try {
    // Generate static paths for all use cases in all supported languages
    const useCases = getUseCases();
    const locales = ['en', 'fr', 'de', 'it', 'es', 'ar'];
    
    // Ensure we only return valid paths
    return useCases.flatMap(useCase => 
      locales.map(locale => ({
        useCase: useCase.id,
        lang: locale,
      }))
    ).filter(Boolean);
  } catch (error) {
    console.error('Error generating static params for use cases:', error);
    // Return empty array to prevent build failure
    return [];
  }
}

export default function UseCasePage({
  params: { useCase, lang },
}: {
  params: { useCase: string; lang: string };
}) {
  const useCases = getUseCases();
  const currentUseCase = useCases.find(uc => uc.id === useCase);
  
  if (!currentUseCase) {
    // Ensure we return a 404 page with notFound()
    return notFound();
  }
  
  // Ensure we have all required properties
  const safeUseCase = {
    ...currentUseCase,
    label: currentUseCase.label || currentUseCase.id.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' '),
    description: currentUseCase.description || `Discover our ${currentUseCase.label || useCase} solution`,
    features: currentUseCase.features || [],
    benefits: currentUseCase.benefits || []
  };
  
  return <UseCasePageClient useCase={safeUseCase} lang={lang} />;
}
