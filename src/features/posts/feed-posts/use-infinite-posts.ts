import { useInfiniteQuery } from "@tanstack/react-query";

import { useInfiniteScroll } from "@/hooks";
import { postsApi } from "@/services/api/post";

export const useInfinitePosts = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isLoading,
    isError,
  } = useInfiniteQuery({
    ...postsApi.getPostsInfinityQueryOptions(),
  });

  const lastRowRef = useInfiniteScroll(() => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, hasNextPage);

  return { data, error, isLoading, isError, lastRowRef, isFetchingNextPage };
};
