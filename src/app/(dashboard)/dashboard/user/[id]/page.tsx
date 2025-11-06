import { Suspense } from "react";

import { notFound, redirect } from "next/navigation";

import { TopUsersWidget, UserHead } from "@/components/shared";
import { Loader } from "@/components/ui";
import {
  FeedFollowers,
  FeedFollowings,
  SubscribeButton,
} from "@/features/followers";
import { CreatePostForm, PostsByUser } from "@/features/posts";
import { getUserSession } from "@/lib/get-user-session";
import { fetchHeroUsers, fetchUserById } from "@/services/db/user";

export default async function User({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const userData = fetchUserById(Number(id));
  const usersData = fetchHeroUsers(6);
  const sessionData = getUserSession();

  const [user, users, session] = await Promise.all([
    userData,
    usersData,
    sessionData,
  ]);

  if (!session) {
    return redirect("/not-auth");
  }

  if (!user) return notFound();

  const sessionUserId = Number(session.id);

  return (
    <section className="flex gap-4 items-start min-h-screen">
      <Suspense fallback={<Loader />}>
        <div className="bg-linear-to-b from-popover to-card p-4 rounded-md border">
          <UserHead user={user} sessionUserId={sessionUserId} />
          {user.id !== sessionUserId && (
            <SubscribeButton userId={user.id} className="w-full mt-4 h-10" />
          )}
          <FeedFollowers userId={user.id} className="mt-10" />
          <FeedFollowings userId={user.id} className="mt-10" />
        </div>
      </Suspense>

      <div className="flex flex-col gap-4 items-center flex-1">
        {user.id === sessionUserId && (
          <Suspense fallback={<Loader />}>
            <CreatePostForm sessionUserId={sessionUserId} className="w-full" />
          </Suspense>
        )}
        <Suspense fallback={<Loader />}>
          <PostsByUser
            userId={user.id}
            sessionUserId={sessionUserId}
            className="w-full"
          />
        </Suspense>
      </div>
      <Suspense fallback={<Loader />}>
        {users && <TopUsersWidget users={users} />}
      </Suspense>
    </section>
  );
}
