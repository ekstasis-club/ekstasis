'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[12vw] font-extrabold text-[#F76BFF] tracking-wider z-10"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-6 text-center text-white/80 text-lg sm:text-xl max-w-xl z-10"
      >
        {t('title')}<br />{t('subtitle')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-10 z-10"
      >
        <Link
          href="/"
          className="px-6 py-3 text-sm uppercase tracking-widest border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          {t('button')}
        </Link>
      </motion.div>
    </main>
  );
}
