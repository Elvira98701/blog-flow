import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";

import { cn } from "@/lib/utils";
import { UserWithRelationsCount } from "@/types";

interface UserCardProps {
  user: UserWithRelationsCount;
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
        "group w-full rounded-md h-80 relative transition-transform duration-300",
        className
      )}
    >
      <Link
        href={!session ? "/auth" : `/dashboard/user/${user.id}`}
        className={cn(
          "bg-card h-full rounded-md p-2 border block transition-colors duration-300 hover:bg-secondary relative",
          {
            "bg-background": active,
          }
        )}
      >
        <Image
          src={user.avatar || "/images/anonim/1.jpg"}
          width={500}
          height={500}
          alt={user.name}
          className="rounded-md h-full w-full object-cover object-center"
        />

        <div className="absolute top-6 left-6">
          <h3 className="text-2xl font-semibold">{user.name}</h3>
          {user.slogan && <p className="text-xs md:text-sm">{user.slogan}</p>}
        </div>
        <div className="flex absolute bottom-5 left-5 right-5 text-foreground rounded-full py-2 bg-background/70 backdrop-blur-xs">
          <div className="flex-1 flex flex-col justify-center items-center">
            <span className="text-xl font-semibold leading-none">
              {user._count.posts}
            </span>
            <span className="text-foreground/50 text-xs">posts</span>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <span className="text-xl font-semibold leading-none">
              {user._count.followers}
            </span>
            <span className="text-foreground/50 text-xs">followers</span>
          </div>
        </div>
      </Link>
    </article>
  );
};
