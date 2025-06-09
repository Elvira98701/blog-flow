import { Footer } from "@/components/layout";
import {
  AboutSection,
  FaqSection,
  HeroSection,
  JoinSection,
  SliderSection,
  StatsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SliderSection />
      <FaqSection />
      <StatsSection />
      <JoinSection />
      <Footer />
    </main>
  );
}
