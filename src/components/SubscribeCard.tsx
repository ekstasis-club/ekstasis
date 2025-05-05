'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

export default function SubscribeCard() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;

    try {
      const res = await fetch('https://formsubmit.co/ajax/ekstasis.club@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative w-[85vw] md:w-[400px] h-[60vh] overflow-hidden rounded-2xl shadow-xl"
    >
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center filter grayscale"
          style={{
            backgroundImage: "url('/images/photo39.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 p-6 text-white flex flex-col justify-start items-center gap-4 h-full">
        <h3
          className="text-4xl md:text-5xl font-extrabold text-white text-center leading-tight w-full"
          dangerouslySetInnerHTML={{
            __html: `STAY UPDATED! <span class='text-white/50'>TICKET DROP AND NEWS</span>`,
          }}
        />

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 mt-4">
          <input
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className="w-full p-3 rounded-full bg-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F76BFF] transition"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full p-3 rounded-full bg-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F76BFF] transition"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Enter your phone (optional)"
            className="w-full p-3 rounded-full bg-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F76BFF] transition"
          />
          <button
            type="submit"
            className="w-full px-5 py-2 rounded-full bg-[#F76BFF] hover:bg-[#F76BFF]/80 text-white font-semibold text-xs uppercase tracking-wider transition"
          >
            Notify Me
          </button>
        </form>

        {submitted && (
          <p className="text-sm text-center text-[#F76BFF]">¡Nos vemos pronto!</p>
        )}
        {error && (
          <p className="text-sm text-red-400 text-center">Hubo un error. Inténtalo de nuevo.</p>
        )}
      </div>
    </motion.div>
  );
}
