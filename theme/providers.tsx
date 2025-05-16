'use client';

import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/theme/emotion-cache';
import theme from '@/theme/theme';
import { NextIntlClientProvider } from 'next-intl';
import ThemeProvider from '.';

const clientSideEmotionCache = createEmotionCache();

export default function Providers({
  children,
  messages,
  locale,
}: {
  children: ReactNode;
  messages: any;
  locale: string;
}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider>
        <CssBaseline />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
