import { ActionsButtons } from "@/components/shared";
import { Logo } from "@/components/ui";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("absolute w-screen top-0 left-0 z-30", className)}>
      <div className="flex justify-between items-center min-h-20 px-2 sm:px-6">
        <Logo />
        <ActionsButtons />
      </div>
    </header>
  );
};
