import { Gradient, Sidebar } from "@/components/layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-5 mt-20 px-2 sm:px-6 border rounded-tl-3xl rounded-tr-3xl mx-2 relative overflow-hidden">
      <Sidebar className="min-w-[200px] hidden sm:block" />
      <main className="py-5 flex-1">{children}</main>
      <Gradient className="absolute top-0 right-0 -z-10" />
    </div>
  );
}
