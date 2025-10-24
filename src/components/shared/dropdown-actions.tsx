"use client";

import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { EllipsisVertical } from "lucide-react";

import { Button, Loader } from "@/components/ui";
import { DeletePostButton } from "@/features/posts";
import { cn } from "@/lib/utils";
import { PostWithLikesAndAuthor } from "@/types";

interface DropdownActionsProps {
  sessionUserId: number;
  post: PostWithLikesAndAuthor;
  className?: string;
}

const EditPostModal = lazy(() => import("@/features/posts"));

export const DropdownActions = ({
  sessionUserId,
  post,
  className,
}: DropdownActionsProps) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power1" }
      );
    }, dropdownRef);

    return () => ctx.revert();
  }, [isOpenDropdown]);

  const handleCloseDropdown = useCallback(() => {
    setIsOpenDropdown(false);
  }, []);

  return (
    <div className={cn("relative", className)}>
      <Button
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        variant="ghost"
        size="icon"
        className="hover:bg-border bg-border/30"
      >
        <EllipsisVertical />
      </Button>

      {isOpenDropdown && (
        <>
          <div
            className="flex flex-col gap-2 border rounded-md bg-popover absolute right-0 top-[120%] p-2 z-20 origin-top-right"
            ref={dropdownRef}
          >
            <Suspense fallback={<Loader />}>
              <EditPostModal
                postId={post.id}
                title={post.title}
                content={post.content}
                userId={post.userId}
                onCloseDropdown={handleCloseDropdown}
              />
            </Suspense>

            <DeletePostButton sessionUserId={sessionUserId} postId={post.id} />
          </div>

          <div
            className="fixed top-0 left-0 w-full h-screen z-10"
            onClick={() => setIsOpenDropdown(false)}
          />
        </>
      )}
    </div>
  );
};
