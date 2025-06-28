"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui";
import { Heart } from "lucide-react";
import { PostWithLikesAndAuthor } from "@/types";
import { ClearButton } from "./clear-button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePostById } from "@/services/api";
import toast from "react-hot-toast";

interface BigPostCardProps {
  userId: string;
  post: PostWithLikesAndAuthor;
  edit: boolean;
  deletePost: boolean;
  className?: string;
}

export const BigPostCard = ({
  userId,
  edit,
  deletePost,
  post,
  className,
}: BigPostCardProps) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (postId: number) => deletePostById(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-posts", userId] });
      toast.success("The post was created successfully");
    },
    onError: () => {
      toast.error("Error when creating a post");
    },
  });
  return (
    <article
      className={cn(
        "relative rounded-lg bg-background/30 border p-4 w-full transition-colors duration-300 hover:bg-background",
        className
      )}
    >
      <Link href={`/dashboard/post/${post.id}`}>
        <div className="flex items-center gap-4 mb-5">
          <Image
            src={post.image || ""}
            width={600}
            height={600}
            alt={post.title}
            className="w-1/2 h-96 object-cover rounded-lg"
          />
          <div>
            <h3 className="text-3xl font-bold">{post.title}</h3>
            <p className="flex gap-4 mt-1">
              <span>
                Created:{" "}
                <data value="">{new Date(post.createdAt).toDateString()}</data>
              </span>
              <span>
                Updated:{" "}
                <data value="">{new Date(post.updatedAt).toDateString()}</data>
              </span>
            </p>
            <span className="font-mono text-foreground/70">
              Author: {post.user.name}
            </span>
          </div>
        </div>
        <p className="mb-5">{post.content}</p>
      </Link>
      <div className="flex items-center gap-2">
        {edit && <Button size="lg">Edit</Button>}
        <Button size="lg" variant="outline">
          <Heart />
          {post.likes.length}
        </Button>
      </div>
      {deletePost && (
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
