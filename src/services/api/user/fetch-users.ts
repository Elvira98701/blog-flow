import { prisma } from "@/prisma/prisma-client";

export const fetchUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      take: 4,
      select: {
        id: true,
        name: true,
        avatar: true,
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
