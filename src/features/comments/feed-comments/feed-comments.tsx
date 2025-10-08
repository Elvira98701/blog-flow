"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { ErrorText, Loader } from "@/components/ui";
import { QUERY_KEYS } from "@/constants/query-keys";
import { cn } from "@/lib/utils";
import { fetchComments } from "@/services/api";

import { Comment } from "../comment";
import { CreateCommentForm } from "../create-comment-form";
import { EditCommentForm } from "../edit-comment-form";

import { useToggleEditComment } from "./use-toggle-edit-comment";

interface FeedCommentsProps {
  postId: number;
  className?: string;
}

export const FeedComments = ({ postId, className }: FeedCommentsProps) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.COMMENTS, postId],
    queryFn: () => fetchComments({ postId }),
  });

  const { editedComment, handleEditComment, handleFinishEditComment } =
    useToggleEditComment();

  const { data: session } = useSession();

  if (isLoading) {
    return <Loader className="py-4" />;
  }

  if (isError) {
    return <ErrorText text={error.message} size="lg" className="py-4" />;
  }

  return (
    <div className={cn("pt-4", className)}>
      {data && data.length > 0 ? (
        data.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            editedComment={editedComment}
            sessionUserId={Number(session?.user.id)}
            postId={postId}
            onEditComment={handleEditComment}
            onFinishEditComment={handleFinishEditComment}
          />
        ))
      ) : (
        <p className="pb-4">No comments</p>
      )}
      {editedComment.commentId ? (
        <EditCommentForm
          content={editedComment.content ?? ""}
          commentId={editedComment.commentId}
          postId={postId}
          onFinishEdit={handleFinishEditComment}
        />
      ) : (
        <CreateCommentForm postId={postId} />
      )}
    </div>
  );
};
