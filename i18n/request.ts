import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './i18n';

// Define the type for the request config
type RequestConfig = {
  messages: Record<string, any>;
  locale: string;
};

export default getRequestConfig(async ({ locale }): Promise<RequestConfig> => {
  // Ensure the locale is valid, fallback to default if not
  const validatedLocale = (locale && locales.includes(locale as any)) ? locale : defaultLocale;
  
  try {
    // Try to import the messages for the locale
    const messages = (await import(`../messages/${validatedLocale}.json`)).default;
    
    return {
      messages,
      locale: validatedLocale
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${validatedLocale}`, error);
    
    // Fallback to default locale if the requested one fails to load
    if (validatedLocale !== defaultLocale) {
      try {
        const defaultMessages = (await import(`../messages/${defaultLocale}.json`)).default;
        return { 
          messages: defaultMessages,
          locale: defaultLocale
        };
      } catch (innerError) {
        console.error(`Failed to load default locale (${defaultLocale}) messages`, innerError);
      }
    }
    
    // If we can't load any messages, return an empty object with the validated locale
    return { 
      messages: {},
      locale: validatedLocale
    };
  }
});
