import { Comment } from "@prisma/client";
import { infiniteQueryOptions } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/query-keys";
import { FeedCommentsResponse, InfiniteData } from "@/types";

import { jsonApiInstance } from "../api-instance";
import { jsonApiWithParams } from "../api-with-params";

export const commentsApi = {
  getCommentsInfinityQueryOptions: (postId: number) => {
    return infiniteQueryOptions<
      FeedCommentsResponse,
      Error,
      InfiniteData<FeedCommentsResponse>,
      [string, number],
      number | null
    >({
      queryKey: [QUERY_KEYS.COMMENTS, postId],
      queryFn: ({ pageParam, signal }) =>
        jsonApiWithParams<FeedCommentsResponse>(
          `/api/posts/${postId}/comments`,
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

  createComment: (
    postId: number,
    data: {
      content: string;
      userId: number;
    }
  ) => {
    return jsonApiInstance<Comment>(`/api/posts/${postId}/comments`, {
      method: "POST",
      json: data,
    });
  },

  deleteComment: (postId: number, commentId: number) => {
    return jsonApiInstance(`/api/posts/${postId}/comments`, {
      method: "DELETE",
      json: { commentId },
    });
  },

  editComment: (
    postId: number,
    data: {
      content: string;
      commentId: number;
    }
  ) => {
    return jsonApiInstance(`/api/posts/${postId}/comments`, {
      method: "PATCH",
      json: data,
    });
  },
};
