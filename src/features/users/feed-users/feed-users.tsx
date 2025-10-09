"use client";

import { useSession } from "next-auth/react";

import { UserCard } from "@/components/shared";
import { Loader, Skeleton, ErrorText } from "@/components/ui";

import { useInfiniteUsers } from "./use-infinite-users";

export const FeedUsers = () => {
  const { data: session } = useSession();
  const { data, error, isLoading, isError, lastRowRef, isFetchingNextPage } =
    useInfiniteUsers();

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-5">
        {Array.from({ length: 8 }, (_, i) => (
          <Skeleton key={i} className="w-full rounded-lg h-80 border" />
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
  );
};
