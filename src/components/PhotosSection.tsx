'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface Photo {
  src: string;
}

const photos: Photo[] = [
  { src: '/images/photo4.webp' },
  { src: '/images/photo37.webp' },
  { src: '/images/photo1.webp' },
  { src: '/images/photo52.webp' },
];

export default function PhotoGrid() {
  const t = useTranslations('PhotoGrid');

  return (
    <section className="py-8 bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex overflow-x-auto overflow-y-hidden no-scrollbar gap-x-6 px-4"
      >
        {photos.map((photo, index: number) => (
          <div
            key={index}
            className="flex-shrink-0 w-[75vw] h-[70vh] md:w-[40vw] md:h-[85vh] max-w-[500px] relative group rounded-2xl overflow-hidden"
          >
            <Image
              src={photo.src}
              alt={`Photo ${index + 1}`}
              fill
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
            />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}

        {/* Último cuadrado: botón traducido */}
        <Link
          href="/archive"
          className="flex-shrink-0 w-[100px] h-[40px] md:w-[140px] md:h-[50px] mt-auto mb-auto bg-white text-black rounded-full font-semibold text-xs uppercase tracking-widest flex items-center justify-center hover:bg-white/90 transition ml-2"
        >
          {t('viewAll')}
        </Link>
      </motion.div>
    </section>
  );
}
