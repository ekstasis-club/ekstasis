'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MessageSquare } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo puedo comprar entradas?",
    answer: "Las entradas se venden a través de nuestro promotor en RA.co. Sigue las redes para saber cuándo salen.",
  },
  {
    question: "¿Dónde son los eventos?",
    answer: "Anunciamos las ubicaciones secretas unos días antes del evento.",
  },
  {
    question: "¿Puedo entrar después de la 1 AM?",
    answer: "Sí, pero recomendamos llegar antes para no perderte las mejores vibras.",
  },
  {
    question: "¿Qué edad mínima es necesaria?",
    answer: "Debes tener mínimo 18 años para asistir.",
  },
];

export default function FAQSection() {
  const [text, setText] = useState('');
  const [finished, setFinished] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Primera pregunta activa por defecto

  useEffect(() => {
    const word = 'FAQ';
    const typingSpeed = 100;

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

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black text-white flex flex-col items-center px-6">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl font-semibold text-center uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#F76BFF] via-white to-[#F76BFF] mb-12"
      >
        {text}
      </motion.h2>

      {/* Chat FAQ */}
      <div className="w-full max-w-2xl flex flex-col gap-10">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;

          return (
            <div key={index} className="space-y-4">
              {/* Pregunta */}
              <motion.button
                onClick={() => toggleAnswer(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 focus:outline-none"
              >
                <User className="w-5 h-5 text-[#F76BFF] mt-1" />

                <div
                  className={`px-4 py-3 rounded-lg max-w-[80%] text-left transition ${
                    isActive
                      ? 'border border-[#F76BFF] bg-[#1a1a1a]'
                      : 'border border-transparent bg-[#111]'
                  } hover:bg-[#2a2a2a]`}
                >
                  <p className="text-sm md:text-base font-semibold text-white">{faq.question}</p>
                </div>
              </motion.button>

              {/* Respuesta */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    key={`answer-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="flex items-start gap-3 justify-end overflow-hidden"
                  >
                    <div className="bg-[#F76BFF] text-black px-4 py-3 rounded-lg max-w-[80%] text-sm md:text-base">
                      {faq.answer}
                    </div>
                    <MessageSquare className="w-5 h-5 text-[#F76BFF] mt-1" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
