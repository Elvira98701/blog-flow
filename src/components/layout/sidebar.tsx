"use client";

import { pagesConfig } from "@/constants/pages-config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className={cn("border-r min-h-screen py-5 p-4", className)}>
      <ul className="flex flex-col gap-2 font-semibold text-lg">
        {pagesConfig.map((page) => (
          <li key={page.id}>
            <Link
              href={`/dashboard${page.link}`}
              className={cn(
                "flex items-center gap-2 hover:text-primary transition-colors",
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
    </aside>
  );
};
