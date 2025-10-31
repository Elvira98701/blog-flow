import { useMemo } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

import { followersApi } from "@/services/api/followers/followers-api";

export const useInfiniteFollowings = (userId: number) => {
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
    ...followersApi.getFollowingsInfinityQueryOptions(userId),
  });

  const followings = useMemo(() => {
    return data?.pages.flatMap((page) => page.followings) ?? [];
  }, [data?.pages]);

  return {
    followings,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isFetching,
    isLoading,
    isError,
  };
};
