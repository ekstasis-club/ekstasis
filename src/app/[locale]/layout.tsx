import { notFound } from 'next/navigation';
import { Locale, hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ReactNode, use } from 'react';
import { clsx } from 'clsx';
import { Inter } from 'next/font/google';
import { routing } from '@/i18n/routing';
import PageLayout from '@/components/PageLayout';
import '../../styles/global.css';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>; // ✅ Promesa
};

// ✅ Static params por idioma (para SSG)
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// ✅ Metadata traducida por idioma
export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params; // ✅ Usamos await, NO hooks
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'Manifest' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    icons: {
      icon: '/favicon.ico',
    },
  };
}

// ✅ Layout principal por idioma
export default function LocaleLayout({ children, params }: Props) {
  const { locale } = use(params); // ✅ Aquí sí usamos el hook

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className="h-full bg-black">
      <body className={clsx(inter.className, 'min-h-screen flex h-full flex-col bg-black text-white font-sans')}>
        <div className="fixed inset-0 bg-black -z-10" />
        <NextIntlClientProvider locale={locale}>
          <PageLayout>{children}</PageLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );  
}
