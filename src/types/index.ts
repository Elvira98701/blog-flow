import { Comment, Post, Subscriber, User } from "@prisma/client";

export type PostWithLikesAndAuthor = Post & {
  user: {
    name: string;
    avatar: string | null;
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
  nextCursor: number | null;
};

export type FeedUserResponse = {
  users: UserWithPosts[];
  nextCursor: number | null;
};

export type CommentsWithUser = Comment & {
  user: {
    name: string;
    avatar: string | null;
  };
};

export type InfiniteData<T> = {
  pages: T[];
  pageParams: (null | number)[];
};

export type FeedCommentsResponse = {
  comments: CommentsWithUser[];
  nextCursor: number | null;
};
