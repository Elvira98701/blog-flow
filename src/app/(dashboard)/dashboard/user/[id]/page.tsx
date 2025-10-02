import { Suspense } from "react";

import { notFound, redirect } from "next/navigation";

import { TopUsersWidget, UserWidget } from "@/components/shared";
import { Loader } from "@/components/ui";
import { CreatePostForm, PostsByUser } from "@/features/posts";
import { getUserSession } from "@/lib/get-user-session";
import { fetchHeroUsers, fetchUserById } from "@/services/api";

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
        <UserWidget user={user} sessionUserId={sessionUserId} />
      </Suspense>

      <div className="flex flex-col gap-4 items-center flex-1">
        {user.id === sessionUserId && (
          <CreatePostForm sessionUserId={sessionUserId} className="w-full" />
        )}
        <PostsByUser
          userId={user.id}
          sessionUserId={sessionUserId}
          className="w-full"
        />
      </div>
      <Suspense fallback={<Loader />}>
        {users && <TopUsersWidget users={users} className="mb-5" />}
      </Suspense>
    </section>
  );
}
