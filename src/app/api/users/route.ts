import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "8");
    const cursor = parseInt(req.nextUrl.searchParams.get("cursor") || "0");

    const users = await prisma.user.findMany({
      take: limit + 1,
      ...(cursor && {
        cursor: { id: cursor },
        skip: 1,
      }),
      include: {
        _count: {
          select: {
            posts: true,
            followers: true,
          },
        },
      },
    });

    const hasNextPage = users.length > limit;
    const items = hasNextPage ? users.slice(0, -1) : users;

    return NextResponse.json({
      users: items,
      nextCursor: hasNextPage ? items[items.length - 1].id : null,
    });
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("[USERS_GET] Server error", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const user = await prisma.user.create({
    data,
  });

  return NextResponse.json(user);
}
