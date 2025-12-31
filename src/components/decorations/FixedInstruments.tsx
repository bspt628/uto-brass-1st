'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function FixedInstruments() {
  return (
    <>
      {/* Trumpet - Bottom Left */}
      <div className="fixed bottom-0 left-0 z-10 pointer-events-none">
        <motion.div
          initial={{ x: '-150%', opacity: 0, rotate: -15 }}
          animate={{ x: '0%', opacity: 0.5, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <Image
            src="/images/trumpet.png"
            alt="トランペット"
            width={300}
            height={300}
            className="object-contain w-[360px] sm:w-[440px] md:w-[560px] lg:w-[720px]"
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))',
            }}
            priority
          />
        </motion.div>
      </div>

      {/* Horn - Top Right */}
      <div className="fixed top-16 right-0 z-10 pointer-events-none">
        <motion.div
          initial={{ x: '150%', opacity: 0, rotate: 15 }}
          animate={{ x: '0%', opacity: 0.5, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <Image
            src="/images/horn.png"
            alt="ホルン"
            width={320}
            height={320}
            className="object-contain w-[360px] sm:w-[440px] md:w-[600px] lg:w-[760px]"
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))',
            }}
            priority
          />
        </motion.div>
      </div>
    </>
  );
}
