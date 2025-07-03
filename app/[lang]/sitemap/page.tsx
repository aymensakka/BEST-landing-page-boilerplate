import { Metadata } from 'next';
import { Sitemap } from '@/components/sitemap/sitemap';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params: { lang } }: PageProps): Promise<Metadata> {
  // Only fetch translations for the specific locale
  const t = await getTranslations({ locale: lang, namespace: 'Sitemap' });
  
  return {
    title: `${t('sitemap')} | ${t('siteName')}`,
    description: t('sitemapDescription'),
    openGraph: {
      title: `${t('sitemap')} | ${t('siteName')}`,
      description: t('sitemapDescription'),
      type: 'website',
      locale: lang,
      url: `https://yourdomain.com/${lang}/sitemap`,
      siteName: t('siteName'),
    },
    alternates: {
      canonical: `https://yourdomain.com/${lang}/sitemap`,
      languages: {
        'en': 'https://yourdomain.com/en/sitemap',
        'es': 'https://yourdomain.com/es/sitemap',
        'ar': 'https://yourdomain.com/ar/sitemap',
        'ja': 'https://yourdomain.com/ja/sitemap',
        'ru': 'https://yourdomain.com/ru/sitemap',
        'zh': 'https://yourdomain.com/zh/sitemap',
      },
    },
  };
}

export default async function SitemapPage({ params: { lang } }: PageProps) {
  // Ensure the locale is supported
  const supportedLocales = ['en', 'es', 'ar', 'ja', 'ru', 'zh'];
  if (!supportedLocales.includes(lang)) {
    notFound();
  }
  
  return <Sitemap />;
}
