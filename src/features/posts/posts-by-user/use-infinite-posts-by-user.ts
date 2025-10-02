import { useInfiniteQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/query-keys";
import { useInfiniteScroll } from "@/hooks";
import { fetchPostsByUserId } from "@/services/api";

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
    queryKey: [QUERY_KEYS.USER_POSTS, userId],
    queryFn: ({ pageParam }: { pageParam: string | null }) =>
      fetchPostsByUserId({ userId, pageParam }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const lastRowRef = useInfiniteScroll(() => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, hasNextPage);

  return { data, error, isLoading, isError, lastRowRef, isFetchingNextPage };
};
