import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("max-w-[1500px] mx-auto px-2", className)}>
      {children}
    </div>
  );
};
