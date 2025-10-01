"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui";
import { useSearchFocus } from "@/hooks";
import { cn } from "@/lib/utils";

import { usePostsSearch } from "../hooks/use-posts-search";

interface PostsSearchInputProps {
  className?: string;
}

export const PostsSearchInput = ({
  className,
  ...props
}: PostsSearchInputProps) => {
  const { focused, setFocused, ref } = useSearchFocus();
  const { searchQuery, setSearchQuery, posts, reset } = usePostsSearch();

  const handleClickItem = () => {
    reset();
    setFocused(false);
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/60 z-30" />
      )}
      <div
        ref={ref}
        className={cn("relative w-full rounded-md z-30 max-w-96", className)}
      >
        <Search
          className="absolute top-1/2 -translate-y-1/2 left-2 text-zinc-400 z-30"
          size={18}
        />
        <Input
          className="w-full pl-8 bg-background border border-foreground/20"
          type="search"
          placeholder="Search post"
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          {...props}
        />

        {posts.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-background rounded-md p-1 sm:p-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30 border",
              focused && "visible opacity-100 top-12"
            )}
          >
            {posts.map((post) => (
              <Link
                key={post.id}
                className="flex items-center gap-3 rounded-full w-full p-1 hover:bg-accent/90 hover:text-white transition-all"
                href={`/dashboard/post/${post.id}`}
                onClick={handleClickItem}
              >
                <Image
                  className="rounded-full h-8 w-8 object-cover"
                  src={post.image || ""}
                  alt={post.title}
                  width={32}
                  height={32}
                />
                <span className="text-xs sm:text-sm lg:text-base overflow-hidden text-ellipsis whitespace-nowrap">
                  {post.title}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
