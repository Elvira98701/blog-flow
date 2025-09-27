import { Container, SpotlightCard } from "@/components/shared";
import { cn } from "@/lib/utils";

interface FeaturedSectionProps {
  className?: string;
}

export const FeaturedSection = ({ className }: FeaturedSectionProps) => {
  return (
    <section
      className={cn("py-10 md:py-20 relative", className)}
      aria-labelledby="featured-title"
    >
      <Container>
        <div className="w-1/3 text-center mx-auto">
          <h2 id="featured-title">
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
              Posts
            </span>
          </h2>
          <p className="py-8">
            Stay inspired with the latest and most popular posts. Whether
            you&apos;re revisiting your own highlights or exploring new ideas,
            this space keeps your content in motion.
          </p>
        </div>
        <div className="">
          <div className="flex gap-8 mb-8">
            <SpotlightCard
              spotlightColor="rgba(75, 59, 228, 0.5)"
              className="flex-1 min-h-[450px]"
            >
              text1
            </SpotlightCard>
            <SpotlightCard
              spotlightColor="rgba(75, 59, 228, 0.5)"
              className="flex-1 min-h-[450px]"
            >
              text1
            </SpotlightCard>
          </div>
          <div className="flex gap-8">
            <SpotlightCard
              spotlightColor="rgba(75, 59, 228, 0.5)"
              className="flex-1 min-h-64"
            >
              text1
            </SpotlightCard>
            <SpotlightCard
              spotlightColor="rgba(75, 59, 228, 0.5)"
              className="flex-1"
            >
              text1
            </SpotlightCard>
            <SpotlightCard
              spotlightColor="rgba(75, 59, 228, 0.5)"
              className="flex-1"
            >
              text1
            </SpotlightCard>
          </div>
        </div>
      </Container>
    </section>
  );
};
