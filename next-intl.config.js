/** @type {import('next-intl').NextConfig} */
const nextIntlConfig = {
  // These are the locales used in the application
  locales: ['en', 'fr', 'de', 'it', 'es', 'ar'],
  
  // This is the default locale used when a non-locale path is visited
  defaultLocale: 'en',
  
  // Path to the directory containing the translation files
  localePath: './messages',
  
  // Enable automatic locale detection
  localeDetection: true,
  
  // Optional: Configure the default namespace
  defaultNS: 'common',
  
  // Optional: Configure the namespaces to be loaded
  namespaces: ['common', 'useCases', 'navigation'],
  
  // Optional: Configure the locale prefix
  localePrefix: 'as-needed',
  
  // Optional: Configure the format of the locale segment in the URL
  localePathPattern: '/{locale}/{path}',
  
  // Optional: Configure the format of the default locale in the URL
  defaultLocalePathPattern: '/{path}',
};

module.exports = nextIntlConfig;
