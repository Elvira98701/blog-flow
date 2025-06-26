"use client";

import { cn } from "@/lib/utils";
import { fetchPostsByUserId } from "@/services/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useRef } from "react";
import { Skeleton } from "../ui";
import { ErrorText } from "./error-text";
import { BigPostCard } from "./big-post-card";

interface UserPostsProps {
  userId: string;
  session: {
    id: string;
    name: string;
    image: string;
  };
  className?: string;
}

export const UserPosts = ({ userId, session, className }: UserPostsProps) => {
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
    queryKey: ["user-posts", userId],
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
      {isLoading ? (
        Array.from({ length: 10 }, (_, i) => (
          <Skeleton key={i} className="w-full rounded-lg h-[446px] border" />
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
                  edit={Number(session.id) === post.userId}
                  deletePost={Number(session.id) === post.userId}
                />
              </div>
            );
          });
        })
      )}
      {isFetchingNextPage && <p className="text-center py-4">Loading...</p>}
      {data?.pages[0].posts.length === 0 && (
        <div className="flex items-center min-h-[80vh]">
          <p>The user doesn&apos;t have any posts yet</p>
        </div>
      )}
    </div>
  );
};
