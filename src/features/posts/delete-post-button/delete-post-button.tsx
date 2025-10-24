"use client";

import { Trash } from "lucide-react";

import { Button } from "@/components/ui";
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
    <Button
      onClick={() => mutate()}
      className={cn("bg-border/30", className)}
      variant="ghost"
    >
      <Trash /> Delete post
    </Button>
  );
};
