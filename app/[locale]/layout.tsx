import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { localesType, routing } from '@/i18n/routing';
import Providers from '@/theme/providers';
import { hasLocale } from 'next-intl';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('app.title'),
    description: t('app.description'),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: localesType  };
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
