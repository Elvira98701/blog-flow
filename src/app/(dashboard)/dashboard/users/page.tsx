import { Gradient } from "@/components/shared";
import { FeedUsers } from "@/features/users";
import { UsersSearchInput } from "@/features/users/users-search-input";

export default function Users() {
  return (
    <div className="flex justify-center relative">
      <section className="w-full">
        <div className="flex justify-between items-center">
          <h2>Top Users</h2>
          <UsersSearchInput />
        </div>

        <FeedUsers />
      </section>

      <Gradient className="fixed top-0 right-0 -z-10" />
    </div>
  );
}
