import { PostForm, UserPosts } from "@/components/shared";
import { getUserSession } from "@/lib/get-user-session";
import { redirect } from "next/navigation";

export default async function Posts() {
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }
  return (
    <div className="flex gap-10 items-start min-h-screen">
      <PostForm session={session} className="max-w-96 w-full" />
      <UserPosts userId={session.id} session={session} className="flex-1" />
    </div>
  );
}
