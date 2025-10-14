import { lazy, Suspense } from "react";

import { ProfileButton } from "@/components/shared";
import { Loader } from "@/components/ui";
import { cn } from "@/lib/utils";

interface ActionsButtonsProps {
  className?: string;
}

const ThemeToggle = lazy(() => import("@/features/theme"));

export const ActionsButtons = ({ className }: ActionsButtonsProps) => {
  return (
    <div className={cn("hidden md:flex gap-2 items-center", className)}>
      <Suspense fallback={<Loader />}>
        <ThemeToggle />
      </Suspense>

      <Suspense>
        <ProfileButton />
      </Suspense>
    </div>
  );
};
