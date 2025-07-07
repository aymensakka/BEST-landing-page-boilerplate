import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Define the locales supported by the application
export const locales = ['en', 'fr', 'de', 'it', 'es', 'ar'] as const;
export const defaultLocale = 'en' as const;

export type Locale = typeof locales[number];

// Define the shape of our messages
export interface Messages {
  common: {
    title: string;
    description: string;
    loading: string;
    error: {
      title: string;
      description: string;
      back: string;
    };
    cta: {
      learnMore: string;
      getStarted: string;
      contactUs: string;
    };
  };
  useCases: {
    [key: string]: {
      title: string;
      description: string;
      features: string[];
    };
  };
  navigation: {
    home: string;
    useCases: string;
    about: string;
    contact: string;
    pricing: string;
  };
}

// Validate that the incoming `locale` parameter is valid
function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!isValidLocale(locale)) notFound();

  try {
    return {
      locale,
      messages: (await import(`./messages/${locale}.json`)).default as Messages,
      timeZone: 'UTC',
      now: new Date()
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    notFound();
  }
});
