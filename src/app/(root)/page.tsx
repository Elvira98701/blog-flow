import { Footer } from "@/components/layout";
import {
  AboutSection,
  FaqSection,
  FeaturedSection,
  HeroSection,
  JoinSection,
  StatsSection,
} from "@/components/sections";
import { Gradient } from "@/components/shared";

export default function Home() {
  return (
    <>
      <main className="relative">
        <Gradient className="absolute top-0 right-0 -z-10" />
        <HeroSection />
        <StatsSection className="-mt-20" />
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
