import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { QUERY_KEYS } from "@/constants/query-keys";
import { followApi } from "@/services/api/follow";

export const useSubscribe = (userId: number) => {
  const queryClient = useQueryClient();

  const { isPending: isPendingSubscribe, mutate: subscribe } = useMutation({
    mutationFn: () => followApi.createFollow(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.FOLLOWERS, userId],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SUBSCRIBE, userId],
      });
      toast.success("The subscribe successfully");
    },
    onError: () => {
      toast.error("Error when subscribe");
    },
  });

  return { isPendingSubscribe, subscribe };
};
