"use client";

import { memo, useMemo } from "react";

import { Like } from "@prisma/client";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

import { useToggleLike } from "./use-toggle-like";

interface LikeButtonProps {
  likes: Like[];
  sessionUserId: number;
  postId: number;
  userId: number;
  variant?: "default" | "outline";
  size?: "default" | "lg";
  className?: string;
}

export const LikeButton = memo(function LikeButton({
  likes,
  sessionUserId,
  postId,
  userId,
  variant = "default",
  size = "default",
  className,
}: LikeButtonProps) {
  const { mutate } = useToggleLike(postId, userId);

  const likedUserIds = useMemo(
    () => new Set(likes.map((like) => like.userId)),
    [likes]
  );

  const isLiked = likedUserIds.has(sessionUserId);

  return (
    <Button
      className={cn(isLiked && "text-red-600", className)}
      variant={variant}
      size={size}
      onClick={() => mutate()}
    >
      <Heart className={cn(isLiked && "fill-red-600")} />
      {likes.length}
    </Button>
  );
});
