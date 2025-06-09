import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { PostCard } from "@/components/shared";

interface SliderSectionProps {
  className?: string;
}

export const SliderSection = ({ className }: SliderSectionProps) => {
  return (
    <section className={cn("py-32 relative", className)}>
      <Container>
        <div className="w-1/3">
          <h2 className="font-bold text-7xl">
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
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 flex gap-5">
          <PostCard active className="scale-110 z-10" />
          <PostCard />
          <PostCard />
        </div>
      </Container>
    </section>
  );
};
