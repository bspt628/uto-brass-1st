'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionTitle, Card, Button } from '@/components/ui';
import { ORGANIZATION } from '@/lib/constants';
import { useLanguage, translations } from '@/lib/i18n';

export function AboutSection() {
  const { language } = useLanguage();
  const t = translations.about;

  return (
    <section id="about" className="relative py-section-sm sm:py-section-md lg:py-section overflow-hidden">
      <div className="section-container relative z-10">
        <SectionTitle>{t.sectionTitle[language]}</SectionTitle>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* UTO BRASS Card */}
          <Card hover={false}>
            <motion.div
              className="flex justify-center mb-6"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t.utoBrassDescription[language].split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </Card>

          {/* University of Tokyo Orchestra Card */}
          <Card hover={false}>
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/ut-orch_logo_with_letters-2.jpg"
                alt={ORGANIZATION.parentOrg.name}
                width={400}
                height={80}
                className="h-auto max-w-full"
              />
            </motion.div>

            <motion.div
              className="text-text leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-base sm:text-lg mb-6">
                {t.parentOrgDescription[language]}
              </p>
              <div className="flex justify-center">
                <Button href={ORGANIZATION.parentOrg.url} external variant="secondary">
                  {t.parentOrgButton[language]}
                </Button>
              </div>
            </motion.div>
          </Card>
        </div>
      </div>
    </section>
  );
}
