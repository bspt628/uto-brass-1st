'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ScrollingInstrumentProps {
  src: string;
  alt: string;
  side: 'left' | 'right';
  size?: number;
  className?: string;
}

export function ScrollingInstrument({
  src,
  alt,
  side,
  size = 200,
  className = '',
}: ScrollingInstrumentProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    side === 'left'
      ? ['-100%', '0%', '0%', '-100%']
      : ['100%', '0%', '0%', '100%']
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    side === 'left' ? [-15, 0, 15] : [15, 0, -15]
  );

  return (
    <div
      ref={ref}
      className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} pointer-events-none ${className}`}
    >
      <motion.div
        style={{ x, opacity, rotate }}
        className="relative"
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-contain"
          style={{
            width: size,
            height: 'auto',
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
          }}
        />
      </motion.div>
    </div>
  );
}
