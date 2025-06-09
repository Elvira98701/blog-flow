import { cn } from "@/lib/utils";

interface UserCardProps {
  active?: boolean;
  className?: string;
}

export const UserCard = ({ active = false, className }: UserCardProps) => {
  return (
    <article
      className={cn(
        "w-full rounded-lg h-80 p-[3px] relative",
        { "bg-gradient-to-br from-accent to-primary": active },
        className
      )}
    >
      <div
        className={cn("bg-background/30 h-full rounded-lg p-3 border ", {
          "bg-background": active,
        })}
      >
        <div className="h-1/3 rounded-lg bg-[url(/images/11.jpg)] bg-cover bg-center relative" />
        <div className="pt-4 flex flex-col gap-5">
          <div>
            <h3 className="text-2xl text-center font-semibold">Doodles</h3>
            <p className="text-center">Created by Doodles</p>
          </div>
          <div className="flex items-center">
            <div className="flex-1 flex flex-col justify-center items-center">
              <span className="text-4xl font-semibold">100</span>
              <span className="text-foreground/50">posts</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <span className="text-4xl font-semibold">5</span>
              <span className="text-foreground/50">subscribers</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
