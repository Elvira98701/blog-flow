import { useInfiniteQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/query-keys";
import { useInfiniteScroll } from "@/hooks";
import { fetchFeedUsers } from "@/services/api";

export const useInfiniteUsers = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.FEED_USERS],
    queryFn: fetchFeedUsers,
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
