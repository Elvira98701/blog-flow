import { notFound, redirect } from "next/navigation";

import { BigPostCard } from "@/components/shared";
import { getUserSession } from "@/lib/get-user-session";
import { fetchPostById } from "@/services/api";

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

  return (
    <div>
      <BigPostCard
        post={post}
        isOwner={Number(session.id) === post.userId}
        userId={String(post.userId)}
      />
    </div>
  );
}
