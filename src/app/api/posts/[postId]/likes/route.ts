import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/constants/auth-options";
import { prisma } from "@/prisma/prisma-client";

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

    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(postId),
      },
    });

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    const existingLike = await prisma.like.findFirst({
      where: {
        postId: post.id,
        userId: Number(session.user.id),
      },
    });

    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });
    } else {
      await prisma.like.create({
        data: {
          userId: Number(session.user.id),
          postId: post.id,
        },
      });
    }

    const likesCount = await prisma.like.count({ where: { postId: post.id } });

    return NextResponse.json({
      liked: !existingLike,
      likesCount,
    });
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("[LIKE_POST] Server error", { status: 500 });
  }
}
