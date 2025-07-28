import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { Button } from "@/components/ui";
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
      <section className="flex flex-col gap-4 max-w-4xl mx-auto rounded-lg bg-card border p-4">
        <div className="flex-1">
          <Link
            href={`/dashboard/user/${post.userId}`}
            className="flex gap-2 items-center mb-2"
          >
            <Image
              src={post.user.avatar || "/images/anonim/1.jpg"}
              width={50}
              height={50}
              alt={post.user.name}
              className="rounded-full"
            />
            <span className="font-bold">{post.user.name}</span>
          </Link>
          <h1 className="small-title font-bold">{post.title}</h1>
          <p className="mt-2">{post.content}</p>
        </div>
        <Image
          src={post.image || ""}
          width={600}
          height={600}
          alt=""
          className="w-full h-[600px] object-cover rounded-lg"
        />
        <div className="flex items-center gap-2">
          <Button size="lg" variant="outline">
            <Heart />
            {post.likes.length}
          </Button>
          <Button size="lg" variant="outline">
            <MessageCircle />
          </Button>
        </div>
      </section>
    </div>
  );
}
