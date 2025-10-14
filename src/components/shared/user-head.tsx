import { lazy, Suspense } from "react";

import Image from "next/image";

import { Button, Loader } from "@/components/ui";
import { cn } from "@/lib/utils";
import { UserWithSubscribers } from "@/types";

interface UserHeadProps {
  user: UserWithSubscribers;
  sessionUserId: number;
  className?: string;
}

const ProfileModal = lazy(() => import("@/features/profile"));

export const UserHead = ({ user, sessionUserId, className }: UserHeadProps) => {
  return (
    <div className={cn("flex flex-col gap-2 items-center", className)}>
      <Image
        src={user.avatar || "/images/anonim/1.jpg"}
        width={500}
        height={500}
        alt={user.name}
        className="rounded-md w-[350px] h-[350px] object-cover border"
      />
      <h2 className="small-title">{user.name}</h2>
      <p>{user.slogan}</p>
      {sessionUserId === user.id && (
        <Suspense fallback={<Loader />}>
          <ProfileModal />
        </Suspense>
      )}
      {sessionUserId !== user.id && (
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
