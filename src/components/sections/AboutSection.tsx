'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionTitle } from '@/components/ui';
import { ORGANIZATION } from '@/lib/constants';

export function AboutSection() {
  return (
    <section id="about" className="relative py-section-sm sm:py-section-md lg:py-section overflow-hidden">
      <div className="section-container relative z-10">
        <SectionTitle>About</SectionTitle>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/utobrass-logo.png"
              alt="UTO BRASS"
              width={200}
              height={67}
              className="h-auto"
            />
          </motion.div>

          <motion.div
            className="text-text leading-relaxed space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {ORGANIZATION.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 pt-8 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-4">
              <a
                href={ORGANIZATION.parentOrg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-light hover:text-primary transition-colors"
              >
                <Image
                  src="/images/ut-orch_logo.png"
                  alt={ORGANIZATION.parentOrg.name}
                  width={40}
                  height={40}
                  className="rounded"
                />
                <span className="text-sm">
                  {ORGANIZATION.parentOrg.name}
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
