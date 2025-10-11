import { useMemo } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

import { commentsApi } from "@/services/api";

export const useInfiniteComments = (postId: number) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isFetching,
    isLoading,
    isError,
  } = useInfiniteQuery({
    ...commentsApi.getCommentsInfinityQueryOptions(postId),
  });

  const comments = useMemo(() => {
    return data?.pages.flatMap((page) => page.comments) ?? [];
  }, [data?.pages]);

  return {
    comments,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isFetching,
    isLoading,
    isError,
  };
};
