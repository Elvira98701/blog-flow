import { cn } from "@/lib/utils";

import { UserHead } from "./user-head";
import { UserSubscribersList } from "./user-subscribers-list";

// исправить типы
interface UserWidgetProps {
  user: any;
  session: {
    id: string;
    name: string;
    image: string;
  };
  className?: string;
}

export const UserWidget = ({ user, session, className }: UserWidgetProps) => {
  return (
    <div className={cn("max-w-96 bg-card p-4 rounded-lg border", className)}>
      <UserHead
        user={user}
        sessionUserId={Number(session.id)}
        className="mb-10"
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
