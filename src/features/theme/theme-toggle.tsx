"use client";

import { useTheme } from "next-themes";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { themeData } from "@/constants/theme";

import { ThemeButton } from "./theme-button";

export const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <Dialog>
      <DialogTrigger className="border bg-background text-sm font-medium rounded-sm h-10 px-6 cursor-pointer transition-transform hover:scale-95">
        Theme
      </DialogTrigger>
      <DialogContent className="w-full max-w-screen-xl p-4">
        <DialogHeader>
          <DialogTitle className="font-bold">Themes</DialogTitle>
          <DialogDescription>Choose a theme</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4">
          {themeData.map((theme) => (
            <ThemeButton
              key={theme.id}
              theme={theme}
              onClick={() => setTheme(theme.value)}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
