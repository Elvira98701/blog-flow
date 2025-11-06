import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/constants/auth-options";
import { prisma } from "@/prisma/prisma-client";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { userId } = await params;

    const targetUserId = parseInt(userId);
    const currentUserId = parseInt(session.user.id);

    if (isNaN(targetUserId) || isNaN(currentUserId)) {
      return new NextResponse("Invalid user ID", { status: 400 });
    }

    const follower = await prisma.follow.findFirst({
      where: {
        followingId: targetUserId,
        followerId: currentUserId,
      },
      select: { id: true },
    });

    const isSubscribed = !!follower;

    return NextResponse.json(isSubscribed);
  } catch (error) {
    console.error("[SUBSCRIBE_GET] Server error:", error);
    return new NextResponse("[SUBSCRIBE_GET] Server error", { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { userId } = await params;

    const targetUserId = parseInt(userId);
    const currentUserId = parseInt(session.user.id);

    if (isNaN(targetUserId) || isNaN(currentUserId)) {
      return new NextResponse("Invalid user ID", { status: 400 });
    }

    const existingFollow = await prisma.follow.findFirst({
      where: {
        followerId: currentUserId,
        followingId: targetUserId,
      },
    });

    if (existingFollow) {
      await prisma.follow.delete({
        where: {
          id: existingFollow.id,
        },
      });

      return NextResponse.json({
        success: true,
        action: "unfollowed",
      });
    } else {
      await prisma.follow.create({
        data: {
          followerId: currentUserId,
          followingId: targetUserId,
        },
      });
    }

    return NextResponse.json({
      success: true,
      action: "followed",
    });
  } catch (error) {
    console.error("[SUBSCRIBE_POST] Server error:", error);
    return new NextResponse("[SUBSCRIBE_POST] Server error", { status: 500 });
  }
}
