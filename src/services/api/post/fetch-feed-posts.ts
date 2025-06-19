import { Post } from "@prisma/client";

type FeedResponse = {
  posts: Post[];
  nextCursor: string | null;
};

export const fetchFeedPosts = async ({
  pageParam = null,
}: {
  pageParam?: string | null;
}): Promise<FeedResponse> => {
  const url = new URL("/api/posts", window.location.origin);
  url.searchParams.set("limit", "6");
  if (pageParam) {
    url.searchParams.set("cursor", pageParam);
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};
