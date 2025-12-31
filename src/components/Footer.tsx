'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Twitter, Instagram, Mail } from 'lucide-react';
import { ORGANIZATION, NAV_ITEMS } from '@/lib/constants';
import { useLanguage, translations } from '@/lib/i18n';
import { ShareButtons } from '@/components/ui';

export function Footer() {
  const { language } = useLanguage();
  const t = translations.footer;
  const navT = translations.nav;
  const aboutT = translations.about;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 bg-text text-white py-12 sm:py-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Logo & Description */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <Image
                src="/images/utobrass-logo.png"
                alt="UTO BRASS"
                width={150}
                height={50}
                className="brightness-0 invert flex-shrink-0"
              />
              <p className="text-white/70 text-sm leading-relaxed">
                {aboutT.utoBrassDescription[language].split('\n\n')[0]}
              </p>
            </div>
          </motion.div>

          {/* Menu & Contact - always side by side */}
          <motion.div
            className="grid grid-cols-2 gap-8 md:gap-12 flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4 text-primary-light">Menu</h3>
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-primary-light transition-colors text-sm"
                    >
                      {navT[item.id as keyof typeof navT][language]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4 text-primary-light">{t.contact[language]}</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={ORGANIZATION.sns.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-primary-light transition-colors text-sm"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>@utobrass</span>
                  </a>
                </li>
                <li>
                  <a
                    href={ORGANIZATION.sns.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-primary-light transition-colors text-sm"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>@utobrass</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${ORGANIZATION.email}`}
                    className="flex items-center gap-2 text-white/70 hover:text-primary-light transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{ORGANIZATION.email.replace('@', '[at]')}</span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Share Buttons */}
        <motion.div
          className="mt-8 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShareButtons />
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="mt-8 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a
                href={ORGANIZATION.parentOrg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-white/70 transition-colors text-xs"
              >
                <Image
                  src="/images/ut-orch_logo.png"
                  alt={ORGANIZATION.parentOrg.name}
                  width={24}
                  height={24}
                  className="rounded brightness-0 invert opacity-50"
                />
                <span>{t.parentOrg[language]}</span>
              </a>
            </div>
            <p className="text-white/50 text-xs">
              &copy; {currentYear} {ORGANIZATION.name}. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
