import { infiniteQueryOptions } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/query-keys";
import { FeedUserResponse, InfiniteData } from "@/types";

import { jsonApiWithParams } from "../api-with-params";

export const usersApi = {
  getUsersInfinityQueryOptions: () => {
    return infiniteQueryOptions<
      FeedUserResponse,
      Error,
      InfiniteData<FeedUserResponse>,
      [string],
      number | null
    >({
      queryKey: [QUERY_KEYS.FEED_USERS],
      queryFn: ({ pageParam, signal }) =>
        jsonApiWithParams<FeedUserResponse>(
          "/api/users",
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
