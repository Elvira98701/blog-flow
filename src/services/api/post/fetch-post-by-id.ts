import { prisma } from "@/prisma/prisma-client";

export const fetchPostById = async (postId: number) => {
  try {
    const post = await prisma.post.findFirst({
      where: {
        id: postId,
      },
      include: {
        likes: true,
        comments: true,
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
    });

    return post;
  } catch (error) {
    console.error("Error receiving post", error);
    return null;
  }
};
