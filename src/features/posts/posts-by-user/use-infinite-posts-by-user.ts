import { useInfiniteQuery } from "@tanstack/react-query";

import { useInfiniteScroll } from "@/hooks";
import { postsApi } from "@/services/api";

export const useInfinitePostsByUser = (userId: number) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isLoading,
    isError,
  } = useInfiniteQuery({
    ...postsApi.getPostsByUserInfinityQueryOptions(userId),
  });

  const lastRowRef = useInfiniteScroll(() => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, hasNextPage);

  return { data, error, isLoading, isError, lastRowRef, isFetchingNextPage };
};
