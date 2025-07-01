"use client";

import { pagesConfig } from "@/constants/pages-config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../ui";
import { ActionsButtons } from "../shared";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className={cn("relative", className)}>
      <div className="px-4 py-5 rounded-xl bg-gradient-to-b bg-sidebar h-[97vh] border fixed top-4 w-[230px] flex flex-col justify-between">
        <div>
          <Logo className="text-white" />
          <ul className="flex flex-col gap-2 font-semibold text-lg text-white mt-10">
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
        </div>
        <ActionsButtons />
      </div>
    </aside>
  );
};
