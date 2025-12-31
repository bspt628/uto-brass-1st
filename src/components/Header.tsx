'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { NAV_ITEMS } from '@/lib/constants';
import { useLanguage, translations } from '@/lib/i18n';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const navT = translations.nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/images/utobrass-logo.png"
                alt="UTO BRASS"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
              <span className="font-display font-bold text-text text-sm sm:text-base">
                UTO BRASS
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`font-display text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-text hover:text-primary'
                      : 'text-text hover:text-primary'
                  }`}
                >
                  {navT[item.id as keyof typeof navT][language]}
                </a>
              ))}
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full border-2 border-primary/30 hover:border-primary transition-colors text-sm font-medium"
                aria-label="Toggle language"
              >
                <span className={language === 'ja' ? 'text-primary font-bold' : 'text-text-light'}>
                  JP
                </span>
                <span className="text-text-light">/</span>
                <span className={language === 'en' ? 'text-primary font-bold' : 'text-text-light'}>
                  EN
                </span>
              </button>
            </nav>

            {/* Language Toggle (Mobile) + Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2 py-1 rounded-full border border-primary/30 text-xs font-medium"
                aria-label="Toggle language"
              >
                <span className={language === 'ja' ? 'text-primary font-bold' : 'text-text-light'}>
                  JP
                </span>
                <span className="text-text-light">/</span>
                <span className={language === 'en' ? 'text-primary font-bold' : 'text-text-light'}>
                  EN
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-text"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="メニュー"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              className="absolute top-16 left-0 right-0 bg-white shadow-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-4">
                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className="block px-6 py-3 text-text hover:bg-secondary-light/30 hover:text-primary font-display"
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {navT[item.id as keyof typeof navT][language]}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
