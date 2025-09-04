import { Footer } from "@/components/layout";
import {
  AboutSection,
  FaqSection,
  FeaturedSection,
  HeroSection,
  JoinSection,
  StatsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <main className="relative">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <FeaturedSection />
        <FaqSection />
        <StatsSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
