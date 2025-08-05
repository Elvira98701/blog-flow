import { Suspense } from "react";

import { redirect } from "next/navigation";

import { Gradient, ProfileForm, UserWidget } from "@/components/shared";
import { getUserSession } from "@/lib/get-user-session";
import { fetchUserById } from "@/services/api";

export default async function Profile() {
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }

  const user = await fetchUserById(Number(session?.id));

  return (
    <div className="flex gap-5 items-start min-h-screen relative">
      <Suspense fallback={<div>Loading...</div>}>
        <UserWidget
          user={user}
          sessionUserId={Number(session.id)}
          isProfilePage={true}
        />
      </Suspense>
      <div className="flex-1">
        <ProfileForm className="max-w-2xl w-full" />
      </div>
      <Gradient className="absolute right-0 -z-10" />
    </div>
  );
}
