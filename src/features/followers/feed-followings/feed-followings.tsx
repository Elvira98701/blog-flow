"use client";

import { Frown } from "lucide-react";

import { UserRow } from "@/components/shared";
import { Button, ErrorText, Loader } from "@/components/ui";
import { cn } from "@/lib/utils";

import { useInfiniteFollowings } from "./use-infinite-followings";

interface FeedFollowingsProps {
  userId: number;
  className?: string;
}

export const FeedFollowings = ({ userId, className }: FeedFollowingsProps) => {
  const {
    followings,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isFetching,
    isLoading,
    isError,
  } = useInfiniteFollowings(userId);

  if (isLoading) {
    return <Loader className="py-4" />;
  }

  if (isError) {
    return <ErrorText text={error?.message ?? ""} size="lg" className="py-4" />;
  }

  return (
    <div className={cn("", className)}>
      <h3 className="mb-4">Followings:</h3>
      {followings.length > 0 ? (
        <div className="flex flex-col gap-2">
          {followings.map((item) => (
            <UserRow
              key={item.id}
              id={item.following.id}
              avatar={item.following.avatar}
              name={item.following.name}
            />
          ))}
        </div>
      ) : (
        <p className="pb-4 text-sm flex items-center gap-2">
          <Frown strokeWidth={1} /> No followings
        </p>
      )}
      {hasNextPage && (
        <div className="pt-4 flex justify-center items-center">
          <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetching}
            loading={isFetchingNextPage}
            variant="outline"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};
