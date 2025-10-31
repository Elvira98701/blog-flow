import { infiniteQueryOptions } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/query-keys";
import {
  FeedFollowersResponse,
  FeedFollowingsResponse,
  InfiniteData,
} from "@/types";

import { jsonApiWithParams } from "../api-with-params";

export const followersApi = {
  getFollowersInfinityQueryOptions: (userId: number) => {
    return infiniteQueryOptions<
      FeedFollowersResponse,
      Error,
      InfiniteData<FeedFollowersResponse>,
      [string, number],
      number | null
    >({
      queryKey: [QUERY_KEYS.FOLLOWERS, userId],
      queryFn: ({ pageParam, signal }) =>
        jsonApiWithParams<FeedFollowersResponse>(
          `/api/users/${userId}/followers`,
          {
            limit: 8,
            cursor: pageParam,
          },
          signal
        ),
      initialPageParam: null,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    });
  },

  getFollowingsInfinityQueryOptions: (userId: number) => {
    return infiniteQueryOptions<
      FeedFollowingsResponse,
      Error,
      InfiniteData<FeedFollowingsResponse>,
      [string, number],
      number | null
    >({
      queryKey: [QUERY_KEYS.FOLLOWINGS, userId],
      queryFn: ({ pageParam, signal }) =>
        jsonApiWithParams<FeedFollowingsResponse>(
          `/api/users/${userId}/followings`,
          {
            limit: 8,
            cursor: pageParam,
          },
          signal
        ),
      initialPageParam: null,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    });
  },
};
