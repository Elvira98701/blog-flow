import { ErrorText, Container } from "@/components/shared";
import { cn } from "@/lib/utils";
import { fetchSliderPosts } from "@/services/api";

import { FeaturedCarousel } from "./featured-carousel";

interface FeaturedSectionProps {
  className?: string;
}

export const FeaturedSection = async ({ className }: FeaturedSectionProps) => {
  const posts = await fetchSliderPosts();

  return (
    <section
      className={cn("py-10 md:py-20 lg:py-32 relative", className)}
      aria-labelledby="featured-title"
    >
      <Container>
        <div className="w-1/3">
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
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 flex gap-5 w-1/2">
          {!posts || posts.length === 0 ? (
            <ErrorText text="There are no posts" />
          ) : (
            <FeaturedCarousel posts={posts} />
          )}
        </div>
      </Container>
    </section>
  );
};
