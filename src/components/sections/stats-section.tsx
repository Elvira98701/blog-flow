import { cn } from "@/lib/utils";
import { Marquee } from "../shared";

interface StatsSectionProps {
  className?: string;
}

const firstRow = ["10k Posts", "2k Users", "5k Collections", "40k Messages"];

export const StatsSection = ({ className }: StatsSectionProps) => {
  return (
    <section className={cn("", className)}>
      <div className="relative overflow-hidden h-60">
        <div className="rotate-3 origin-center absolute top-1/2 -translate-y-1/2 w-full">
          <Marquee
            pauseOnHover
            className="[--duration:20s] font-bold text-5xl bg-primary text-white"
          >
            {firstRow.map((review) => (
              <div key={review} className="">
                {review}
              </div>
            ))}
          </Marquee>
        </div>
        <div className="-rotate-3 origin-center absolute top-1/2 -translate-y-1/2 w-full">
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:20s] font-bold text-5xl bg-accent text-white"
          >
            {firstRow.map((review) => (
              <div key={review} className="">
                {review}
              </div>
            ))}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
};
