import { ButtonHTMLAttributes } from "react";

import { X } from "lucide-react";

import { cn } from "@/lib/utils";

interface ClearButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: VoidFunction;
}

export const ClearButton = ({
  onClick,
  className,
  ...props
}: ClearButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn("opacity-30 hover:opacity-100 cursor-pointer", className)}
      type="button"
      {...props}
    >
      <X className="h-5 w-5" />
    </button>
  );
};
