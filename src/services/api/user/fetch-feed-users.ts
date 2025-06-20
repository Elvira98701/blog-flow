import { UsersWithPosts } from "@/types";

type FeedResponse = {
  users: UsersWithPosts[];
  nextCursor: string | null;
};

export const fetchFeedUsers = async ({
  pageParam = null,
}: {
  pageParam?: string | null;
}): Promise<FeedResponse> => {
  const url = new URL("/api/users", window.location.origin);
  url.searchParams.set("limit", "8");
  if (pageParam) {
    url.searchParams.set("cursor", pageParam);
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};
