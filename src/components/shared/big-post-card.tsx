import { cn } from "@/lib/utils";
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface BigPostCardProps {
  post: Post;
  edit: boolean;
  className?: string;
}

export const BigPostCard = ({ edit, post, className }: BigPostCardProps) => {
  return (
    <article
      className={cn(
        "relative rounded-lg bg-background/30 border p-4 w-full transition-colors duration-300 hover:bg-background",
        className
      )}
    >
      <Link href={`/dashboard/post/${post.id}`}>
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={post.image || ""}
            width={600}
            height={600}
            alt={post.title}
            className="w-1/2 h-96 object-cover rounded-lg"
          />
          <div>
            <h3 className="text-3xl font-bold">{post.title}</h3>
            <p className="flex gap-4 mt-1 mb-10">
              <span>
                Created: <data value="">{post.createdAt.toDateString()}</data>
              </span>
              <span>
                Updated: <data value="">{post.updatedAt.toDateString()}</data>
              </span>
            </p>
          </div>
        </div>
        <p>{post.content}</p>
      </Link>
    </article>
  );
};
