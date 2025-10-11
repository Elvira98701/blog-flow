import { Post } from "@prisma/client";
import { infiniteQueryOptions } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/query-keys";
import { FeedPostResponse, InfiniteData } from "@/types";

import { jsonApiInstance } from "../api-instance";
import { jsonApiWithParams } from "../api-with-params";

export const postsApi = {
  getPostsInfinityQueryOptions: () => {
    return infiniteQueryOptions<
      FeedPostResponse,
      Error,
      InfiniteData<FeedPostResponse>,
      [string],
      number | null
    >({
      queryKey: [QUERY_KEYS.FEED_POSTS],
      queryFn: ({ pageParam, signal }) =>
        jsonApiWithParams<FeedPostResponse>(
          "/api/posts",
          {
            limit: 10,
            cursor: pageParam,
          },
          signal
        ),
      initialPageParam: null,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    });
  },

  getPostsByUserInfinityQueryOptions: (userId: number) => {
    return infiniteQueryOptions<
      FeedPostResponse,
      Error,
      InfiniteData<FeedPostResponse>,
      [string, number],
      number | null
    >({
      queryKey: [QUERY_KEYS.USER_POSTS, userId],
      queryFn: ({ pageParam, signal }) =>
        jsonApiWithParams<FeedPostResponse>(
          `/api/users/${userId}/posts`,
          {
            limit: 3,
            cursor: pageParam,
          },
          signal
        ),
      initialPageParam: null,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    });
  },

  createPost: (data: { title: string; content: string; userId: number }) => {
    return jsonApiInstance<Post>("/api/posts", {
      method: "POST",
      json: data,
    });
  },

  deletePost: (postId: number) => {
    return jsonApiInstance("/api/posts", {
      method: "DELETE",
      json: { postId },
    });
  },

  editPost: (data: { postId: number; title: string; content: string }) => {
    return jsonApiInstance("/api/posts", {
      method: "PATCH",
      json: data,
    });
  },
};
