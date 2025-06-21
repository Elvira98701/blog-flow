import { Post, Subscriber, User } from "@prisma/client";

export type PostWithLikesAndAuthor = Post & {
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

export type UserWithPosts = User & {
  posts: Post[];
  subscribedTo: Subscriber[];
};

export type UserWithPostsAndSubscribers = UserWithPosts & {
  subscribers: Subscriber[];
};
