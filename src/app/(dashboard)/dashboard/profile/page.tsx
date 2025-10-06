import { Suspense } from "react";

import { redirect } from "next/navigation";

import { Gradient, UserWidget } from "@/components/shared";
import { Loader } from "@/components/ui";
import { UpdateProfileForm } from "@/features/profile";
import { getUserSession } from "@/lib/get-user-session";
import { fetchUserById } from "@/services/db/user";

export default async function Profile() {
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }

  const user = await fetchUserById(Number(session?.id));

  return (
    <div className="min-h-screen relative">
      <h1 className="font-bold mb-4">Profile</h1>
      <div className="flex gap-4 items-start">
        <Suspense fallback={<Loader />}>
          <UserWidget
            user={user}
            sessionUserId={Number(session.id)}
            isProfilePage={true}
          />
        </Suspense>
        <div className="max-w-2xl flex-1">
          <UpdateProfileForm className="w-full" />
        </div>
      </div>
      <Gradient className="absolute right-0 -z-10" />
    </div>
  );
}
