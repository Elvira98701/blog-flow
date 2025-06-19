import { Footer, Gradient } from "@/components/layout";
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
    <main className="relative">
      <Gradient className="absolute top-0 right-0 -z-10" />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <FeaturedSection />
      <FaqSection />
      <StatsSection />
      <JoinSection />
      <Footer />
    </main>
  );
}
