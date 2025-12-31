'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { SectionTitle, Button, Card } from '@/components/ui';
import { CONCERT_INFO } from '@/lib/constants';
import { useLanguage, translations } from '@/lib/i18n';

export function TicketSection() {
  const { language } = useLanguage();
  const t = translations.ticket;

  return (
    <section id="ticket" className="relative py-section-sm sm:py-section-md lg:py-section bg-gradient-to-b from-white to-secondary-light/30 overflow-hidden">
      <div className="section-container relative z-10">
        <SectionTitle>{t.sectionTitle[language]}</SectionTitle>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/teket-logo-v-dark.png"
                  alt="teket"
                  width={80}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-2">
                {t.freeAdmission[language]}
              </h3>

              <p className="text-text-light mb-6">
                {t.freeNote[language]}
              </p>

              <div className="space-y-4">
                <Button href={CONCERT_INFO.ticketUrl} external className="w-full sm:w-auto">
                  <span>{t.reserveButton[language]}</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-text-light text-xs">
                  {t.reserveNote[language]}
                </p>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
