'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function HelpSection() {
  const t = useTranslations('Help');

  return (
    <section className="bg-black text-white py-12 px-4 flex flex-col items-center text-center">
      {/* Título principal */}
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide leading-snug uppercase mb-6">
        {t('title.line1')}
        <br />
        {t('title.line2')}
        <span className="text-[#F76BFF]">?</span>
      </h2>

      {/* Texto descriptivo */}
      <p className="text-sm md:text-base text-white/80 max-w-xs md:max-w-sm mb-8">
        {t('description')}
      </p>

      {/* Botón */}
      <a
        href="mailto:ekstasis.club@gmail.com"
        className="flex items-center justify-between border border-white text-white px-4 py-2 w-[90%] max-w-[240px] md:max-w-xs rounded transition hover:bg-white hover:text-black group text-xs md:text-sm"
      >
        <span className="tracking-widest font-medium whitespace-nowrap">{t('button')}</span>
        <span className="text-sm md:text-base group-hover:translate-x-1 transition">&#8599;</span>
      </a>
    </section>
  );
}
