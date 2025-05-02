'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { IoMdClose, IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

const parties = ['All', '18-04-2025', '21-02-2025'];

const photos = [
  ...Array.from({ length: 51 }, (_, i) => ({
    src: `/images/18-04-25/photo${i + 1}.webp`,
    party: '18-04-2025',
  })),

  ...Array.from({ length: 59 }, (_, i) => ({
    src: `/images/21-02-25/photo${i + 1}.webp`,
    party: '21-02-2025',
  })),
];


export default function GalleryPage() {
  const [selectedParty, setSelectedParty] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [startX, setStartX] = useState(null);

  const filteredPhotos = selectedParty === 'All'
    ? photos
    : photos.filter(photo => photo.party.toLowerCase() === selectedParty.toLowerCase());

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
    }
  };

  const showNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev + 1));
    }
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (startX !== null) {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
        showNext();
      } else if (endX - startX > 50) {
        showPrev();
      }
      setStartX(null);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === 'overlay') {
      closeModal();
    }
  };

  return (
    <main className="bg-black min-h-screen px-4 pt-28 pb-12 flex flex-col items-center relative">
      {/* Botones de fiestas */}
      <div className="flex flex-wrap gap-4 justify-center mb-8 z-10">
        {parties.map((party) => (
          <button
            key={party}
            onClick={() => setSelectedParty(party)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition ${
              selectedParty === party ? 'bg-[#F76BFF] text-white' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {party}
          </button>
        ))}
      </div>

      {/* Grid de fotos */}
      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full max-w-6xl z-10">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="relative overflow-hidden aspect-square rounded-lg cursor-pointer"
              onClick={() => openModal(index)}
            >
              <Image
                src={photo.src}
                alt={`Gallery Photo ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-sm opacity-60 mt-10 uppercase tracking-widest"
        >
          Coming soon...
        </motion.div>
      )}

      {/* Modal de imagen */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            id="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4"
            onClick={handleOverlayClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Botón cerrar más abajo */}
            <div className="w-full flex justify-end p-4 absolute top-8 right-6">
              <button
                onClick={closeModal}
                className="text-white text-4xl"
              >
                <IoMdClose />
              </button>
            </div>

            {/* Imagen grande */}
            <div className="relative w-full max-w-3xl max-h-[90vh] flex items-center justify-center pointer-events-none">
              <Image
                src={filteredPhotos[selectedIndex].src}
                alt="Selected Photo"
                width={1200}
                height={1200}
                className="object-contain w-full h-full pointer-events-auto"
              />

              {/* Flechas navegación */}
              <button
                onClick={showPrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-5xl pointer-events-auto"
              >
                <IoMdArrowDropleft />
              </button>
              <button
                onClick={showNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-5xl pointer-events-auto"
              >
                <IoMdArrowDropright />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
