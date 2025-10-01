import Image from "next/image";

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
        <p className="py-6 max-w-2xl text-center mx-auto">
          Stay inspired with the latest and most popular posts. Whether
          you&apos;re revisiting your own highlights or exploring new ideas,
          this space keeps your content in motion.
        </p>

        <div className="">
          <div className="flex gap-4 mb-4">
            {featuredList.slice(0, 2).map((item) => (
              <SpotlightCard
                key={item.id}
                spotlightColor="rgba(75, 59, 228, 0.5)"
                className="flex-1 min-h-[400px]"
              >
                <h3 className="text-2xl font-bold capitalize">{item.title}</h3>
                <p className="pt-2 pb-6">{item.description}</p>
                <Image
                  className="w-full h-64 object-cover rounded-md border"
                  src={item.image}
                  width={500}
                  height={300}
                  alt=""
                />
              </SpotlightCard>
            ))}
          </div>
          <div className="flex gap-4">
            {featuredList.slice(2).map((item) => (
              <SpotlightCard
                key={item.id}
                spotlightColor="rgba(75, 59, 228, 0.5)"
                className="flex-1 min-h-[250px]"
              >
                <h3 className="text-2xl font-bold capitalize">{item.title}</h3>
                <p className="pt-2 pb-6">{item.description}</p>
                <Image
                  className="rounded-md border h-52 w-[80%] object-cover"
                  src={item.image}
                  width={500}
                  height={300}
                  alt=""
                />
              </SpotlightCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
