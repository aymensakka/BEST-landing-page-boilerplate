import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/i18n/i18n';
import { ThemeProvider } from '@/components/ThemeProvider';
import { siteConfig } from '@/config/site';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import '@/styles/loading.css';
import { Inter as FontSans } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  icons: siteConfig.icons,
  metadataBase: siteConfig.metadataBase,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

async function getMessages(locale: string) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    if (locale !== defaultLocale) {
      try {
        console.warn(`Locale '${locale}' not found, falling back to '${defaultLocale}'`);
        return (await import(`@/messages/${defaultLocale}.json`)).default;
      } catch (innerError) {
        console.error('Failed to load fallback translations:', innerError);
        notFound();
      }
    }
    console.error('Failed to load translations:', error);
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // Validate the locale
  const locale = locales.includes(lang as any) ? lang : defaultLocale;
  
  // Load messages for the current locale
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body
        className={cn(
          'min-h-screen w-full bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme={siteConfig.nextThemeColor}
            enableSystem
          >
            <Header />
            <main className="w-full flex flex-col items-center py-6">
              <div className="w-full max-w-[2000px] px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
            <Footer />
            <Analytics />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
