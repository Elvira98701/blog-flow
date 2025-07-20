import { Subscriber, User } from "@prisma/client";

import { UserRow } from "@/components/shared";
import { cn } from "@/lib/utils";

type SubscriberWithUser =
  | (Subscriber & { subscriber: User; subscribedTo?: undefined })
  | (Subscriber & { subscriber?: undefined; subscribedTo: User });

interface UserSubscribersListProps {
  subscribers: SubscriberWithUser[];
  title: string;
  className?: string;
}

export const UserSubscribersList = ({
  subscribers,
  title,
  className,
}: UserSubscribersListProps) => {
  return (
    <div className={cn("", className)}>
      <h2 className="xs-title mb-4">{title}</h2>
      <ul className="flex flex-col gap-2">
        {subscribers.map((subscriber) => {
          const user = subscriber.subscriber ?? subscriber.subscribedTo;
          return (
            <li key={subscriber.id}>
              <UserRow
                id={user.id}
                avatar={user.avatar || "/images/anonim/1.jpg"}
                name={user.name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
