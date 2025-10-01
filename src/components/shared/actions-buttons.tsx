import { ProfileButton, ThemeToggle } from "@/components/shared";
import { cn } from "@/lib/utils";

interface ActionsButtonsProps {
  className?: string;
}

export const ActionsButtons = ({ className }: ActionsButtonsProps) => {
  return (
    <div className={cn("hidden md:flex gap-2 items-center", className)}>
      <ThemeToggle />
      <ProfileButton />
    </div>
  );
};
