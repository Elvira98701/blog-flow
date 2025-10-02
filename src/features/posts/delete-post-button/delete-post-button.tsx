"use client";

import { ClearButton } from "@/components/shared";
import { cn } from "@/lib/utils";

import { useDeletePost } from "./use-delete-post";

interface DeletePostButtonProps {
  sessionUserId: number;
  postId: number;
  className?: string;
}

export const DeletePostButton = ({
  sessionUserId,
  postId,
  className,
}: DeletePostButtonProps) => {
  const { mutate } = useDeletePost(sessionUserId, postId);

  return (
    <div className={cn("", className)}>
      <ClearButton onClick={() => mutate()} />
    </div>
  );
};
