'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MotionSection from './MotionSection';
import Image from 'next/image';
import SubscribeCard from './SubscribeCard';

export default function EventSection({ events }) {
  const hasEvents = events.length > 0;

  const [text, setText] = useState('');
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const word = 'NEXT EVENT';
    let typingSpeed = 100;

    const handleTyping = () => {
      if (text.length < word.length) {
        setText(word.slice(0, text.length + 1));
      } else {
        setFinished(true);
      }
    };

    if (!finished) {
      const timer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [text, finished]);

  return (
    <section
      id="events"
      className={`relative bg-black flex flex-col items-center overflow-hidden ${
        hasEvents ? 'py-12' : 'pt-12 pb-8'
      }`}
    >
      <MotionSection className="relative z-20 flex flex-col items-center w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-semibold text-center uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#F76BFF] via-white to-[#F76BFF] mb-6"
        >
          {text}
        </motion.h2>

        {hasEvents && (
          <>
            <motion.a
              href={events[0].url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative w-[85vw] h-[60vh] md:w-[30vw] md:h-[55vh] max-w-[400px] max-h-[600px] overflow-hidden rounded-xl shadow-xl"
            >
              <Image
                src={events[0].image}
                alt="Ekstasis Event"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                placeholder="blur"
                blurDataURL="/images/placeholder-blur.jpg"
              />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </motion.a>

            <div className="text-white text-sm font-semibold tracking-widest mt-3 text-center">
              <span>{events[0].date}</span>
              <span className="mx-2 text-white/60">|</span>
              <span>{events[0].location}</span>
            </div>
          </>
        )}

        {!hasEvents && (
          <section className="flex justify-center w-full pt-8">
            <SubscribeCard />
          </section>
        )}
      </MotionSection>
    </section>
  );
}
