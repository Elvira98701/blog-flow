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
        className={cn("bg-background/30 h-full rounded-lg p-3 border ", {
          "bg-background": active,
        })}
      >
        <Image
          src={post.image || ""}
          width={500}
          height={500}
          alt="user"
          className="w-full h-2/3 rounded-lg object-cover"
        />
        <div className="pt-2 flex flex-col gap-2">
          <div>
            <h3 className="text-xl text-center font-semibold">{post.title}</h3>
            <p className="text-center">Created by Doodles</p>
          </div>
          <div className="flex items-center">
            <div className="flex-1 flex flex-col justify-center items-center">
              <span className="text-2xl font-semibold">9.9K</span>
              <span className="text-foreground/50">likes</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <span className="text-2xl font-semibold">9.9K</span>
              <span className="text-foreground/50">likes</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
