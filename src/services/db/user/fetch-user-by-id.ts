import { User } from "@prisma/client";

import { prisma } from "@/prisma/prisma-client";

export const fetchUserById = async (id: number): Promise<User | null> => {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
    });

    return user;
  } catch (error) {
    console.error("Error receiving user", error);
    return null;
  }
};
