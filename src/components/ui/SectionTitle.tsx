'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ children, subtitle, className = '' }: SectionTitleProps) {
  return (
    <motion.div
      className={`text-center mb-8 sm:mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text font-display">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 text-text-light text-sm sm:text-base">
          {subtitle}
        </p>
      )}
      <motion.div
        className="mt-4 mx-auto w-16 h-1 bg-primary rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      />
    </motion.div>
  );
}
