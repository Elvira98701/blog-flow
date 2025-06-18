import { prisma } from "@/prisma/prisma-client";

export const fetchPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      take: 6,
    });

    return posts;
  } catch (error) {
    console.error("Error receiving posts", error);
    return null;
  }
};
