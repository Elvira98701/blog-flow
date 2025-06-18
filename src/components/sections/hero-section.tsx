"use client";

import { cn } from "@/lib/utils";
import { Container, Gradient } from "@/components/layout";
import Image from "next/image";
import { motion } from "motion/react";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section className={cn("relative", className)}>
      <Container className="min-h-[75vh] flex flex-col justify-end gap-4">
        <h1 className="font-bold text-9xl">
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
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary"
          >
            BlogFlow
          </motion.span>{" "}
          your Content Management tool{" "}
          <Image
            src="/images/home/3.jpg"
            width={280}
            height={400}
            alt=""
            className="rounded-full h-32 object-cover object-center inline-block"
          />
        </h1>
        <div className="flex items-center gap-8">
          <Image
            src="/images/home/auth.jpg"
            width={1000}
            height={400}
            alt=""
            className="rounded-full h-32 object-cover object-center inline-block flex-1"
          />
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl my-6 font-mono flex-1"
          >
            Create, edit, and analyze – all in one place. Take full control of
            your blog with a powerful, intuitive admin panel designed to
            streamline your content management process.
          </motion.p>
        </div>
      </Container>
      <Gradient className="absolute bottom-0 right-0 -z-10" />
    </section>
  );
};
