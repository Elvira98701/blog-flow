import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface UserRowProps {
  id: number;
  avatar: string | null;
  name: string;
  className?: string;
}

export const UserRow = ({ id, avatar, name, className }: UserRowProps) => {
  return (
    <Link
      href={`/dashboard/user/${id}`}
      className={cn(
        "group bg-background/30 border flex items-center justify-between rounded-full p-1 pr-6 duration-300 transition-colors hover:border-primary",
        className
      )}
    >
      <span className="flex gap-3 items-center">
        <Image
          src={avatar || "/images/anonim/1.jpg"}
          width={500}
          height={500}
          alt={name}
          className="w-12 h-12 rounded-full"
        />
        <span className="font-medium">{name}</span>
      </span>
      <ArrowRight
        className="group-hover:-rotate-45 transition-transform duration-500"
        size={20}
      />
    </Link>
  );
};
