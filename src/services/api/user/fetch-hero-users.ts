import { prisma } from "@/prisma/prisma-client";

export const fetchHeroUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      take: 4,
      include: {
        posts: true,
        subscribers: true,
      },
    });

    return users;
  } catch (error) {
    console.error("Error receiving users", error);
    return null;
  }
};
