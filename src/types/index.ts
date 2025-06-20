import { Post } from "@prisma/client";

export type PostWithLikes = Post & {
  user: {
    name: string;
  };
  likes: {
    id: number;
    userId: number;
    createdAt: Date;
    postId: number;
  }[];
};
