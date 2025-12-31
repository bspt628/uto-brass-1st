'use client';

import { motion } from 'framer-motion';
import { Ticket, ExternalLink } from 'lucide-react';
import { SectionTitle, Button, Card } from '@/components/ui';
import { CONCERT_INFO } from '@/lib/constants';

export function TicketSection() {
  return (
    <section id="ticket" className="relative py-section-sm sm:py-section-md lg:py-section bg-gradient-to-b from-white to-secondary-light/30 overflow-hidden">
      <div className="section-container relative z-10">
        <SectionTitle subtitle="ご来場について">Ticket</SectionTitle>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Ticket className="w-8 h-8 text-primary" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-2">
                {CONCERT_INFO.admission}
              </h3>

              <p className="text-text-light mb-6">
                ご来場の際は、teketでの事前予約をお願いいたします。
              </p>

              <div className="space-y-4">
                <Button href={CONCERT_INFO.ticketUrl} external className="w-full sm:w-auto">
                  <span>teketで予約する</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-xs text-text-light">
                  ※ 予約なしでもご入場いただけますが、<br className="sm:hidden" />
                  満席の場合はお断りする可能性がございます。
                </p>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
