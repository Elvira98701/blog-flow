import { FeedPostResponse } from "@/types";

export const fetchPostsByUserId = async ({
  userId,
  pageParam = null,
}: {
  userId: number;
  pageParam?: string | null;
}): Promise<FeedPostResponse> => {
  const url = new URL(`/api/users/${userId}/posts`, window.location.origin);
  url.searchParams.set("limit", "3");

  if (pageParam) {
    url.searchParams.set("cursor", pageParam);
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};
