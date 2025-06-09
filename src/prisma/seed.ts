import { comments, likes, posts, subscribers, users } from "./constants";
import { prisma } from "./prisma-client";

async function up() {
  await prisma.user.createMany({
    data: users,
  });

  await prisma.post.createMany({
    data: posts,
  });

  await prisma.comment.createMany({
    data: comments,
  });

  await prisma.like.createMany({
    data: likes,
  });

  await prisma.subscriber.createMany({
    data: subscribers,
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Post" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Comment" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Like" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Subscriber" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
