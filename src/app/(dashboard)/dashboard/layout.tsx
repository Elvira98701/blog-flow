import { redirect } from "next/navigation";

import { Sidebar } from "@/components/layout";
import { getUserSession } from "@/lib/get-user-session";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }

  return (
    <div className="flex gap-3 px-2 relative overflow-hidden">
      <Sidebar className="w-[230px] hidden lg:block" />
      <main className="py-5 flex-1 min-h-screen">{children}</main>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-accent/50 pointer-events-none" />
    </div>
  );
}
