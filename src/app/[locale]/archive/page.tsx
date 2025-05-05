import { use } from 'react';
import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import PageLayout from '@/components/PageLayout';
import ArchiveGallery from '@/components/ArchivePage';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function ArchivePage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('ArchivePage');

  return (
    <PageLayout title={t('title')}>
      <ArchiveGallery />
    </PageLayout>
  );
}
