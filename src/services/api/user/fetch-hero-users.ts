import { prisma } from "@/prisma/prisma-client";

export const fetchHeroUsers = async (length: number) => {
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
