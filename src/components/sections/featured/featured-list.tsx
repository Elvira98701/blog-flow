"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { SpotlightCard } from "@/components/shared";
import { featuredList } from "@/constants/featured-list";
import { themeData } from "@/constants/theme";
import { cn } from "@/lib/utils";

interface FeaturedListProps {
  className?: string;
}

export const FeaturedList = ({ className }: FeaturedListProps) => {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentTheme = themeData.find((obj) => obj.value === theme);
  const spotlightColor = currentTheme?.colors.spotlightColor;

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4",
        className
      )}
    >
      {featuredList.map((item, index) => (
        <SpotlightCard
          key={item.id}
          spotlightColor={isClient ? spotlightColor : "rgba(75, 59, 228, 0.6)"}
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

          <div className="absolute top-1/2 left-1/2 -translate-1/2 w-40 h-40 border-2 border-dotted border-border/50 rounded-full" />
        </SpotlightCard>
      ))}
    </div>
  );
};
