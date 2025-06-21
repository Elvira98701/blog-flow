import { cn } from "@/lib/utils";
import { UserWithPosts } from "@/types";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

interface UserCardProps {
  user: UserWithPosts;
  session:
    | {
        id: string;
        name: string;
        image: string;
      }
    | Session
    | null;
  active?: boolean;
  className?: string;
}

export const UserCard = ({
  user,
  session,
  active = false,
  className,
}: UserCardProps) => {
  return (
    <article
      className={cn(
        "w-full max-w-[339px] rounded-lg h-80 p-[3px] relative hover:scale-105 transition-transform duration-300",
        { "bg-gradient-to-br from-accent to-primary": active },
        className
      )}
    >
      <Link
        href={!session ? "/auth" : `/dashboard/user/${user.id}`}
        className={cn("bg-background/30 h-full rounded-lg p-3 border block", {
          "bg-background": active,
        })}
      >
        <Image
          src={user.avatar || "/images/anonim/1.jpg"}
          width={500}
          height={500}
          alt={user.name}
          className="rounded-lg h-1/3 object-cover object-center"
        />
        <div className="pt-4 flex flex-col gap-5">
          <div>
            <h3 className="text-2xl text-center font-semibold">{user.name}</h3>
            {user.slogan && (
              <p className="text-center text-xs md:text-sm">{user.slogan}</p>
            )}
          </div>
          <div className="flex items-center">
            <div className="flex-1 flex flex-col justify-center items-center">
              <span className="text-3xl sm:text-4xl font-semibold">
                {user.posts.length}
              </span>
              <span className="text-foreground/50">posts</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <span className="text-3xl sm:text-4xl font-semibold">
                {user.subscribedTo.length}
              </span>
              <span className="text-foreground/50">subscribers</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
