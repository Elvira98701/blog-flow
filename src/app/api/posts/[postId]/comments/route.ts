import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ postId: string }> }
) {
  try {
    const { postId } = await params;

    const comments = await prisma.comment.findMany({
      where: {
        postId: parseInt(postId),
      },
      include: {
        user: { select: { name: true, avatar: true } },
      },
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("[COMMENTS_GET] Server error", { status: 500 });
  }
}
