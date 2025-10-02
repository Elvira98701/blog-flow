import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { QUERY_KEYS } from "@/constants/query-keys";
import { createPost } from "@/services/api";

export const useCreatePost = (sessionUserId: number) => {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (data: { title: string; content: string; userId: number }) =>
      createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_POSTS, sessionUserId],
      });
      toast.success("The post was created successfully");
    },
    onError: () => {
      toast.error("Error when creating a post");
    },
  });

  return { mutate, isPending };
};
