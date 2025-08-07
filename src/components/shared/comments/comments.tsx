"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { CommentsWithUser } from "@/types";

import { CommentForm } from "../form/comment";

interface CommentsProps {
  postId: number;
  comments: CommentsWithUser[];
  className?: string;
}

export const Comments = ({ postId, comments, className }: CommentsProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="flex gap-3 items-start p-2 border-t border-dotted border-foreground/10"
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
          </div>
        ))
      ) : (
        <p>No comments</p>
      )}
      <CommentForm postId={postId} />
    </div>
  );
};
