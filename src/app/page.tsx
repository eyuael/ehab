import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import CookieConsent from '@/components/CookieConsent';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <CookieConsent />
    </main>
  );
}
