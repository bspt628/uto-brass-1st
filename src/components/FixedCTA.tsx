'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket } from 'lucide-react';
import { CONCERT_INFO } from '@/lib/constants';

export function FixedCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately)
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <a
            href={CONCERT_INFO.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-medium rounded-xl shadow-lg hover:bg-primary-dark active:bg-primary-dark transition-colors"
          >
            <Ticket className="w-5 h-5" />
            <span>チケット予約</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
