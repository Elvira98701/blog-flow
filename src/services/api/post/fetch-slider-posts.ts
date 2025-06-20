import { prisma } from "@/prisma/prisma-client";

export const fetchSliderPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      take: 6,
      include: {
        user: {
          select: {
            name: true,
          },
        },
        likes: true,
      },
    });

    return posts;
  } catch (error) {
    console.error("Error receiving posts", error);
    return null;
  }
};
