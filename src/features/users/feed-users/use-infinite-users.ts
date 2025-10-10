import { useMemo } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

import { useInfiniteScroll } from "@/hooks";
import { usersApi } from "@/services/api/user";

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
    ...usersApi.getUsersInfinityQueryOptions(),
  });

  const lastRowRef = useInfiniteScroll(() => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, hasNextPage);

  const users = useMemo(() => {
    return data?.pages.flatMap((page) => page.users) ?? [];
  }, [data?.pages]);

  return { users, error, isLoading, isError, lastRowRef, isFetchingNextPage };
};
