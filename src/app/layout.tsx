import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded } from "next/font/google";

import { Providers } from "@/providers";

import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlogFlow",
  description:
    "Create, edit, and analyze – all in one place. Take full control of your blog with a powerful, intuitive admin panel designed to streamline your content management process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
