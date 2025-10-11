import Image from "next/image";

import { Container } from "@/components/shared";
import { ButtonLink } from "@/components/ui";
import { getUserSession } from "@/lib/get-user-session";
import { cn } from "@/lib/utils";

interface JoinSectionProps {
  className?: string;
}

export const JoinSection = async ({ className }: JoinSectionProps) => {
  const session = await getUserSession();

  return (
    <section
      className={cn("py-10 md:py-20 relative", className)}
      aria-labelledby="join-title"
    >
      <Container className="flex justify-center items-center flex-col gap-4 lg:gap-6 relative z-10 min-h-[300px] md:min-h-[800px]">
        <h2 className="big-title text-center max-w-[700px]" id="join-title">
          Join the{" "}
          <Image
            src="/images/home/1.jpg"
            width={250}
            height={400}
            alt=""
            className="rounded-full w-[100px] md:w-[250px] h-15 xl:h-20 object-cover object-center inline-block"
          />{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            BlogFlow
          </span>{" "}
          Today!
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

      <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-linear-to-b from-accent via-background to-primary w-[302px] h-[302px] md:w-[702px] md:h-[702px] rounded-full flex justify-center items-center -z-10 animate-spin-2">
        <div className="bg-background w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full" />
      </div>
    </section>
  );
};
