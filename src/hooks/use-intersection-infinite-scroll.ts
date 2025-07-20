import { useCallback, useRef } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

type PaginatedResponse = {
  nextCursor?: unknown;
};

type InfiniteQueryFn<T> = (params: { pageParam?: unknown }) => Promise<T>;

interface Props<T extends PaginatedResponse> {
  queryKey: string;
  queryFn: InfiniteQueryFn<T>;
}

export const useIntersectionInfiniteScroll = <T extends PaginatedResponse>({
  queryKey,
  queryFn,
}: Props<T>) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: [queryKey],
    queryFn,
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const lastRowRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  return { data, error, isError, isLoading, lastRowRef };
};
