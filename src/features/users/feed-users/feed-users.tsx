"use client";

import { useSession } from "next-auth/react";

import { UserCard } from "@/components/shared";
import { Loader, Skeleton, ErrorText } from "@/components/ui";

import { useInfiniteUsers } from "./use-infinite-users";

export const FeedUsers = () => {
  const { data: session } = useSession();
  const { users, error, isLoading, isError, lastRowRef, isFetchingNextPage } =
    useInfiniteUsers();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 mt-5">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 mt-5">
        {users.map((user) => {
          return <UserCard key={user.id} user={user} session={session} />;
        })}
      </div>
      <div ref={lastRowRef}>
        {isFetchingNextPage && <Loader className="py-4" />}
      </div>

      {users.length === 0 && (
        <div className="flex items-center min-h-[80vh]">
          <p>There are no users yet</p>
        </div>
      )}
    </>
  );
};
