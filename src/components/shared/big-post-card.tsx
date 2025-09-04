"use client";

import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Heart, MessageCircle, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

import { ClearButton, CommentsWrapper } from "@/components/shared";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { deletePostById, toggleLike } from "@/services/api";
import { PostWithLikesAndAuthor } from "@/types";

interface BigPostCardProps {
  sessionUserId: string;
  post: PostWithLikesAndAuthor;
  isOwner: boolean;
  className?: string;
}

export const BigPostCard = ({
  sessionUserId,
  post,
  isOwner,
  className,
}: BigPostCardProps) => {
  const [isOpenComments, setIsOpenComments] = useState(false);
  const [isLiked, setIsLiked] = useState(() =>
    post.likes.some((like) => like.userId === Number(sessionUserId))
  );
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (postId: number) => deletePostById(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-posts", sessionUserId],
      });
      toast.success("The post was successfully deleted");
    },
    onError: () => {
      toast.error("Error when deleting a post");
    },
  });

  console.log(sessionUserId);

  const toggleLikeMutation = useMutation({
    mutationFn: (postId: number) => toggleLike(postId),
    onSuccess: ({ liked, likesCount }) => {
      // queryClient.setQueryData<PostWithLikesAndAuthor[]>(
      //   ["user-posts", userId],
      //   (oldData) => {
      //     if (!oldData) return oldData;
      //     return oldData.map((p) =>
      //       p.id === post.id ? { ...p, likes: Array(likesCount).fill(null) } : p
      //     );
      //   }
      // );
      setIsLiked(liked);
      toast.success("Like");
    },
    onError: () => {
      toast.error("Error when toggling like");
    },
  });

  console.log(isLiked);

  return (
    <article
      className={cn("relative rounded-lg bg-card border p-4 w-full", className)}
    >
      <header>
        <div className="flex gap-2 items-center mb-2">
          <Image
            src={post.user.avatar || "/images/anonim/1.jpg"}
            width={50}
            height={50}
            alt={post.user.name}
            className="rounded-full"
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
        width={600}
        height={600}
        alt={post.title}
        className="w-full h-96 object-cover rounded-lg"
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
          disabled={isOwner}
          onClick={() => toggleLikeMutation.mutate(post.id)}
        >
          <Heart className={cn(isLiked ? "text-red-500" : "")} />
          {post.likes.length}
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => setIsOpenComments(!isOpenComments)}
          title="open comments"
        >
          <MessageCircle />
        </Button>
      </div>
      {isOpenComments && <CommentsWrapper postId={String(post.id)} />}
      {isOwner && (
        <div className="absolute top-4 right-4">
          <ClearButton
            onClick={() => {
              mutate(post.id);
            }}
          />
        </div>
      )}
    </article>
  );
};
