'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MotionSection from './MotionSection';

const flyers = [
  {
    image: '/images/flyers/18-04-25.webp',
    url: 'https://ra.co/events/2117889',
  },
  {
    image: '/images/flyers/21-02-25.webp',
    url: 'https://ra.co/events/2083260',
  },
];

export default function HorizontalCarousel() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const word = 'PAST EVENTS';
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
    <MotionSection className="bg-black py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl font-semibold text-center uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#F76BFF] via-white to-[#F76BFF] mb-6"
      >
        {text}
      </motion.h2>

      <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar px-4 flex gap-x-6 scroll-smooth snap-x snap-mandatory">
        {flyers.map((flyer, index) => (
          <motion.a
            key={index}
            href={flyer.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="inline-block snap-center group relative"
          >
            <div className="relative w-[300px] min-w-[300px] aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
  <img
    src={flyer.image}
    alt={`Flyer ${index + 1}`}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>

          </motion.a>
        ))}
      </div>
    </MotionSection>
  );
}
