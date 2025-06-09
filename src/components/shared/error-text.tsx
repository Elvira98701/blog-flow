import { cn } from "@/lib/utils";

interface ErrorTextProps {
  text: string;
  className?: string;
}

export const ErrorText = ({ text, className }: ErrorTextProps) => {
  return (
    <p className={cn("text-sm", className)} style={{ color: "#a11717" }}>
      {text}
    </p>
  );
};
