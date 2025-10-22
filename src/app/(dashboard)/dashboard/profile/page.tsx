import { Suspense } from "react";

import { redirect } from "next/navigation";

import { Gradient, UserWidget } from "@/components/shared";
import { Loader } from "@/components/ui";
import { CreatePostForm, PostsByUser } from "@/features/posts";
import { getUserSession } from "@/lib/get-user-session";
import { fetchUserById } from "@/services/db/user";

export default async function Profile() {
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }

  const user = await fetchUserById(Number(session?.id));

  const sessionUserId = Number(session.id);

  return (
    <div className="min-h-screen relative">
      <h1 className="font-bold mb-4">Profile</h1>
      <div className="flex gap-4 items-start flex-col xl:flex-row">
        <Suspense fallback={<Loader />}>
          <UserWidget user={user} sessionUserId={Number(session.id)} />
        </Suspense>

        <div className="flex flex-col gap-4 items-center flex-1">
          <Suspense fallback={<Loader />}>
            <CreatePostForm sessionUserId={sessionUserId} className="w-full" />
          </Suspense>

          <Suspense fallback={<Loader />}>
            <PostsByUser
              userId={sessionUserId}
              sessionUserId={sessionUserId}
              className="w-full"
            />
          </Suspense>
        </div>
      </div>
      <Gradient className="absolute right-0 -z-10" />
    </div>
  );
}
