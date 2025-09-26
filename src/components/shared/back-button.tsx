"use client";

import { ReactNode } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  fallbackUrl?: string;
  children?: ReactNode;
  className?: string;
}

export const BackButton = ({
  children,
  fallbackUrl = "/",
  className,
}: BackButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (
      window.location.pathname.includes("404") ||
      window.history.length <= 1
    ) {
      router.push(fallbackUrl);
      return;
    }

    router.back();
  };

  return (
    <Button className={cn("", className)} onClick={handleClick} size="lg">
      {children}
    </Button>
  );
};
