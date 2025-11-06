import { useMemo } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

import { followApi } from "@/services/api/follow/follow-api";

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
    ...followApi.getFollowingsInfinityQueryOptions(userId),
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
