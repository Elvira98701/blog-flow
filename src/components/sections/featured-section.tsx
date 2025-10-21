import { Container, SpotlightCard } from "@/components/shared";
import { featuredList } from "@/constants/featured-list";
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4">
          {featuredList.map((item, index) => (
            <SpotlightCard
              key={item.id}
              spotlightColor="rgba(75, 59, 228, 0.6)"
              className="group flex-1 min-h-[250px] flex flex-col gap-3 justify-center transition-transform hover:scale-95"
            >
              {item.icon}
              <h3 className="text-xl font-bold capitalize">{item.title}</h3>
              <p>{item.description}</p>
              <span
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex justify-center items-center border 
              text-border font-medium transition-colors group-hover:bg-foreground group-hover:border-foreground group-hover:text-background"
              >
                {index + 1}
              </span>

              <div className="absolute top-1/2 left-1/2 -translate-1/2 w-40 h-40 border border-border/40 rounded-full" />
            </SpotlightCard>
          ))}
        </div>
      </Container>
    </section>
  );
};
