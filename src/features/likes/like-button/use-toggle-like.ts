import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { QUERY_KEYS } from "@/constants/query-keys";
import { likesApi } from "@/services/api";

export const useToggleLike = (postId: number, userId: number) => {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => likesApi.toggleLike(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_POSTS, userId],
      });

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.FEED_POSTS],
      });

      if (pathname === `/dashboard/post/${postId}`) {
        router.refresh();
      }
    },
    onError: () => {
      toast.error("Error when toggling like");
    },
  });

  return { mutate };
};
