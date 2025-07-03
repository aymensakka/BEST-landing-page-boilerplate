'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { NextIntlClientProvider } from 'next-intl';

export function Providers({
  children,
  locale,
  messages,
  ...props
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
} & ThemeProviderProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NextThemesProvider {...props}>
        {children}
      </NextThemesProvider>
    </NextIntlClientProvider>
  );
}
