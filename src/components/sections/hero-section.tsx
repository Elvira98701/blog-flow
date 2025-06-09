"use client";

import { cn } from "@/lib/utils";
import { Container, Gradient } from "../layout";
import Image from "next/image";
import { motion } from "motion/react";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section className={cn("relative", className)}>
      <Container className="min-h-screen flex flex-col justify-center gap-4">
        <motion.h1
          className="font-bold text-9xl"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome{" "}
          <Image
            src="/images/home/1.jpg"
            width={500}
            height={400}
            alt=""
            className="rounded-full h-32 object-cover object-center inline-block"
          />{" "}
          to{" "}
          <Image
            src="/images/home/2.png"
            width={100}
            height={100}
            alt=""
            className="rounded-full h-32 object-cover object-center inline-block"
          />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            BlogFlow
          </span>{" "}
          your Content Management tool{" "}
          <Image
            src="/images/home/3.jpg"
            width={300}
            height={400}
            alt=""
            className="rounded-full h-32 object-cover object-center inline-block"
          />
        </motion.h1>
        <div className="flex items-center gap-10">
          <Image
            src="/images/home/4.avif"
            width={1000}
            height={400}
            alt=""
            className="rounded-full h-32 object-cover object-center inline-block flex-1"
          />
          <p className="max-w-4xl my-6 font-mono flex-1">
            Create, edit, and analyze – all in one place. Take full control of
            your blog with a powerful, intuitive admin panel designed to
            streamline your content management process.
          </p>
        </div>
      </Container>
      <Gradient className="absolute top-0 right-0 -z-10" />
    </section>
  );
};
