import { useQuery } from "@tanstack/react-query";

import { followApi } from "@/services/api/follow";

export const useCheckSubscription = (userId: number) => {
  const {
    data: isSubscribed,
    error,
    isError,
    isLoading,
  } = useQuery({
    ...followApi.checkSubscriptionQueryOptions(userId),
  });

  return { isSubscribed, error, isError, isLoading };
};
