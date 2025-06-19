import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "6");
    const cursor = parseInt(req.nextUrl.searchParams.get("cursor") || "1");

    const posts = await prisma.post.findMany({
      take: limit + 1,
      ...(cursor && {
        cursor: { id: cursor },
        skip: 1,
      }),
      orderBy: { createdAt: "desc" },
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
