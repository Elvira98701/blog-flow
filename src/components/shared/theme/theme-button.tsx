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
      className={cn("h-32 rounded-md font-bold text-black", className)}
      style={{
        backgroundImage: `linear-gradient(to top, ${theme.colors.primary}, ${theme.colors.accent})`,
      }}
      {...props}
    >
      {theme.title}
    </button>
  );
};
