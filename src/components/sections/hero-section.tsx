"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

import { Container, Gradient } from "@/components/shared";
import { cn } from "@/lib/utils";

import DotGrid from "../shared/dot-grid";
import { Button } from "../ui";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section className={cn("relative", className)} aria-labelledby="hero-title">
      <div className="w-full h-screen absolute top-0 left-1/2 -translate-x-1/2 -z-20">
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <Container className="min-h-full flex flex-col justify-center items-center gap-4 pt-[20vh]">
        <p className="border px-4 py-1 rounded-full text-sm bg-background flex gap-2 items-center">
          Discover the all-new ClickUp 3.0 <ArrowRight size={12} />
        </p>
        <h1 className="font-bold text-center max-w-5xl" id="hero-title">
          Welcome to{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary"
          >
            BlogFlow
          </motion.span>{" "}
          your Content Management tool{" "}
        </h1>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl font-mono text-center"
        >
          Create, edit, and analyze – all in one place. Take full control of
          your blog with a powerful, intuitive admin panel designed to
          streamline your content management process.
        </motion.p>
        <Button size="lg" variant="secondary">
          Get start
        </Button>
        <Image
          src="/images/Main.png"
          width={1191}
          height={693}
          alt=""
          className="mt-10"
        />
      </Container>
      <Gradient className="absolute bottom-0 left-0 -z-10" />
      <Gradient className="absolute bottom-0 right-0 -z-10" />
    </section>
  );
};
