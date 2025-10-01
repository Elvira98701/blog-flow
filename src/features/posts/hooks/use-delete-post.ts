import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { QUERY_KEYS } from "@/constants/query-keys";
import { deletePostById } from "@/services/api";

export const useDeletePost = (sessionUserId: number, postId: number) => {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: () => deletePostById(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_POSTS, sessionUserId],
      });
      toast.success("The post was successfully deleted");

      if (pathname === `/dashboard/post/${postId}`) {
        router.push("/dashboard");
      }
    },
    onError: () => {
      toast.error("Error when deleting a post");
    },
  });

  return mutation;
};
