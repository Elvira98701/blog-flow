import { redirect } from "next/navigation";

import { getUserSession } from "@/lib/get-user-session";

export default async function Posts() {
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }

  return redirect(`/dashboard/user/${session.id}`);
}
