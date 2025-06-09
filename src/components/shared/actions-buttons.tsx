import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme";
import { ProfileButton } from "./profile-button";

interface ActionsButtonsProps {
  className?: string;
}

export const ActionsButtons = ({ className }: ActionsButtonsProps) => {
  return (
    <div className={cn("flex gap-2 items-center", className)}>
      <ThemeToggle />
      <ProfileButton />
    </div>
  );
};
