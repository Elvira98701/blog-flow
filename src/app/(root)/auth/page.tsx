import { AuthWrapper, Gradient } from "@/components/shared";
import DotGrid from "@/components/shared/dot-grid";

export default function Auth() {
  return (
    <main className="min-h-screen flex justify-center items-center relative overflow-hidden">
      <AuthWrapper className="max-w-xl w-full" />

      <Gradient className="absolute left-1/3 bottom-1/3 w-full -z-10" />
      <Gradient className="absolute left-0 top-1/3 -translate-x-1/2 w-full -z-10" />
      <div className="w-full h-screen absolute top-0 left-1/2 -translate-x-1/2 -z-20">
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
    </main>
  );
}
