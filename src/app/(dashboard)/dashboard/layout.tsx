import { Sidebar } from "@/components/layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex mt-20 px-2 sm:px-6 border rounded-tl-3xl rounded-tr-3xl mx-2">
      <Sidebar className="min-w-[200px]" />
      <main>{children}</main>
    </div>
  );
}
