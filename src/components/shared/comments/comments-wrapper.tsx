import { useQuery } from "@tanstack/react-query";

import { ErrorText } from "@/components/shared";
import { Loader } from "@/components/ui";
import { QUERY_KEYS } from "@/constants/query-keys";
import { cn } from "@/lib/utils";
import { fetchComments } from "@/services/api";

import { Comments } from "./comments";

interface CommentsWrapperProps {
  postId: number;
  className?: string;
}

export const CommentsWrapper = ({
  postId,
  className,
}: CommentsWrapperProps) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.COMMENTS, postId],
    queryFn: () => fetchComments({ postId }),
  });

  return (
    <div className={cn("pt-4", className)}>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorText text={error.message} size="lg" className="mt-10" />
      ) : (
        data && <Comments comments={data} postId={postId} />
      )}
    </div>
  );
};
