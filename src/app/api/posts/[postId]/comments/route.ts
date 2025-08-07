import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/constants/auth-options";
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

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { postId } = await params;
    const { content, userId } = await req.json();

    const comment = await prisma.comment.create({
      data: {
        content,
        postId: parseInt(postId),
        userId,
      },
    });

    return NextResponse.json(comment);
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("[COMMENT_POST] Server error", { status: 500 });
  }
}
