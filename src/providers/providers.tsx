"use client";

import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

import { ThemeProvider } from "./theme-provider";

interface ProvidersProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
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

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
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
