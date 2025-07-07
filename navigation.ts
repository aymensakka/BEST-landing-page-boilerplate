import { getUseCases } from './hooks/useUseCases';

// Define the locales supported by the application
export const locales = ['en', 'fr', 'de', 'it', 'es', 'ar'] as const;

export const defaultLocale = 'en' as const;

// Get all use case slugs
const useCaseSlugs = getUseCases().map(useCase => useCase.id);

// Define pathnames for internationalized routes
export const pathnames = {
  // Home
  '/': '/',
  
  // Use cases
  '/use-cases': '/use-cases',
  
  // Dynamic use case pages
  ...useCaseSlugs.reduce((acc, slug) => ({
    ...acc,
    [`/use-cases/${slug}`]: `/use-cases/${slug}`
  }), {}),
  
  // Other pages
  '/about': '/about',
  '/contact': '/contact',
  '/pricing': '/pricing',
} as const;

// Type for the pathnames
export type AppPathnames = keyof typeof pathnames;
