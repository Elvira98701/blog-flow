"use client";

import { cn } from "@/lib/utils";
import { fetchFeedUsers } from "@/services/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useRef } from "react";
import { UserCard } from "./user-card";
import { useSession } from "next-auth/react";
import { Skeleton } from "../ui";
import { ErrorText } from "./error-text";

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
    queryKey: ["feed-users"],
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
      <h2>Top Users</h2>
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
          {isFetchingNextPage && <p className="text-center py-3">Loading...</p>}
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
