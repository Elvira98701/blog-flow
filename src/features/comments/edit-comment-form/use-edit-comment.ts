import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { QUERY_KEYS } from "@/constants/query-keys";
import { editCommentById } from "@/services/api";

export const useEditComment = (postId: number, onFinishEdit?: () => void) => {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (data: { content: string; commentId: number }) =>
      editCommentById({ postId, ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMENTS, postId],
      });
      toast.success("The comment was edited successfully");
      onFinishEdit?.();
    },
    onError: () => {
      toast.error("Error when editing a comment");
    },
  });

  return { isPending, mutate };
};
