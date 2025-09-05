import { cn } from "@/lib/utils";

import { UserHead } from "./user-head";
import { UserSubscribersList } from "./user-subscribers-list";

// исправить типы
interface UserWidgetProps {
  user: any;
  sessionUserId: number;
  isProfilePage?: boolean;
  className?: string;
}

export const UserWidget = ({
  user,
  sessionUserId,
  isProfilePage = false,
  className,
}: UserWidgetProps) => {
  return (
    <div className={cn("max-w-96 bg-card p-4 rounded-md border", className)}>
      <UserHead
        user={user}
        sessionUserId={sessionUserId}
        className="mb-10"
        isProfilePage={isProfilePage}
      />
      {user.subscribedTo.length > 0 && (
        <UserSubscribersList
          className="w-full mb-10"
          subscribers={user.subscribedTo}
          title="Followers:"
        />
      )}
      {user.subscribers.length > 0 && (
        <UserSubscribersList
          className="w-full"
          subscribers={user.subscribers}
          title="Following:"
        />
      )}
    </div>
  );
};
