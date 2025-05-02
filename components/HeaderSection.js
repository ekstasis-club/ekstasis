'use client';

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = ["NEXT", "WAREHOUSE", "RAVE", "??.??"];

export default function EkstasisLanding() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const { scrollY } = useScroll();
  const overlayOpacity = useTransform(scrollY, [0, 400], [0, 0.6]);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let typingSpeed = isDeleting ? 60 : 120;

    const handleTyping = () => {
      if (!isDeleting && text.length < currentWord.length) {
        setText(currentWord.slice(0, text.length + 1));
      } else if (isDeleting && text.length > 0) {
        setText(currentWord.slice(0, text.length - 1));
      } else if (!isDeleting && text.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
        return;
      } else if (isDeleting && text.length === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex]);

  return (
    <main className="relative bg-black text-white font-sans">
      {/* Sección sticky del video */}
      <section className="h-screen sticky top-0 z-10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-[90vw] max-w-5xl overflow-hidden rounded-3xl relative">
            <video
              className="h-full w-full object-cover"
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Overlay oscuro que crece con el scroll */}
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-black pointer-events-none"
            />
          </div>
        </div>

        {/* Texto centrado sobre el video */}
        <div className="relative z-20 h-full flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-widest">
  {words[currentWordIndex] === "??.??" ? (
    <span className="text-[#F76BFF]">{text}</span>
  ) : (
    text
  )}
</h1>

        </div>
      </section>
    </main>
  );
}
