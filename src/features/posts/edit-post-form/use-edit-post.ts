import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { QUERY_KEYS } from "@/constants/query-keys";
import { postsApi } from "@/services/api";

export const useEditPost = (userId: number, postId: number) => {
  const router = useRouter();
  const pathname = usePathname();

  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: postsApi.editPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_POSTS, userId],
      });
      toast.success("The post was edited successfully");

      if (pathname === `/dashboard/post/${postId}`) {
        router.refresh();
      }
    },
    onError: () => {
      toast.error("Error when editing a post");
    },
  });

  return { isPending, mutate };
};
