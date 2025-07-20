import { Suspense } from "react";

import { notFound, redirect } from "next/navigation";

import { TopUsersWidget, UserPosts, UserWidget } from "@/components/shared";
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
      <Suspense fallback={<div>Loading...</div>}>
        <UserWidget user={user} session={session} />
      </Suspense>
      <UserPosts
        userId={String(user.id)}
        session={session}
        className="flex-1"
      />
      <Suspense fallback={<div>Loading...</div>}>
        {users && <TopUsersWidget users={users} className="mb-5" />}
      </Suspense>
    </section>
  );
}
