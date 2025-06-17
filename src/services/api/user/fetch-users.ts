import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

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

    if (!users.length) notFound();

    return users;
  } catch (error) {
    console.error("", error);
    return null;
  }
};
