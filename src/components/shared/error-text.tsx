import { cn } from "@/lib/utils";

interface ErrorTextProps {
  text: string;
  size?: "lg" | "sm" | "default";
  className?: string;
}

export const ErrorText = ({
  size = "default",
  text,
  className,
}: ErrorTextProps) => {
  return (
    <p
      className={cn(
        {
          "text-sm": size === "sm",
          "text-lg": size === "lg",
          "text-base": size === "default",
        },
        className
      )}
      style={{ color: "#a11717" }}
    >
      {text}
    </p>
  );
};
