import { cn } from "@/lib/utils";
import { fetchUsers } from "@/services/api";
import { Container, Gradient } from "@/components/layout";
import { UserCard } from "@/components/shared";
import { AboutAccordion } from "./about-accordion";

interface AboutSectionProps {
  className?: string;
}

export const AboutSection = async ({ className }: AboutSectionProps) => {
  const users = await fetchUsers();

  return (
    <section className={cn("py-32 relative", className)}>
      <Container className="flex items-center gap-16">
        <div className="flex gap-5 flex-1">
          <div className="flex-1 mt-15">
            {users?.slice(0, 2).map((user) => (
              <UserCard
                key={user.id}
                className="mb-5"
                name={user.name}
                avatar={user.avatar}
                postsLength={user.posts.length}
                subscribersLength={user.subscribers.length}
              />
            ))}
          </div>
          <div className="flex-1">
            {users?.slice(2).map((user) => (
              <UserCard
                key={user.id}
                className="mb-5"
                name={user.name}
                avatar={user.avatar}
                postsLength={user.posts.length}
                subscribersLength={user.subscribers.length}
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-7xl">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
              BlogFlow
            </span>
          </h2>
          <p className="py-8">
            Tired of juggling drafts, posts, and subscriber lists in different
            places? BlogFlow brings it all together in one clean, powerful
            dashboard. Whether you&apos;re writing your next big post, managing
            your audience, or checking how your content performs — BlogFlow
            makes it easy, fast, and even a little fun.
          </p>

          <p className="pb-8">
            Take the stress out of blogging and focus on what you love most:
            creating.
          </p>

          <div>
            <AboutAccordion />
          </div>
        </div>
      </Container>
      <Gradient className="absolute left-0 top-0 -z-10" />
    </section>
  );
};
