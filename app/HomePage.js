'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import EkstasisLanding from '../components/HeaderSection';
import PhotoGrid from '../components/PhotoGrid';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import HelpSection from '../components/HelpSection';
import Events from '../components/Events'

export default function HomePage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTarget = searchParams.get('scroll');
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, [searchParams]);

  const events = [{
    image: '/images/flyers/18-04-25.webp',
    url: 'https://ra.co/events/2117889',
    date: '01-06-2025',
    location: 'MADRID',
  },];

  const hasEvents = events.length > 0;

  return (
    <main className="min-h-screen">
      <EkstasisLanding />
      <section className="relative z-20">
        <Events events={events} hasEvents={hasEvents} />
      </section>
      <PhotoGrid />
      <FAQSection />
      <HelpSection />
      <Footer />
    </main>
  );
}
/*<section className="relative z-20">
        <EventSection events={events} hasEvents={hasEvents} />
      </section>
      <HorizontalCarousel />
      */