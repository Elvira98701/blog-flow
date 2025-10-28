import { Suspense } from "react";

import { User } from "@prisma/client";
import Image from "next/image";

import Modal from "@/components/shared";
import { Loader } from "@/components/ui";
import { CreatePostForm } from "@/features/posts";
import { UpdateProfileForm } from "@/features/profile";
import { cn } from "@/lib/utils";

interface ProfileUserWidgetProps {
  user: User;
  sessionUserId: number;
  className?: string;
}

export const ProfileUserWidget = ({
  user,
  sessionUserId,
  className,
}: ProfileUserWidgetProps) => {
  return (
    <div
      className={cn(
        "bg-sidebar p-4 rounded-md border flex justify-between items-end",
        className
      )}
    >
      <div className="flex items-center gap-4 flex-3/4">
        <Image
          src={user.avatar || "/images/anonim/1.jpg"}
          width={200}
          height={200}
          alt={user.name}
          className="rounded-full h-28 w-28 object-cover"
        />
        <div className="text-white">
          <h2 className="small-title">{user.name}</h2>
          <span>{user.slogan}</span>
        </div>
      </div>

      <Suspense fallback={<Loader />}>
        <div className="flex gap-2 items-center flex-1/4">
          <Modal
            triggerNode="Create post"
            titleText="Create post"
            descriptionText="What would you like to share with everyone today?"
            triggerClassName="bg-background border hover:text-primary"
          >
            <CreatePostForm sessionUserId={sessionUserId} />
          </Modal>

          <Modal
            triggerNode="Edit profile"
            titleText="Profile"
            descriptionText="Edit your personal information, profile picture, and account settings."
            triggerClassName="bg-linear-to-tr from-accent to-primary/80 ring-3 ring-border/70 text-primary-foreground
             bg-[length:400%] hover:animate-gradient-xy hover:bg-[length:100%] h-8"
          >
            <UpdateProfileForm />
          </Modal>
        </div>
      </Suspense>
    </div>
  );
};
