'use client';

import { motion } from 'framer-motion';
import { MapPin, Train } from 'lucide-react';
import { SectionTitle, Card } from '@/components/ui';
import { CONCERT_INFO } from '@/lib/constants';
import { useLanguage, translations } from '@/lib/i18n';

export function AccessSection() {
  const { language } = useLanguage();
  const t = translations.access;

  const accessMethods = [
    t.accessMethods.train[language],
    t.accessMethods.bus[language],
  ];

  return (
    <section id="access" className="relative py-section-sm sm:py-section-md lg:py-section overflow-hidden">
      <div className="section-container relative z-10">
        <SectionTitle>{t.sectionTitle[language]}</SectionTitle>

        <div className="max-w-4xl mx-auto">
          {/* Venue Info Card */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <h3 className="font-bold text-lg mb-4 text-text flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                {t.venueLabel[language]}
              </h3>
              <p className="font-semibold text-text mb-2">
                {t.venueName[language]}
              </p>
              <p className="text-text-light text-sm">
                {t.address[language]}
              </p>
            </Card>
          </motion.div>

          {/* Access Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <h3 className="font-bold text-lg mb-4 text-text flex items-center gap-2">
                <Train className="w-5 h-5 text-primary" />
                {t.accessLabel[language]}
              </h3>
              <ul className="space-y-2">
                {accessMethods.map((access, index) => (
                  <li key={index} className="text-text-light text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{access}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={`https://maps.google.com/maps?q=四谷区民ホール+新宿区内藤町87&output=embed&hl=${language}`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={language === 'ja' ? '四谷区民ホール 地図' : 'Yotsuya Kumin Hall Map'}
              />
            </div>
            <p className="text-center mt-4">
              <a
                href={CONCERT_INFO.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors text-sm inline-flex items-center gap-1"
              >
                <MapPin className="w-4 h-4" />
                {t.openInMaps[language]}
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
