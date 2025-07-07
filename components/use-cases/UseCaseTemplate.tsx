'use client';

import React, { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft, Award, BarChart2, CheckCircle2, Clock, DollarSign, Gift, Smartphone, Tag, Ticket, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UseCase } from '@/types/use-case';
import { Container } from '@/components/container';

interface UseCaseTemplateProps {
  useCase: UseCase & {
    label?: string;
    description?: string;
  };
}

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  gift: Gift,
  award: Award,
  users: Users,
  'bar-chart-2': BarChart2,
  clock: Clock,
  ticket: Ticket,
  'dollar-sign': DollarSign,
  smartphone: Smartphone,
  tag: Tag,
  check: CheckCircle2,
};

const renderIcon = (icon?: string | React.ReactNode): React.ReactNode => {
  if (!icon || typeof icon !== 'string') return <Gift className="w-8 h-8 text-primary" />;
  const IconComponent = iconComponents[icon] || Gift;
  return <IconComponent className="w-8 h-8 text-primary" />;
};

// Helper function to get nested values from a translation object
const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((result, key) => {
    if (!result) return undefined;
    // Handle kebab-case to camelCase conversion
    const camelKey = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    return result[key] ?? result[camelKey];
  }, obj);
};

// Helper function to find a key in an object case-insensitively
const findKeyCaseInsensitive = (obj: any, targetKey: string): string | undefined => {
  if (!obj) return undefined;
  
  const lowerTarget = targetKey.toLowerCase();
  const foundKey = Object.keys(obj).find(key => key.toLowerCase() === lowerTarget);
  
  return foundKey ? obj[foundKey] : undefined;
};

// Custom hook for translations with better error handling and case-insensitive lookups
const useCaseTranslations = (useCaseId: string) => {
  console.log(`[useCaseTranslations] Starting translation lookup for useCaseId: ${useCaseId}`);
  
  // Get the common translations - use a more flexible approach
  let commonT: ReturnType<typeof useTranslations>;
  try {
    commonT = useTranslations('common');
    console.log('[useCaseTranslations] Successfully loaded common translations');
  } catch (e) {
    console.warn('[i18n] Could not load common translations, using fallback', e);
    const fallbackT = ((key: string, options?: { defaultValue?: string }) => {
      console.warn(`[i18n] Fallback translation for common.${key}`);
      return options?.defaultValue || key;
    }) as unknown as ReturnType<typeof useTranslations>;
    
    fallbackT.raw = (key?: string) => {
      console.warn(`[i18n] Fallback raw translations for common${key ? `.${key}` : ''}`);
      return key ? { [key]: key } : {};
    };
    
    commonT = fallbackT;
  }
  
  // Normalize the useCaseId to handle different cases and formats
  console.log(`[useCaseTranslations] Original useCaseId: ${useCaseId}`);
  
  // Generate all possible variations of the useCaseId
  const normalizedUseCaseId = useCaseId.replace(/-/g, '');
  const lowerCaseUseCaseId = normalizedUseCaseId.toLowerCase();
  const camelCaseUseCaseId = lowerCaseUseCaseId.charAt(0).toLowerCase() + lowerCaseUseCaseId.slice(1);
  const pascalCaseUseCaseId = lowerCaseUseCaseId.charAt(0).toUpperCase() + lowerCaseUseCaseId.slice(1);
  
  console.log(`[useCaseTranslations] Generated variations:`, {
    normalizedUseCaseId,
    lowerCaseUseCaseId,
    camelCaseUseCaseId,
    pascalCaseUseCaseId
  });
  
  // Get the use case specific translations - try multiple namespace formats
  let tUseCase: ReturnType<typeof useTranslations> | null = null;
  const possibleNamespaces = [
    // Try exact match first
    `UseCases.${useCaseId}`,
    `useCases.${useCaseId}`,
    // Try normalized versions
    `UseCases.${normalizedUseCaseId}`,
    `useCases.${normalizedUseCaseId}`,
    // Try lowercase version
    `UseCases.${lowerCaseUseCaseId}`,
    `useCases.${lowerCaseUseCaseId}`,
    // Try camelCase version
    `UseCases.${camelCaseUseCaseId}`,
    `useCases.${camelCaseUseCaseId}`,
    // Try PascalCase version
    `UseCases.${pascalCaseUseCaseId}`,
    `useCases.${pascalCaseUseCaseId}`
  ];
  
  console.log(`[useCaseTranslations] Trying namespaces:`, possibleNamespaces);
  
  // Try each namespace until one works
  let lastError: Error | null = null;
  for (const ns of possibleNamespaces) {
    try {
      tUseCase = useTranslations(ns);
      console.log(`[i18n] Successfully loaded translations for namespace: ${ns}`);
      break;
    } catch (e) {
      lastError = e as Error;
      console.warn(`[i18n] Failed to load translations for namespace: ${ns}`, e);
      // Try the next namespace
      continue;
    }
  }
  
  if (!tUseCase) {
    const errorMessage = `[i18n] Could not load translations for use case: ${useCaseId} (tried: ${possibleNamespaces.join(', ')}). Last error: ${lastError?.message || 'Unknown error'}`;
    console.warn(errorMessage);
    
    // Create a fallback that logs missing keys
    const fallbackT = ((key: string) => {
      console.warn(`[i18n] Fallback translation for ${useCaseId}.${key}`);
      return key;
    }) as unknown as ReturnType<typeof useTranslations>;
    
    fallbackT.raw = () => {
      console.warn(`[i18n] Fallback raw translations for ${useCaseId}`);
      return {};
    };
    
    tUseCase = fallbackT;
  }
  
  // Return a simple translation function that handles nested keys
  return (key: string, options?: { defaultValue?: string }) => {
    // If it's a common key, try to get it from common translations
    if (key.toLowerCase().startsWith('common.')) {
      const commonKey = key.substring(7); // Remove 'common.' prefix
      try {
        // Try to get the nested value (e.g., 'cta.scheduleDemo')
        if (commonKey.includes('.')) {
          const [namespace, subKey] = commonKey.split('.');
          try {
            const namespaceTranslations = commonT.raw(namespace);
            if (namespaceTranslations && typeof namespaceTranslations === 'object') {
              const value = findKeyCaseInsensitive(namespaceTranslations, subKey);
              if (value) return value;
            }
          } catch (e) {
            console.warn(`[i18n] Could not access namespace '${namespace}' in common translations`, e);
          }
        }
        
        // Try to get the direct value with case-insensitive lookup
        try {
          const commonTranslations = commonT.raw('');
          if (commonTranslations && typeof commonTranslations === 'object') {
            const value = findKeyCaseInsensitive(commonTranslations, commonKey);
            if (value) return value;
          }
        } catch (e) {
          console.warn(`[i18n] Could not access common translations`, e);
        }
        
        // If we get here, the key wasn't found - try to provide a better fallback
        const fallbackValue = options?.defaultValue || key.split('.').pop() || key;
        console.warn(`[i18n] Could not find translation for '${key}', using fallback: '${fallbackValue}'`);
        return fallbackValue;
      } catch (e) {
        console.warn(`[i18n] Error accessing common key: ${key}`, e);
        return options?.defaultValue || key.split('.').pop() || key;
      }
    }
    
    // Try to get the use case specific translation
    try {
      // Handle nested keys in the use case namespace
      if (key.includes('.')) {
        const [namespace, subKey] = key.split('.');
        const namespaceTranslations = tUseCase.raw(namespace);
        if (namespaceTranslations && typeof namespaceTranslations === 'object') {
          const value = findKeyCaseInsensitive(namespaceTranslations, subKey);
          if (value) return value;
        }
      }
      
      // Try to get the direct value with case-insensitive lookup
      const useCaseTranslations = tUseCase.raw('');
      const value = findKeyCaseInsensitive(useCaseTranslations, key);
      if (value) return value;
      
      return options?.defaultValue || key;
    } catch (e) {
      console.warn(`[i18n] Error accessing use case key: ${key}`, e);
      return options?.defaultValue || key;
    }
  };
};

export default function UseCaseTemplate({ useCase }: UseCaseTemplateProps) {
  const t = useCaseTranslations(useCase.id);
  
  // Get display title and description from translations or use fallbacks
  const displayTitle = useCase.label || 
                      t('hero.title', { defaultValue: useCase.id.split('-').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1) 
                      ).join(' ') });
  
  const displayDescription = t('hero.subtitle', { 
    defaultValue: useCase.description || `Discover how our ${displayTitle} solution can help your business` 
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Container className="py-4 border-b">
        <Button variant="ghost" asChild>
          <Link href="/use-cases" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            {t('backToUseCases', { defaultValue: 'Back to Use Cases' })}
          </Link>
        </Button>
      </Container>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Container className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8">
            {renderIcon(useCase.icon)}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            {displayTitle}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            {displayDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="mr-4">
              <Link href="/pricing">{t('common.getStarted', { defaultValue: 'Get Started' })}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/demo">{t('common.scheduleDemo', { defaultValue: 'Schedule a Demo' })}</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      {useCase.overview && (
        <section className="py-16 md:py-24">
          <Container className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('overview.title', { defaultValue: 'Overview' })}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('overview.description', { defaultValue: 'Learn more about this use case and how it can benefit your business.' })}
            </p>
          </Container>
        </section>
      )}

      {/* Features Section */}
      {useCase.features && useCase.features.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {t(`${useCase.id}.featuresSection.title`, { defaultValue: 'Key Features' })}
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                {t(`${useCase.id}.featuresSection.subtitle`, { defaultValue: 'Discover what makes our solution special' })}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {useCase.features.map((feature, index) => {
                // First try to get from translations, then fall back to any props
                const translatedTitle = t(`${useCase.id}.features.${index}.title`);
                const translatedDesc = t(`${useCase.id}.features.${index}.description`);
                
                const title = translatedTitle || `Feature ${index + 1}`;
                const description = translatedDesc || 'More details coming soon.';
                
                return (
                  <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                        {renderIcon(feature.icon)}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
                        {title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* Benefits Section */}
      {useCase.benefits && useCase.benefits.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {t(`${useCase.id}.benefitsSection.title`, { defaultValue: 'Key Benefits' })}
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                {t(`${useCase.id}.benefitsSection.subtitle`, { defaultValue: 'Discover the advantages for your business' })}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {useCase.benefits.map((_, index) => {
                // First try to get from translations, then fall back to any props
                const translatedTitle = t(`${useCase.id}.benefits.${index}.title`);
                const translatedDesc = t(`${useCase.id}.benefits.${index}.description`);
                
                const title = translatedTitle || `Benefit ${index + 1}`;
                const description = translatedDesc || 'More details coming soon.';
                
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
                    </div>
                    <div className="ml-4">
                      {title && (
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {title}
                        </h3>
                      )}
                      {description && (
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          {description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      {useCase.cta && (
        <section className="py-16 md:py-24 bg-primary text-white">
          <Container className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('cta.title', { defaultValue: 'Ready to get started?' })}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle', { defaultValue: 'Join thousands of businesses that trust our platform.' })}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="ghost" asChild>
                <Link href="/pricing">{t('cta.getStarted', { defaultValue: 'Get Started' })}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="px-8 py-3 text-lg border-white text-white hover:bg-white/10">
                <Link href="/demo">{t('cta.scheduleDemo', { defaultValue: 'Schedule Demo' })}</Link>
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* Testimonial Section */}
      {useCase.testimonial && (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <Container className="max-w-3xl mx-auto text-center">
            <blockquote className="text-lg text-gray-600 dark:text-gray-300 italic mb-4">
              &ldquo;{t('testimonial.quote', { defaultValue: 'This solution has transformed our business. Highly recommended!' })}&rdquo;
            </blockquote>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {t('testimonial.author', { defaultValue: 'John Doe' })}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {t('testimonial.role', { defaultValue: 'CEO, Company Name' })}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
