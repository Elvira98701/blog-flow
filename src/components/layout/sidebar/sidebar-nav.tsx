"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { pagesConfig } from "@/constants/pages-config";
import { cn } from "@/lib/utils";

interface SidebarNavProps {
  className?: string;
}

export const SidebarNav = ({ className }: SidebarNavProps) => {
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        "flex flex-col gap-2 font-semibold font-sans-2 text-lg text-white",
        className
      )}
    >
      {pagesConfig.map((page) => (
        <li key={page.id}>
          <Link
            href={`/dashboard${page.link}`}
            className={cn(
              "flex items-center gap-2 hover:text-primary transition-colors rounded-full py-1",
              {
                "text-primary": pathname === `/dashboard${page.link}`,
              }
            )}
          >
            {page.icon}
            <span>{page.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
