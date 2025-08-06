"use client";

import { useQuery } from "@tanstack/react-query";

import { ErrorText } from "@/components/shared";
import { QUERY_KEYS } from "@/constants/query-keys";
import { cn } from "@/lib/utils";
import { fetchComments } from "@/services/api";

interface CommentsProps {
  postId: string;
  className?: string;
}

export const Comments = ({ postId, className }: CommentsProps) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.COMMENTS, postId],
    queryFn: () => fetchComments({ postId }),
  });

  console.log(data);

  return (
    <div className={cn("", className)}>
      {isLoading ? (
        <p>loading</p>
      ) : isError ? (
        <ErrorText text={error.message} size="lg" className="mt-10" />
      ) : (
        data?.map((comment) => <p key={comment.id}>{comment.content}</p>)
      )}
    </div>
  );
};
