"use client";

import { useSession } from "next-auth/react";

import { UserCard } from "@/components/shared";
import { Loader, Skeleton, ErrorText } from "@/components/ui";
import { cn } from "@/lib/utils";

import { UsersSearchInput } from "../users-search-input";

import { useInfiniteUsers } from "./use-infinite-users";

interface FeedUsersProps {
  className?: string;
}

export const FeedUsers = ({ className }: FeedUsersProps) => {
  const { data: session } = useSession();
  const { data, error, isLoading, isError, lastRowRef, isFetchingNextPage } =
    useInfiniteUsers();

  return (
    <section className={cn("w-full", className)}>
      <div className="flex justify-between items-center">
        <h2>Top Users</h2>
        <UsersSearchInput />
      </div>

      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-5">
          {Array.from({ length: 8 }, (_, i) => (
            <Skeleton key={i} className="w-full rounded-lg h-80 border" />
          ))}
        </div>
      ) : isError ? (
        <ErrorText text={error?.message ?? ""} size="lg" className="mt-10" />
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
