import { cn } from "@/lib/utils";
import { Post } from "@prisma/client";
import Image from "next/image";

interface PostCardProps {
  post: Post;
  active?: boolean;
  className?: string;
}

export const PostCard = ({ post, active, className }: PostCardProps) => {
  return (
    <article
      className={cn(
        "rounded-lg h-[450px] w-72 p-1 relative",
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
        <Image
          src={post.image || ""}
          width={600}
          height={600}
          alt="user"
          className="w-full h-3/4 rounded-lg object-cover"
        />
        <div className="py-3 flex flex-col justify-between gap-2 h-1/4">
          <div>
            <h3 className="text-xl text-center font-semibold">{post.title}</h3>
          </div>

          <div className="flex justify-center items-center gap-1">
            <span className="text-2xl font-semibold">9.9K</span>
            <span className="text-foreground/50">likes</span>
          </div>
        </div>
      </div>
    </article>
  );
};
