import { Header } from '@/components/Header';
import { GrantThorntonCarousel } from '@/components/GrantThorntonCarousel';
import { AboutSection } from '@/components/AboutSection';
import { InsightsSection } from '@/components/InsightsSection';
import { VisionG20Section } from '@/components/VisionG20Section';
import { CareerSection } from '@/components/CareerSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main role="main" aria-label="Home page content">
        <GrantThorntonCarousel />
        <AboutSection />
        <InsightsSection />
        <VisionG20Section />
        <CareerSection />
      </main>
      <Footer />
    </div>
  );
}