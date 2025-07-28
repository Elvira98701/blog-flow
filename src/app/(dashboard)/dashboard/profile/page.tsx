import { Suspense } from "react";

import { redirect } from "next/navigation";

import { UserWidget } from "@/components/shared";
import { getUserSession } from "@/lib/get-user-session";
import { fetchUserById } from "@/services/api";

export default async function Profile() {
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }

  const user = await fetchUserById(Number(session?.id));
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <UserWidget
          user={user}
          sessionUserId={Number(session.id)}
          isProfilePage={true}
        />
      </Suspense>
    </div>
  );
}
