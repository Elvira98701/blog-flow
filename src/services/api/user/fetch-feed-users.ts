import { FeedUserResponse } from "@/types";

export const fetchFeedUsers = async ({
  pageParam = null,
}: {
  pageParam?: string | null;
}): Promise<FeedUserResponse> => {
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
