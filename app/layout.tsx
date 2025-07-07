import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { locales, defaultLocale } from '@/i18n/i18n';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';
  
  // Only redirect if we're at the root path
  if (pathname === '/') {
    redirect(`/${defaultLocale}`);
  }
  
  return <>{children}</>;
}
