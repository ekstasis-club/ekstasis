'use client';

import { motion } from 'framer-motion';

export default function MotionSection({ children, className }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
