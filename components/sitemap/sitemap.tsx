'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiExternalLink } from 'react-icons/fi';

// Types for the sitemap sections
interface SitemapLink {
  title: string;
  href: string;
  isExternal?: boolean;
}

interface SitemapSection {
  title: string;
  links: SitemapLink[];
}

export function Sitemap() {
  const locale = useLocale();
  const t = useTranslations('Sitemap');
  
  // Helper function to generate localized paths
  const localizePath = (path: string) => {
    // Remove leading slash if present and handle empty path
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${locale}${cleanPath ? `/${cleanPath}` : ''}`.replace(/\/+$/, '');
  };

  const sitemapData: SitemapSection[] = [
    {
      title: t('main'),
      links: [
        { title: t('home'), href: localizePath('') },
        { title: t('features'), href: localizePath('#features') },
        { title: t('pricing'), href: localizePath('#pricing') },
        { title: t('contact'), href: localizePath('#contact') },
      ],
    },
    {
      title: t('documentation'),
      links: [
        { 
          title: t('gettingStarted'), 
          href: 'https://docs.yourdomain.com/getting-started',
          isExternal: true 
        },
        { 
          title: t('uiStructure'), 
          href: 'https://docs.yourdomain.com/ui-structure',
          isExternal: true 
        },
      ],
    },
    {
      title: t('resources'),
      links: [
        { 
          title: 'GitHub', 
          href: 'https://github.com/yourusername/your-repo', 
          isExternal: true 
        },
        { 
          title: t('blog'), 
          href: localizePath('blog'),
          isExternal: false
        },
      ],
    },
    {
      title: t('legal'),
      links: [
        { 
          title: t('privacy'), 
          href: localizePath('privacy'),
          isExternal: false 
        },
        { 
          title: t('terms'), 
          href: localizePath('terms'),
          isExternal: false 
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">{t('sitemap')}</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {t('sitemapDescription')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sitemapData.map((section, sectionIndex) => (
            <motion.div
              key={`section-${sectionIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 * sectionIndex,
                type: 'spring',
                stiffness: 100,
                damping: 10
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={`link-${sectionIndex}-${linkIndex}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.05 * linkIndex,
                        type: 'spring',
                        stiffness: 300,
                        damping: 15
                      }}
                      whileHover={{ x: 5 }}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center group"
                          aria-label={`${link.title} (${t('opensInNewTab')})`}
                        >
                          <span className="group-hover:underline">{link.title}</span>
                          <FiExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <Link 
                          href={link.href}
                          className="block w-full hover:underline"
                        >
                          {link.title}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center text-gray-500 dark:text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>© {new Date().getFullYear()} {t('allRightsReserved')}</p>
        </motion.div>
      </div>
    </div>
  );
}
