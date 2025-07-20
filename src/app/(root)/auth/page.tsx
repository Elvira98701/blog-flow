import Image from "next/image";

import { AuthWrapper } from "@/components/shared";

export default function Auth() {
  return (
    <main className="min-h-screen flex justify-between">
      <div className="flex-1 flex justify-center items-center">
        <AuthWrapper className="w-96" />
      </div>
      <Image
        className="flex-1 h-screen object-cover"
        src="/images/auth.jpg"
        width={2000}
        height={2080}
        alt=""
      />
    </main>
  );
}
