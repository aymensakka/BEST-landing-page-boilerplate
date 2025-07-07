// Define the locales supported by the application
export const locales = ['en', 'fr', 'de', 'it', 'es', 'ar'] as const;

export const defaultLocale = 'en' as const;

export type Locale = typeof locales[number];

// Define the locale prefix strategy
export const localePrefix = 'as-needed' as const;

// Helper to validate if a string is a valid locale
export function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

// Default namespace for translations
export const defaultNamespace = 'common';

// Options for the i18n configuration
export const i18nConfig = {
  defaultLocale,
  locales,
  // Don't use a locale prefix for the default locale
  localePrefix,
  // Domains configuration for locale detection
  domains: [
    {
      domain: 'gifthero.com',
      defaultLocale: 'en',
      // Optionally add other supported locales for this domain
      // locales: ['en', 'fr'],
    },
    // Add more domains for different locales if needed
  ],
} as const;
