"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui";
import { PostCard } from "@/components/shared";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui";
import { PostWithLikes } from "@/types";

interface FeaturedCarouselProps {
  posts: PostWithLikes[];
  className?: string;
}

export const FeaturedCarousel = ({
  posts,
  className,
}: FeaturedCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className={cn("w-full", className)}>
      <Carousel setApi={setApi}>
        <CarouselContent className="px-2 py-7">
          {posts.map((post, index) => (
            <CarouselItem key={post.id} className="lg:basis-1/2 xl:basis-1/3">
              <PostCard
                post={post}
                active={current === index + 1}
                className={cn({
                  "scale-105": current === index + 1,
                })}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="default" />
        <CarouselNext variant="default" className="right-12" />
      </Carousel>
    </div>
  );
};
