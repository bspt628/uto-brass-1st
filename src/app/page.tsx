import { Header, Footer, FixedCTA } from '@/components';
import { FixedInstruments } from '@/components/decorations';
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
