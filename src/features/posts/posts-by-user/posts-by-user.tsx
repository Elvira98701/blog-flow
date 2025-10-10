"use client";

import { useMemo } from "react";

import { BigPostCard } from "@/components/shared";
import { Loader, Skeleton, ErrorText } from "@/components/ui";
import { cn } from "@/lib/utils";

import { useInfinitePostsByUser } from "./use-infinite-posts-by-user";

interface PostsByUserProps {
  userId: number;
  sessionUserId: number;
  className?: string;
}

export const PostsByUser = ({
  userId,
  sessionUserId,
  className,
}: PostsByUserProps) => {
  const { data, error, isLoading, isError, lastRowRef, isFetchingNextPage } =
    useInfinitePostsByUser(userId);

  const posts = useMemo(() => {
    return data?.pages.flatMap((page) => page.posts) ?? [];
  }, [data?.pages]);

  return (
    <div className={cn("flex flex-col gap-4 items-center", className)}>
      {isLoading ? (
        Array.from({ length: 3 }, (_, i) => (
          <Skeleton key={i} className="w-full rounded-md h-[446px] border" />
        ))
      ) : isError ? (
        <ErrorText text={error?.message ?? ""} size="lg" className="mt-10" />
      ) : (
        posts.map((post) => {
          return (
            <BigPostCard
              key={post.id}
              post={post}
              isOwner={sessionUserId === post.userId}
              sessionUserId={sessionUserId}
            />
          );
        })
      )}
      <div ref={lastRowRef}>{isFetchingNextPage && <Loader />}</div>

      {data?.pages[0].posts.length === 0 && (
        <div className="flex items-center justify-center min-h-[50vh] border w-full bg-card rounded-md ">
          <p>The user doesn&apos;t have any posts yet</p>
        </div>
      )}
    </div>
  );
};
