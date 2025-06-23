import {
  BigPostCard,
  UserHead,
  UserSubscribersList,
} from "@/components/shared";
import { getUserSession } from "@/lib/get-user-session";
import { fetchUserById } from "@/services/api";
import { notFound, redirect } from "next/navigation";

export default async function User({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await fetchUserById(Number(id));
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }

  if (!user) return notFound();

  return (
    <section className="flex gap-10 items-start min-h-screen">
      <div className="max-w-96 bg-gradient-to-br from-primary/40 to-[#4B3BE4]/30 p-4 rounded-lg border">
        <UserHead user={user} session={session} className="mb-10" />
        {user.subscribedTo.length > 0 && (
          <UserSubscribersList
            className="w-full mb-10"
            subscribers={user.subscribedTo}
            title="Subscribers:"
          />
        )}
        {user.subscribers.length > 0 && (
          <UserSubscribersList
            className="w-full"
            subscribers={user.subscribers}
            title="Subscriptions:"
          />
        )}
      </div>
      <div className="flex flex-col gap-5 items-center flex-1">
        {user.posts.map((post) => (
          <BigPostCard
            key={post.id}
            post={post}
            edit={Number(session.id) === user.id}
          />
        ))}
      </div>
    </section>
  );
}
