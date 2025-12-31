'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function FixedInstruments() {
  return (
    <>
      {/* Trumpet - Top Left */}
      <motion.div
        className="fixed top-20 left-0 sm:left-6 lg:left-8 z-10 pointer-events-none"
        initial={{ x: '-150%', opacity: 0, rotate: -15 }}
        animate={{ x: '0%', opacity: 0.5, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <Image
          src="/images/trumpet.png"
          alt="トランペット"
          width={300}
          height={300}
          className="object-contain w-[180px] sm:w-[160px] md:w-[200px] lg:w-[240px]"
          style={{
            filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))',
          }}
          priority
        />
      </motion.div>

      {/* Horn - Top Right */}
      <motion.div
        className="fixed top-16 right-0 sm:right-6 lg:right-8 z-10 pointer-events-none"
        initial={{ x: '150%', opacity: 0, rotate: 15 }}
        animate={{ x: '0%', opacity: 0.5, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      >
        <Image
          src="/images/horn.png"
          alt="ホルン"
          width={320}
          height={320}
          className="object-contain w-[180px] sm:w-[160px] md:w-[220px] lg:w-[260px]"
          style={{
            filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))',
          }}
          priority
        />
      </motion.div>
    </>
  );
}
