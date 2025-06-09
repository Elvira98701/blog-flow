"use client";

import { cn } from "@/lib/utils";
import { Container } from "../layout";
import Image from "next/image";
import { ButtonLink } from "../ui";
import { useSession } from "next-auth/react";

interface JoinSectionProps {
  className?: string;
}

export const JoinSection = ({ className }: JoinSectionProps) => {
  const { data: session } = useSession();

  return (
    <section className={cn("py-32", className)}>
      <Container className="flex flex-col justify-center items-center gap-10">
        <h2 className="font-bold text-8xl max-w-1/2 text-center">
          Join the{" "}
          <Image
            src="/images/home/2.png"
            width={200}
            height={400}
            alt=""
            className="rounded-full h-20 object-cover object-center inline-block"
          />{" "}
          <Image
            src="/images/home/1.jpg"
            width={250}
            height={400}
            alt=""
            className="rounded-full h-20 object-cover object-center inline-block"
          />{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            BlogFlow
          </span>{" "}
          Today!{" "}
          <Image
            src="/images/home/3.jpg"
            width={150}
            height={400}
            alt=""
            className="rounded-full h-20 object-cover object-center inline-block"
          />
        </h2>
        <p className="max-w-xl text-center">
          Start your journey in seconds — no setup, no hassle. Just you and your
          content.
        </p>
        {!session ? (
          <ButtonLink href="/auth" size="lg">
            Get Started
          </ButtonLink>
        ) : (
          <ButtonLink href="/dashboard" size="lg">
            Dashboard
          </ButtonLink>
        )}
      </Container>
    </section>
  );
};
