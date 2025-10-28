import { User } from "@prisma/client";
import Image from "next/image";

import Modal from "@/components/shared";
import { UpdateProfileForm } from "@/features/profile";
import { cn } from "@/lib/utils";

interface UserHeadProps {
  user: User;
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
        className="rounded-md w-full h-[350px] object-cover border"
      />
      <h2 className="small-title">{user.name}</h2>
      <p>{user.slogan}</p>
      {sessionUserId === user.id && (
        <Modal
          triggerNode="Edit profile"
          titleText="Profile"
          descriptionText="Edit your personal information, profile picture, and account settings."
          triggerClassName="bg-linear-to-tr from-accent to-primary/80 ring-3 ring-border/70 text-primary-foreground
             bg-[length:400%] hover:animate-gradient-xy hover:bg-[length:100%] h-10"
        >
          <UpdateProfileForm />
        </Modal>
      )}
    </div>
  );
};
