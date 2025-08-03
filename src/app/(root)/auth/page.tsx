import { AuthWrapper, Gradient } from "@/components/shared";

export default function Auth() {
  return (
    <main className="min-h-screen flex justify-center items-center relative overflow-hidden">
      <AuthWrapper className="max-w-xl w-full" />

      <Gradient className="absolute left-1/2 -translate-1/2 w-full -z-10" />
      <Gradient className="absolute left-0 top-1/3 -translate-x-1/2 w-full -z-10" />
    </main>
  );
}
