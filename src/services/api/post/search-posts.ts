import { Post } from "@prisma/client";

export const searchPosts = async (query: string): Promise<Post[]> => {
  try {
    const response = await fetch(
      `/api/posts/search?query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error(`Failed to search posts: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in searchPosts:", error);
    return [];
  }
};
