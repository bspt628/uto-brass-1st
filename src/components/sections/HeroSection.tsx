'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { CONCERT_INFO } from '@/lib/constants';
import { FloatingNotes } from '@/components/decorations';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary-light/30 to-white">
      <FloatingNotes />

      <div className="section-container relative z-10 py-20 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Flyer Image */}
          <motion.div
            className="w-full max-w-sm lg:max-w-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/images/flyer.png"
              alt="UTO BRASS 第1回演奏会 チラシ"
              width={400}
              height={566}
              className="w-full h-auto rounded-lg shadow-xl"
              priority
            />
          </motion.div>

          {/* Concert Info */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.div
              className="flex items-center justify-center gap-4 sm:gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src="/images/ut-orch_logo.png"
                alt="東京大学音楽部管弦楽団"
                width={100}
                height={100}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
              />
              <span className="text-text text-2xl sm:text-3xl lg:text-4xl font-bold">×</span>
              <Image
                src="/images/utobrass-logo.png"
                alt="UTO BRASS"
                width={340}
                height={113}
                className="h-20 sm:h-24 lg:h-28 w-auto"
              />
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text font-display mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="block">UTO BRASS</span>
              <span className="block">第1回演奏会</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-text-light mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {CONCERT_INFO.subtitle}
            </motion.p>

            <motion.div
              className="space-y-3 text-text mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="text-xl sm:text-2xl font-semibold">
                {CONCERT_INFO.dateDisplay}（{CONCERT_INFO.dayOfWeek}）
              </p>
              <p className="text-lg">
                開場 {CONCERT_INFO.doorOpen} / 開演 {CONCERT_INFO.startTime}
              </p>
              <p className="text-lg">{CONCERT_INFO.venue.name}</p>
              <p className="text-primary font-semibold text-lg">
                {CONCERT_INFO.admission}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button href={CONCERT_INFO.ticketUrl} external>
                チケット予約（teket）
              </Button>
              <Button variant="secondary" href="#program">
                プログラムを見る
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
