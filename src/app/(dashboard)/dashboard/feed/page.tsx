import { FeedPosts, Gradient } from "@/components/shared";

export default function Feed() {
  return (
    <div className="flex items-center relative">
      <FeedPosts />
      <Gradient className="fixed top-0 right-0 -z-10" />
    </div>
  );
}
