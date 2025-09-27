"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

import { ClearButton, CommentForm } from "@/components/shared";
import { QUERY_KEYS } from "@/constants/query-keys";
import { cn } from "@/lib/utils";
import { deleteCommentById } from "@/services/api";
import { CommentsWithUser } from "@/types";

interface CommentsProps {
  postId: number;
  comments: CommentsWithUser[];
  className?: string;
}

export const Comments = ({ postId, comments, className }: CommentsProps) => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (commentId: number) => deleteCommentById(postId, commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMENTS, postId],
      });
      toast.success("The post was successfully deleted");
    },
    onError: () => {
      toast.error("Error when deleting a post");
    },
  });

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="flex gap-3 items-start p-2 border-t border-dotted border-foreground/10 relative"
          >
            <Image
              src={comment.user.avatar || "/images/anonim/1.jpg"}
              width={30}
              height={30}
              alt={comment.user.name}
              className="rounded-full"
            />
            <div>
              <span className="font-bold">{comment.user.name}</span>
              <p>{comment.content}</p>
              <span className="text-xs font-mono text-foreground/50">
                {new Date(comment.createdAt).toDateString()}
              </span>
            </div>
            {session?.user.id === String(comment.userId) && (
              <ClearButton
                className="absolute right-2 top-2"
                onClick={() => {
                  mutate(comment.id);
                }}
              />
            )}
          </div>
        ))
      ) : (
        <p>No comments</p>
      )}
      <CommentForm postId={postId} />
    </div>
  );
};
