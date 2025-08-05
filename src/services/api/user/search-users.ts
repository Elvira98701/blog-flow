import { User } from "@prisma/client";

export const searchUsers = async (query: string): Promise<User[]> => {
  try {
    const response = await fetch(
      `/api/users/search?query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error(`Failed to search users: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in searchUsers:", error);
    return [];
  }
};
