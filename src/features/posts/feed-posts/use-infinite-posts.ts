import { useMemo } from "react";

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

  const posts = useMemo(() => {
    return data?.pages.flatMap((page) => page.posts) ?? [];
  }, [data?.pages]);

  return { posts, error, isLoading, isError, lastRowRef, isFetchingNextPage };
};
