import createIntlMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n/i18n';

const publicFile = /\.(?:[^/]+\.[a-z0-9]+|svg|png|jpg|jpeg|gif|ico|webp|woff2?|ttf|eot|mp4|webm|mp3|wav|ogg|json|xml|txt|webmanifest)$/i;

// Create the intl middleware
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: true,
});

export default async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Skip public files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    pathname.startsWith('/api/') ||
    publicFile.test(pathname) ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Handle root path - redirect to default locale
  if (pathname === '/') {
    const response = NextResponse.redirect(
      new URL(`/${defaultLocale}`, request.url)
    );
    // Set x-pathname header for the root layout
    response.headers.set('x-pathname', pathname);
    return response;
  }

  // Handle non-localized paths (except root which we already handled)
  if (!pathnameHasLocale) {
    // Get the preferred locale from the cookie or accept-language header
    const acceptLanguage = request.headers.get('accept-language');
    const locale = getLocaleFromHeader(acceptLanguage);
    
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}${search || ''}`, request.url)
    );
  }

  // Let next-intl handle the rest
  return intlMiddleware(request);
}

// Helper function to get locale from accept-language header
function getLocaleFromHeader(acceptLanguage: string | null): string {
  if (!acceptLanguage) return defaultLocale;
  
  // Get the preferred language from the header
  const preferredLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
  
  // Check if it's one of our supported locales
  const matchedLocale = locales.find(
    (locale) => locale.toLowerCase() === preferredLang
  );
  
  return matchedLocale || defaultLocale;
}

export const config = {
  matcher: [
    // Match all paths except for:
    // - API routes
    // - Static files
    // - _next/static
    // - _next/image
    // - Favicon
    '/((?!api|_next/static|_next/image|favicon.ico|.*\..*).*)',
  ],
};