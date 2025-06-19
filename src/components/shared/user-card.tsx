import { cn } from "@/lib/utils";

interface UserCardProps {
  name: string;
  avatar: string | null;
  postsLength: number;
  subscribersLength: number;
  active?: boolean;
  className?: string;
}

export const UserCard = ({
  name,
  avatar,
  postsLength,
  subscribersLength,
  active = false,
  className,
}: UserCardProps) => {
  return (
    <article
      className={cn(
        "w-full rounded-lg h-80 p-[3px] relative hover:scale-105 transition-transform duration-300",
        { "bg-gradient-to-br from-accent to-primary": active },
        className
      )}
    >
      <div
        className={cn("bg-background/30 h-full rounded-lg p-3 border ", {
          "bg-background": active,
        })}
      >
        <div
          className="h-1/3 rounded-lg bg-cover bg-center relative"
          style={{ backgroundImage: `url(${avatar})` }}
        />
        <div className="pt-4 flex flex-col gap-5">
          <div>
            <h3 className="text-2xl text-center font-semibold">{name}</h3>
            <p className="text-center text-xs md:text-sm">Created by Doodles</p>
          </div>
          <div className="flex items-center">
            <div className="flex-1 flex flex-col justify-center items-center">
              <span className="text-3xl sm:text-4xl font-semibold">
                {postsLength}
              </span>
              <span className="text-foreground/50">posts</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <span className="text-3xl sm:text-4xl font-semibold">
                {subscribersLength}
              </span>
              <span className="text-foreground/50">subscribers</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
