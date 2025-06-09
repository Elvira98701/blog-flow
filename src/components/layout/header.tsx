import { cn } from "@/lib/utils";
import { Logo } from "../ui";
import { ActionsButtons } from "../shared";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("fixed w-screen top-0 left-0 z-30", className)}>
      <div className="flex justify-between items-center min-h-20 px-2 sm:px-6 border-b bg-background">
        <Logo />
        <ActionsButtons />
      </div>
    </header>
  );
};
