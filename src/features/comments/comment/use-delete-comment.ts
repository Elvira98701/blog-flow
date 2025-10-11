import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { QUERY_KEYS } from "@/constants/query-keys";
import { commentsApi } from "@/services/api";

export const useDeleteComment = (postId: number) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (commentId: number) =>
      commentsApi.deleteComment(postId, commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMENTS, postId],
      });
      toast.success("The post was successfully deleted");
    },
    onError: () => {
      toast.error("Error when deleting a post");
    },
  });

  return { mutate };
};
