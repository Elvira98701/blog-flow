"use client";

import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  StickyNote,
  UserRoundCheck,
  UserRoundPen,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className={cn("border-r min-h-screen py-5", className)}>
      <ul className="flex flex-col gap-2 font-semibold text-lg">
        <li>
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center gap-2 hover:text-primary transition-colors",
              {
                "text-primary": pathname === "/dashboard",
              }
            )}
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/profile"
            className={cn(
              "flex items-center gap-2 hover:text-primary transition-colors",
              {
                "text-primary": pathname === "/dashboard/profile",
              }
            )}
          >
            <UserRoundPen size={18} />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/posts"
            className={cn(
              "flex items-center gap-2 hover:text-primary transition-colors",
              {
                "text-primary": pathname === "/dashboard/posts",
              }
            )}
          >
            <StickyNote size={18} />
            <span>Posts</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/subscribers"
            className={cn(
              "flex items-center gap-2 hover:text-primary transition-colors",
              {
                "text-primary": pathname === "/dashboard/subscribers",
              }
            )}
          >
            <UserRoundCheck size={18} />
            <span>Subscribers</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
