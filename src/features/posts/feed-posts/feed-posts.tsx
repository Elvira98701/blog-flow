"use client";

import { PostCard } from "@/components/shared";
import { Loader, Skeleton, ErrorText } from "@/components/ui";

import { useInfinitePosts } from "./use-infinite-posts";

export const FeedPosts = () => {
  const { data, error, isLoading, isError, lastRowRef, isFetchingNextPage } =
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
  );
};
