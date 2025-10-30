"use client";

import { Frown } from "lucide-react";

import { UserRow } from "@/components/shared";
import { Button, ErrorText, Loader } from "@/components/ui";
import { cn } from "@/lib/utils";

import { useInfiniteFollowers } from "./use-infinite-followers";

interface FeedFollowersProps {
  userId: number;
  className?: string;
}

export const FeedFollowers = ({ userId, className }: FeedFollowersProps) => {
  const {
    followers,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isFetching,
    isLoading,
    isError,
  } = useInfiniteFollowers(userId);

  if (isLoading) {
    return <Loader className="py-4" />;
  }

  if (isError) {
    return <ErrorText text={error?.message ?? ""} size="lg" className="py-4" />;
  }

  return (
    <div className={cn("", className)}>
      <h3 className="mb-4">Followers:</h3>
      {followers.length > 0 ? (
        <div className="flex flex-col gap-2">
          {followers.map((item) => (
            <UserRow
              key={item.id}
              id={item.follower.id}
              avatar={item.follower.avatar}
              name={item.follower.name}
            />
          ))}
        </div>
      ) : (
        <p className="pb-4 text-sm flex items-center gap-2">
          <Frown strokeWidth={1} /> No followers
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
