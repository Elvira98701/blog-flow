"use client";

import { useSession } from "next-auth/react";

import { Button, ErrorText, Loader } from "@/components/ui";
import { cn } from "@/lib/utils";

import { Comment } from "../comment";
import { CreateCommentForm } from "../create-comment-form";
import { EditCommentForm } from "../edit-comment-form";

import { useInfiniteComments } from "./use-infinite-comments";
import { useToggleEditComment } from "./use-toggle-edit-comment";

interface FeedCommentsProps {
  postId: number;
  className?: string;
}

export const FeedComments = ({ postId, className }: FeedCommentsProps) => {
  const {
    comments,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isFetching,
    isLoading,
    isError,
  } = useInfiniteComments(postId);

  const { editedComment, handleEditComment, handleFinishEditComment } =
    useToggleEditComment();

  const { data: session } = useSession();

  if (isLoading) {
    return <Loader className="py-4" />;
  }

  if (isError) {
    return <ErrorText text={error?.message ?? ""} size="lg" className="py-4" />;
  }

  return (
    <div className={cn("pt-4", className)}>
      {comments.length > 0 ? (
        comments.map((comment) => (
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
      {hasNextPage && (
        <div className="py-2 flex justify-center items-center">
          <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetching}
            loading={isFetchingNextPage}
          >
            Load More
          </Button>
        </div>
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
