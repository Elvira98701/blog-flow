import { UserCard, Container, Gradient } from "@/components/shared";
import { ErrorText } from "@/components/ui";
import { getUserSession } from "@/lib/get-user-session";
import { cn } from "@/lib/utils";
import { fetchHeroUsers } from "@/services/api";

import { AboutAccordion } from "./about-accordion";

interface AboutSectionProps {
  className?: string;
}

export const AboutSection = async ({ className }: AboutSectionProps) => {
  const users = await fetchHeroUsers(4);
  const session = await getUserSession();

  return (
    <section
      className={cn("py-10 md:py-20 relative", className)}
      aria-labelledby="about-title"
    >
      <Container className="flex flex-col md:flex-row items-center gap-4 lg:gap-6 xl:gap-16">
        <div className="flex gap-2 lg:gap-4 flex-1 w-full">
          {!users || users.length === 0 ? (
            <ErrorText text="There are no users" />
          ) : (
            <>
              <div className="flex-1 mt-15">
                {users?.slice(0, 2).map((user) => (
                  <UserCard
                    key={user.id}
                    className="mb-2 lg:mb-4"
                    user={user}
                    session={session}
                  />
                ))}
              </div>
              <div className="flex-1">
                {users?.slice(2).map((user, index) => (
                  <UserCard
                    key={user.id}
                    className={cn("mb-1 lg:mb-4", {
                      "xl:scale-120 z-10": index === 0,
                    })}
                    user={user}
                    session={session}
                    active={index === 0}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="flex-1">
          <h2 id="about-title">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
              BlogFlow
            </span>
          </h2>
          <p className="py-4 lg:py-6">
            Tired of juggling drafts, posts, and subscriber lists in different
            places? BlogFlow brings it all together in one clean, powerful
            dashboard. Whether you&apos;re writing your next big post, managing
            your audience, or checking how your content performs — BlogFlow
            makes it easy, fast, and even a little fun.
          </p>

          <p className="pb-4 lg:pb-6">
            Take the stress out of blogging and focus on what you love most:
            creating.
          </p>

          <AboutAccordion />
        </div>
      </Container>
      <Gradient className="absolute left-0 top-0 -z-10" />
    </section>
  );
};
