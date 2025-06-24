import { cn } from "@/lib/utils";
import { PostWithLikesAndAuthor } from "@/types";
import { Heart } from "lucide-react";
import Image from "next/image";

interface PostCardProps {
  post: PostWithLikesAndAuthor;
  active?: boolean;
  className?: string;
}

export const PostCard = ({ post, active, className }: PostCardProps) => {
  return (
    <article
      className={cn(
        "group rounded-lg h-[450px] p-1 relative",
        {
          "bg-gradient-to-br from-accent to-primary transition-transform duration-500":
            active,
        },
        className
      )}
    >
      <div
        className={cn("bg-background/30 h-full rounded-lg p-2 border", {
          "bg-background": active,
        })}
      >
        <div className="overflow-hidden rounded-lg h-3/4">
          <Image
            src={post.image || ""}
            width={600}
            height={600}
            alt="user"
            className="size-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="py-3 flex flex-col justify-between gap-2 h-1/4">
          <div>
            <h3 className="text-xl text-center font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              {post.title}
            </h3>
            <h4 className="font-medium text-center text-xs text-foreground/50">
              <span>Author:</span> <span>{post.user.name}</span>
            </h4>
          </div>

          <span className="flex justify-center items-center gap-1">
            <span className="text-2xl font-semibold">{post.likes.length}</span>
            <Heart size={18} />
          </span>
        </div>
      </div>
    </article>
  );
};
