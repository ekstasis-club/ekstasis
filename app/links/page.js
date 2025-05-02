'use client';

import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LinksPage() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center px-4 pt-10 overflow-hidden">
      
      {/* Degradado absoluto detrás */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[75%] bg-gradient-to-t from-[#F76BFF] to-black z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center space-y-8 w-full max-w-md">
        
        {/* Logo */}
        <div className="relative w-64 h-24 mb-2">
          <Image
            src="/logo.svg"
            alt="Ekstasis Logo"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold uppercase tracking-widest">EKS.TA.SIS</h1>
        <p className="text-sm uppercase tracking-widest text-white/70">Madrid, are u ready?!!</p>

        {/* Redes Sociales */}
        <div className="flex space-x-8 mt-6">
          <a href="https://instagram.com/eks.ta.sis" target="_blank" rel="noopener noreferrer" className="text-3xl hover:scale-110 transition">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com/@eks.ta.sis" target="_blank" rel="noopener noreferrer" className="text-3xl hover:scale-110 transition">
            <FaTiktok />
          </a>
          <a href="https://youtube.com/@ekstasis-tv" target="_blank" rel="noopener noreferrer" className="text-3xl hover:scale-110 transition">
            <FaYoutube />
          </a>
        </div>

        {/* Botones */}
        <div className="flex flex-col w-full space-y-6 mt-10">
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="/"
            className="block bg-black rounded-full py-4 text-center font-semibold text-sm tracking-wide shadow-lg hover:scale-105 transition active:scale-95"
            style={{ boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.7)' }}
          >
            EKSTASIS WEB
          </motion.a>

          <motion.a
            whileTap={{ scale: 0.95 }}
            href="/#events"
            className="block bg-black rounded-full py-4 text-center font-semibold text-sm tracking-wide shadow-lg hover:scale-105 transition active:scale-95"
            style={{ boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.7)' }}
          >
            NEXT EVENTS
          </motion.a>

          <motion.a
            whileTap={{ scale: 0.95 }}
            href="/#subscribe"
            className="block bg-black rounded-full py-4 text-center font-semibold text-sm tracking-wide shadow-lg hover:scale-105 transition active:scale-95"
            style={{ boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.7)' }}
          >
            STAY UPDATED: TICKET DROPS & NEWS ❤️
          </motion.a>
        </div>

      </div>
    </main>
  );
}
