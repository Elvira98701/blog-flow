"use client";

import { useCallback, useRef } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

import { BigPostCard, ErrorText, Loader, PostForm } from "@/components/shared";
import { Skeleton } from "@/components/ui";
import { QUERY_KEYS } from "@/constants/query-keys";
import { cn } from "@/lib/utils";
import { fetchPostsByUserId } from "@/services/api";

interface UserPostsProps {
  userId: number;
  sessionUserId: number;
  className?: string;
}

export const UserPosts = ({
  userId,
  sessionUserId,
  className,
}: UserPostsProps) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.USER_POSTS, userId],
    queryFn: ({ pageParam }: { pageParam: string | null }) =>
      fetchPostsByUserId({ userId, pageParam }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const lastRowRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  return (
    <div className={cn("flex flex-col gap-5 items-center", className)}>
      {userId === sessionUserId && (
        <PostForm sessionUserId={sessionUserId} className="w-full" />
      )}
      {isLoading ? (
        Array.from({ length: 10 }, (_, i) => (
          <Skeleton key={i} className="w-full rounded-md h-[446px] border" />
        ))
      ) : isError ? (
        <ErrorText text={error.message} size="lg" className="mt-10" />
      ) : (
        data?.pages.map((page, pageIndex) => {
          return page.posts.map((post, postIndex) => {
            const isLastPage = pageIndex === data.pages.length - 1;
            const isLastPost = postIndex === page.posts.length - 1;
            const ref = isLastPage && isLastPost ? lastRowRef : null;

            return (
              <div key={post.id} ref={ref} className="w-full">
                <BigPostCard
                  post={post}
                  isOwner={sessionUserId === post.userId}
                  sessionUserId={sessionUserId}
                />
              </div>
            );
          });
        })
      )}
      {isFetchingNextPage && <Loader />}
      {data?.pages[0].posts.length === 0 && (
        <div className="flex items-center min-h-[80vh]">
          <p>The user doesn&apos;t have any posts yet</p>
        </div>
      )}
    </div>
  );
};
