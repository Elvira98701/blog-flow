import { cn } from "@/lib/utils";

interface FeedUsersProps {
  className?: string;
}

export const FeedUsers = ({ className }: FeedUsersProps) => {
  return <div className={cn("", className)}>FeedUsers</div>;
};
