"use client";

import { cn } from "@/lib/utils";
import { fetchFeedPosts } from "@/services/api/post";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useRef } from "react";
import { PostCard } from "./post-card";

interface FeedPostsProps {
  className?: string;
}

export const FeedPosts = ({ className }: FeedPostsProps) => {
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
    queryKey: ["feed-posts"],
    queryFn: fetchFeedPosts,
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

  console.log(data);
  return (
    <div className={cn("", className)}>
      <h2 className="font-bold text-5xl">Posts</h2>
      {isLoading ? (
        <p>Loading</p>
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        <div className="grid grid-cols-3 gap-2 mt-5">
          {data?.pages.map((page, pageIndex) => {
            return page.posts.map((post, postIndex) => {
              const isLastPage = pageIndex === data.pages.length - 1;
              const isLastPost = postIndex === page.posts.length - 1;
              const ref = isLastPage && isLastPost ? lastRowRef : null;

              return (
                <div key={post.id} ref={ref}>
                  <PostCard post={post} />
                </div>
              );
            });
          })}
        </div>
      )}
    </div>
  );
};
