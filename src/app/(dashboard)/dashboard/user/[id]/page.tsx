import {
  UserHead,
  UserPosts,
  UserRow,
  UserSubscribersList,
} from "@/components/shared";
import { getUserSession } from "@/lib/get-user-session";
import { fetchHeroUsers, fetchUserById } from "@/services/api";
import { notFound, redirect } from "next/navigation";

export default async function User({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await fetchUserById(Number(id));
  const session = await getUserSession();
  const users = await fetchHeroUsers(6);

  if (!session) {
    return redirect("/not-auth");
  }

  if (!user) return notFound();

  return (
    <section className="flex gap-5 items-start min-h-screen">
      <div className="max-w-96 bg-gradient-to-b from-card via-card to-accent/70 p-4 rounded-lg border">
        <UserHead user={user} session={session} className="mb-10" />
        {user.subscribedTo.length > 0 && (
          <UserSubscribersList
            className="w-full mb-10"
            subscribers={user.subscribedTo}
            title="Followers:"
          />
        )}
        {user.subscribers.length > 0 && (
          <UserSubscribersList
            className="w-full"
            subscribers={user.subscribers}
            title="Following:"
          />
        )}
      </div>
      <UserPosts
        userId={String(user.id)}
        session={session}
        className="flex-1"
      />
      <div className="min-w-96 bg-gradient-to-b from-card via-card to-accent/70 p-4 rounded-lg border mb-5">
        <h3 className="text-3xl font-bold mb-5">Top users</h3>
        {users?.map((user) => (
          <UserRow
            key={user.id}
            id={user.id}
            avatar={user.avatar || "/images/anonim/1.jpg"}
            name={user.name}
            className="mb-2"
          />
        ))}
      </div>
    </section>
  );
}
