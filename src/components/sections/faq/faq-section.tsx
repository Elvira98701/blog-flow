import { Container, Gradient } from "@/components/shared";
import { cn } from "@/lib/utils";

import { FaqAccordion } from "./faq-accordion";

interface FaqSectionProps {
  className?: string;
}

export const FaqSection = ({ className }: FaqSectionProps) => {
  return (
    <section
      className={cn("py-10 md:py-20 relative", className)}
      aria-labelledby="faq-title"
    >
      <Container>
        <h2 className="text-center" id="faq-title">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            Frequerntly{" "}
          </span>
          Asked Questions
        </h2>
        <p className="text-center py-4 lg:py-6 max-w-2xl mx-auto">
          Got questions? We’ve got answers. Here are some of the most common
          things people ask about using BlogFlow.
        </p>
        <FaqAccordion />
      </Container>
      <Gradient className="absolute top-0 left-1/2 -translate-y-1/2 -z-10" />
    </section>
  );
};
