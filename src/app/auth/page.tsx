import { AuthWrapper } from "@/components/shared";
import Image from "next/image";

export default function Auth() {
  return (
    <main className="min-h-screen flex">
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
