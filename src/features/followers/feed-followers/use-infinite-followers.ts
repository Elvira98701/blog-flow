import { useMemo } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

import { followersApi } from "@/services/api/followers/followers-api";

export const useInfiniteFollowers = (userId: number) => {
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
    ...followersApi.getFollowersInfinityQueryOptions(userId),
  });

  const followers = useMemo(() => {
    return data?.pages.flatMap((page) => page.followers) ?? [];
  }, [data?.pages]);

  return {
    followers,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isFetching,
    isLoading,
    isError,
  };
};
