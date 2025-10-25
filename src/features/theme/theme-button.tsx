import { ButtonHTMLAttributes } from "react";

import { ITheme } from "@/constants/theme";
import { cn } from "@/lib/utils";

interface ThemeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ITheme;
  className?: string;
}

export const ThemeButton = ({
  theme,
  className,
  ...props
}: ThemeButtonProps) => {
  return (
    <button
      className={cn(
        "group h-32 rounded-md font-bold cursor-pointer border flex flex-col justify-center items-center gap-1 p-4",
        className
      )}
      style={{
        backgroundColor: theme.colors.background,
      }}
      {...props}
    >
      <span
        style={{
          color: theme.colors.foreground,
        }}
      >
        {theme.title}
      </span>
      <span
        className="h-14 w-full rounded-full transition-transform group-hover:translate-1"
        style={{
          backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent})`,
        }}
      ></span>
    </button>
  );
};
