import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface ClearButtonProps {
  className?: string;
  onClick?: VoidFunction;
}

export const ClearButton = ({ onClick, className }: ClearButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn("opacity-30 hover:opacity-100 cursor-pointer", className)}
      type="button"
    >
      <X className="h-5 w-5" />
    </button>
  );
};
