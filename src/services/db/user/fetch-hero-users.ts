import { prisma } from "@/prisma/prisma-client";
import { UserWithRelationsCount } from "@/types";

export const fetchHeroUsers = async (
  length: number
): Promise<UserWithRelationsCount[] | null> => {
  try {
    const users = await prisma.user.findMany({
      take: length,
      include: {
        _count: {
          select: {
            posts: true,
            subscribedTo: true,
          },
        },
      },
    });

    return users;
  } catch (error) {
    console.error("Error receiving users", error);
    return null;
  }
};
