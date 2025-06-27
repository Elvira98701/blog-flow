import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

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
      orderBy: {
        likes: {
          _count: "desc",
        },
      },
      include: {
        user: {
          select: {
            name: true,
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
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, content, userId } = await req.json();

    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId,
        image: "/images/posts/1.jpg",
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { postId } = await req.json();

    await prisma.post.delete({
      where: {
        id: postId,
      },
    });
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
