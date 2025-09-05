import { ActionsButtons } from "@/components/shared";
import { Logo } from "@/components/ui";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        "absolute w-screen top-0 left-0 z-30 flex justify-center pt-4",
        className
      )}
    >
      <div className="flex justify-between items-center min-h-16 px-2 sm:px-4 max-w-4xl w-full border bg-background/10 rounded-md backdrop-blur-xs ring-3 ring-border/30">
        <Logo />
        <ActionsButtons />
      </div>
    </header>
  );
};
