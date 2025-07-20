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
    <div className="flex gap-3 mx-2 relative overflow-hidden">
      <Sidebar className="w-[230px] hidden sm:block" />
      <main className="py-5 flex-1">{children}</main>
    </div>
  );
}
