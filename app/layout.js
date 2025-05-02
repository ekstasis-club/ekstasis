'use client';

import '../styles/globals.css';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import ScrollProgress from '../components/ScrollProgress';
import { AnimatePresence, motion } from 'framer-motion';

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`bg-black text-white font-sans relative overflow-x-hidden ${menuOpen ? 'overflow-hidden' : ''}`}>

        {/* ✅ Scroll progress */}
        <ScrollProgress menuOpen={menuOpen} />

        {/* ✅ HEADER DESKTOP */}
        <div className="absolute top-0 left-0 w-full hidden md:flex items-center justify-between px-4 py-3 z-50">
          <button onClick={() => router.push('/')}>
            <img src="/logo.svg" alt="Logo" className="h-16" />
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl"
            aria-label="Open menu"
          >
            &#9776;
          </button>
        </div>

        {/* ✅ HEADER MÓVIL */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-5xl z-50 flex items-center justify-between px-4 md:hidden">
          <button onClick={() => router.push('/')}>
            <img src="/logo.svg" alt="Logo" className="h-12" />
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl"
            aria-label="Open menu"
          >
            &#9776;
          </button>
        </div>

        {/* ✅ MENÚ OVERLAY ANIMADO */}
        <AnimatePresence>
  {menuOpen && (
    <motion.div
      key="mobile-menu-overlay"
      className="fixed inset-0 z-[9999] bg-black/50 flex justify-center items-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => setMenuOpen(false)} // Cierra al pulsar fuera
    >
      <motion.div
        key="mobile-menu"
        className="w-full h-[65vh] bg-[#F76BFF] rounded-t-3xl shadow-xl flex flex-col"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()} // No cerrar al hacer clic dentro
      >
        {/* Topbar con idioma a la izquierda y cerrar a la derecha */}
        <div className="w-full flex items-center justify-between px-6 py-4">
          {/* Idioma (izquierda) */}
          <div className="flex space-x-2 bg-white/10 p-1 rounded-full">
            <button className="text-white font-bold px-3 py-1 bg-white text-black rounded-full text-sm">EN</button>
            <button className="text-white font-semibold px-3 py-1 text-sm">ES</button>
          </div>

          {/* Botón cerrar (derecha) */}
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-4xl"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        {/* Navegación */}
        <nav className="flex-1 flex flex-col justify-center items-center space-y-6 text-white text-2xl font-bold uppercase tracking-wide">
          <button onClick={() => { setMenuOpen(false); setTimeout(() => router.push('/?scroll=events'), 300); }}>EVENTS</button>
          <button onClick={() => { setMenuOpen(false); setTimeout(() => router.push('/?scroll=faq'), 300); }}>FAQ</button>
          <button onClick={() => { setMenuOpen(false); setTimeout(() => router.push('/gallery'), 300); }}>GALLERY</button>
        </nav>

        {/* Redes sociales */}
        <div className="flex justify-center items-center gap-6 py-4 border-t border-white/20">
          <a href="https://www.instagram.com/eks.ta.sis" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:scale-110 transition-transform">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@eks.ta.sis" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:scale-110 transition-transform">
            <FaTiktok />
          </a>
          <a href="https://www.youtube.com/@ekstasis-tv" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:scale-110 transition-transform">
            <FaYoutube />
          </a>
          <a href="https://ra.co/promoters/156865" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:scale-110 transition-transform">
            <img src="/ra-logo.png" alt="RA" className="h-4 w-auto mt-[2px]" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
        {/* ✅ CONTENIDO PRINCIPAL */}
        <main className={`${menuOpen ? 'blur-sm' : ''} transition-all duration-300`}>
          {children}
        </main>
      </body>
    </html>
  );
}
