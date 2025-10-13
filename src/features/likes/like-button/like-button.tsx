"use client";

import { Like } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { Button } from "@/components/ui";
import { QUERY_KEYS } from "@/constants/query-keys";
import { cn } from "@/lib/utils";
import { toggleLike } from "@/services/api";

interface LikeButtonProps {
  likes: Like[];
  sessionUserId: number;
  postId: number;
  userId: number;
  variant?: "default" | "outline";
  size?: "default" | "lg";
  className?: string;
}

export const LikeButton = ({
  likes,
  sessionUserId,
  postId,
  userId,
  variant = "default",
  size = "default",
  className,
}: LikeButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const toggleLikeMutation = useMutation({
    mutationFn: () => toggleLike(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_POSTS, userId],
      });

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.FEED_POSTS],
      });

      if (pathname === `/dashboard/post/${postId}`) {
        router.refresh();
      }
    },
    onError: () => {
      toast.error("Error when toggling like");
    },
  });

  const isLiked = likes.find((like) => like.userId === sessionUserId);

  return (
    <Button
      className={cn(isLiked && "text-red-600", className)}
      variant={variant}
      size={size}
      onClick={() => toggleLikeMutation.mutate()}
    >
      <Heart className={isLiked && "fill-red-600"} />
      {likes.length}
    </Button>
  );
};
