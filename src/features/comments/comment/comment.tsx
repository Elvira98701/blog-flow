import { Pencil, PencilOff } from "lucide-react";
import Image from "next/image";

import { Button, ClearButton } from "@/components/ui";
import { cn } from "@/lib/utils";
import { CommentsWithUser } from "@/types";

import { EditedComment } from "../feed-comments/use-toggle-edit-comment";

import { useDeleteComment } from "./use-delete-comment";

interface CommentProps {
  comment: CommentsWithUser;
  editedComment: EditedComment;
  sessionUserId: number;
  postId: number;
  onEditComment: ({ commentId, content }: EditedComment) => void;
  onFinishEditComment: () => void;
  className?: string;
}

export const Comment = ({
  comment,
  editedComment,
  sessionUserId,
  onEditComment,
  onFinishEditComment,
  postId,
  className,
}: CommentProps) => {
  const { mutate } = useDeleteComment(postId, comment.id);

  return (
    <div
      className={cn(
        "flex gap-3 items-start p-2 border-t border-dotted border-foreground/10 relative",
        className
      )}
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
        <p className="pt-1">{comment.content}</p>
        <span className="text-xs font-mono text-foreground/50">
          {new Date(comment.createdAt).toDateString()}
        </span>
      </div>
      {sessionUserId === comment.userId && (
        <div className="absolute right-2 top-2 flex items-center gap-3">
          {editedComment.commentId === comment.id ? (
            <Button size="icon" onClick={onFinishEditComment}>
              <PencilOff />
            </Button>
          ) : (
            <>
              <Button
                size="icon"
                onClick={() => {
                  onEditComment({
                    commentId: comment.id,
                    content: comment.content,
                  });
                }}
              >
                <Pencil />
              </Button>
              <ClearButton onClick={() => mutate()} />
            </>
          )}
        </div>
      )}
    </div>
  );
};
