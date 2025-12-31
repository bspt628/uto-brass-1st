'use client';

import { motion } from 'framer-motion';

interface FloatingNotesProps {
  className?: string;
}

const notes = [
  { char: '♪', delay: 0, x: '10%', duration: 8 },
  { char: '♫', delay: 1.5, x: '25%', duration: 10 },
  { char: '♪', delay: 3, x: '45%', duration: 7 },
  { char: '♫', delay: 4.5, x: '65%', duration: 9 },
  { char: '♪', delay: 2, x: '80%', duration: 11 },
  { char: '♫', delay: 5, x: '90%', duration: 8 },
];

export function FloatingNotes({ className = '' }: FloatingNotesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {notes.map((note, index) => (
        <motion.span
          key={index}
          className="absolute text-primary/20 text-2xl sm:text-3xl font-display"
          style={{ left: note.x }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: note.duration,
            delay: note.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {note.char}
        </motion.span>
      ))}
    </div>
  );
}
