"use client";

import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";
import { ThemeProvider } from "./theme";
import { Toaster } from "react-hot-toast";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          value={{
            "theme-green": "theme-green",
            "theme-midnight": "theme-midnight",
            "theme-blue": "theme-blue",
            "theme-peach": "theme-peach",
            dark: "dark",
            light: "light",
          }}
        >
          {children}
        </ThemeProvider>
      </SessionProvider>
      <NextTopLoader color="#8468ea" height={4} />
      <Toaster
        toastOptions={{
          style: {
            borderRadius: "40px",
          },
        }}
      />
    </>
  );
};
