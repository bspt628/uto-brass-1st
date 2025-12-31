'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Train } from 'lucide-react';
import { SectionTitle, Card } from '@/components/ui';
import { CONCERT_INFO } from '@/lib/constants';

export function AccessSection() {
  return (
    <section id="access" className="relative py-section-sm sm:py-section-md lg:py-section overflow-hidden">
      <div className="section-container relative z-10">
        <SectionTitle subtitle="会場案内">Access</SectionTitle>

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
                会場
              </h3>
              <p className="font-semibold text-text mb-2">
                {CONCERT_INFO.venue.name}
              </p>
              <p className="text-text-light text-sm">
                {CONCERT_INFO.venue.address}
              </p>
              <div className="mt-3 flex items-center gap-2 text-text-light text-sm">
                <Phone className="w-4 h-4" />
                <span>{CONCERT_INFO.venue.phone}</span>
              </div>
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
                アクセス
              </h3>
              <ul className="space-y-2">
                {CONCERT_INFO.venue.access.map((access, index) => (
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4884955543843!2d139.71276841525882!3d35.68745298019373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cdb0b8b0b1f%3A0x9b5c8c8c8c8c8c8c!2z5Zub6LC35Yy65rCR44K744Oz44K_44O8!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="四谷区民ホール 地図"
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
                Google マップで開く
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
