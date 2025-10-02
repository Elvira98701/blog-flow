import { Loader as Spinner } from "lucide-react";

import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <Spinner className="w-5 h-5 animate-spin" />
    </div>
  );
};
