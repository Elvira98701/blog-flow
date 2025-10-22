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
              light: "light",
              "light-2": "light-2",
              "light-3": "light-3",
              dark: "dark",
              "dark-2": "dark-2",
              "dark-3": "dark-3",
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
