"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/layout";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section className={cn("relative", className)}>
      <Container className="min-h-[60vh] sm:min-h-[80vh] flex flex-col justify-center gap-4">
        <h1 className="font-bold text-center">
          Welcome{" "}
          <Image
            src="/images/home/1.jpg"
            width={500}
            height={400}
            alt=""
            className="rounded-full h-10 sm:h-14 lg:h-24 xl:h-28 w-full max-w-28 lg:max-w-96 xl:max-w-[500px] object-cover object-center inline-block"
          />{" "}
          to{" "}
          <Image
            src="/images/home/2.png"
            width={100}
            height={100}
            alt=""
            className="rounded-full h-10 sm:h-14 lg:h-24 xl:h-28 w-full max-w-[100px] object-cover object-center inline-block"
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
            className="rounded-full h-10 sm:h-14 lg:h-24 xl:h-28 w-full max-w-[280px] object-cover object-center inline-block"
          />
        </h1>
        <div className="hidden sm:flex items-center gap-8">
          <Image
            src="/images/home/4.jpg"
            width={900}
            height={400}
            alt=""
            className="rounded-full h-24 xl:h-28 object-cover object-center inline-block flex-1 xl:ml-12"
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
    </section>
  );
};
