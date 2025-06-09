import { Sidebar } from "@/components/layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex pt-20 px-2 sm:px-6">
      <Sidebar className="min-w-[200px]" />
      <main>{children}</main>
    </div>
  );
}
