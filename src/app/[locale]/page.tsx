import { use } from 'react';
import { Suspense } from 'react'; 
import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import PageLayout from '@/components/PageLayout';

import EkstasisLanding from '@/components/HeaderSection';
import PhotoGrid from '@/components/PhotosSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/FooterSection';
import HelpSection from '@/components/HelpSection';
import Events from '@/components/EventsSection';
import ClientScrollHandler from '@/components/LandingPage';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function IndexPage({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

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
    <PageLayout>
      <Suspense fallback={null}>
        <ClientScrollHandler />
      </Suspense>
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
