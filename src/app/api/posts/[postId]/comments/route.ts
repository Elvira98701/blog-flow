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

export async function PATCH(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { commentId, content } = await req.json();

    if (!commentId) {
      return new NextResponse("Comment ID is required", { status: 400 });
    }

    if (!content || typeof content !== "string") {
      return new NextResponse("Content is required", { status: 400 });
    }

    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      return new NextResponse("Comment not found", { status: 404 });
    }

    if (comment.userId !== Number(session.user.id)) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const updatedComment = await prisma.comment.update({
      where: { id: commentId },
      data: { content },
    });

    return NextResponse.json(updatedComment, { status: 200 });
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("[COMMENT_PATCH] Server error", { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { commentId } = await req.json();

    if (!commentId) {
      return new NextResponse("Comment ID is required", { status: 400 });
    }

    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      return new NextResponse("Comment not found", { status: 404 });
    }

    if (comment.userId !== Number(session.user.id)) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    await prisma.comment.delete({
      where: { id: commentId },
    });

    return NextResponse.json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("[COMMENT_DELETE] Server error", { status: 500 });
  }
}
