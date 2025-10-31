import { Suspense } from "react";

import { notFound, redirect } from "next/navigation";

import { Gradient } from "@/components/shared";
import { ProfileUserWidget } from "@/components/shared/profile-user-widget";
import { Loader } from "@/components/ui";
import { FeedFollowers, FeedFollowings } from "@/features/followers";
import { PostsByUser } from "@/features/posts";
import { getUserSession } from "@/lib/get-user-session";
import { fetchUserById } from "@/services/db/user";

export default async function Profile() {
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }

  const user = await fetchUserById(Number(session?.id));

  if (!user) return notFound();

  const sessionUserId = Number(session.id);

  return (
    <div className="min-h-screen flex gap-4 items-start relative">
      <div className="flex gap-4 flex-col flex-3/4">
        <Suspense fallback={<Loader />}>
          <ProfileUserWidget user={user} sessionUserId={sessionUserId} />
        </Suspense>

        <div className="flex gap-4 flex-col">
          <Suspense fallback={<Loader />}>
            <PostsByUser
              userId={sessionUserId}
              sessionUserId={sessionUserId}
              className="w-full"
            />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={<Loader />}>
        <div className="bg-linear-to-b from-popover to-card p-4 rounded-md border flex-1/4">
          <FeedFollowers userId={user.id} className="mt-10" />
          <FeedFollowings userId={user.id} className="mt-10" />
        </div>
      </Suspense>
      <Gradient className="absolute right-0 -z-10" />
    </div>
  );
}
