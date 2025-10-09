import { Gradient } from "@/components/shared";
import { FeedPosts } from "@/features/posts";
import { PostsSearchInput } from "@/features/posts/posts-search-input";

export default function Feed() {
  return (
    <div className="flex items-center relative">
      <section className="w-full">
        <div className="flex justify-between items-center">
          <h2>Top Posts</h2>
          <PostsSearchInput />
        </div>

        <FeedPosts />
      </section>

      <Gradient className="fixed top-0 right-0 -z-10" />
    </div>
  );
}
