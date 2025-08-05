"use server";

import { Prisma } from "@prisma/client";
import { put } from "@vercel/blob";
import { hashSync } from "bcrypt";

import { getRandomNumber } from "@/lib/get-random-number";
import { getUserSession } from "@/lib/get-user-session";
import { sendEmail } from "@/lib/send-email";
import { prisma } from "@/prisma/prisma-client";

export const updateUserInfo = async (body: Prisma.UserUpdateInput) => {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error("The user was not found");
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    if (!findUser) {
      throw new Error("The user was not found");
    }

    const updatedData: Prisma.UserUpdateInput = {
      ...(body.name && { name: body.name }),
      ...(body.slogan && { slogan: body.slogan }),
      ...(body.password && { password: hashSync(body.password as string, 10) }),
      ...(body.avatar && { avatar: body.avatar }),
    };

    await prisma.user.update({
      where: {
        id: findUser.id,
      },
      data: updatedData,
    });
  } catch (error) {
    console.log("Error [CREATE_USER]", error);
    throw error;
  }
};

export const uploadUserImage = async (formData: FormData) => {
  const imageFile = formData.get("file") as File;

  if (!imageFile || !(imageFile instanceof File)) {
    throw new Error("No file found");
  }

  const blob = await put(imageFile.name, imageFile, {
    access: "public",
  });

  return blob.url;
};

export const registerUser = async (body: Prisma.UserCreateInput) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      if (!user.verified) {
        throw new Error("Email has not been confirmed");
      }

      throw new Error("The user already exists");
    }

    const createdUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashSync(body.password, 10),
        avatar: `/images/anonim/${getRandomNumber(1, 8)}.jpg`,
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: createdUser.id,
      },
    });

    await sendEmail(
      createdUser.email,
      "Blog Flow / 📝 Confirmation of registration",
      `<div>
          <h2>Confirmation code: ${code}</h2>
          <p>
          <a href=${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/verify?code=${code}>
            Confirm registration
          </a>
          </p>
        </div>`
    );
  } catch (error) {
    console.log("Error [CREATE_USER]", error);
    throw error;
  }
};
