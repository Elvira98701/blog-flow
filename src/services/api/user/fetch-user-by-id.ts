import { prisma } from "@/prisma/prisma-client";

export const fetchUserById = async (id: number) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
      include: {
        posts: true,
        subscribers: {
          include: {
            subscribedTo: true,
          },
        },
        subscribedTo: {
          include: {
            subscriber: true,
          },
        },
      },
    });

    return user;
  } catch (error) {
    console.error("Error receiving user", error);
    return null;
  }
};
