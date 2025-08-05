import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams.get("query") || "";

    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: query,
          mode: "insensitive",
        },
      },
      take: 5,
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
