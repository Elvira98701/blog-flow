import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={cn("font-bold", className)}>
      <span className="text-primary">Blog</span>Flow
    </Link>
  );
};
