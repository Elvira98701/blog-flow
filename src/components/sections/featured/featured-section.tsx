import { Container } from "@/components/shared";
import { cn } from "@/lib/utils";

import { FeaturedList } from "./featured-list";

interface FeaturedSectionProps {
  className?: string;
}

export const FeaturedSection = ({ className }: FeaturedSectionProps) => {
  return (
    <section
      className={cn("py-10 2xl:py-20 relative", className)}
      aria-labelledby="featured-title"
    >
      <Container>
        <h2 className="text-center" id="featured-title">
          Product{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            Features
          </span>
        </h2>
        <p className="py-4 lg:py-6 max-w-2xl text-center mx-auto">
          Stay inspired with the latest and most popular posts. Whether
          you&apos;re revisiting your own highlights or exploring new ideas,
          this space keeps your content in motion.
        </p>

        <FeaturedList />
      </Container>
    </section>
  );
};
