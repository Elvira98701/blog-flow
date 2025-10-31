import { Comment, Follow, Post, User } from "@prisma/client";

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

export type UserWithRelationsCount = User & {
  _count: {
    posts: number;
    followers: number;
  };
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

export type FeedPostResponse = {
  posts: PostWithLikesAndAuthor[];
  nextCursor: number | null;
};

export type FeedUserResponse = {
  users: UserWithRelationsCount[];
  nextCursor: number | null;
};

export type FeedCommentsResponse = {
  comments: CommentsWithUser[];
  nextCursor: number | null;
};

export type FollowWithUser = Follow & {
  follower: {
    id: number;
    name: string;
    avatar: string | null;
  };
};

export type FeedFollowersResponse = {
  followers: FollowWithUser[];
  nextCursor: number | null;
};

export type FollowingsWithUser = Follow & {
  following: {
    id: number;
    name: string;
    avatar: string | null;
  };
};

export type FeedFollowingsResponse = {
  followings: FollowingsWithUser[];
  nextCursor: number | null;
};
