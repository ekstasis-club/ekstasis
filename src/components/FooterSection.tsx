'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-black text-white py-6"
    >
      <div className="overflow-hidden whitespace-nowrap border-y border-white py-3">
        <div className="flex whitespace-nowrap animate-marquee text-lg font-bold tracking-widest uppercase space-x-32">
          {Array.from({ length: 3 }).map((_, index: number) => (
            <div key={index} className="flex items-center space-x-10">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/eks.ta.sis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <FaInstagram className="text-white" size={22} />
                <span className="text-base uppercase bg-gradient-to-r from-[#F76BFF] via-white to-[#F76BFF] bg-clip-text text-transparent">
                  @EKS.TA.SIS
                </span>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@eks.ta.sis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <FaTiktok className="text-white" size={22} />
                <span className="text-base uppercase bg-gradient-to-r from-[#F76BFF] via-white to-[#F76BFF] bg-clip-text text-transparent">
                  @EKS.TA.SIS
                </span>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@ekstasis-tv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <FaYoutube className="text-white" size={22} />
                <span className="text-base uppercase bg-gradient-to-r from-[#F76BFF] via-white to-[#F76BFF] bg-clip-text text-transparent">
                  @EKSTASIS-TV
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
