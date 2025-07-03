'use client';

import { NextIntlClientProvider as NextIntl } from 'next-intl';
import { ReactNode } from 'react';
import { useLocale } from 'next-intl';

export function NextIntlClientProvider({
  messages,
  children,
}: {
  messages: any;
  children: ReactNode;
}) {
  const locale = useLocale();

  return (
    <NextIntl locale={locale} messages={messages}>
      {children}
    </NextIntl>
  );
}
