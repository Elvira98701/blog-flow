"use client";

import { memo, useState } from "react";

import { Heart, MessageCircle, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui";
import { FeedComments } from "@/features/comments";
import { DeletePostButton } from "@/features/posts";
import { cn } from "@/lib/utils";
import { PostWithLikesAndAuthor } from "@/types";

interface BigPostCardProps {
  sessionUserId: number;
  post: PostWithLikesAndAuthor;
  isOwner: boolean;
  className?: string;
}

export const BigPostCard = memo(function BigPostCard({
  sessionUserId,
  post,
  isOwner,
  className,
}: BigPostCardProps) {
  const [isOpenComments, setIsOpenComments] = useState(false);
  // const [isLiked, setIsLiked] = useState(() =>
  //   post.likes.some((like) => like.userId === sessionUserId)
  // );
  // const queryClient = useQueryClient();

  // const toggleLikeMutation = useMutation({
  //   mutationFn: (postId: number) => toggleLike(postId),
  //   onSuccess: ({ liked, likesCount }) => {
  //     queryClient.setQueryData<PostWithLikesAndAuthor[]>(
  //       ["user-posts", userId],
  //       (oldData) => {
  //         if (!oldData) return oldData;
  //         return oldData.map((p) =>
  //           p.id === post.id ? { ...p, likes: Array(likesCount).fill(null) } : p
  //         );
  //       }
  //     );
  //     setIsLiked(liked);
  //     toast.success("Like");
  //   },
  //   onError: () => {
  //     toast.error("Error when toggling like");
  //   },
  // });

  console.log("render BigPostCard", post.id);

  return (
    <article
      className={cn("relative rounded-md bg-card border p-4 w-full", className)}
    >
      <header>
        <div className="flex gap-2 items-center mb-2">
          <Image
            src={post.user.avatar || "/images/anonim/1.jpg"}
            width={50}
            height={50}
            alt={post.user.name}
            className="rounded-full w-[50px] h-[50px] object-cover"
          />
          <span className="font-bold">{post.user.name}</span>
        </div>
        <Link
          href={`/dashboard/post/${post.id}`}
          className="transition-colors hover:text-primary"
        >
          <h3 className="text-3xl font-bold">{post.title}</h3>
        </Link>
        <div className="flex gap-4 mt-1 text-xs font-mono text-foreground/50">
          <span>
            Created:{" "}
            <data value="">{new Date(post.createdAt).toDateString()}</data>
          </span>
          <span>
            Updated:{" "}
            <data value="">{new Date(post.updatedAt).toDateString()}</data>
          </span>
        </div>
      </header>
      <p className="my-5">{post.content}</p>

      <Image
        src={post.image || ""}
        width={1200}
        height={800}
        alt={post.title}
        className="w-full h-[480px] object-cover rounded-md"
      />
      <div className="flex items-center gap-2 pt-4">
        {isOwner && (
          <Button size="lg" variant="outline">
            <Pencil />
          </Button>
        )}

        <Button
          size="lg"
          variant="outline"
          onClick={() => setIsOpenComments(!isOpenComments)}
          title="open comments"
        >
          <MessageCircle />
        </Button>
        <Button
          size="lg"
          variant="outline"
          disabled={isOwner}
          // onClick={() => toggleLikeMutation.mutate(post.id)}
        >
          <Heart />
          {post.likes.length}
        </Button>
      </div>
      {isOpenComments && <FeedComments postId={post.id} />}
      {isOwner && (
        <DeletePostButton
          className="absolute top-4 right-4"
          sessionUserId={sessionUserId}
          postId={post.id}
        />
      )}
    </article>
  );
});
