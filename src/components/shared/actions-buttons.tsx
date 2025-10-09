import { Suspense } from "react";

import { ProfileButton } from "@/components/shared";
import { ThemeToggle } from "@/features/theme";
import { cn } from "@/lib/utils";

interface ActionsButtonsProps {
  className?: string;
}

export const ActionsButtons = ({ className }: ActionsButtonsProps) => {
  return (
    <div className={cn("hidden md:flex gap-2 items-center", className)}>
      <ThemeToggle />
      <Suspense>
        <ProfileButton />
      </Suspense>
    </div>
  );
};
