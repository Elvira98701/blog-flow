import { cn } from "@/lib/utils";
import { UserWithPostsAndSubscribers } from "@/types";
import Image from "next/image";
import { Button, ButtonLink } from "../ui";

interface UserHeadProps {
  user: UserWithPostsAndSubscribers;
  session: {
    id: string;
    name: string;
    image: string;
  };
  className?: string;
}

export const UserHead = ({ user, session, className }: UserHeadProps) => {
  return (
    <div className={cn("flex flex-col gap-2 items-center", className)}>
      <Image
        src={user.avatar || "/images/anonim/1.jpg"}
        width={500}
        height={500}
        alt={user.name}
        className="rounded-lg w-full"
      />
      <h1 className="small-title">{user.name}</h1>
      <p>{user.slogan}</p>
      {Number(session.id) === user.id ? (
        <ButtonLink href="/dashboard/profile" size="lg" className="w-full">
          Edit profile
        </ButtonLink>
      ) : (
        <Button
          size="lg"
          className="w-full"
          variant={
            user.subscribers.find(
              (subscriber) => subscriber.id === Number(session.id)
            )
              ? "destructive"
              : "default"
          }
        >
          {user.subscribers.find(
            (subscriber) => subscriber.id === Number(session.id)
          )
            ? "Unsubscribe"
            : "Subscribe"}
        </Button>
      )}
    </div>
  );
};
