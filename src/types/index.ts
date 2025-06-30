import { Post, Subscriber, User } from "@prisma/client";

export type PostWithLikesAndAuthor = Post & {
  user: {
    name: string;
    avatar: string;
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

export type UserWithSubscribers = User & {
  subscribedTo: Subscriber[];
  subscribers: Subscriber[];
};

export type FeedPostResponse = {
  posts: PostWithLikesAndAuthor[];
  nextCursor: string | null;
};

export type FeedUserResponse = {
  users: UserWithPosts[];
  nextCursor: string | null;
};
