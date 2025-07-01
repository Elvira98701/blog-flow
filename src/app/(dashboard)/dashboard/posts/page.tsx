import { getUserSession } from "@/lib/get-user-session";
import { redirect } from "next/navigation";

export default async function Posts() {
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }

  return redirect(`/dashboard/user/${session.id}`);
}
