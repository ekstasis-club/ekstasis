'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SubscribeCard from './SubscribeCard';

export interface EventData {
  image: string;
  url: string;
  date: string;
  location: string;
}

export interface Flyer {
  image: string;
  url: string;
}

interface EventsProps {
  nextEvent: EventData | null;
  pastFlyers: Flyer[];
}

export default function Events({ nextEvent, pastFlyers }: EventsProps) {
  const horizontalRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = (scrollX: number, width: number) => {
    const index = Math.round(scrollX / width);
    setActiveIndex(index);
  };

  const TitleWithComingSoon = () => (
    <div className="flex items-center justify-center flex-wrap text-center mt-10 md:mt-24 mb-4">
      <motion.h2
        key="NEXT EVENT"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-2xl font-semibold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#F76BFF] via-white to-[#F76BFF]"
      >
        NEXT EVENT
      </motion.h2>

      {!nextEvent && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="ml-2 text-[10px] text-white/50 font-normal animate-blink"
        >
          [COMING SOON]
        </motion.span>
      )}
    </div>
  );

  return (
    <section id="events" className="w-full bg-black overflow-hidden">
      {/* MOBILE */}
      <div className="flex flex-col md:hidden px-6 py-12 gap-16">
        <div className="flex flex-col items-center">
          <TitleWithComingSoon />

          {nextEvent ? (
            <motion.a
              href={nextEvent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[85vw] h-[60vh] overflow-hidden rounded-xl shadow-xl"
            >
              <Image
                src={nextEvent.image}
                alt="Next Event"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
              />
              <div className="absolute top-2 left-2 bg-[#F76BFF] text-black text-xs font-bold px-2 py-1 rounded">
                NEXT
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm font-semibold tracking-widest px-4 py-1 rounded">
                {nextEvent.date} <span className="mx-1 text-white/50">|</span> {nextEvent.location}
              </div>
            </motion.a>
          ) : (
            <SubscribeCard />
          )}
        </div>

        {/* PAST EVENTS */}
        <div className="flex flex-col items-center w-full relative">
          <motion.h2
            key="PAST EVENTS"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-semibold text-center uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#F76BFF] via-white to-[#F76BFF] mb-6"
          >
            PAST EVENTS
          </motion.h2>

          <div
            ref={horizontalRef}
            onScroll={(e) =>
              handleScroll((e.target as HTMLDivElement).scrollLeft, (e.target as HTMLDivElement).offsetWidth)
            }
            className="flex snap-x snap-mandatory overflow-x-auto gap-6 w-full no-scrollbar pb-4"
          >
            {pastFlyers.map((flyer, index) => (
              <a
                key={index}
                href={flyer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="snap-start flex-shrink-0 relative w-[70vw] aspect-[3/4] rounded-2xl shadow-xl overflow-hidden"
              >
                <Image
                  src={flyer.image}
                  alt={`Flyer ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>

        {nextEvent && (
          <div className="mt-10 flex justify-center">
            <SubscribeCard />
          </div>
        )}
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex flex-col items-center w-full px-8 gap-16 pb-24">
        <TitleWithComingSoon />

        {nextEvent ? (
          <motion.a
            href={nextEvent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full max-w-[500px] h-[70vh] overflow-hidden rounded-xl shadow-xl"
          >
            <Image
              src={nextEvent.image}
              alt="Next Event"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
            />
            <div className="absolute top-2 left-2 bg-[#F76BFF] text-black text-xs font-bold px-2 py-1 rounded">
              NEXT
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm font-semibold tracking-widest px-4 py-1 rounded">
              {nextEvent.date} <span className="mx-1 text-white/50">|</span> {nextEvent.location}
            </div>
          </motion.a>
        ) : (
          <SubscribeCard />
        )}

        <motion.h2 className="text-2xl font-semibold text-center uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#F76BFF] via-white to-[#F76BFF] mt-12">
          PAST EVENTS
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {pastFlyers.map((flyer, index) => (
            <a
              key={index}
              href={flyer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[200px] aspect-[3/4] rounded-2xl shadow-xl overflow-hidden"
            >
              <Image
                src={flyer.image}
                alt={`Flyer ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </a>
          ))}
        </div>

        {nextEvent && (
          <div className="mt-10 flex justify-center">
            <SubscribeCard />
          </div>
        )}
      </div>
    </section>
  );
}
