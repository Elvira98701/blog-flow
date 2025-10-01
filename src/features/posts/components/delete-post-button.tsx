"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { ClearButton } from "@/components/shared";
import { QUERY_KEYS } from "@/constants/query-keys";
import { cn } from "@/lib/utils";
import { deletePostById } from "@/services/api";

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
  const pathname = usePathname();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (postId: number) => deletePostById(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_POSTS, sessionUserId],
      });
      toast.success("The post was successfully deleted");

      if (pathname === `/dashboard/post/${postId}`) {
        router.push("/dashboard");
      }
    },
    onError: () => {
      toast.error("Error when deleting a post");
    },
  });

  const handleDeletePost = () => {
    mutate(postId);
  };

  return (
    <div className={cn("", className)}>
      <ClearButton onClick={handleDeletePost} />
    </div>
  );
};
