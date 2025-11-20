import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await params;
    const id = parseInt(userId);

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        avatar: true,
        slogan: true,
        createdAt: true,
        verified: true,
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const [posts, comments, likesGiven, likesReceived, followers, following] =
      await Promise.all([
        prisma.post.count({ where: { userId: id } }),
        prisma.comment.count({ where: { userId: id } }),
        prisma.like.count({ where: { userId: id } }),
        prisma.like.count({ where: { post: { userId: id } } }),
        prisma.follow.count({ where: { followingId: id } }),
        prisma.follow.count({ where: { followerId: id } }),
      ]);

    const postsWithStats = await prisma.post.findMany({
      where: { userId: id },
      select: {
        id: true,
        title: true,
        createdAt: true,
        image: true,
        _count: {
          select: { likes: true, comments: true },
        },
      },
    });

    const popularPosts = postsWithStats
      .sort((a, b) => {
        const scoreA = a._count.likes + a._count.comments;
        const scoreB = b._count.likes + b._count.comments;
        return scoreB - scoreA;
      })
      .slice(0, 3)
      .map((p) => ({
        id: p.id,
        title: p.title,
        likes: p._count.likes,
        comments: p._count.comments,
        createdAt: p.createdAt,
      }));

    const postsPerMonthRaw = await prisma.post.groupBy({
      by: ["createdAt"],
      where: { userId: id },
      _count: true,
    });

    const postsPerMonth = postsPerMonthRaw.reduce<Record<string, number>>(
      (acc, { createdAt, _count }) => {
        const month = createdAt.toISOString().slice(0, 7);
        acc[month] = (acc[month] || 0) + _count;
        return acc;
      },
      {}
    );

    const totalLikes = postsWithStats.reduce(
      (sum, p) => sum + p._count.likes,
      0
    );
    const totalComments = postsWithStats.reduce(
      (sum, p) => sum + p._count.comments,
      0
    );
    const avgLikesPerPost = posts > 0 ? totalLikes / posts : 0;
    const avgCommentsPerPost = posts > 0 ? totalComments / posts : 0;
    const avgEngagementRate =
      posts > 0 ? (totalLikes + totalComments) / (posts * 10) : 0;

    return NextResponse.json({
      user,
      totals: {
        posts,
        comments,
        likesGiven,
        likesReceived,
        followers,
        following,
      },
      engagement: {
        avgLikesPerPost,
        avgCommentsPerPost,
        avgEngagementRate,
      },
      popularPosts,
      activity: {
        postsPerMonth,
      },
    });
  } catch (error) {
    console.error("[USER_STATS_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
