import Image from "next/image";

import { Button, ButtonLink } from "@/components/ui";
import { cn } from "@/lib/utils";
import { UserWithSubscribers } from "@/types";

interface UserHeadProps {
  user: UserWithSubscribers;
  sessionUserId: number;
  className?: string;
}

export const UserHead = ({ user, sessionUserId, className }: UserHeadProps) => {
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
      {sessionUserId === user.id ? (
        <ButtonLink
          href="/dashboard/profile"
          size="lg"
          className="w-full"
          variant="default"
        >
          Edit profile
        </ButtonLink>
      ) : (
        <Button
          size="lg"
          className="w-full"
          variant={
            user.subscribers.find(
              (subscriber) => subscriber.id === sessionUserId
            )
              ? "destructive"
              : "default"
          }
        >
          {user.subscribers.find(
            (subscriber) => subscriber.id === sessionUserId
          )
            ? "Unsubscribe"
            : "Subscribe"}
        </Button>
      )}
    </div>
  );
};
