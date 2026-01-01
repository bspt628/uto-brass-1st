import { Header, Footer, FixedCTA } from '@/components';
import { FixedInstruments } from '@/components/decorations';
import { JsonLd } from '@/components/JsonLd';
import {
  HeroSection,
  AboutSection,
  ProgramSection,
  AccessSection,
  TicketSection,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <JsonLd />
      <FixedInstruments />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramSection />
        <AccessSection />
        <TicketSection />
      </main>
      <Footer />
      <FixedCTA />
    </>
  );
}
