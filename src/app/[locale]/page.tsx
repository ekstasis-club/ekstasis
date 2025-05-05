import { use } from 'react';
import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import PageLayout from '@/components/PageLayout';

import EkstasisLanding from '@/components/HeaderSection';
import PhotoGrid from '@/components/PhotosSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/FooterSection';
import HelpSection from '@/components/HelpSection';
import Events from '@/components/EventsSection';
import ScrollHandler from '@/components/ScrollHandler';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function IndexPage({ params }: Props) {
  const { locale } = use(params);

  // Establece el idioma para traducciones
  setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  /*const nextEvent = {
    image: '/images/flyers/18-04-25.webp',
    url: 'https://ra.co/events/2117889',
    date: '01-06-2025',
    location: 'MADRID',
  };*/
  
  const nextEvent = null;

  const pastFlyers = [
    {
      image: '/images/flyers/21-02-25.webp',
      url: 'https://ra.co/events/2083260',
    },
    {
      image: '/images/flyers/18-04-25.webp',
      url: 'https://ra.co/events/2117889',
    }
  ];

  return (
    <PageLayout title={t('title')}>
      <ScrollHandler />
      <EkstasisLanding />
      <section id="events" className="relative z-20">
        <Events nextEvent={nextEvent} pastFlyers={pastFlyers} />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <HelpSection />
      <PhotoGrid />
      <Footer />
    </PageLayout>
  );  
}
