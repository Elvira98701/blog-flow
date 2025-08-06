import { Suspense } from "react";

import { notFound, redirect } from "next/navigation";

import {
  Loader,
  TopUsersWidget,
  UserPosts,
  UserWidget,
} from "@/components/shared";
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

  return (
    <section className="flex gap-5 items-start min-h-screen">
      <Suspense fallback={<Loader />}>
        <UserWidget user={user} sessionUserId={Number(session.id)} />
      </Suspense>
      <UserPosts
        userId={String(user.id)}
        session={session}
        className="flex-1"
      />
      <Suspense fallback={<Loader />}>
        {users && <TopUsersWidget users={users} className="mb-5" />}
      </Suspense>
    </section>
  );
}
