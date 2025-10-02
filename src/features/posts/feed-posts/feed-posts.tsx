"use client";

import { ErrorText, Loader, PostCard } from "@/components/shared";
import { Skeleton } from "@/components/ui";
import { cn } from "@/lib/utils";

import { PostsSearchInput } from "../posts-search-input";

import { useInfinitePosts } from "./use-infinite-posts";

interface FeedPostsProps {
  className?: string;
}

export const FeedPosts = ({ className }: FeedPostsProps) => {
  const { data, error, isLoading, isError, lastRowRef, isFetchingNextPage } =
    useInfinitePosts();

  return (
    <section className={cn("w-full", className)}>
      <div className="flex justify-between items-center">
        <h2>Top Posts</h2>
        <PostsSearchInput />
      </div>

      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mt-5">
          {Array.from({ length: 10 }, (_, i) => (
            <Skeleton key={i} className="w-full rounded-lg h-[446px] border" />
          ))}
        </div>
      ) : isError ? (
        <ErrorText text={error?.message ?? ""} size="lg" className="mt-10" />
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mt-5">
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
          {isFetchingNextPage && <Loader className="py-4" />}
          {data?.pages[0].posts.length === 0 && (
            <div className="flex items-center min-h-[80vh]">
              <p>There are no posts yet</p>
            </div>
          )}
        </>
      )}
    </section>
  );
};
