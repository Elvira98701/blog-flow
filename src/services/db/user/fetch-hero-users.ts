import { prisma } from "@/prisma/prisma-client";
import { UserWithPosts } from "@/types";

export const fetchHeroUsers = async (
  length: number
): Promise<UserWithPosts[] | null> => {
  try {
    const users = await prisma.user.findMany({
      take: length,
      include: {
        posts: true,
        subscribedTo: true,
      },
    });

    return users;
  } catch (error) {
    console.error("Error receiving users", error);
    return null;
  }
};
