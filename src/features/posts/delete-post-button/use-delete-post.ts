import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { QUERY_KEYS } from "@/constants/query-keys";
import { postsApi } from "@/services/api";
import { FeedPostResponse, InfiniteData } from "@/types";

export const useDeletePost = (sessionUserId: number, postId: number) => {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const router = useRouter();

  const queryKey =
    postsApi.getPostsByUserInfinityQueryOptions(sessionUserId).queryKey;

  const mutation = useMutation({
    mutationFn: () => postsApi.deletePost(postId),

    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.USER_POSTS, sessionUserId],
      });

      const prevPosts = queryClient.getQueryData<
        InfiniteData<FeedPostResponse>
      >([queryKey]);

      queryClient.setQueryData<InfiniteData<FeedPostResponse>>(
        [queryKey],
        (old) => {
          if (!old) return old;

          return {
            ...old,
            pages: old.pages.map((page) => ({
              ...page,
              posts: page.posts.filter((p) => p.id !== postId),
            })),
          };
        }
      );

      return { prevPosts };
    },

    onError: (_, __, onMutateResult, context) => {
      if (context) {
        queryClient.setQueryData([queryKey], onMutateResult?.prevPosts);
      }
      toast.error("Error when deleting a post");
    },

    onSuccess: () => {
      toast.success("The post was successfully deleted");

      if (pathname === `/dashboard/post/${postId}`) {
        router.push("/dashboard");
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_POSTS, sessionUserId],
      });
    },
  });

  return mutation;
};
