import { cn } from "@/lib/utils";
import { Container, Gradient } from "../layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui";

interface FaqSectionProps {
  className?: string;
}

export const FaqSection = ({ className }: FaqSectionProps) => {
  return (
    <section className={cn("py-32 relative", className)}>
      <Container>
        <h2 className="font-bold text-7xl text-center">
          Frequerntly Asked Questions
        </h2>
        <p className="text-center py-8 max-w-2xl mx-auto">
          Got questions? We’ve got answers. Here are some of the most common
          things people ask about using BlogFlow.
        </p>
        <div>
          <Accordion type="single" collapsible className="w-2/3 mx-auto">
            <AccordionItem
              value="item-1"
              className="rounded-lg bg-background/40 border-b-0 px-5 shadow-none mb-2"
            >
              <AccordionTrigger className="font-bold text-2xl">
                Do I need coding skills to use BlogFlow?
              </AccordionTrigger>
              <AccordionContent>
                Nope! BlogFlow is designed to be intuitive and user-friendly.
                You can manage your blog without writing a single line of code.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="rounded-lg bg-background/40 border-b-0 px-5 shadow-none mb-2"
            >
              <AccordionTrigger className="font-bold text-2xl">
                Can I schedule posts for later?
              </AccordionTrigger>
              <AccordionContent>
                Yes! You can set a publish date and time for any post — BlogFlow
                will handle the rest and publish it automatically.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="rounded-lg bg-background/40 border-b-0 px-5 shadow-none"
            >
              <AccordionTrigger className="font-bold text-2xl">
                Is there a way to see how my posts are performing?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely. BlogFlow includes built-in analytics, so you can
                track views, engagement, and spot your top-performing content at
                a glance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
      <Gradient className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full" />
    </section>
  );
};
