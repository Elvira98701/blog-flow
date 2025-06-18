import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { fetchPosts } from "@/services/api";
import { FeaturedCarousel } from "./featured-carousel";

interface FeaturedSectionProps {
  className?: string;
}

export const FeaturedSection = async ({ className }: FeaturedSectionProps) => {
  const posts = await fetchPosts();

  return (
    <section className={cn("py-16 md:py-32 relative", className)}>
      <Container>
        <div className="w-1/3">
          <h2 className="font-bold text-4xl sm:text-7xl">
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
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 flex gap-5 w-[50%]">
          {!posts || posts.length === 0 ? (
            <div>There are no posts</div>
          ) : (
            <FeaturedCarousel posts={posts} />
          )}
        </div>
      </Container>
    </section>
  );
};
