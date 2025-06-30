import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await params;
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "3");
    const cursor = parseInt(req.nextUrl.searchParams.get("cursor") || "0");

    const posts = await prisma.post.findMany({
      where: { userId: parseInt(userId) },
      take: limit + 1,
      ...(cursor && {
        cursor: { id: cursor },
        skip: 1,
      }),
      orderBy: {
        likes: {
          _count: "desc",
        },
      },
      include: {
        user: { select: { name: true, avatar: true } },
        likes: true,
      },
    });

    const hasNextPage = posts.length > limit;
    const items = hasNextPage ? posts.slice(0, -1) : posts;

    return NextResponse.json({
      posts: items,
      nextCursor: hasNextPage ? items[items.length - 1].id : null,
    });
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
