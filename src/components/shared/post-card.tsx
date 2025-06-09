import { cn } from "@/lib/utils";
import Image from "next/image";

interface PostCardProps {
  active?: boolean;
  className?: string;
}

export const PostCard = ({ active, className }: PostCardProps) => {
  return (
    <article
      className={cn(
        "rounded-lg h-[450px] w-72 p-[3px] relative",
        { "bg-gradient-to-br from-accent to-primary": active },
        className
      )}
    >
      <div
        className={cn("bg-background/30 h-full rounded-lg p-3 border ", {
          "bg-background": active,
        })}
      >
        <Image
          src="/images/5.jpg"
          width={500}
          height={500}
          alt="user"
          className="w-full h-2/3 rounded-lg"
        />
        <div className="pt-2 flex flex-col gap-2">
          <div>
            <h3 className="text-2xl text-center font-semibold">Doodles</h3>
            <p className="text-center">Created by Doodles</p>
          </div>
          <div className="flex items-center">
            <div className="flex-1 flex flex-col justify-center items-center">
              <span className="text-4xl font-semibold">9.9K</span>
              <span className="text-foreground/50">likes</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <span className="text-4xl font-semibold">9.9K</span>
              <span className="text-foreground/50">likes</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
