import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/constants/auth-options";
import { getRandomNumber } from "@/lib/get-random-number";
import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10");
    const cursor = parseInt(req.nextUrl.searchParams.get("cursor") || "0");

    const posts = await prisma.post.findMany({
      take: limit + 1,
      ...(cursor && {
        cursor: { id: cursor },
        skip: 1,
      }),
      include: {
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
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
    return new NextResponse("[POSTS_GET] Server error", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { title, content, userId } = await req.json();

    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId,
        image: `/images/posts/${getRandomNumber(1, 28)}.jpg`,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("[DATA_POST] Server error", { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { postId } = await req.json();

    if (!postId) {
      return new NextResponse("Post ID is required", { status: 400 });
    }

    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    if (post.userId !== Number(session.user.id)) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    await prisma.post.delete({
      where: { id: postId },
    });

    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("[DATA_DELETE] Server error", { status: 500 });
  }
}
