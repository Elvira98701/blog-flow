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

    const followings = await prisma.follow.findMany({
      where: { followerId: parseInt(userId) },
      take: limit + 1,
      ...(cursor && {
        cursor: { id: cursor },
        skip: 1,
      }),
      include: {
        following: { select: { name: true, avatar: true, id: true } },
      },
    });

    const hasNextPage = followings.length > limit;
    const items = hasNextPage ? followings.slice(0, -1) : followings;

    return NextResponse.json({
      followings: items,
      nextCursor: hasNextPage ? items[items.length - 1].id : null,
    });
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("[FOLLOWINGS_GET] Server error", { status: 500 });
  }
}
