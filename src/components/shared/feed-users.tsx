"use client";

import { useCallback, useRef } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import {
  ErrorText,
  Loader,
  UserCard,
  UsersSearchInput,
} from "@/components/shared";
import { Skeleton } from "@/components/ui";
import { QUERY_KEYS } from "@/constants/query-keys";
import { cn } from "@/lib/utils";
import { fetchFeedUsers } from "@/services/api";

interface FeedUsersProps {
  className?: string;
}

export const FeedUsers = ({ className }: FeedUsersProps) => {
  const { data: session } = useSession();
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
    queryKey: [QUERY_KEYS.FEED_USERS],
    queryFn: fetchFeedUsers,
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
    <section className={cn("w-full", className)}>
      <div className="flex justify-between items-center">
        <h2>Top Users</h2>
        <UsersSearchInput />
      </div>

      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
          {Array.from({ length: 8 }, (_, i) => (
            <Skeleton key={i} className="w-full rounded-lg h-80 border" />
          ))}
        </div>
      ) : isError ? (
        <ErrorText text={error.message} size="lg" className="mt-10" />
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-5">
            {data?.pages.map((page, pageIndex) => {
              return page.users.map((user, userIndex) => {
                const isLastPage = pageIndex === data.pages.length - 1;
                const isLastPost = userIndex === page.users.length - 1;
                const ref = isLastPage && isLastPost ? lastRowRef : null;

                return (
                  <div key={user.id} ref={ref}>
                    <UserCard user={user} session={session} />
                  </div>
                );
              });
            })}
          </div>
          {isFetchingNextPage && <Loader className="py-4" />}
          {data?.pages[0].users.length === 0 && (
            <div className="flex items-center min-h-[80vh]">
              <p>There are no users yet</p>
            </div>
          )}
        </>
      )}
    </section>
  );
};
