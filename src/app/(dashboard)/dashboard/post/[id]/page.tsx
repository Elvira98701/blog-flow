import { notFound, redirect } from "next/navigation";

import { BigPostCard } from "@/components/shared";
import { getUserSession } from "@/lib/get-user-session";
import { fetchPostById } from "@/services/db/post";

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await fetchPostById(Number(id));
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }

  if (!post) return notFound();

  const sessionUserId = Number(session.id);

  return (
    <div className="flex justify-center">
      <BigPostCard
        className="max-w-6xl"
        post={post}
        isOwner={sessionUserId === post.userId}
        sessionUserId={sessionUserId}
      />
    </div>
  );
}
