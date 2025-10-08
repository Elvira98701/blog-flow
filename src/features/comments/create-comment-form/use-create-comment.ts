import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { QUERY_KEYS } from "@/constants/query-keys";
import { createComment } from "@/services/api";

export const useCreateComment = (postId: number) => {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (data: { content: string; userId: number }) =>
      createComment(postId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMENTS, postId],
      });
      toast.success("The comment was created successfully");
    },
    onError: () => {
      toast.error("Error when creating a comment");
    },
  });

  return { isPending, mutate };
};
