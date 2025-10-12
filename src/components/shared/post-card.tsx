import Image from "next/image";
import Link from "next/link";

import { LikeButton } from "@/features/likes";
import { cn } from "@/lib/utils";
import { PostWithLikesAndAuthor } from "@/types";

interface PostCardProps {
  post: PostWithLikesAndAuthor;
  sessionUserId: number;
  className?: string;
}

export const PostCard = ({ post, sessionUserId, className }: PostCardProps) => {
  return (
    <article
      className={cn(
        "group rounded-md h-[450px] p-2 border bg-card relative transition-transform",
        className
      )}
    >
      <div className="overflow-hidden rounded-md h-3/4">
        <Image
          src={post.image || ""}
          width={600}
          height={600}
          alt="user"
          className="size-full rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="pt-3 flex flex-col justify-end gap-2 h-1/4 relative">
        <Link
          href={`/dashboard/post/${post.id}`}
          className="transition-colors hover:text-primary"
        >
          <h3 className="text-lg text-center font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
            {post.title}
          </h3>
          <h4 className="font-medium text-center text-xs text-foreground/50">
            <span>Author:</span> <span>{post.user.name}</span>
          </h4>
        </Link>

        <LikeButton
          likes={post.likes}
          sessionUserId={sessionUserId}
          postId={post.id}
          userId={post.userId}
          size="lg"
        />

        <Image
          src={post.user.avatar || ""}
          width={50}
          height={50}
          alt={post.user.name}
          className="rounded-full absolute -top-[40px] left-0 w-[50px] h-[50px] object-cover"
        />
      </div>
    </article>
  );
};
