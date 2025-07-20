import { ActionsButtons } from "@/components/shared";
import { Logo } from "@/components/ui";
import { cn } from "@/lib/utils";

import { SidebarNav } from "./sidebar-nav";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside className={cn("relative", className)}>
      <div className="px-4 py-5 rounded-xl bg-gradient-to-b bg-sidebar h-[97vh] border fixed top-4 w-[230px] flex flex-col justify-between">
        <div>
          <Logo className="text-white" />
          <SidebarNav className="mt-10" />
        </div>
        <ActionsButtons />
      </div>
    </aside>
  );
};
