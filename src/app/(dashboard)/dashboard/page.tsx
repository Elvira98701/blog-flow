import { redirect } from "next/navigation";

import { DashboardUserWidget } from "@/components/shared";
import { getUserSession } from "@/lib/get-user-session";
import { prisma } from "@/prisma/prisma-client";

export default async function Dashboard() {
  const session = await getUserSession();

  const user = await prisma.user.findFirst({
    where: { id: Number(session?.id) },
  });

  if (!user) {
    return redirect("/not-auth");
  }

  return (
    <div className="min-h-screen relative">
      <h1 className="font-bold mb-4 capitalize">My dashboard</h1>
      <div className="flex gap-4">
        <div className="flex-4/5">
          <div className="flex gap-4 mb-4">
            <DashboardUserWidget className="flex-2/4" />
            <div className="flex-2/4 border rounded-md bg-linear-to-b from-popover to-card"></div>
          </div>
          <div className="flex gap-4 items-stretch">
            <div className="flex-2/4 border rounded-md bg-linear-to-b from-popover to-card">
              test1
            </div>
            <div className="flex-2/4 border rounded-md bg-linear-to-b from-popover to-card">
              test1
            </div>
            <div className="flex-2/4 border rounded-md bg-linear-to-b from-popover to-card">
              test1
            </div>
          </div>
        </div>
        <div className="flex-1/5 border">dashboard right</div>
      </div>
    </div>
  );
}
