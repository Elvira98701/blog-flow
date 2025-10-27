import { Suspense } from "react";

import { redirect } from "next/navigation";

import { Gradient } from "@/components/shared";
import { ProfileUserWidget } from "@/components/shared/profile-user-widget";
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
      <div className="flex gap-4 flex-col max-w-6xl mx-auto">
        <Suspense fallback={<Loader />}>
          <ProfileUserWidget user={user} sessionUserId={sessionUserId} />
        </Suspense>

        <div className="flex gap-4 flex-col">
          {/* <Suspense fallback={<Loader />}>
            <CreatePostForm sessionUserId={sessionUserId} className="w-full" />
          </Suspense> */}

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
