'use client';

import { motion, useScroll, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function ScrollProgress({ menuOpen }) {
  const { scrollYProgress } = useScroll();
  const controlledProgress = useMotionValue(0);
  
  const smoothProgress = useSpring(controlledProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (!menuOpen) {
        controlledProgress.set(latest);
      }
      // Si el menú está abierto, no actualizamos nada
    });

    return () => unsubscribe();
  }, [menuOpen, scrollYProgress, controlledProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F76BFF] via-white to-[#F76BFF] z-[9999] origin-left"
      style={{ scaleX: smoothProgress }}
    />
  );
}
