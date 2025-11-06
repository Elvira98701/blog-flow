"use client";

import { Button, ErrorText } from "@/components/ui";
import { cn } from "@/lib/utils";

import { useCheckSubscription } from "./use-check-subscription";
import { useSubscribe } from "./use-subscribe";

interface SubscribeButtonProps {
  userId: number;
  className?: string;
}

export const SubscribeButton = ({
  className,
  userId,
}: SubscribeButtonProps) => {
  const { isSubscribed, isError, isLoading, error } =
    useCheckSubscription(userId);
  const { isPendingSubscribe, subscribe } = useSubscribe(userId);

  if (isError) {
    return <ErrorText text={error?.message ?? ""} size="lg" className="py-4" />;
  }

  return (
    <Button
      className={cn("", className)}
      loading={isLoading || isPendingSubscribe}
      onClick={() => subscribe()}
    >
      {isSubscribed ? "Unsubscribe" : "Subscribe"}
    </Button>
  );
};
