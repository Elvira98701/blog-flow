import { UserRow } from "@/components/shared";
import { cn } from "@/lib/utils";
import { UserWithPosts } from "@/types";

interface TopUsersWidgetProps {
  users: UserWithPosts[];
  className?: string;
}

export const TopUsersWidget = ({ users, className }: TopUsersWidgetProps) => {
  return (
    <div className={cn("min-w-96 bg-card p-4 rounded-md border", className)}>
      <h3 className="text-3xl font-bold mb-5">Top users</h3>
      {users?.map((user) => (
        <UserRow
          key={user.id}
          id={user.id}
          avatar={user.avatar || "/images/anonim/1.jpg"}
          name={user.name}
          className="mb-2"
        />
      ))}
    </div>
  );
};
