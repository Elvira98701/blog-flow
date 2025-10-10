"use client";

import { PostCard } from "@/components/shared";
import { Loader, Skeleton, ErrorText } from "@/components/ui";

import { useInfinitePosts } from "./use-infinite-posts";

export const FeedPosts = () => {
  const { posts, error, isLoading, isError, lastRowRef, isFetchingNextPage } =
    useInfinitePosts();

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mt-5">
        {Array.from({ length: 10 }, (_, i) => (
          <Skeleton key={i} className="w-full rounded-lg h-[446px] border" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorText text={error?.message ?? ""} size="lg" className="mt-10" />
    );
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mt-5">
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
      <div ref={lastRowRef}>
        {isFetchingNextPage && <Loader className="py-4" />}
      </div>

      {posts.length === 0 && (
        <div className="flex items-center min-h-[80vh]">
          <p>There are no posts yet</p>
        </div>
      )}
    </>
  );
};
