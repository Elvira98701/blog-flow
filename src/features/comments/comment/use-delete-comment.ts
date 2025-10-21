import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { QUERY_KEYS } from "@/constants/query-keys";
import { commentsApi } from "@/services/api";
import { FeedCommentsResponse, InfiniteData } from "@/types";

export const useDeleteComment = (postId: number, commentId: number) => {
  const queryClient = useQueryClient();

  const queryKey = commentsApi.getCommentsInfinityQueryOptions(postId).queryKey;

  const { mutate } = useMutation({
    mutationFn: () => commentsApi.deleteComment(postId, commentId),

    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.COMMENTS, postId],
      });

      const prevComments = queryClient.getQueryData<
        InfiniteData<FeedCommentsResponse>
      >([queryKey]);

      queryClient.setQueryData<InfiniteData<FeedCommentsResponse>>(
        [queryKey],
        (old) => {
          if (!old) return old;

          return {
            ...old,
            pages: old.pages.map((page) => ({
              ...page,
              comments: page.comments.filter((c) => c.id !== commentId),
            })),
          };
        }
      );

      return { prevComments };
    },

    onSuccess: () => {
      toast.success("The comment was successfully deleted");
    },

    onError: (_, __, onMutateResult, context) => {
      if (context) {
        queryClient.setQueryData([queryKey], onMutateResult?.prevComments);
      }
      toast.error("Error when deleting a comment");
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMENTS, postId],
      });
    },
  });

  return { mutate };
};
