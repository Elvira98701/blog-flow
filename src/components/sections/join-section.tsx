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
      className={cn("py-10 md:py-20", className)}
      aria-labelledby="join-title"
    >
      <Container className="flex justify-center items-center">
        <div className="bg-linear-to-b from-accent via-background to-primary w-[702px] h-[702px] rounded-full flex justify-center items-center">
          <div className="bg-background w-[700px] h-[700px] rounded-full flex justify-center items-center flex-col gap-4">
            <h2 className="big-title text-center" id="join-title">
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
              Start your journey in seconds — no setup, no hassle. Just you and
              your content.
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
          </div>
        </div>
      </Container>
    </section>
  );
};
