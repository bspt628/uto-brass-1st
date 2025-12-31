'use client';

import { motion } from 'framer-motion';
import { SectionTitle, Card } from '@/components/ui';
import { PROGRAM } from '@/lib/constants';

export function ProgramSection() {
  return (
    <section id="program" className="relative py-section-sm sm:py-section-md lg:py-section bg-secondary-light/20 overflow-hidden">
      <div className="section-container relative z-10">
        <SectionTitle subtitle="演奏予定曲目">Program</SectionTitle>

        <div className="max-w-3xl mx-auto space-y-4">
          {PROGRAM.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg">
                <div>
                  <p className="text-text-light text-sm mb-1">
                    {item.composer}
                    <span className="text-xs ml-2 hidden sm:inline">
                      / {item.composerEn}
                    </span>
                  </p>
                  <h3 className="text-text font-semibold text-base sm:text-lg">
                    {item.title}
                  </h3>
                  {item.titleEn && (
                    <p className="text-text-light text-xs mt-1 hidden sm:block">
                      {item.titleEn}
                    </p>
                  )}
                  {item.arranger && (
                    <p className="text-text-light text-sm mt-1">
                      {item.arranger}
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-text-light text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          ほか<br />
          ※ 曲目・曲順は変更になる場合があります
        </motion.p>
      </div>
    </section>
  );
}
