import { FeedUsers, Gradient } from "@/components/shared";

export default function Users() {
  return (
    <div className="flex justify-center relative">
      <FeedUsers />
      <Gradient className="fixed top-0 right-0 -z-10" />
    </div>
  );
}
