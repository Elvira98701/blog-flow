import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await params;
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "8");
    const cursor = parseInt(req.nextUrl.searchParams.get("cursor") || "0");

    const followers = await prisma.follow.findMany({
      where: { followingId: parseInt(userId) },
      take: limit + 1,
      ...(cursor && {
        cursor: { id: cursor },
        skip: 1,
      }),
      include: {
        follower: { select: { name: true, avatar: true, id: true } },
      },
    });

    const hasNextPage = followers.length > limit;
    const items = hasNextPage ? followers.slice(0, -1) : followers;

    return NextResponse.json({
      followers: items,
      nextCursor: hasNextPage ? items[items.length - 1].id : null,
    });
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("[FOLLOWERS_GET] Server error", { status: 500 });
  }
}
